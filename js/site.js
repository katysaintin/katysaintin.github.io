(() => {
  let lang = localStorage.getItem('lang') || 'fr';

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
    // --- MENU ---
    const menu = document.getElementById('menu');
    menu.innerHTML = data.menu.map(item =>
      `<a href="${item.url}">${item.emoji} ${item[lang]}</a>`
    ).join('');

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
})();
