document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#hamburger');
  const menu = document.querySelector('#mobile-menu');
  if (!button || !menu) return;
  button.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    button.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
});
