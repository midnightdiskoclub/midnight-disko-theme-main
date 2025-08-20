(function () {
  const bar = document.getElementById('mdc-announcement');
  if (!bar) return;

  // Dismiss logic (version your key if you change behavior later)
  const KEY = 'mdc_announcement_closed_v1';
  if (localStorage.getItem(KEY)) {
    bar.style.display = 'none';
    return;
  }

  const closeBtn = bar.querySelector('.mdc-announcement__close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      bar.style.display = 'none';
      localStorage.setItem(KEY, '1');
    });
  }

  // Rotation logic
  const rotate = bar.dataset.rotate === 'true';
  const interval = parseInt(bar.dataset.interval || '6000', 10);
  const items = Array.from(bar.querySelectorAll('.mdc-announcement__item'));
  if (!items.length) return;

  let idx = 0;
  items[idx].classList.add('is-active');

  if (rotate && items.length > 1) {
    setInterval(() => {
      items[idx].classList.remove('is-active');
      idx = (idx + 1) % items.length;
      items[idx].classList.add('is-active');
    }, interval);
  }
})();
