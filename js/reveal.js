/* ══════════════════════════════════════════
   REVEAL — IntersectionObserver scroll animations
══════════════════════════════════════════ */
(function () {
  'use strict';

  const CLASSES = ['.rv', '.rv-l', '.rv-r', '.rv-s'];
  const elements = document.querySelectorAll(CLASSES.join(','));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
})();
