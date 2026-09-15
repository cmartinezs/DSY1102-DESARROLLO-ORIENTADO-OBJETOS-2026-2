import { checkpoints, loadProgress, saveProgress, toggleCheckpoint } from '../business/labs/veterinary-collections-progress.js';

const ICONS = '../../../assets/img/icons.svg';
const prerequisite = document.querySelector('#prerequisite');
const container = document.querySelector('#checkpoints');
let progress = loadProgress();
const icon = name => `<svg class="icon" aria-hidden="true"><use href="${ICONS}#${name}"></use></svg>`;

function render() {
  const unlocked = prerequisite.checked;
  container.innerHTML = checkpoints.map((item, index) => {
    const done = progress.includes(index);
    return `
      <article class="panel vet2-step ${done ? 'is-complete' : ''} ${unlocked ? '' : 'is-locked'}">
        <div class="muted">Checkpoint ${index + 1}/${checkpoints.length}</div>
        <h2>${item.title}</h2>
        <p>${item.body}</p>
        <p class="muted">Evidencia: ${item.evidence}</p>
        <button class="btn ${done ? 'btn-success' : 'btn-secondary'}" data-checkpoint="${index}" ${unlocked ? '' : 'disabled'}>
          ${icon(done ? 'check' : 'circle')} ${done ? 'Completado' : 'Marcar completado'}
        </button>
      </article>`;
  }).join('');
}

prerequisite.addEventListener('change', render);
container.addEventListener('click', event => {
  const button = event.target.closest('[data-checkpoint]');
  if (!button || !prerequisite.checked) return;
  progress = toggleCheckpoint(progress, Number(button.dataset.checkpoint));
  saveProgress(progress);
  render();
});

render();
