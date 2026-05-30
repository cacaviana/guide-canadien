#!/usr/bin/env node
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', 'static', 'audio');

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

function buildSSML(text, voice, lang) {
  // Add breaks at paragraph ends to avoid cuts
  const withBreaks = text
    .split('\n\n')
    .map(p => p.trim())
    .filter(p => p.length > 0)
    .map(p => `<p>${escapeXml(p)}<break time="800ms"/></p>`)
    .join('\n');

  return `<speak version="1.0" xml:lang="${lang}" xmlns="http://www.w3.org/2001/10/synthesis">
  <voice name="${voice}">
    <prosody rate="0.92" pitch="+0%">
      ${withBreaks}
    </prosody>
  </voice>
</speak>`;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

async function synthesize(ssml, outputPath) {
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

  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(outputPath, buf);
  return buf.length;
}

async function main() {
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

  // Dynamic import of chapters (TS file - read manually)
  const { readFileSync } = await import('node:fs');
  const tsContent = readFileSync(join(__dirname, '..', 'src', 'lib', 'chapters.ts'), 'utf-8');

  // Extract chapters using a simple parser
  const chapters = parseChapters(tsContent);
  console.log(`Found ${chapters.length} chapters`);

  let totalChars = 0;
  let totalBytes = 0;

  const onlyArg = process.argv[2]; // e.g., "01-droits" to test one
  const filtered = onlyArg ? chapters.filter(c => c.id === onlyArg) : chapters;

  for (const ch of filtered) {
    for (const langKey of ['fr', 'br']) {
      const text = langKey === 'fr' ? ch.textFr : ch.textBr;
      const voice = VOICES[langKey];
      const outPath = join(OUTPUT_DIR, `${ch.id}-${langKey}.mp3`);

      // Skip if already exists (avoid spending $$)
      if (existsSync(outPath) && !process.env.FORCE) {
        console.log(`SKIP ${ch.id}-${langKey} (exists)`);
        continue;
      }

      const ssml = buildSSML(text, voice.name, voice.lang);
      console.log(`Generating ${ch.id}-${langKey} (${text.length} chars)...`);
      const bytes = await synthesize(ssml, outPath);
      console.log(`  -> ${outPath} (${(bytes / 1024).toFixed(1)} KB)`);
      totalChars += text.length;
      totalBytes += bytes;
    }
  }

  console.log(`\nTotal chars synthesized: ${totalChars.toLocaleString()}`);
  console.log(`Total audio size: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Estimated cost: $${((totalChars / 1_000_000) * 15).toFixed(4)} USD (or FREE under F0 tier)`);
}

function parseChapters(ts) {
  // crude but works for our specific format
  const chapters = [];
  const objRegex = /\{\s*id:\s*'([^']+)',[\s\S]*?textBr:\s*`([\s\S]*?)`\s*\}/g;
  let m;
  while ((m = objRegex.exec(ts)) !== null) {
    const block = m[0];
    const id = m[1];
    const textBr = m[2];
    const textFrMatch = block.match(/textFr:\s*`([\s\S]*?)`,\s*textBr:/);
    if (!textFrMatch) continue;
    chapters.push({ id, textFr: textFrMatch[1], textBr });
  }
  return chapters;
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
