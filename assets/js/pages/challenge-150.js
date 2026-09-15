import { AVAILABLE_MAX_ID, exportState, importState, loadCompleted, loadHints, revealHint, saveCompleted, saveHints, summarize, toggleCompleted } from '../business/challenge-150/state.js';

const exercises = (window.EXERCISES || []).filter(item => item.id <= AVAILABLE_MAX_ID);
const hintBank = window.CHALLENGE_HINTS || {};
let completed = loadCompleted();
let hintsUsed = loadHints();
let activeExercise = null;

const list = document.querySelector('#challenge-list');
const search = document.querySelector('#challenge-search');
const difficulty = document.querySelector('#challenge-difficulty');
const status = document.querySelector('#challenge-status');
const dialog = document.querySelector('#challenge-dialog');
const dialogBody = document.querySelector('#challenge-dialog-body');
const doneCount = document.querySelector('#challenge-done');
const pendingCount = document.querySelector('#challenge-pending');
const percent = document.querySelector('#challenge-percent');
const exportButton = document.querySelector('#challenge-export');
const importInput = document.querySelector('#challenge-import-file');

const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));

function filteredExercises() {
  const query = search.value.trim().toLowerCase();
  return exercises.filter(item => {
    const haystack = [item.title, item.description, ...(item.tags || []), item.stageName].join(' ').toLowerCase();
    if (query && !haystack.includes(query)) return false;
    if (difficulty.value !== 'all' && item.difficulty !== difficulty.value) return false;
    if (status.value === 'done' && !completed.has(item.id)) return false;
    if (status.value === 'pending' && completed.has(item.id)) return false;
    return true;
  });
}

function renderSummary() {
  const summary = summarize(completed);
  doneCount.textContent = summary.done;
  pendingCount.textContent = summary.pending;
  percent.textContent = `${summary.percent}%`;
}

function renderList() {
  const filtered = filteredExercises();
  list.innerHTML = filtered.length ? filtered.map(item => `
    <article class="challenge150-item ${completed.has(item.id) ? 'is-done' : ''}" data-exercise="${item.id}">
      <div class="challenge150-item__id">#${String(item.id).padStart(3,'0')}</div>
      <div><div class="challenge150-item__title">${esc(item.title)}</div><div class="challenge150-item__desc">${esc(item.description)}</div></div>
      <button class="btn ${completed.has(item.id) ? 'btn-success' : 'btn-secondary'}" data-toggle="${item.id}">${completed.has(item.id) ? '✓ Hecho' : 'Marcar'}</button>
    </article>`).join('') : '<div class="notice notice-info">No encontré ejercicios con esos filtros.</div>';
}

function render() {
  renderSummary();
  renderList();
}

function openExercise(id) {
  activeExercise = exercises.find(item => item.id === id);
  if (!activeExercise) return;
  const stage = activeExercise.stage;
  const used = Array.isArray(hintsUsed[stage]) ? hintsUsed[stage] : [];
  const hints = hintBank[stage] || [];
  dialogBody.innerHTML = `
    <div class="muted">Ejercicio #${activeExercise.id} · ${esc(activeExercise.stageName)}</div>
    <h2>${esc(activeExercise.title)}</h2>
    <p>${esc(activeExercise.description)}</p>
    <p><strong>Dificultad:</strong> ${esc(activeExercise.difficulty)} · <strong>Tags:</strong> ${(activeExercise.tags || []).map(esc).join(', ')}</p>
    <section><h3>Hints de la etapa</h3><div id="challenge-hints">${used.map(index => `<div class="challenge150-hint">${esc(hints[index] || '')}</div>`).join('')}</div>${used.length < hints.length ? '<button class="btn btn-secondary" id="challenge-use-hint">Usar un hint</button>' : '<div class="muted">No quedan hints nuevos para esta etapa.</div>'}</section>
    <div class="stack challenge150-dialog-actions"><button class="btn ${completed.has(activeExercise.id) ? 'btn-success' : 'btn-primary'}" id="challenge-dialog-toggle">${completed.has(activeExercise.id) ? '✓ Completado' : 'Marcar como realizado'}</button><button class="btn btn-secondary" id="challenge-close">Cerrar</button></div>`;
  if (!dialog.open) dialog.showModal();
  document.querySelector('#challenge-close').addEventListener('click', () => dialog.close());
  document.querySelector('#challenge-dialog-toggle').addEventListener('click', () => {
    completed = toggleCompleted(completed, activeExercise.id); saveCompleted(completed); dialog.close(); render();
  });
  document.querySelector('#challenge-use-hint')?.addEventListener('click', () => {
    const nextIndex = used.length;
    hintsUsed = revealHint(hintsUsed, stage, nextIndex); saveHints(hintsUsed); openExercise(activeExercise.id);
  });
}

[search, difficulty, status].forEach(control => control.addEventListener(control.tagName === 'INPUT' ? 'input' : 'change', renderList));
list.addEventListener('click', event => {
  const toggle = event.target.closest('[data-toggle]');
  if (toggle) { event.stopPropagation(); completed = toggleCompleted(completed, Number(toggle.dataset.toggle)); saveCompleted(completed); render(); return; }
  const row = event.target.closest('[data-exercise]'); if (row) openExercise(Number(row.dataset.exercise));
});

exportButton.addEventListener('click', () => {
  const payload = exportState(completed, hintsUsed);
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const anchor = document.createElement('a'); anchor.href = URL.createObjectURL(blob); anchor.download = 'dsy1102-challenge-150-progress.json'; anchor.click(); URL.revokeObjectURL(anchor.href);
});

importInput.addEventListener('change', async event => {
  const file = event.target.files?.[0]; if (!file) return;
  try { const restored = importState(JSON.parse(await file.text())); completed = restored.completed; hintsUsed = restored.hintsUsed; saveCompleted(completed); saveHints(hintsUsed); render(); }
  catch { alert('El archivo de progreso no es válido.'); }
  event.target.value = '';
});

render();
