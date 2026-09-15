import { LAB_ID, identityComplete, loadState, moveToStage, progressPercent, saveState, stageDone, stageUnlocked, stages, submitQuiz, toggleStep, updateIdentity, updateRepoPath } from '../business/labs/veterinary-inheritance-model.js';
import { decryptProgress, encryptProgress } from '../business/labs/veterinary-inheritance-crypto.js';

let state = loadState();
let pendingImport = null;
let reviewStage = null;

const ICONS = '../../../assets/img/icons.svg';
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
const icon = (name, className='icon') => `<svg class="${className}" aria-hidden="true"><use href="${ICONS}#${name}"></use></svg>`;

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

function identityForm(readOnly = false) {
  const s = state.student;
  const disabled = readOnly ? 'disabled' : '';
  return `<div class="vet1-identity">
    <label class="vet1-field">Nombre completo<input id="studentName" value="${esc(s.name)}" placeholder="Nombre y apellido" ${disabled}></label>
    <label class="vet1-field">Sección<input id="studentSection" value="${esc(s.section)}" placeholder="Ej.: 001D" ${disabled}></label>
    <label class="vet1-field">URL de tu repositorio GitHub<input id="repoUrl" value="${esc(s.repoUrl)}" placeholder="https://github.com/usuario/DSY1102-SECCION-nombre-apellido" ${disabled}></label>
    <label class="vet1-field">Ruta local del repositorio<input id="repoPath" value="${esc(s.repoPath)}" placeholder="C:\\Users\\...\\DSY1102-..." ${disabled}></label>
    <label class="vet1-field">Nombre de este equipo<input id="deviceAlias" value="${esc(s.deviceAlias)}" placeholder="LAB-PC-12 o Mi notebook" ${disabled}></label>
  </div>
  <div class="notice notice-warning"><strong>Importante:</strong> el navegador no expone de forma fiable el nombre real del equipo; usa un alias reconocible.</div>
  ${readOnly ? '' : `<div class="vet1-actions"><button class="btn btn-primary" data-action="save-identity">${icon('save')} Guardar datos de sesión</button></div>`}`;
}

function commandStep(number, title, command, explanation) {
  return `<div class="vet1-cli-step">
    <div class="vet1-cli-step__head"><span class="vet1-cli-number">${number}</span><div><strong>${esc(title)}</strong><div class="muted">${esc(explanation)}</div></div></div>
    <div class="vet1-command"><code>${esc(command)}</code><button class="btn btn-secondary" type="button" data-copy-command="${esc(command)}">${icon('clipboard')} Copiar</button></div>
  </div>`;
}

function gitBlock(step) {
  if (!step.commit) return '';
  const commitMessage = step.commit;
  return `<section class="vet1-version-control stack">
    <div class="vet1-section-heading">${icon('git-branch','icon icon-lg')}<div><span class="badge">Control de versiones</span><h3>Guarda este avance en Git</h3></div></div>
    <p class="muted">Puedes hacerlo con <strong>GitHub Desktop</strong> o con <strong>Terminal / CLI</strong>. El resultado debe ser el mismo: un commit de este paso enviado a GitHub.</p>

    <details class="vet1-workflow" open>
      <summary>${icon('desktop')} <strong>Ruta A · GitHub Desktop</strong> <span class="muted">Recomendada si aún no manejas la terminal</span></summary>
      <ol class="vet1-desktop-steps">
        <li><strong>Abre GitHub Desktop</strong> y confirma que está seleccionado tu repositorio <code>DSY1102-...</code>.</li>
        <li>En la pestaña <strong>Changes</strong>, revisa los archivos modificados. Deja seleccionados sólo los cambios que corresponden a este avance.</li>
        <li>En <strong>Summary (required)</strong>, escribe exactamente:<div class="vet1-command"><code>${esc(commitMessage)}</code><button class="btn btn-secondary" type="button" data-copy-command="${esc(commitMessage)}">${icon('clipboard')} Copiar</button></div></li>
        <li>Presiona <strong>Commit to current branch</strong>. Espera a que GitHub Desktop confirme el commit antes de continuar.</li>
        <li>Presiona <strong>Push origin</strong> para enviar el commit a GitHub. Si el botón dice <strong>Fetch origin</strong> y no hay cambios pendientes, revisa el historial para confirmar que el commit ya fue enviado.</li>
      </ol>
      <div class="notice notice-info">${icon('check')} Terminas esta ruta cuando el commit aparece en el historial de GitHub Desktop y fue enviado al repositorio remoto.</div>
    </details>

    <details class="vet1-workflow">
      <summary>${icon('terminal')} <strong>Ruta B · Terminal / CLI</strong> <span class="muted">Ejecuta un comando por vez</span></summary>
      <div class="notice notice-warning"><strong>No copies ni ejecutes todos los comandos juntos.</strong> Ejecuta el paso 1, observa el resultado y recién después continúa con el siguiente.</div>
      ${commandStep(1, 'Ubícate en tu repositorio', shellPath(), 'Hazlo sólo si tu terminal todavía no está abierta en la carpeta raíz del repositorio.')}
      ${commandStep(2, 'Revisa qué cambió', 'git status', 'Lee el resultado. Debes reconocer los archivos que modificaste antes de preparar el commit.')}
      ${commandStep(3, 'Prepara los archivos del laboratorio', `git add "${labPath()}"`, 'Este comando agrega al próximo commit los cambios de esta carpeta. Luego puedes ejecutar git status nuevamente para verificar.')}
      ${commandStep(4, 'Crea el commit', `git commit -m "${commitMessage}"`, 'Ejecuta este comando sólo después de confirmar que los archivos correctos están preparados.')}
      ${commandStep(5, 'Envía el commit a GitHub', 'git push', 'Hazlo después de que git commit haya finalizado correctamente. Espera la confirmación del push.')}
      <div class="notice notice-info">${icon('check')} Si un comando muestra un error, detente y resuélvelo antes de ejecutar el siguiente.</div>
    </details>
  </section>`;
}

function stepHtml(step, index, reviewOnly = false) {
  const checked = Boolean(state.steps[step.id]);
  const currentStage = stages[state.currentStage];
  const identityReady = step.id !== 's0p1' || identityComplete(state.student);
  const disabled = reviewOnly || !identityReady;
  return `<article class="panel vet1-step stack ${reviewOnly ? 'is-review' : ''}">
    <div class="vet1-step__head"><div><span class="badge">Paso ${index + 1}/${currentStage.steps.length}</span><h2>${esc(step.title)}</h2></div><strong>+${step.xp} XP</strong></div>
    <div><h3>¿Qué estamos haciendo?</h3><p>${esc(step.what)}</p></div>
    <div class="vet1-why"><strong>¿Por qué lo hacemos?</strong><br>${esc(step.why)}</div>
    ${step.diagram ? diagram(step.diagram) : ''}
    <div class="vet1-mission"><strong>Tu misión</strong><br>${esc(step.mission)}</div>
    ${step.special === 'identity' ? identityForm(reviewOnly) : `<div class="vet1-deliverable"><strong>Entregable</strong><br><code>${esc(step.deliver)}</code>${step.template ? `<pre class="vet1-code">${esc(step.template)}</pre>` : ''}</div>${gitBlock(step)}`}
    <label class="switch-control vet1-switchline">
      <input class="switch-control__input" type="checkbox" data-step="${step.id}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
      <span class="switch-control__track" aria-hidden="true"></span>
      <span>${reviewOnly ? 'Paso completado' : 'He realizado este paso y verifiqué su entregable.'}</span>
    </label>
    ${step.id === 's0p1' && !identityReady && !reviewOnly ? '<div class="notice notice-warning">Guarda primero datos válidos de sesión para habilitar este paso.</div>' : ''}
  </article>`;
}

function quizHtml(stage) {
  return `<section class="panel stack vet1-checkpoint">
    <div class="vet1-section-heading">${icon('question','icon icon-lg')}<div><span class="badge">Checkpoint</span><h2>2 preguntas para avanzar</h2></div></div>
    <p class="muted">Completaste todos los pasos de esta etapa. Ahora valida tu comprensión antes de continuar.</p>
    ${stage.quiz.map((question, qIndex) => `<div class="vet1-quiz-question"><strong>${qIndex + 1}. ${esc(question.q)}</strong>${question.a.map((answer, aIndex) => `<label><input type="radio" name="quiz-${qIndex}" value="${aIndex}"> ${esc(answer)}</label>`).join('')}</div>`).join('')}
    <button class="btn btn-primary" data-action="submit-quiz">${icon('check')} Revisar respuestas</button>
    <div id="vet1-quiz-message"></div>
  </section>`;
}

function passedHtml(stage, reviewing) {
  const hasNext = state.currentStage < stages.length - 1;
  return `<section class="panel stack vet1-passed">
    <div class="notice notice-success"><strong>${icon('check')} Checkpoint superado.</strong> Tu avance queda guardado y esta etapa no necesita rehacerse.</div>
    ${reviewing ? '<div class="notice notice-info"><strong>Modo repaso.</strong> Puedes revisar todos los pasos, pero los switches están bloqueados para proteger tu avance y XP.</div>' : ''}
    <div class="vet1-actions">
      <button class="btn btn-secondary" data-action="${reviewing ? 'close-review' : 'review-stage'}">${icon(reviewing ? 'x' : 'eye')} ${reviewing ? 'Cerrar repaso' : 'Repasar esta etapa'}</button>
      ${hasNext ? `<button class="btn btn-success" data-action="next-stage">Continuar a la siguiente etapa ${icon('arrow-right')}</button>` : '<strong>Laboratorio completo. Exporta tu progreso y confirma el último push.</strong>'}
    </div>
  </section>`;
}

function renderNav() {
  nav.innerHTML = stages.map((stage, index) => {
    const done = stageDone(state,index);
    const unlocked = stageUnlocked(state,index);
    const statusIcon = done ? 'check' : unlocked ? 'circle' : 'lock';
    return `<button class="vet1-stage ${index === state.currentStage ? 'is-active' : ''}" data-stage="${index}" ${unlocked ? '' : 'disabled'}>${icon(statusIcon)}<span>${esc(stage.title)}<br><small>${stage.mins} min · ${stage.steps.filter(step => state.steps[step.id]).length}/${stage.steps.length} pasos</small></span></button>`;
  }).join('');
}

function render() {
  while (state.currentStage > 0 && !stageUnlocked(state, state.currentStage)) state.currentStage--;
  if (reviewStage !== null && reviewStage !== state.currentStage) reviewStage = null;
  const stage = stages[state.currentStage];
  const passed = Boolean(state.quizzes[stage.id]?.passed);
  const allSteps = stage.steps.every(step => state.steps[step.id]);
  const reviewing = passed && reviewStage === state.currentStage;
  const percent = progressPercent(state);

  renderNav();
  progressBar.style.width = `${percent}%`;
  progressTop.textContent = `${percent}% completado`;
  xpTop.textContent = `⭐ ${state.xp} XP`;
  deviceTop.textContent = state.student.deviceAlias || 'Equipo sin identificar';

  const intro = `<section class="panel"><span class="badge">${stage.mins} minutos sugeridos</span><h2>${esc(stage.title)}</h2><p class="muted">${passed ? 'Etapa superada.' : allSteps ? 'Pasos completados. Responde el checkpoint para cerrar la etapa.' : 'Completa cada paso, genera la evidencia y registra el commit antes de marcarlo.'}</p></section>`;
  let body = '';
  if (passed) {
    body = `${reviewing ? stage.steps.map((step,index)=>stepHtml(step,index,true)).join('') : ''}${passedHtml(stage, reviewing)}`;
  } else if (allSteps) {
    body = quizHtml(stage);
  } else {
    body = `${stage.steps.map((step,index)=>stepHtml(step,index,false)).join('')}<section class="panel"><div class="notice notice-info">${icon('lock')} El checkpoint aparecerá cuando completes todos los pasos de esta etapa.</div></section>`;
  }
  app.innerHTML = intro + body;
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
  reviewStage = null;
  state = moveToStage(state, Number(button.dataset.stage)); persist(); window.scrollTo({top:0,behavior:'smooth'});
});

app.addEventListener('change', event => {
  const input = event.target.closest('[data-step]'); if (!input || input.disabled || reviewStage !== null) return;
  state = toggleStep(state, input.dataset.step, input.checked); persist();
});

app.addEventListener('click', async event => {
  const commandButton = event.target.closest('[data-copy-command]');
  if (commandButton) {
    await navigator.clipboard.writeText(commandButton.dataset.copyCommand);
    const previous = commandButton.innerHTML;
    commandButton.innerHTML = `${icon('check')} Copiado`;
    setTimeout(() => { commandButton.innerHTML = previous; }, 900);
    return;
  }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (!action) return;
  if (action === 'save-identity') {
    try { state = updateIdentity(state, readIdentityFromDom()); state = toggleStep(state, 's0p1', true); persist(); }
    catch { alert('Completa nombre, sección, una URL válida de GitHub, una ruta local válida y el alias del equipo.'); }
  }
  if (action === 'submit-quiz') {
    const answers = stages[state.currentStage].quiz.map((_, index) => document.querySelector(`input[name="quiz-${index}"]:checked`)?.value ?? null);
    try {
      state = submitQuiz(state, state.currentStage, answers);
      const passed = state.quizzes[stages[state.currentStage].id]?.passed;
      persist();
      if (!passed) alert('No superaste el checkpoint. Los pasos de esta etapa deben revisarse nuevamente.');
    } catch { document.querySelector('#vet1-quiz-message').innerHTML = '<div class="notice notice-warning">Debes responder las dos preguntas.</div>'; }
  }
  if (action === 'review-stage') { reviewStage = state.currentStage; render(); window.scrollTo({top:0,behavior:'smooth'}); }
  if (action === 'close-review') { reviewStage = null; render(); window.scrollTo({top:0,behavior:'smooth'}); }
  if (action === 'next-stage') { reviewStage = null; state = moveToStage(state, state.currentStage + 1); persist(); window.scrollTo({top:0,behavior:'smooth'}); }
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
    reviewStage = null;
    saveState(state); importDialog.close(); render(); repoDialog.showModal(); document.querySelector('#vet1-repo-path').value = state.student.repoPath || '';
  } catch { alert('No fue posible descifrar el archivo. Verifica la contraseña y el laboratorio.'); }
});

render();