(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const $ = (selector) => document.querySelector(selector);
  const all = (selector) => document.querySelectorAll(selector);
  const escape = (value) => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const url = value => { try { const parsed = new URL(value); return ['https:', 'http:'].includes(parsed.protocol) ? parsed.href : ''; } catch { return ''; } };
  const tags = items => items.map(item => `<span class="tag">${escape(item)}</span>`).join('');
  const external = (href, label) => `<a href="${escape(url(href))}" target="_blank" rel="noopener noreferrer">${escape(label)} ↗</a>`;
  for (const field of ['name','role','years','location']) all(`[data-${field}]`).forEach(el => { el.textContent = data[field]; });
  all('[data-resume]').forEach(el => { el.href = data.resume; });
  all('[data-email]').forEach(el => { el.href = `mailto:${data.email}`; });
  all('[data-email-label]').forEach(el => { el.textContent = data.email; });
  $('#about-copy').textContent = data.about;
  $('#education').textContent = data.education;
  $('#year').textContent = new Date().getFullYear();
  if (data.phone) { $('#phone-link').textContent = data.phone; $('#phone-link').href = `tel:${data.phone.replace(/[^+\d]/g, '')}`; } else { $('#phone-line').hidden = true; }
  $('#social-links').innerHTML = [['github','GitHub'],['linkedin','LinkedIn']].filter(([key]) => url(data[key])).map(([key,label]) => external(data[key],label)).join('');
  $('#skills-grid').innerHTML = data.skills.map(skill => `<article class="skill-card"><span class="icon" aria-hidden="true">${escape(skill.icon)}</span><h3>${escape(skill.title)}</h3><div class="tags">${tags(skill.items)}</div></article>`).join('');
  $('#experience-list').innerHTML = data.experience.map(job => `<article class="experience-row"><div class="experience-date">${escape(job.date)}${job.current ? '<span class="current-badge">CURRENT ROLE</span>' : ''}</div><div class="experience-body"><h3>${escape(job.role)}</h3><p class="company">${escape(job.company)}</p><ul>${job.details.map(detail => `<li>${escape(detail)}</li>`).join('')}</ul><div class="tags">${tags(job.tags)}</div></div></article>`).join('');
  $('#services-grid').innerHTML = data.services.map(([icon,title,description]) => `<article class="service-card"><span class="icon" aria-hidden="true">${escape(icon)}</span><h3>${escape(title)}</h3><p>${escape(description)}</p></article>`).join('');
  $('#process-grid').innerHTML = data.process.map(([title,description],index) => `<article class="process-step"><span class="step-number">0${index+1}</span><h3>${escape(title)}</h3><p>${escape(description)}</p></article>`).join('');
  function preview(project) {
    let content;
    if (project.type === 'commerce') content = '<div class="mini-content"><strong>Everyday. Elevated.</strong><small>A little style. A lot of you.</small><div class="mini-products"><i></i><i></i><i></i></div></div>';
    else if (project.type === 'dashboard') content = '<div class="mini-dashboard"><div class="mini-sidebar"><i></i><i></i><i></i><i></i><i></i></div><div><div class="mini-metrics"><span></span><span></span><span></span></div><div class="mini-chart">' + [30,50,38,65,49,78,60,85,74,95].map(h => `<i style="height:${h}%"></i>`).join('') + '</div></div></div>';
    else if (project.type === 'api') content = '<div class="mini-api"><span>GET</span> /api/application<br>{<br>&nbsp; "status": "connected",<br>&nbsp; "modules": ["web", "api"]<br>}</div>';
    else content = `<div class="mini-site"><div><strong>${project.type === 'website' ? 'Ideas become<br>possibilities.' : 'Connected.<br>By design.'}</strong><small>A better web experience →</small></div><div class="mini-shape"></div></div>`;
    return `<div class="project-preview preview-${escape(project.type)}" aria-hidden="true"><span class="preview-caption">CONCEPTUAL PREVIEW</span><div class="mini-window"><div class="mini-top">${escape(project.name)}<span>● ● ●</span></div>${content}</div></div>`;
  }
  function links(project) {
    return `${url(project.github) ? external(project.github,'GitHub') : '<span class="unavailable">GitHub · not provided</span>'}${url(project.live) ? external(project.live,'Live site') : '<span class="unavailable">Live demo · unavailable</span>'}`;
  }
  function renderProjects(filter = 'All') {
    const visible = data.projects.map((project,index) => ({project,index})).filter(({project}) => filter === 'All' || project.category === filter);
    $('#projects-grid').innerHTML = visible.map(({project,index}) => `<article class="project-card">${preview(project)}<div class="project-content"><div class="project-label">${escape(project.label)}</div><h3>${escape(project.name)}</h3><p>${escape(project.description)}</p><p class="project-role"><strong>My role:</strong> ${escape(project.role)}</p><div class="tags">${tags(project.technologies)}</div><div class="project-links">${links(project)}<button data-project="${index}" aria-label="View details for ${escape(project.name)}">View details ↗</button></div></div></article>`).join('');
    $('#project-count').textContent = `${String(visible.length).padStart(2,'0')} projects`;
  }
  renderProjects();
  all('[data-filter]').forEach(button => button.addEventListener('click', () => {
    all('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    renderProjects(button.dataset.filter);
  }));
  const dialog = $('#project-dialog');
  $('#projects-grid').addEventListener('click', event => {
    const button = event.target.closest('[data-project]');
    if (!button) return;
    const project = data.projects[Number(button.dataset.project)];
    $('#dialog-title').textContent = project.name;
    $('#dialog-category').textContent = project.label;
    $('#dialog-description').textContent = project.description;
    $('#dialog-role').textContent = project.role;
    $('#dialog-features').innerHTML = project.features.map(item => `<li>${escape(item)}</li>`).join('');
    $('#dialog-tags').innerHTML = tags(project.technologies);
    $('#dialog-links').innerHTML = links(project);
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
  $('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { const rect = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close(); });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
  const menu = $('.menu-toggle');
  function closeMenu() { $('#navigation').classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Open navigation'); }
  menu.addEventListener('click', () => { const open = $('#navigation').classList.toggle('open'); menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
  all('#navigation a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) all('#navigation a').forEach(link => { const active = link.hash === `#${entry.target.id}`; link.classList.toggle('active',active); if (active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); }); });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  all('main section[id]').forEach(section => observer.observe(section));
})();
