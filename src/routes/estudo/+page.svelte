<script lang="ts">
  import { chapters } from '$lib/chapters';
  let activeChapter = $state(0);

  function changeChapter(i: number) {
    activeChapter = i;
    // Reset audio elements
    if (typeof document !== 'undefined') {
      document.querySelectorAll('audio').forEach(a => { a.pause(); a.currentTime = 0; });
    }
  }
</script>

<svelte:head>
  <title>Etude - Decouvrir le Canada</title>
</svelte:head>

<div class="hero">
  <div class="container">
    <h1>Etude par chapitre</h1>
    <p>Texte complet en francais et portugais avec audio masculin pour s'entrainer</p>
  </div>
</div>

<div class="container study-layout">
  <nav class="chapter-nav">
    {#each chapters as chapter, i}
      <button
        class="chapter-btn"
        class:active={activeChapter === i}
        onclick={() => changeChapter(i)}
        title={chapter.title}
      >
        <span class="chapter-icon">{@html chapter.icon}</span>
        <span class="chapter-num">{i + 1}</span>
        <span class="chapter-title">{chapter.title}</span>
      </button>
    {/each}
  </nav>

  {#key activeChapter}
    <section class="chapter-content">
      <div class="lang-grid">
        <article class="lang-card lang-fr">
          <header class="lang-header">
            <div class="lang-tag">
              <span class="flag">FR</span>
              <span>Francais (Canada)</span>
            </div>
            <h2>{chapters[activeChapter].title}</h2>
          </header>

          <div class="audio-player">
            <audio controls preload="metadata" src={chapters[activeChapter].audioFr}>
              Votre navigateur ne supporte pas l'audio.
            </audio>
            <div class="audio-meta">
              <small>Voix: Antoine (FR-CA)</small>
              <a class="download-btn" href={chapters[activeChapter].audioFr} download={`${chapters[activeChapter].id}-fr.mp3`} title="Telecharger l'audio">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Telecharger
              </a>
            </div>
          </div>

          <div class="text-content">
            {#each chapters[activeChapter].textFr.split('\n\n') as paragraph}
              <p>{paragraph}</p>
            {/each}
          </div>
        </article>

        <article class="lang-card lang-br">
          <header class="lang-header">
            <div class="lang-tag">
              <span class="flag">BR</span>
              <span>Portugues (Brasil)</span>
            </div>
            <h2>{chapters[activeChapter].titleBr}</h2>
          </header>

          <div class="audio-player">
            <audio controls preload="metadata" src={chapters[activeChapter].audioBr}>
              Seu navegador nao suporta audio.
            </audio>
            <div class="audio-meta">
              <small>Voz: Antonio (PT-BR)</small>
              <a class="download-btn" href={chapters[activeChapter].audioBr} download={`${chapters[activeChapter].id}-br.mp3`} title="Baixar audio">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Baixar
              </a>
            </div>
          </div>

          <div class="text-content">
            {#each chapters[activeChapter].textBr.split('\n\n') as paragraph}
              <p>{paragraph}</p>
            {/each}
          </div>
        </article>
      </div>

      <div class="nav-actions">
        {#if activeChapter > 0}
          <button class="nav-btn" onclick={() => changeChapter(activeChapter - 1)}>
            &larr; {chapters[activeChapter - 1].title}
          </button>
        {:else}
          <span></span>
        {/if}
        {#if activeChapter < chapters.length - 1}
          <button class="nav-btn" onclick={() => changeChapter(activeChapter + 1)}>
            {chapters[activeChapter + 1].title} &rarr;
          </button>
        {/if}
      </div>
    </section>
  {/key}
</div>

<style>
  .hero {
    background: linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%);
    color: white;
    padding: 32px 0 28px;
    text-align: center;
  }
  .hero h1 { font-size: 1.4rem; font-weight: 800; margin-bottom: 6px; }
  .hero p { font-size: 0.85rem; opacity: 0.9; padding: 0 12px; }

  .study-layout {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0 40px;
  }

  .chapter-nav {
    display: flex;
    flex-direction: row;
    gap: 6px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 4px 0 8px;
    scrollbar-width: thin;
  }
  .chapter-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 14px;
    background: white;
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-sm);
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--gray-700);
    text-align: left;
    transition: all 0.15s;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .chapter-btn:hover { border-color: var(--red); color: var(--red); }
  .chapter-btn.active { background: var(--red); color: white; border-color: var(--red); }
  .chapter-icon { font-size: 1.2em; }
  .chapter-num {
    background: var(--gray-100);
    color: var(--gray-700);
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    flex-shrink: 0;
  }
  .chapter-btn.active .chapter-num { background: rgba(255,255,255,0.25); color: white; }
  .chapter-title { display: none; }

  .lang-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .lang-card {
    background: white;
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
  }
  .lang-fr { border-top: 4px solid var(--red); }
  .lang-br { border-top: 4px solid #2E8B57; }

  .lang-header {
    padding: 14px 16px 8px;
    border-bottom: 1px solid var(--gray-100);
  }
  .lang-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--gray-600);
    margin-bottom: 6px;
    letter-spacing: 0.5px;
  }
  .flag {
    background: var(--red);
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
  }
  .lang-br .flag { background: #2E8B57; }
  .lang-header h2 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--gray-900);
    line-height: 1.3;
  }

  .audio-player {
    padding: 12px 16px;
    background: var(--gray-50);
    border-bottom: 1px solid var(--gray-100);
  }
  .audio-player audio {
    width: 100%;
    height: 40px;
    border-radius: var(--radius-sm);
  }
  .audio-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;
    gap: 8px;
  }
  .audio-meta small {
    font-size: 0.7rem;
    color: var(--gray-600);
  }
  .download-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    background: white;
    border: 1px solid var(--gray-300);
    border-radius: var(--radius-sm);
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--gray-700);
    transition: all 0.15s;
    text-decoration: none;
  }
  .download-btn:hover {
    border-color: var(--red);
    color: var(--red);
    background: #FFF5F5;
  }
  .lang-br .download-btn:hover {
    border-color: #2E8B57;
    color: #2E8B57;
    background: #F0FFF4;
  }

  .text-content {
    padding: 16px;
    max-height: 50vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .text-content p {
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--gray-800);
    margin-bottom: 12px;
    text-align: justify;
  }
  .text-content p:last-child { margin-bottom: 0; }

  .nav-actions {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-top: 8px;
  }
  .nav-btn {
    padding: 10px 14px;
    background: white;
    border: 1px solid var(--gray-300);
    border-radius: var(--radius-sm);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--gray-700);
    transition: all 0.15s;
    max-width: 48%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .nav-btn:hover {
    border-color: var(--red);
    color: var(--red);
  }

  @media (min-width: 768px) {
    .hero { padding: 48px 0 40px; }
    .hero h1 { font-size: 2rem; }
    .hero p { font-size: 1rem; }
    .study-layout { padding: 24px 0 60px; gap: 24px; }
    .chapter-btn { padding: 12px 16px; gap: 10px; }
    .chapter-title { display: inline; }
    .lang-grid {
      flex-direction: row;
      gap: 20px;
    }
    .lang-card { flex: 1; min-width: 0; }
    .lang-header { padding: 18px 20px 10px; }
    .lang-header h2 { font-size: 1.25rem; }
    .audio-player { padding: 14px 20px; }
    .text-content { padding: 20px; max-height: 60vh; }
    .text-content p { font-size: 0.95rem; line-height: 1.7; margin-bottom: 14px; }
    .nav-btn { font-size: 0.9rem; padding: 12px 18px; max-width: 45%; }
  }
</style>
