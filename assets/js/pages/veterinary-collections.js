import { LAB_ID, LAB_PATH, identityComplete, loadState, moveToStage, progressPercent, saveState, stageDone, stageUnlocked, stages, submitQuiz, toggleStep, updateIdentity, updateRepoPath } from '../business/labs/veterinary-collections-model.js';
import { decryptProgress, encryptProgress } from '../business/labs/veterinary-inheritance-crypto.js';

let state = loadState();
let reviewStage = null;
let pendingImport = null;

const ICONS = '../../../assets/img/icons.svg';
const app = document.querySelector('#vet2-app');
const nav = document.querySelector('#vet2-stage-nav');
const progressBar = document.querySelector('#vet2-progress-bar');
const progressTop = document.querySelector('#vet2-progress-top');
const xpTop = document.querySelector('#vet2-xp-top');
const deviceTop = document.querySelector('#vet2-device-top');
const repoDialog = document.querySelector('#vet2-repo-dialog');
const exportDialog = document.querySelector('#vet2-export-dialog');
const importDialog = document.querySelector('#vet2-import-dialog');
const importFile = document.querySelector('#vet2-import-file');

const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
const icon = (name, className='icon') => `<svg class="${className}" aria-hidden="true"><use href="${ICONS}#${name}"></use></svg>`;

function persist() { saveState(state); render(); }
function repoPathLabel() { return state.student.repoPath || '<ruta-raiz-del-repositorio>'; }
function remoteUrl() { const url=String(state.student.repoUrl||'').replace(/\/$/,''); return url ? (url.endsWith('.git')?url:`${url}.git`) : 'https://github.com/<usuario>/<repositorio>.git'; }

function identityForm(readOnly=false) {
  const s=state.student; const disabled=readOnly?'disabled':'';
  return `<div class="vet2-identity">
    <label class="vet2-field">Nombre completo<input id="vet2-student-name" value="${esc(s.name)}" ${disabled}></label>
    <label class="vet2-field">Sección<input id="vet2-student-section" value="${esc(s.section)}" placeholder="Ej.: 001D" ${disabled}></label>
    <label class="vet2-field">URL del repositorio GitHub<input id="vet2-repo-url" value="${esc(s.repoUrl)}" placeholder="https://github.com/usuario/DSY1102-..." ${disabled}></label>
    <label class="vet2-field">Ruta local del mismo repositorio<input id="vet2-repo-path" value="${esc(s.repoPath)}" placeholder="C:\\Users\\...\\DSY1102-..." ${disabled}></label>
    <label class="vet2-field">Nombre de este equipo<input id="vet2-device-alias" value="${esc(s.deviceAlias)}" placeholder="LAB-PC-12 o Mi notebook" ${disabled}></label>
  </div>
  <div class="notice notice-info"><strong>Continuidad:</strong> si completaste Veterinaria I en este navegador, estos datos se recuperan automáticamente. Veterinaria II usa el mismo repositorio y el mismo directorio <code>${LAB_PATH}</code>.</div>
  ${readOnly?'':`<div class="vet2-actions"><button class="btn btn-primary" type="button" data-action="save-identity">${icon('save')} Confirmar continuidad</button></div>`}`;
}

function pathLines(paths,prefix='') { return paths.map(path=>`        ${prefix}${LAB_PATH}/${path}`).join('\n'); }
function branchHeader() { return `On branch master\nYour branch is up to date with 'origin/master'.`; }

function expectedOutputs(step) {
  const git=step.git||{};
  const newPaths=git.newPaths||[];
  const modifiedPaths=git.modifiedPaths||[];
  const preSections=[];
  if (modifiedPaths.length) preSections.push(`Changes not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n${pathLines(modifiedPaths,'modified:   ')}`);
  if (newPaths.length) preSections.push(`Untracked files:\n  (use "git add <file>..." to include in what will be committed)\n${pathLines(newPaths)}`);
  const staged=[...newPaths.map(path=>`        new file:   ${LAB_PATH}/${path}`),...modifiedPaths.map(path=>`        modified:   ${LAB_PATH}/${path}`)].join('\n');
  const count=newPaths.length+modifiedPaths.length || 1;
  const autoAdd=`Si IntelliJ IDEA ejecutó “Add to Git” automáticamente, estos mismos archivos pueden aparecer ya en “Changes to be committed” antes de ejecutar git add. Eso es válido: verifica que sean exactamente los archivos de este paso y continúa.`;
  return [
    {label:'Lo esperado antes de preparar los cambios',text:`${branchHeader()}\n\n${preSections.join('\n\n')}\n\nno changes added to commit`,note:autoAdd},
    {label:'Salida esperada',text:'(sin salida)',note:'git add normalmente no imprime nada cuando funciona. Si vuelve al prompt sin error, continúa al siguiente git status.'},
    {label:'Lo esperado después de git add',text:`${branchHeader()}\n\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n${staged}`,note:'Confirma que aparecen sólo los archivos de este paso antes de crear el commit.'},
    {label:'Lo esperado al crear el commit',text:`[master a1b2c3d] ${step.commit}\n ${count} ${count===1?'file':'files'} changed, <n> insertions(+), <m> deletions(-)`,note:'El hash y los conteos pueden variar; el mensaje del commit debe coincidir con este paso.'},
    {label:'Lo esperado al enviar el commit',text:`Enumerating objects: ..., done.\nCounting objects: 100% (.../...), done.\nWriting objects: 100% (.../...), done.\nTo ${remoteUrl()}\n   <commit-anterior>..<commit-nuevo>  master -> master`,note:'La cantidad de objetos y hashes varía. El push debe finalizar sin errores.'}
  ];
}

function terminal(number,title,command,explanation,output) {
  return `<div class="vet2-cli-step">
    <div class="vet2-cli-step__head"><span class="vet2-cli-number">${number}</span><div><strong>${esc(title)}</strong><div class="muted">${esc(explanation)}</div></div></div>
    <div class="vet2-terminal">
      <div class="vet2-terminal__bar"><span class="vet2-terminal__dots"><i></i><i></i><i></i></span><strong>Terminal</strong><span class="vet2-terminal__path">${esc(repoPathLabel())}</span></div>
      <div class="vet2-terminal__body">
        <div class="vet2-terminal__line"><span class="vet2-terminal__prompt">❯</span><code>${esc(command)}</code><button class="btn btn-secondary" type="button" data-copy-command="${esc(command)}">${icon('clipboard')} Copiar</button></div>
        <div class="vet2-terminal__expected"><strong>Salida esperada (o similar)</strong><div class="vet2-terminal__expected-label">${esc(output.label)}</div><pre>${esc(output.text)}</pre>${output.note?`<div class="vet2-terminal__note">${esc(output.note)}</div>`:''}</div>
      </div>
    </div>
  </div>`;
}

function gitWorkflow(step) {
  if (!step.commit || !step.git) return '';
  const outputs=expectedOutputs(step);
  const addCommand=`git add "${LAB_PATH}"`;
  const commands=[
    ['Revisa el estado del repositorio','git status','Reconoce exactamente los cambios producidos por la misión.',outputs[0]],
    ['Prepara los cambios de Veterinaria II',addCommand,'Agrega al staging los cambios realizados dentro del laboratorio.',outputs[1]],
    ['Verifica el staging','git status','Comprueba qué se incluirá en el commit antes de crearlo.',outputs[2]],
    ['Crea el commit',`git commit -m "${step.commit}"`,'Registra este avance como una unidad independiente.',outputs[3]],
    ['Envía el commit a GitHub','git push','Publica el commit sólo después de crearlo correctamente.',outputs[4]]
  ];
  return `<section class="vet2-version-control stack">
    <div class="vet2-section-heading">${icon('git-branch','icon icon-lg')}<div><span class="badge">Control de versiones</span><h3>Guarda este avance en Git</h3></div></div>
    <p class="muted">GitHub Desktop y Terminal / CLI son rutas equivalentes. Elige una para este paso.</p>
    <div class="vet2-tabs" data-vet2-tabs>
      <div class="vet2-tabs__list" role="tablist">
        <button type="button" class="vet2-tab is-active" data-tab-target="desktop" aria-selected="true">${icon('desktop')} Ruta A · GitHub Desktop <span>Recomendada si aún no manejas terminal</span></button>
        <button type="button" class="vet2-tab" data-tab-target="cli" aria-selected="false">${icon('terminal')} Ruta B · Terminal / CLI <span>Un comando por vez</span></button>
      </div>
      <section class="vet2-tabpanel" data-tab-panel="desktop">
        <ol class="vet2-desktop-steps">
          <li>Abre <strong>GitHub Desktop</strong> y confirma el mismo repositorio usado en Veterinaria I.</li>
          <li>En <strong>Changes</strong>, revisa los archivos producidos por esta misión.</li>
          <li>En <strong>Summary (required)</strong>, usa:<div class="vet2-text-snippet"><span>Mensaje de commit</span><strong>${esc(step.commit)}</strong><button class="btn btn-secondary" type="button" data-copy-command="${esc(step.commit)}">${icon('clipboard')} Copiar texto</button></div></li>
          <li>Presiona <strong>Commit to current branch</strong> y espera confirmación.</li>
          <li>Presiona <strong>Push origin</strong> y verifica que el commit quede en el remoto.</li>
        </ol>
      </section>
      <section class="vet2-tabpanel" data-tab-panel="cli" hidden>
        <div class="notice notice-info"><strong>Antes de comenzar:</strong> abre una terminal en la raíz de tu repositorio. Ruta configurada: <code>${esc(repoPathLabel())}</code>.</div>
        <div class="vet2-cli-carousel" data-cli-carousel data-cli-index="0">
          <div class="vet2-cli-carousel__viewport">${commands.map((item,index)=>`<div class="vet2-cli-slide ${index===0?'is-active':''}" data-cli-slide="${index}" ${index===0?'':'hidden'}>${terminal(index+1,...item)}</div>`).join('')}</div>
          <div class="vet2-cli-carousel__footer"><button class="btn btn-secondary" type="button" data-cli-prev disabled>← Anterior</button><div><strong data-cli-counter>Paso 1 de 5</strong><div class="vet2-cli-carousel__dots">${commands.map((_,i)=>`<button type="button" class="vet2-cli-dot ${i===0?'is-active':''}" data-cli-go="${i}" aria-label="Ir al paso ${i+1}"></button>`).join('')}</div></div><button class="btn btn-primary" type="button" data-cli-next>Siguiente →</button></div>
        </div>
      </section>
    </div>
  </section>`;
}

function stepHtml(step,index,reviewOnly=false) {
  const stage=stages[state.currentStage];
  const checked=!!state.steps[step.id];
  const identityReady=step.special!=='identity' || identityComplete(state.student);
  const disabled=reviewOnly||!identityReady;
  return `<article class="panel vet2-step stack ${reviewOnly?'is-review':''}">
    <div class="vet2-step__head"><div><span class="badge">Paso ${index+1}/${stage.steps.length}</span><h2>${esc(step.title)}</h2></div><strong>+${step.xp} XP</strong></div>
    <div><h3>¿Qué estamos haciendo?</h3><p>${esc(step.what)}</p></div>
    <div class="vet2-why"><strong>¿Por qué lo hacemos?</strong><br>${esc(step.why)}</div>
    <div class="vet2-mission"><strong>Tu misión</strong><br>${esc(step.mission)}</div>
    ${step.special==='identity'?identityForm(reviewOnly):`<div class="vet2-deliverable"><strong>Entregable</strong><br><code>${esc(step.deliver)}</code></div>${gitWorkflow(step)}`}
    <label class="switch-control vet2-switchline"><input class="switch-control__input" type="checkbox" data-step="${step.id}" ${checked?'checked':''} ${disabled?'disabled':''}><span class="switch-control__track" aria-hidden="true"></span><span>${reviewOnly?'Paso completado':'He realizado este paso y verifiqué su entregable.'}</span></label>
    ${step.special==='identity'&&!identityReady&&!reviewOnly?'<div class="notice notice-warning">Confirma primero los datos de continuidad para habilitar este paso.</div>':''}
  </article>`;
}

function quizHtml(stage) {
  return `<section class="panel stack vet2-checkpoint"><div class="vet2-section-heading">${icon('question','icon icon-lg')}<div><span class="badge">Checkpoint</span><h2>Comprueba antes de avanzar</h2></div></div><p class="muted">Los pasos se completaron. Ahora valida la comprensión de esta etapa.</p>${stage.quiz.map((q,qi)=>`<div class="vet2-quiz-question"><strong>${qi+1}. ${esc(q.q)}</strong>${q.a.map((a,ai)=>`<label><input type="radio" name="vet2-quiz-${qi}" value="${ai}"> ${esc(a)}</label>`).join('')}</div>`).join('')}<button class="btn btn-primary" type="button" data-action="submit-quiz">${icon('check')} Revisar respuestas</button><div id="vet2-quiz-message"></div></section>`;
}

function passedHtml(reviewing) {
  const hasNext=state.currentStage<stages.length-1;
  return `<section class="panel stack vet2-passed"><div class="notice notice-success"><strong>${icon('check')} Etapa superada.</strong> El progreso aprobado queda preservado.</div>${reviewing?'<div class="notice notice-info"><strong>Modo repaso.</strong> Los pasos se muestran en sólo lectura y no alteran XP ni checkpoints.</div>':''}<div class="vet2-actions"><button class="btn btn-secondary" type="button" data-action="${reviewing?'close-review':'review-stage'}">${icon(reviewing?'x':'eye')} ${reviewing?'Cerrar repaso':'Repasar esta etapa'}</button>${hasNext?`<button class="btn btn-success" type="button" data-action="next-stage">Continuar a la siguiente etapa ${icon('arrow-right')}</button>`:'<strong>Veterinaria II completada. Exporta tu progreso y confirma el último push.</strong>'}</div></section>`;
}

function renderNav() {
  nav.innerHTML=stages.map((stage,index)=>{ const done=stageDone(state,index); const unlocked=stageUnlocked(state,index); return `<button class="vet2-stage ${index===state.currentStage?'is-active':''}" data-stage="${index}" ${unlocked?'':'disabled'}>${icon(done?'check':unlocked?'circle':'lock')}<span>${esc(stage.title)}<br><small>${stage.mins} min · ${stage.steps.filter(step=>state.steps[step.id]).length}/${stage.steps.length} pasos</small></span></button>`; }).join('');
}

function render() {
  while(state.currentStage>0&&!stageUnlocked(state,state.currentStage)) state.currentStage--;
  if(reviewStage!==null&&reviewStage!==state.currentStage) reviewStage=null;
  const stage=stages[state.currentStage];
  const passed=!!state.quizzes[stage.id]?.passed;
  const allSteps=stage.steps.every(step=>state.steps[step.id]);
  const reviewing=passed&&reviewStage===state.currentStage;
  const percent=progressPercent(state);
  renderNav(); progressBar.style.width=`${percent}%`; progressTop.textContent=`${percent}% completado`; xpTop.textContent=`⭐ ${state.xp} XP`; deviceTop.textContent=state.student.deviceAlias||'Equipo sin identificar';
  const intro=`<section class="panel"><span class="badge">${stage.mins} minutos sugeridos</span><h2>${esc(stage.title)}</h2><p class="muted">${passed?'Etapa superada.':allSteps?'Pasos completados. Responde el checkpoint para cerrar la etapa.':'Completa los pasos, verifica sus entregables y registra evidencia Git antes de marcarlos.'}</p></section>`;
  let body='';
  if(passed) body=`${reviewing?stage.steps.map((step,index)=>stepHtml(step,index,true)).join(''):''}${passedHtml(reviewing)}`;
  else if(allSteps) body=quizHtml(stage);
  else body=`${stage.steps.map((step,index)=>stepHtml(step,index,false)).join('')}<section class="panel"><div class="notice notice-info">${icon('lock')} El checkpoint aparecerá cuando completes todos los pasos de esta etapa.</div></section>`;
  app.innerHTML=intro+body;
}

function readIdentity() { return {name:document.querySelector('#vet2-student-name')?.value.trim()||'',section:document.querySelector('#vet2-student-section')?.value.trim()||'',repoUrl:document.querySelector('#vet2-repo-url')?.value.trim()||'',repoPath:document.querySelector('#vet2-repo-path')?.value.trim()||'',deviceAlias:document.querySelector('#vet2-device-alias')?.value.trim()||''}; }

nav.addEventListener('click',event=>{ const button=event.target.closest('[data-stage]'); if(!button)return; reviewStage=null; state=moveToStage(state,Number(button.dataset.stage)); persist(); window.scrollTo({top:0,behavior:'smooth'}); });
app.addEventListener('change',event=>{ const input=event.target.closest('[data-step]'); if(!input||input.disabled||reviewStage!==null)return; state=toggleStep(state,input.dataset.step,input.checked); persist(); });
app.addEventListener('click',async event=>{
  const tab=event.target.closest('[data-tab-target]');
  if(tab){ const tabs=tab.closest('[data-vet2-tabs]'); tabs.querySelectorAll('[data-tab-target]').forEach(button=>{const active=button===tab;button.classList.toggle('is-active',active);button.setAttribute('aria-selected',String(active));}); tabs.querySelectorAll('[data-tab-panel]').forEach(panel=>{const active=panel.dataset.tabPanel===tab.dataset.tabTarget;panel.hidden=!active;}); return; }
  const carouselButton=event.target.closest('[data-cli-prev],[data-cli-next],[data-cli-go]');
  if(carouselButton){ const carousel=carouselButton.closest('[data-cli-carousel]'); const slides=[...carousel.querySelectorAll('[data-cli-slide]')]; let index=Number(carousel.dataset.cliIndex||0); if(carouselButton.hasAttribute('data-cli-prev'))index--; if(carouselButton.hasAttribute('data-cli-next'))index++; if(carouselButton.hasAttribute('data-cli-go'))index=Number(carouselButton.dataset.cliGo); index=Math.max(0,Math.min(slides.length-1,index)); carousel.dataset.cliIndex=String(index); slides.forEach((slide,i)=>slide.hidden=i!==index); carousel.querySelectorAll('[data-cli-go]').forEach((dot,i)=>dot.classList.toggle('is-active',i===index)); carousel.querySelector('[data-cli-counter]').textContent=`Paso ${index+1} de ${slides.length}`; carousel.querySelector('[data-cli-prev]').disabled=index===0; const next=carousel.querySelector('[data-cli-next]'); next.disabled=index===slides.length-1; next.textContent=index===slides.length-1?'Último paso':'Siguiente →'; return; }
  const copy=event.target.closest('[data-copy-command]');
  if(copy){ await navigator.clipboard.writeText(copy.dataset.copyCommand); const previous=copy.innerHTML; copy.innerHTML=`${icon('check')} Copiado`; setTimeout(()=>copy.innerHTML=previous,900); return; }
  const action=event.target.closest('[data-action]')?.dataset.action; if(!action)return;
  if(action==='save-identity'){ try{ state=updateIdentity(state,readIdentity()); state=toggleStep(state,'s0p1',true); persist(); }catch{ alert('Completa nombre, sección, URL de GitHub, ruta local y alias del equipo.'); } }
  if(action==='submit-quiz'){ const answers=stages[state.currentStage].quiz.map((_,i)=>document.querySelector(`input[name="vet2-quiz-${i}"]:checked`)?.value??null); try{ state=submitQuiz(state,state.currentStage,answers); const passed=state.quizzes[stages[state.currentStage].id]?.passed; persist(); if(!passed)alert('No superaste el checkpoint. Revisa nuevamente los pasos de esta etapa.'); }catch{ document.querySelector('#vet2-quiz-message').innerHTML='<div class="notice notice-warning">Debes responder todas las preguntas.</div>'; } }
  if(action==='review-stage'){reviewStage=state.currentStage;render();window.scrollTo({top:0,behavior:'smooth'});} if(action==='close-review'){reviewStage=null;render();window.scrollTo({top:0,behavior:'smooth'});} if(action==='next-stage'){reviewStage=null;state=moveToStage(state,state.currentStage+1);persist();window.scrollTo({top:0,behavior:'smooth'});}
});

document.querySelector('#vet2-open-repo').addEventListener('click',()=>{document.querySelector('#vet2-repo-dialog-path').value=state.student.repoPath||'';repoDialog.showModal();});
document.querySelector('#vet2-save-repo').addEventListener('click',()=>{try{state=updateRepoPath(state,document.querySelector('#vet2-repo-dialog-path').value.trim());saveState(state);repoDialog.close();render();}catch{alert('Ingresa una ruta local válida.');}});
document.querySelectorAll('[data-close-dialog]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
document.querySelector('#vet2-open-export').addEventListener('click',()=>{document.querySelector('#vet2-export-password').value='';exportDialog.showModal();});
document.querySelector('#vet2-export-confirm').addEventListener('click',async()=>{try{const wrapper=await encryptProgress(state,document.querySelector('#vet2-export-password').value);const blob=new Blob([JSON.stringify(wrapper)],{type:'application/json'});const anchor=document.createElement('a');anchor.href=URL.createObjectURL(blob);anchor.download='DSY1102-VET2-progress.dsy1102progress';anchor.click();URL.revokeObjectURL(anchor.href);exportDialog.close();}catch(error){alert(error.message==='PASSWORD_TOO_SHORT'?'Usa una contraseña de al menos 6 caracteres.':'No fue posible cifrar el progreso.');}});
document.querySelector('#vet2-open-import').addEventListener('click',()=>importFile.click());
importFile.addEventListener('change',async event=>{const file=event.target.files?.[0];if(!file)return;try{pendingImport=JSON.parse(await file.text());document.querySelector('#vet2-import-password').value='';importDialog.showModal();}catch{alert('El archivo no tiene un formato válido.');}event.target.value='';});
document.querySelector('#vet2-import-confirm').addEventListener('click',async()=>{try{state=await decryptProgress(pendingImport,document.querySelector('#vet2-import-password').value,LAB_ID);reviewStage=null;saveState(state);importDialog.close();render();}catch{alert('No fue posible descifrar el archivo. Verifica contraseña y laboratorio.');}});

render();
