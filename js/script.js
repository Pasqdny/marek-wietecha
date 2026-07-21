/**
 * Marek Wietecha - Portfolio Script
 * Zgodne z wytycznymi WCAG 2.2 AA oraz zasadami braku kodu demonstracyjnego
 */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primary-navigation');

  // Obsługa menu mobilnego bez kodu demonstracyjnego i alertów
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen.toString());
    });
  }

  // Zamknięcie menu po kliknięciu odnośnika w trybie mobilnym
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (primaryNav && primaryNav.classList.contains('is-open')) {
        primaryNav.classList.remove('is-open');
        if (navToggle) {
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
});
