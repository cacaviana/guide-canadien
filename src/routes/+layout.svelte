<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<svelte:head>
  <title>Decouvrir le Canada - Guide de Citoyennete</title>
  <meta name="description" content="Guide d'etude interactif pour l'examen de citoyennete canadienne" />
  <meta name="theme-color" content="#D52B1E" />
</svelte:head>

<nav>
  <div class="nav-inner">
    <a href="/" class="logo">
      <svg viewBox="0 0 40 40" width="28" height="28" fill="var(--red)">
        <path d="M20 2 L22 12 L26 8 L24 14 L30 14 L25 18 L28 20 L22 20 L24 28 L20 24 L16 28 L18 20 L12 20 L15 18 L10 14 L16 14 L14 8 L18 12 Z"/>
        <rect x="18" y="26" width="4" height="12" rx="1"/>
      </svg>
      <span class="logo-text">Decouvrir le Canada</span>
    </a>
    <div class="nav-links">
      <a href="/">Mapa</a>
      <a href="/simulado">Simulado</a>
      <a href="/estudo">Estudo</a>
    </div>
  </div>
</nav>

<main>
  {@render children()}
</main>

<footer>
  <p>Guide d'etude - Citoyennete canadienne</p>
</footer>

<style>
  nav {
    background: var(--white);
    border-bottom: 3px solid var(--red);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow-sm);
  }
  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 1rem;
    color: var(--red);
  }
  .logo-text { display: none; }
  .nav-links {
    display: flex;
    gap: 20px;
  }
  .nav-links a {
    font-weight: 600;
    font-size: 0.85rem;
    color: var(--gray-700);
    transition: color 0.2s;
    padding: 6px 0;
    border-bottom: 2px solid transparent;
  }
  .nav-links a:hover {
    color: var(--red);
    border-bottom-color: var(--red);
  }
  main {
    min-height: calc(100vh - 56px - 48px);
  }
  footer {
    background: var(--gray-900);
    color: var(--gray-400);
    text-align: center;
    padding: 14px 12px;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    .nav-inner { padding: 0 24px; height: 64px; }
    .logo-text { display: inline; }
    .logo { font-size: 1.1rem; }
    .nav-links { gap: 32px; }
    .nav-links a { font-size: 0.95rem; }
    main { min-height: calc(100vh - 64px - 48px); }
  }
</style>
