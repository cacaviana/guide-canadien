#!/usr/bin/env node
// Génère l'audio du livre complet « Découvrir le Canada », chapitre par chapitre,
// en français (Antoine) et portugais (Antônio). Les chapitres longs sont découpés
// en segments (limite de l'API Azure) puis les MP3 sont concaténés.
//
// Usage : AZURE_SPEECH_KEY=xxx AZURE_SPEECH_REGION=eastus2 node scripts/generate-book-audio.mjs [id]
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', 'static', 'audio', 'book');

const SPEECH_KEY = process.env.AZURE_SPEECH_KEY;
const SPEECH_REGION = process.env.AZURE_SPEECH_REGION || 'eastus2';

if (!SPEECH_KEY) {
  console.error('ERROR: AZURE_SPEECH_KEY env var is required');
  process.exit(1);
}

const VOICES = {
  fr: { name: 'fr-CA-AntoineNeural', lang: 'fr-CA' },
  br: { name: 'pt-BR-AntonioNeural', lang: 'pt-BR' }
};

// Azure REST v1 synthesizes at most ~10 min of audio per request; keep each
// segment well under that. Split on paragraph boundaries to avoid mid-sentence cuts.
const MAX_CHARS = 3000;

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function chunkText(text) {
  const paragraphs = text.split('\n\n').map(p => p.trim()).filter(Boolean);
  const chunks = [];
  let current = [];
  let len = 0;
  for (const p of paragraphs) {
    if (len + p.length > MAX_CHARS && current.length) {
      chunks.push(current);
      current = [];
      len = 0;
    }
    current.push(p);
    len += p.length;
  }
  if (current.length) chunks.push(current);
  return chunks;
}

function buildSSML(paragraphs, voice, lang) {
  const body = paragraphs
    .map(p => `<p>${escapeXml(p)}<break time="700ms"/></p>`)
    .join('\n');
  return `<speak version="1.0" xml:lang="${lang}" xmlns="http://www.w3.org/2001/10/synthesis">
  <voice name="${voice}">
    <prosody rate="0.92" pitch="+0%">
      ${body}
    </prosody>
  </voice>
</speak>`;
}

async function synthesize(ssml) {
  const url = `https://${SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': SPEECH_KEY,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-24khz-96kbitrate-mono-mp3',
      'User-Agent': 'guide-canadien-tts'
    },
    body: ssml
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`TTS failed ${res.status}: ${err}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

function parseBook(ts) {
  const chapters = [];
  const re = /id:\s*'([^']+)'[\s\S]*?textFr:\s*`([\s\S]*?)`,\s*textBr:\s*`([\s\S]*?)`\s*}/g;
  let m;
  while ((m = re.exec(ts)) !== null) {
    chapters.push({ id: m[1], fr: m[2], br: m[3] });
  }
  return chapters;
}

async function main() {
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

  const ts = readFileSync(join(__dirname, '..', 'src', 'lib', 'book.ts'), 'utf-8');
  const chapters = parseBook(ts);
  console.log(`Parsed ${chapters.length} chapters from book.ts`);

  const onlyArg = process.argv[2];
  const filtered = onlyArg ? chapters.filter(c => c.id === onlyArg) : chapters;

  let totalChars = 0;
  let totalBytes = 0;

  for (const ch of filtered) {
    for (const langKey of ['fr', 'br']) {
      const text = langKey === 'fr' ? ch.fr : ch.br;
      const voice = VOICES[langKey];
      const outPath = join(OUTPUT_DIR, `${ch.id}-${langKey}.mp3`);

      if (existsSync(outPath) && !process.env.FORCE) {
        console.log(`SKIP ${ch.id}-${langKey} (exists)`);
        continue;
      }

      const chunks = chunkText(text);
      console.log(`Generating ${ch.id}-${langKey}: ${text.length} chars in ${chunks.length} segment(s)...`);
      const buffers = [];
      for (let i = 0; i < chunks.length; i++) {
        const ssml = buildSSML(chunks[i], voice.name, voice.lang);
        const buf = await synthesize(ssml);
        buffers.push(buf);
        process.stdout.write(`  segment ${i + 1}/${chunks.length} -> ${(buf.length / 1024).toFixed(0)} KB\n`);
      }
      const merged = Buffer.concat(buffers);
      writeFileSync(outPath, merged);
      console.log(`  => ${outPath} (${(merged.length / 1024 / 1024).toFixed(2)} MB)`);
      totalChars += text.length;
      totalBytes += merged.length;
    }
  }

  console.log(`\nTotal chars: ${totalChars.toLocaleString()}`);
  console.log(`Total audio: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Estimated cost: $${((totalChars / 1_000_000) * 15).toFixed(2)} USD (or FREE under F0 tier)`);
}

main().catch(e => { console.error(e); process.exit(1); });
