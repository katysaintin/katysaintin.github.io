(() => {
  let lang = localStorage.getItem('lang') || 'fr';

  // ── PANEL ──
  const panel   = document.getElementById('side-panel');
  const overlay = document.getElementById('overlay');
  const burger  = document.getElementById('burger');
  const closeBtn= document.getElementById('closeBtn');

  function openPanel()  {
    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', openPanel);
  closeBtn.addEventListener('click', closePanel);
  overlay.addEventListener('click', closePanel);

  // Ferme au clic sur un lien du panel
  document.getElementById('side-nav').addEventListener('click', e => {
    if (e.target.tagName === 'A') closePanel();
  });

  // ── DONNÉES ──
  fetch('data/site.json')
    .then(r => r.json())
    .then(data => {
      render(data);
      document.getElementById('langBtn').addEventListener('click', () => {
        lang = lang === 'fr' ? 'en' : 'fr';
        localStorage.setItem('lang', lang);
        render(data);
      });
    })
    .catch(err => console.error('Erreur chargement site.json :', err));

  function render(data) {
    // MENU LATÉRAL — piloté par le JSON, scalable
    document.getElementById('side-nav').innerHTML = data.menu.map(item =>
      `<a href="${item.url}">${item.emoji} ${item[lang]}</a>`
    ).join('');

    // HERO
    const h = data.hero[lang];
    document.getElementById('hero-name').textContent = h.name;
    document.getElementById('hero-title').textContent = h.title;
    document.getElementById('hero-subtitle').textContent = h.subtitle;
    document.getElementById('keywords').innerHTML = h.keywords
      .map(k => `<span class="badge">${k}</span>`).join('');

    // STATS
    document.getElementById('stats').innerHTML = data.stats.map(s =>
      `<div class="stat">
        <div class="stat-value">${s.value}</div>
        <div>${s[lang]}</div>
      </div>`
    ).join('');

    // FEATURED
    document.getElementById('featured').innerHTML = data.featured.map(f =>
      `<div class="featured-card">
        <p>${f.emoji} <a href="${f.url}">${lang === 'fr' ? f.titleFr : f.titleEn}</a></p>
        <p style="color:#666;margin-top:.4rem">${lang === 'fr' ? f.descriptionFr : f.descriptionEn}</p>
      </div>`
    ).join('');

    // ACHIEVEMENTS
    document.getElementById('achievements').innerHTML =
      `<ul class="achievements">` +
      data.achievements.map(a =>
        `<li>${lang === 'fr' ? a.fr : a.en}</li>`
      ).join('') + `</ul>`;

    // UNIVERSES
    document.getElementById('universes').innerHTML = data.universes.map(u =>
      `<div class="card">
        <div>${u.emoji} <strong>${u.title}</strong></div>
        <p>${lang === 'fr' ? u.descriptionFr : u.descriptionEn}</p>
        ${u.url ? `<a href="${u.url}">Open →</a>` : ''}
      </div>`
    ).join('');

    // FOOTER
    const f = data.footer;
    document.getElementById('footer').innerHTML =
      `${f.copyright}` +
      (f.github   ? ` · <a href="${f.github}">GitHub</a>` : '') +
      (f.linkedin ? ` · <a href="${f.linkedin}">LinkedIn</a>` : '');
  }
})();
