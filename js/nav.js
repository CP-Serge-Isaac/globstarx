/* ══════════════════════════════════════════
   NAV — Scroll behavior · Scroll spy · Mobile menu
══════════════════════════════════════════ */
(function () {
  'use strict';

  const nav    = document.getElementById('nav');
  const hbg    = document.getElementById('nav-hbg');
  const mob    = document.getElementById('nav-mob');
  const links  = document.querySelectorAll('.nav-links a[href^="#"]');
  const mobLinks = document.querySelectorAll('#nav-mob a');

  /* ── Scroll → add .scrolled ── */
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial state

  /* ── Mobile menu toggle ── */
  function closeMob() {
    hbg.classList.remove('open');
    mob.classList.remove('open');
    document.body.style.overflow = '';
  }
  hbg.addEventListener('click', () => {
    const isOpen = mob.classList.toggle('open');
    hbg.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobLinks.forEach(l => l.addEventListener('click', closeMob));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMob(); });

  /* ── Scroll spy ── */
  const sections = document.querySelectorAll('section[id]');
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => spy.observe(s));
})();
