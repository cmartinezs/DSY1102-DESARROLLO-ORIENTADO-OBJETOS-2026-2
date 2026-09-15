import { LAB_ID, STORAGE_KEY, identityComplete, loadState, moveToStage, progressPercent, saveState, stageDone, stageUnlocked, stages, submitQuiz, toggleStep, updateIdentity, updateRepoPath } from '../business/labs/veterinary-inheritance-model.js';
import { decryptProgress, encryptProgress } from '../business/labs/veterinary-inheritance-crypto.js';

let state = loadState();
let pendingImport = null;

const app = document.querySelector('#vet1-app');
const nav = document.querySelector('#vet1-stage-nav');
const progressBar = document.querySelector('#vet1-progress-bar');
const progressTop = document.querySelector('#vet1-progress-top');
const xpTop = document.querySelector('#vet1-xp-top');
const deviceTop = document.querySelector('#vet1-device-top');
const exportDialog = document.querySelector('#vet1-export-dialog');
const importDialog = document.querySelector('#vet1-import-dialog');
const repoDialog = document.querySelector('#vet1-repo-dialog');
const importFile = document.querySelector('#vet1-import-file');

const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

function persist() { saveState(state); render(); }
function shellPath() { return state.student.repoPath ? `cd "${state.student.repoPath}"` : 'cd "<RUTA-DE-TU-REPOSITORIO>"'; }
function labPath() { return 'labs/lab-veterinaria-herencia-polimorfismo'; }

function diagram(kind) {
  if (kind === 'flow') return '<div class="vet1-diagram"><div class="vet1-flow"><span class="vet1-node">Llega animal</span>→<span class="vet1-node">Identificar</span>→<span class="vet1-node">Comprender necesidad</span>→<span class="vet1-node">Atender</span>→<span class="vet1-node">Informar resultado</span></div></div>';
  if (kind === 'tree') return '<pre class="vet1-diagram">Animal\n├── Mascota\n│   ├── Perro\n│   └── Gato\n└── Salvaje\n    ├── Tigre\n    └── Leon</pre>';
  if (kind === 'construct') return '<div class="vet1-diagram"><div class="vet1-flow"><span class="vet1-node">new Perro(...)</span>→<span class="vet1-node">Perro(...)</span>→ super(...) →<span class="vet1-node">Mascota(...)</span>→ super(...) →<span class="vet1-node">Animal(...)</span></div></div>';
  if (kind === 'interaction') return '<div class="vet1-diagram"><div class="vet1-flow"><span class="vet1-node">Main / Veterinaria</span>— atender() →<span class="vet1-node">Animal</span>⇢<span class="vet1-node">Perro / Gato / Tigre / Leon</span></div></div>';
  return '';
}

function identityForm() {
  const s = state.student;
  return `<div class="vet1-identity">
    <label class="vet1-field">Nombre completo<input id="studentName" value="${esc(s.name)}" placeholder="Nombre y apellido"></label>
    <label class="vet1-field">Sección<input id="studentSection" value="${esc(s.section)}" placeholder="Ej.: 001D"></label>
    <label class="vet1-field">URL de tu repositorio GitHub<input id="repoUrl" value="${esc(s.repoUrl)}" placeholder="https://github.com/usuario/DSY1102-SECCION-nombre-apellido"></label>
    <label class="vet1-field">Ruta local del repositorio<input id="repoPath" value="${esc(s.repoPath)}" placeholder="C:\\Users\\...\\DSY1102-..."></label>
    <label class="vet1-field">Nombre de este equipo<input id="deviceAlias" value="${esc(s.deviceAlias)}" placeholder="LAB-PC-12 o Mi notebook"></label>
  </div>
  <div class="notice notice-warning"><strong>Importante:</strong> el navegador no expone de forma fiable el nombre real del equipo; usa un alias reconocible.</div>
  <div class="vet1-actions"><button class="btn btn-primary" data-action="save-identity">Guardar datos de sesión</button></div>`;
}

function gitBlock(step) {
  if (!step.commit) return '';
  return `<div class="vet1-code"><button class="btn btn-secondary vet1-copy" data-copy-code>Copiar</button>${esc(shellPath())}\ngit status\ngit add "${labPath()}"\ngit commit -m "${esc(step.commit)}"\ngit push</div>`;
}

function stepHtml(step, index) {
  const checked = Boolean(state.steps[step.id]);
  const currentStage = stages[state.currentStage];
  const passed = Boolean(state.quizzes[currentStage.id]?.passed);
  const identityReady = step.id !== 's0p1' || identityComplete(state.student);
  const disabled = passed || !identityReady;
  return `<article class="panel vet1-step stack">
    <div class="vet1-step__head"><div><span class="badge">Paso ${index + 1}/${currentStage.steps.length}</span><h2>${esc(step.title)}</h2></div><strong>+${step.xp} XP</strong></div>
    <div><h3>¿Qué estamos haciendo?</h3><p>${esc(step.what)}</p></div>
    <div class="vet1-why"><strong>¿Por qué lo hacemos?</strong><br>${esc(step.why)}</div>
    ${step.diagram ? diagram(step.diagram) : ''}
    <div class="vet1-mission"><strong>🎯 Tu misión</strong><br>${esc(step.mission)}</div>
    ${step.special === 'identity' ? identityForm() : `<div class="vet1-deliverable"><strong>📦 Entregable</strong><br><code>${esc(step.deliver)}</code>${step.template ? `<pre class="vet1-code">${esc(step.template)}</pre>` : ''}</div>${gitBlock(step)}`}
    <label class="vet1-switchline"><input type="checkbox" data-step="${step.id}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}> He realizado este paso y verifiqué su entregable.</label>
    ${step.id === 's0p1' && !identityReady ? '<div class="notice notice-warning">Guarda primero datos válidos de sesión para habilitar este paso.</div>' : ''}
  </article>`;
}

function quizHtml(stage) {
  const passed = Boolean(state.quizzes[stage.id]?.passed);
  const allSteps = stage.steps.every(step => state.steps[step.id]);
  if (passed) {
    return `<section class="panel stack"><div class="notice notice-success"><strong>✓ Checkpoint superado.</strong> La siguiente etapa está desbloqueada.</div>${state.currentStage < stages.length - 1 ? '<button class="btn btn-success" data-action="next-stage">Continuar a la siguiente etapa →</button>' : '<strong>Laboratorio completo. Exporta tu progreso y confirma el último push.</strong>'}</section>`;
  }
  if (!allSteps) return '<section class="panel"><div class="notice notice-info">🔒 Completa todos los pasos de esta etapa antes del checkpoint.</div></section>';
  return `<section class="panel stack"><h2>Checkpoint · 2 preguntas para avanzar</h2>${stage.quiz.map((question, qIndex) => `<div class="vet1-quiz-question"><strong>${qIndex + 1}. ${esc(question.q)}</strong>${question.a.map((answer, aIndex) => `<label><input type="radio" name="quiz-${qIndex}" value="${aIndex}"> ${esc(answer)}</label>`).join('')}</div>`).join('')}<button class="btn btn-primary" data-action="submit-quiz">Revisar respuestas</button><div id="vet1-quiz-message"></div></section>`;
}

function renderNav() {
  nav.innerHTML = stages.map((stage, index) => `<button class="vet1-stage ${index === state.currentStage ? 'is-active' : ''}" data-stage="${index}" ${stageUnlocked(state,index) ? '' : 'disabled'}>${stageDone(state,index) ? '✓' : stageUnlocked(state,index) ? '●' : '🔒'} ${esc(stage.title)}<br><small>${stage.mins} min · ${stage.steps.filter(step => state.steps[step.id]).length}/${stage.steps.length} pasos</small></button>`).join('');
}

function render() {
  while (state.currentStage > 0 && !stageUnlocked(state, state.currentStage)) state.currentStage--;
  const stage = stages[state.currentStage];
  const percent = progressPercent(state);
  renderNav();
  progressBar.style.width = `${percent}%`;
  progressTop.textContent = `${percent}% completado`;
  xpTop.textContent = `⭐ ${state.xp} XP`;
  deviceTop.textContent = state.student.deviceAlias || 'Equipo sin identificar';
  app.innerHTML = `<section class="panel"><span class="badge">${stage.mins} minutos sugeridos</span><h2>${esc(stage.title)}</h2><p class="muted">Completa cada paso, genera la evidencia y registra el commit antes de marcarlo.</p></section>${stage.steps.map(stepHtml).join('')}${quizHtml(stage)}`;
}

function readIdentityFromDom() {
  return {
    name: document.querySelector('#studentName')?.value.trim() || '',
    section: document.querySelector('#studentSection')?.value.trim() || '',
    repoUrl: document.querySelector('#repoUrl')?.value.trim() || '',
    repoPath: document.querySelector('#repoPath')?.value.trim() || '',
    deviceAlias: document.querySelector('#deviceAlias')?.value.trim() || ''
  };
}

nav.addEventListener('click', event => {
  const button = event.target.closest('[data-stage]'); if (!button) return;
  state = moveToStage(state, Number(button.dataset.stage)); persist(); window.scrollTo({top:0,behavior:'smooth'});
});

app.addEventListener('change', event => {
  const input = event.target.closest('[data-step]'); if (!input) return;
  state = toggleStep(state, input.dataset.step, input.checked); persist();
});

app.addEventListener('click', async event => {
  const copy = event.target.closest('[data-copy-code]');
  if (copy) { const code = copy.parentElement.innerText.replace('Copiar','').trim(); await navigator.clipboard.writeText(code); copy.textContent='✓'; setTimeout(()=>copy.textContent='Copiar',900); return; }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (!action) return;
  if (action === 'save-identity') {
    try { state = updateIdentity(state, readIdentityFromDom()); state = toggleStep(state, 's0p1', true); persist(); }
    catch { alert('Completa nombre, sección, una URL válida de GitHub, una ruta local válida y el alias del equipo.'); }
  }
  if (action === 'submit-quiz') {
    const answers = stages[state.currentStage].quiz.map((_, index) => document.querySelector(`input[name="quiz-${index}"]:checked`)?.value ?? null);
    try { const before = state; state = submitQuiz(state, state.currentStage, answers); const passed = state.quizzes[stages[state.currentStage].id]?.passed; persist(); if (!passed) alert('No superaste el checkpoint. Los pasos de esta etapa deben revisarse nuevamente.'); }
    catch { document.querySelector('#vet1-quiz-message').innerHTML = '<div class="notice notice-warning">Debes responder las dos preguntas.</div>'; }
  }
  if (action === 'next-stage') { state = moveToStage(state, state.currentStage + 1); persist(); window.scrollTo({top:0,behavior:'smooth'}); }
});

document.querySelector('#vet1-open-repo').addEventListener('click', () => { document.querySelector('#vet1-repo-path').value = state.student.repoPath || ''; repoDialog.showModal(); });
document.querySelector('#vet1-save-repo').addEventListener('click', () => { try { state = updateRepoPath(state, document.querySelector('#vet1-repo-path').value.trim()); saveState(state); repoDialog.close(); render(); } catch { alert('Ingresa una ruta local válida.'); } });
document.querySelectorAll('[data-close-dialog]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));

document.querySelector('#vet1-open-export').addEventListener('click', () => { document.querySelector('#vet1-export-password').value=''; exportDialog.showModal(); });
document.querySelector('#vet1-export-confirm').addEventListener('click', async () => {
  try {
    const wrapper = await encryptProgress(state, document.querySelector('#vet1-export-password').value);
    const blob = new Blob([JSON.stringify(wrapper)], {type:'application/json'});
    const anchor = document.createElement('a'); anchor.href = URL.createObjectURL(blob); anchor.download = 'DSY1102-VET-progress.dsy1102progress'; anchor.click(); URL.revokeObjectURL(anchor.href); exportDialog.close();
  } catch (error) { alert(error.message === 'PASSWORD_TOO_SHORT' ? 'Usa una contraseña de al menos 6 caracteres.' : 'No fue posible cifrar el progreso.'); }
});

document.querySelector('#vet1-open-import').addEventListener('click', () => importFile.click());
importFile.addEventListener('change', async event => {
  const file = event.target.files?.[0]; if (!file) return;
  try { pendingImport = JSON.parse(await file.text()); document.querySelector('#vet1-import-password').value=''; importDialog.showModal(); }
  catch { alert('El archivo seleccionado no tiene un formato válido.'); }
  event.target.value='';
});
document.querySelector('#vet1-import-confirm').addEventListener('click', async () => {
  try {
    const restored = await decryptProgress(pendingImport, document.querySelector('#vet1-import-password').value, LAB_ID);
    state = { ...restored, events: restored.events || [] };
    saveState(state); importDialog.close(); render(); repoDialog.showModal(); document.querySelector('#vet1-repo-path').value = state.student.repoPath || '';
  } catch { alert('No fue posible descifrar el archivo. Verifica la contraseña y el laboratorio.'); }
});

render();
