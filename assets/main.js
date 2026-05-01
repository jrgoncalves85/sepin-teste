// Mobile menu toggle
const menuToggle = document.querySelector('.header__menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('header__nav--open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  // Close menu on nav link click
  mainNav.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('header__nav--open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

// Lucide icons init
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}
