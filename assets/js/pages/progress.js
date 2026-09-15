import { items, loadProgress, resetProgress, saveProgress, setItem, summarize } from '../business/progress/course-progress.js';

const list = document.querySelector('#progress-items');
const counter = document.querySelector('#progress-counter');
const bar = document.querySelector('#progress-bar');
const reset = document.querySelector('#progress-reset');
let state = loadProgress();

function render() {
  list.innerHTML = items.map((text, index) => {
    const checked = Boolean(state[index]);
    return `<div class="progress-item ${checked ? 'is-done' : ''}"><input type="checkbox" id="progress-${index}" data-index="${index}" ${checked ? 'checked' : ''}> <label for="progress-${index}">${text}</label></div>`;
  }).join('');
  const summary = summarize(state);
  counter.textContent = `${summary.done} de ${summary.total}`;
  bar.style.width = `${summary.percent}%`;
}

list.addEventListener('change', event => {
  const input = event.target.closest('[data-index]');
  if (!input) return;
  state = setItem(state, Number(input.dataset.index), input.checked);
  saveProgress(state);
  render();
});

reset.addEventListener('click', () => {
  if (!confirm('¿Reiniciar tu progreso local de esta semana?')) return;
  resetProgress();
  state = {};
  render();
});

render();
