'use strict';
(() => {
  const root = document.querySelector('.ig');
  if (!root) return;
  const specimen = root.querySelector('#specimen');
  const surface = root.querySelector('#surface');
  const size = root.querySelector('#type-size');
  const output = root.querySelector('#size-value');
  const render = () => {
    specimen.dataset.surface = surface.value;
    specimen.style.setProperty('--sample-size', `${Number(size.value)}px`);
    output.value = `${size.value} px`;
  };
  surface.addEventListener('change', render);
  size.addEventListener('input', render);
  root.querySelector('#reset-style').addEventListener('click', () => {
    surface.value = 'paper'; size.value = '17'; render();
  });
  const checks = [...root.querySelectorAll('input[name="review"]')];
  const count = root.querySelector('#review-count');
  const updateCount = () => { count.value = `${checks.filter(item => item.checked).length} / ${checks.length}`; };
  checks.forEach(item => item.addEventListener('change', updateCount));
  root.querySelector('#reset-review').addEventListener('click', () => {
    checks.forEach(item => { item.checked = false; }); updateCount();
  });
  render(); updateCount();
})();
