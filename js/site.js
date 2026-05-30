/**
 * site.js — Moteur commun de katysaintin.github.io
 * Gère : menu latéral, FR/EN, footer
 * Chargé par toutes les pages via <script src="js/site.js"></script>
 */
(() => {
  let lang = localStorage.getItem('lang') || 'fr';

  // ── Injection de la topbar + panneau dans chaque page ──
  function injectShell() {
    const shell = document.createElement('div');
    shell.innerHTML = `
      <div class="topbar">
        <div class="topbar-left">
          <button class="icon-btn" id="burger" aria-label="Menu">☰</button>
          <a href="/index.html" class="site-name">Katy Saintin</a>
        </div>
        <button class="lang-btn" id="langBtn">FR / EN</button>
      </div>
      <div id="overlay"></div>
      <div id="side-panel">
        <div class="panel-header">
          <span class="panel-title">Navigation</span>
          <button class="close-btn" id="closeBtn">✕</button>
        </div>
        <nav id="side-nav"></nav>
      </div>
    `;
    document.body.insertBefore(shell, document.body.firstChild);
  }

  // ── CSS commun injecté dynamiquement ──
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --navy: #2f3b73;
        --terracotta: #c96f4a;
        --background: #f8f7f4;
        --text: #202020;
      }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: system-ui, sans-serif; background: var(--background); color: var(--text); }

      /* TOPBAR */
      .topbar {
        display: flex; justify-content: space-between; align-items: center;
        padding: 1rem 1.5rem; background: var(--background);
        position: sticky; top: 0; z-index: 100;
        border-bottom: 1px solid rgba(0,0,0,.07);
      }
      .topbar-left { display: flex; align-items: center; gap: .8rem; }
      .site-name { font-weight: 700; color: var(--navy); font-size: 1.05rem; text-decoration: none; }
      .icon-btn {
        border: none; background: var(--navy); color: white;
        padding: .55rem .85rem; border-radius: 8px; cursor: pointer; font-size: 1.1rem; line-height: 1;
      }
      .lang-btn {
        border: 2px solid var(--navy); background: transparent; color: var(--navy);
        padding: .45rem .9rem; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: .85rem;
      }

      /* OVERLAY */
      #overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.4); z-index: 200; }
      #overlay.open { display: block; }

      /* PANNEAU LATÉRAL */
      #side-panel {
        position: fixed; top: 0; left: 0; height: 100%;
        width: 280px; max-width: 85vw; background: white; z-index: 300;
        transform: translateX(-100%); transition: transform .28s ease;
        display: flex; flex-direction: column;
        box-shadow: 4px 0 24px rgba(0,0,0,.12);
      }
      #side-panel.open { transform: translateX(0); }
      .panel-header {
        display: flex; justify-content: space-between; align-items: center;
        padding: 1.2rem 1.5rem; border-bottom: 1px solid #eee;
      }
      .panel-title { font-weight: 700; color: var(--navy); }
      .close-btn { border: none; background: none; font-size: 1.4rem; cursor: pointer; color: #666; }
      #side-nav { display: flex; flex-direction: column; padding: .5rem 0; overflow-y: auto; flex: 1; }
      #side-nav a {
        text-decoration: none; color: var(--text); font-weight: 500;
        padding: .9rem 1.5rem; display: flex; align-items: center; gap: .7rem; font-size: 1rem;
      }
      #side-nav a:hover { background: #f0f2fa; color: var(--navy); }

      /* LAYOUT COMMUN */
      .container { max-width: 1100px; margin: auto; padding: 2rem 1.5rem; }
      .section-title { color: var(--navy); margin: 3rem 0 1rem; font-size: 1.3rem; }
      .badge { background: var(--terracotta); color: white; padding: .4rem .8rem; border-radius: 999px; font-size: .85rem; }

      /* FOOTER */
      footer { margin-top: 4rem; padding: 2rem 0; text-align: center; color: #888; font-size: .9rem; }
      footer a { color: #888; }
    `;
    document.head.appendChild(style);
  }

  // ── Panel open/close ──
  function initPanel() {
    const panel    = document.getElementById('side-panel');
    const overlay  = document.getElementById('overlay');
    const burger   = document.getElementById('burger');
    const closeBtn = document.getElementById('closeBtn');

    const open  = () => { panel.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const close = () => { panel.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = ''; };

    burger.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
    document.getElementById('side-nav').addEventListener('click', e => { if (e.target.tagName === 'A') close(); });
  }

  // ── Rendu menu + footer ──
  function renderShell(data) {
    // Menu — scalable : tout vient du JSON
    document.getElementById('side-nav').innerHTML = data.menu
      .map(item => `<a href="${item.url}">${item.emoji} ${item[lang]}</a>`)
      .join('');

    // Footer
    if (document.getElementById('footer')) {
      const f = data.footer;
      document.getElementById('footer').innerHTML = f.copyright +
        (f.github   ? ` · <a href="${f.github}">GitHub</a>` : '') +
        (f.linkedin ? ` · <a href="${f.linkedin}">LinkedIn</a>` : '');
    }

    // Dispatch : les pages peuvent écouter cet event pour faire leur propre rendu
    document.dispatchEvent(new CustomEvent('siteReady', { detail: { data, lang } }));
  }

  // ── Langue ──
  function initLang(data) {
    document.getElementById('langBtn').addEventListener('click', () => {
      lang = lang === 'fr' ? 'en' : 'fr';
      localStorage.setItem('lang', lang);
      renderShell(data);
    });
  }

  // ── INIT ──
  injectStyles();
  injectShell();
  initPanel();

  fetch('/data/site.json')
    .then(r => r.json())
    .then(data => {
      renderShell(data);
      initLang(data);
    })
    .catch(err => console.error('Erreur site.json :', err));

})();
