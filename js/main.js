/* ============================================================
   BESTIA — main.js
   Shared across all pages: nav behavior, active link state
   ============================================================ */

(function () {
  'use strict';

  // ── Nav: add .scrolled class after 40px scroll ────────────
  const nav = document.querySelector('.nav');

  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  // ── Nav: mark current page link as active ─────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach((link) => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath) {
      link.classList.add('active');
    }
  });

})();
