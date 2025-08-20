(function () {
  const header = document.getElementById('mdc-header');
  if (!header) return;

  const burger = header.querySelector('.mdc-header__burger');
  const drawer = document.getElementById('mdc-mobile-drawer');
  const scrim = document.querySelector('.mdc-drawer__scrim');
  const closeBtn = header.querySelector('.mdc-drawer__close');

  function openDrawer() {
    drawer.classList.add('is-open');
    scrim.hidden = false;
    burger.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('is-open');
    scrim.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  }

  if (burger) burger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (scrim) scrim.addEventListener('click', closeDrawer);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
  });
})();
