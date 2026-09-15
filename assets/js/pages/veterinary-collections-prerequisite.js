import {
  loadState as loadVet1State,
  stageDone as vet1StageDone,
  stages as vet1Stages
} from '../business/labs/veterinary-inheritance-model.js';

const app = document.querySelector('#vet2-app');
const nav = document.querySelector('#vet2-stage-nav');
const progressBar = document.querySelector('#vet2-progress-bar');
const progressTop = document.querySelector('#vet2-progress-top');
const xpTop = document.querySelector('#vet2-xp-top');
const deviceTop = document.querySelector('#vet2-device-top');
const main = app?.closest('main');
const sidebarActions = [
  document.querySelector('#vet2-open-repo'),
  document.querySelector('#vet2-open-export'),
  document.querySelector('#vet2-open-import')
].filter(Boolean);

let blocked = false;
let gate = null;

function prerequisiteStatus() {
  const state = loadVet1State();
  const completed = vet1Stages
    .map((stage, index) => ({ stage, index, done: vet1StageDone(state, index) }))
    .filter(item => item.done);
  const firstPending = vet1Stages
    .map((stage, index) => ({ stage, index, done: vet1StageDone(state, index) }))
    .find(item => !item.done) || null;

  return {
    state,
    total: vet1Stages.length,
    completed: completed.length,
    complete: completed.length === vet1Stages.length,
    firstPending
  };
}

function disableVet2() {
  blocked = true;
  app.hidden = true;
  nav?.querySelectorAll('button').forEach(button => {
    button.disabled = true;
    button.setAttribute('aria-disabled', 'true');
  });
  sidebarActions.forEach(button => {
    button.disabled = true;
    button.setAttribute('aria-disabled', 'true');
  });
  if (progressBar) progressBar.style.width = '0%';
  if (progressTop) progressTop.textContent = 'Bloqueado';
  if (xpTop) xpTop.textContent = '⭐ —';
  if (deviceTop) deviceTop.textContent = 'Prerequisito pendiente';
}

function renderGate(status) {
  if (!main || gate) return;
  const hasProgress = status.completed > 0;
  const pendingTitle = status.firstPending?.stage?.title || 'Veterinaria I';
  const progress = Math.round((status.completed / status.total) * 100);

  gate = document.createElement('section');
  gate.className = 'panel vet2-prerequisite-gate stack';
  gate.setAttribute('role', 'status');
  gate.innerHTML = `
    <div class="vet2-prerequisite-gate__head">
      <div class="vet2-prerequisite-gate__icon" aria-hidden="true">🔒</div>
      <div>
        <span class="badge">Prerequisito obligatorio</span>
        <h2>Veterinaria II todavía no está disponible</h2>
      </div>
    </div>
    <p><strong>Debes completar Veterinaria I · Herencia y Polimorfismo antes de comenzar Veterinaria II.</strong></p>
    <p class="muted">La segunda parte continúa exactamente sobre la solución construida en la primera. Por eso no permitimos iniciar Arrays, Colecciones y Excepciones mientras la base de Herencia y Polimorfismo esté incompleta.</p>
    <div class="vet2-prerequisite-progress" aria-label="Progreso de Veterinaria I">
      <div class="vet2-prerequisite-progress__meta"><strong>${status.completed} de ${status.total} etapas aprobadas</strong><span>${progress}%</span></div>
      <div class="vet2-prerequisite-progress__track"><div style="width:${progress}%"></div></div>
    </div>
    <div class="notice notice-warning">
      <strong>Siguiente pendiente en Veterinaria I:</strong> ${pendingTitle}.
      ${hasProgress
        ? 'Continúa desde esa etapa y supera su checkpoint.'
        : 'No encontramos ninguna etapa aprobada de Veterinaria I en este navegador.'}
    </div>
    <div class="notice notice-info"><strong>Si completaste Veterinaria I en otro equipo o navegador:</strong> abre Veterinaria I, usa <em>Cargar progreso</em> e importa tu archivo <code>.dsy1102progress</code>. Después vuelve a esta página.</div>
    <div class="vet2-prerequisite-gate__actions">
      <a class="btn btn-primary" href="../veterinary-inheritance/">Continuar Veterinaria I →</a>
      <a class="btn btn-secondary" href="../index/">Volver a Laboratorios</a>
    </div>`;

  app.before(gate);
}

function applyGate() {
  const status = prerequisiteStatus();
  if (status.complete) return;
  disableVet2();
  renderGate(status);
}

applyGate();

window.addEventListener('pageshow', () => {
  if (!blocked) return;
  const status = prerequisiteStatus();
  if (status.complete) window.location.reload();
});

document.addEventListener('visibilitychange', () => {
  if (!blocked || document.visibilityState !== 'visible') return;
  const status = prerequisiteStatus();
  if (status.complete) window.location.reload();
});
