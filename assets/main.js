function initIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function initMobileMenu() {
  const toggle = document.querySelector('.header__menu-toggle');
  const nav = document.querySelector('.header__nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  nav.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('header__nav--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initFormValidation() {
  const form = document.querySelector('.contato__form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const fields = form.querySelectorAll('[required]');
    fields.forEach(field => {
      clearError(field);
      if (!field.value.trim()) {
        showError(field, 'Este campo é obrigatório.');
        valid = false;
      } else if (field.type === 'email' && !isValidEmail(field.value)) {
        showError(field, 'Informe um e-mail válido.');
        valid = false;
      }
    });

    if (valid) form.submit();
  });
}

function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const THRESHOLD = 80;

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > THRESHOLD);
  }, { passive: true });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(field, message) {
  field.classList.add('contato__form-input--error');
  let error = field.parentElement.querySelector('.field-error');
  if (!error) {
    error = document.createElement('span');
    error.className = 'field-error';
    field.parentElement.appendChild(error);
  }
  error.textContent = message;
}

function clearError(field) {
  field.classList.remove('contato__form-input--error');
  const error = field.parentElement.querySelector('.field-error');
  if (error) error.remove();
}

document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  initMobileMenu();
  initSmoothScroll();
  initFormValidation();
  initStickyHeader();
});
