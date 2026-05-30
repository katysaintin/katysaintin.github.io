(() => {
  let lang = localStorage.getItem('lang') || 'fr';
  let menuOpen = false;

  fetch('data/site.json')
    .then(r => r.json())
    .then(data => {
      render(data);

      document.getElementById('langBtn').addEventListener('click', () => {
        lang = lang === 'fr' ? 'en' : 'fr';
        localStorage.setItem('lang', lang);
        menuOpen = false;
        render(data);
      });

      document.addEventListener('click', e => {
        const burger = document.getElementById('burger');
        const nav = document.getElementById('nav-links');
        if (burger && nav && !burger.contains(e.target) && !nav.contains(e.target)) {
          menuOpen = false;
          nav.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    })
    .catch(err => console.error('Erreur chargement site.json :', err));

  function render(data) {
    // --- MENU ---
    const menu = document.getElementById('menu');
    menu.innerHTML = `
      <button id="burger" aria-expanded="false" aria-label="Menu" onclick="toggleMenu()">☰</button>
      <div id="nav-links" class="nav-links">
        ${data.menu.map(item => `<a href="${item.url}">${item.emoji} ${item[lang]}</a>`).join('')}
      </div>
    `;

    // --- HERO ---
    const h = data.hero[lang];
    document.getElementById('hero-name').textContent = h.name;
    document.getElementById('hero-title').textContent = h.title;
    document.getElementById('hero-subtitle').textContent = h.subtitle;
    document.getElementById('keywords').innerHTML = h.keywords
      .map(k => `<span class="badge">${k}</span>`).join('');

    // --- STATS ---
    document.getElementById('stats').innerHTML = data.stats.map(s =>
      `<div class="stat">
        <div class="stat-value">${s.value}</div>
        <div>${s[lang]}</div>
      </div>`
    ).join('');

    // --- FEATURED (CV) ---
    document.getElementById('featured').innerHTML = data.featured.map(f =>
      `<div class="featured-card">
        <p>${f.emoji} <a href="${f.url}">${lang === 'fr' ? f.titleFr : f.titleEn}</a></p>
        <p>${lang === 'fr' ? f.descriptionFr : f.descriptionEn}</p>
      </div>`
    ).join('');

    // --- ACHIEVEMENTS ---
    document.getElementById('achievements').innerHTML =
      `<ul class="achievements">` +
      data.achievements.map(a =>
        `<li>${lang === 'fr' ? a.fr : a.en}</li>`
      ).join('') +
      `</ul>`;

    // --- UNIVERSES ---
    document.getElementById('universes').innerHTML = data.universes.map(u =>
      `<div class="card">
        <p>${u.emoji} <strong>${u.title}</strong></p>
        <p>${lang === 'fr' ? u.descriptionFr : u.descriptionEn}</p>
        ${u.url ? `<a href="${u.url}">Open →</a>` : ''}
      </div>`
    ).join('');

    // --- FOOTER ---
    const f = data.footer;
    document.getElementById('footer').innerHTML =
      `${f.copyright}` +
      (f.github ? ` · <a href="${f.github}" style="color:#666">GitHub</a>` : '') +
      (f.linkedin ? ` · <a href="${f.linkedin}" style="color:#666">LinkedIn</a>` : '');
  }

  window.toggleMenu = function() {
    menuOpen = !menuOpen;
    const nav = document.getElementById('nav-links');
    const burger = document.getElementById('burger');
    nav.classList.toggle('open', menuOpen);
    burger.setAttribute('aria-expanded', menuOpen);
  };
})();
