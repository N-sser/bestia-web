/* ============================================================
   BESTIA — animations.js
   Scroll-triggered reveal animations via IntersectionObserver
   ============================================================ */

(function () {
  'use strict';

  // Respect reduced-motion preference
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    // Make all reveal elements instantly visible
    document.querySelectorAll('.reveal, .stagger').forEach((el) => {
      el.classList.add('visible');
    });
    return;
  }

  // ── Intersection Observer for .reveal and .stagger ────────
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after first trigger — one-shot animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements when DOM is ready
  const init = () => {
    document.querySelectorAll('.reveal, .stagger').forEach((el) => {
      observer.observe(el);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
