document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const next = nav.dataset.open !== 'true';
      nav.dataset.open = String(next);
      menuButton.setAttribute('aria-expanded', String(next));
      menuButton.setAttribute('aria-label', next ? 'Close navigation' : 'Open navigation');
    });

    nav.addEventListener('click', () => {
      nav.dataset.open = 'false';
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  }
});
