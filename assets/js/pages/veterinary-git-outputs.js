import { loadState, stages } from '../business/labs/veterinary-inheritance-model.js';

const LAB_PATH = 'labs/lab-veterinaria-herencia-polimorfismo';
const app = document.querySelector('#vet1-app');

const STEP_EXPECTATIONS = {
  s0p2: { kind:'new', paths:['README.md'] },
  s1p1: { kind:'new', paths:['docs/01-analisis-problema.md'] },
  s1p2: { kind:'modified', paths:['docs/01-analisis-problema.md'] },
  s2p1: { kind:'new', paths:['docs/02-algoritmo-atencion.md'] },
  s2p2: { kind:'modified', paths:['docs/02-algoritmo-atencion.md'] },
  s3p1: { kind:'new', paths:['docs/03-modelo-objetos.md'] },
  s3p2: { kind:'new', paths:['docs/diagramas/jerarquia-clases.md'] },
  s4p1: { kind:'new', paths:['src/Animal.java'] },
  s4p2: { kind:'new', paths:['src/Mascota.java','src/Salvaje.java'] },
  s5p1: { kind:'new', paths:['src/Perro.java','src/Gato.java'] },
  s5p2: { kind:'new', paths:['src/Tigre.java','src/Leon.java'] },
  s6p1: {
    kind:'modified',
    paths:['src/Animal.java'],
    note:'Además de Animal.java, deben aparecer sólo las subclases concretas en las que realmente hayas implementado o sobrescrito el comportamiento común. No es obligatorio que aparezcan todas si tu solución no las modificó.',
    flexibleCount:true
  },
  s6p2: { kind:'new', paths:['docs/diagramas/interaccion-objetos.md'] },
  s7p1: { kind:'new', paths:['src/Main.java'] },
  s7p2: {
    kind:'mixed',
    newPaths:['evidencias/cierre.md'],
    modifiedPaths:['README.md']
  }
};

function qualify(paths = []) {
  return paths.map(path => `${LAB_PATH}/${path}`);
}

function gitRemoteUrl(state) {
  const url = String(state?.student?.repoUrl || '').replace(/\/$/, '');
  if (!url) return 'https://github.com/<usuario>/<repositorio>.git';
  return url.endsWith('.git') ? url : `${url}.git`;
}

function branchHeader() {
  return `On branch master\nYour branch is up to date with 'origin/master'.`;
}

function untrackedBlock(paths) {
  return `${branchHeader()}\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n${paths.map(path => `        ${path}`).join('\n')}\n\nnothing added to commit but untracked files present (use "git add" to track)`;
}

function modifiedBlock(paths) {
  return `${branchHeader()}\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n${paths.map(path => `        modified:   ${path}`).join('\n')}\n\nno changes added to commit (use "git add" and/or "git commit -a")`;
}

function mixedBlock(newPaths, modifiedPaths) {
  return `${branchHeader()}\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n${modifiedPaths.map(path => `        modified:   ${path}`).join('\n')}\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n${newPaths.map(path => `        ${path}`).join('\n')}\n\nno changes added to commit (use "git add" and/or "git commit -a")`;
}

function stagedBlock(newPaths = [], modifiedPaths = []) {
  const lines = [
    ...newPaths.map(path => `        new file:   ${path}`),
    ...modifiedPaths.map(path => `        modified:   ${path}`)
  ];
  return `${branchHeader()}\n\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n${lines.join('\n')}`;
}

function expectationFor(step) {
  return STEP_EXPECTATIONS[step.id] || { kind:'new', paths:[] };
}

function resolvedPaths(expectation) {
  if (expectation.kind === 'mixed') {
    return {
      newPaths: qualify(expectation.newPaths),
      modifiedPaths: qualify(expectation.modifiedPaths)
    };
  }
  const paths = qualify(expectation.paths);
  return expectation.kind === 'new'
    ? { newPaths: paths, modifiedPaths: [] }
    : { newPaths: [], modifiedPaths: paths };
}

function intellijAutoAddObservation(newPaths, modifiedPaths) {
  const parts = [
    ...newPaths.map(path => `${path} como “new file”`),
    ...modifiedPaths.map(path => `${path} como “modified”`)
  ];
  return `Observación sobre IntelliJ IDEA: al crear o editar estos archivos, IntelliJ puede preguntarte si quieres agregarlos a Git. Si aceptaste “Add” / “Add to Git”, antes de ejecutar git add ya aparecerán en “Changes to be committed”: ${parts.join('; ')}. Eso también es correcto, porque el IDE ya realizó el staging. Verifica que sean exactamente los archivos de este paso; no deben aparecer archivos ajenos a la actividad.`;
}

function preAddOutput(expectation) {
  const { newPaths, modifiedPaths } = resolvedPaths(expectation);
  let text;
  let interpretation;

  if (expectation.kind === 'new') {
    text = untrackedBlock(newPaths);
    interpretation = `En este paso estás creando ${newPaths.length === 1 ? 'un archivo nuevo' : 'archivos nuevos'}. Antes de git add, ${newPaths.length === 1 ? 'debe aparecer como Untracked file' : 'deben aparecer como Untracked files'}.`;
  } else if (expectation.kind === 'modified') {
    text = modifiedBlock(modifiedPaths);
    interpretation = `En este paso estás modificando ${modifiedPaths.length === 1 ? 'un archivo que ya existía' : 'archivos que ya existían'}. Antes de git add, ${modifiedPaths.length === 1 ? 'debe aparecer' : 'deben aparecer'} en Changes not staged for commit.`;
  } else {
    text = mixedBlock(newPaths, modifiedPaths);
    interpretation = 'Este paso mezcla un archivo nuevo y uno ya existente: el nuevo debe aparecer en Untracked files y el existente en Changes not staged for commit.';
  }

  return [{
    label:'Lo esperado en este paso',
    text,
    note:[interpretation, expectation.note, intellijAutoAddObservation(newPaths, modifiedPaths)].filter(Boolean).join(' ')
  }];
}

function postAddOutput(expectation) {
  const { newPaths, modifiedPaths } = resolvedPaths(expectation);
  return [{
    label:'Lo esperado después de git add',
    text:stagedBlock(newPaths, modifiedPaths),
    note:`Antes de crear el commit, confirma que aparecen exactamente los archivos correspondientes a este paso.${expectation.note ? ` ${expectation.note}` : ''} Si ves archivos ajenos a esta actividad, no continúes hasta corregir el staging.`
  }];
}

function expectedOutputs(step, state) {
  const expectation = expectationFor(step);
  const { newPaths, modifiedPaths } = resolvedPaths(expectation);
  const allPaths = [...newPaths, ...modifiedPaths];
  const countText = expectation.flexibleCount
    ? '<n> files changed'
    : `${Math.max(1, allPaths.length)} ${allPaths.length === 1 ? 'file' : 'files'} changed`;

  return [
    preAddOutput(expectation),
    [{
      label:'Salida esperada',
      text:'(sin salida)',
      note:'git add normalmente no imprime nada cuando funciona. Si vuelve al prompt sin mostrar un error, continúa con el segundo git status para verificar el staging.'
    }],
    postAddOutput(expectation),
    [{
      label:'Lo esperado al crear el commit',
      text:`[master a1b2c3d] ${step.commit}\n ${countText}, <n> insertions(+), <m> deletions(-)`,
      note:'El hash y los conteos varían. Debes reconocer el mensaje de commit de este paso y comprobar que Git informa que creó un commit nuevo.'
    }],
    [{
      label:'Lo esperado al enviar el commit',
      text:`Enumerating objects: ..., done.\nCounting objects: 100% (.../...), done.\nWriting objects: 100% (.../...), done.\nTo ${gitRemoteUrl(state)}\n   <commit-anterior>..<commit-nuevo>  master -> master`,
      note:'La cantidad de objetos y los hashes cambian. Lo importante es que termine con master -> master (o el nombre de la rama que estés usando) y sin errores.'
    }]
  ];
}

function findStepForCarousel(carousel) {
  const commitCode = [...carousel.querySelectorAll('.vet1-terminal__line code')]
    .map(node => node.textContent.trim())
    .find(text => text.startsWith('git commit -m '));
  if (!commitCode) return null;
  const match = commitCode.match(/^git commit -m "(.+)"$/);
  if (!match) return null;
  return stages.flatMap(stage => stage.steps).find(step => step.commit === match[1]) || null;
}

function appendOutputCase(parent, output) {
  const item = document.createElement('div');
  item.className = 'vet1-terminal__expected-case';

  const label = document.createElement('div');
  label.className = 'vet1-terminal__expected-label';
  label.textContent = output.label;
  item.appendChild(label);

  const pre = document.createElement('pre');
  pre.textContent = output.text;
  item.appendChild(pre);

  if (output.note) {
    const note = document.createElement('div');
    note.className = 'vet1-terminal__expected-note';
    note.textContent = output.note;
    item.appendChild(note);
  }

  parent.appendChild(item);
}

function renderExpectedOutput(terminalBody, outputs) {
  const wrapper = document.createElement('div');
  wrapper.className = 'vet1-terminal__expected';

  const title = document.createElement('div');
  title.className = 'vet1-terminal__expected-title';
  title.textContent = 'Salida esperada (o similar)';
  wrapper.appendChild(title);

  outputs.forEach(output => appendOutputCase(wrapper, output));
  terminalBody.appendChild(wrapper);
}

function enhanceCarousel(carousel) {
  if (carousel.dataset.expectedOutputReady === 'true') return;
  const step = findStepForCarousel(carousel);
  if (!step) return;

  const outputsBySlide = expectedOutputs(step, loadState());
  [...carousel.querySelectorAll('[data-cli-slide]')].forEach((slide, index) => {
    const terminalBody = slide.querySelector('.vet1-terminal__body');
    if (!terminalBody || !outputsBySlide[index]) return;
    renderExpectedOutput(terminalBody, outputsBySlide[index]);
  });

  carousel.dataset.expectedOutputReady = 'true';
}

function enhanceAll() {
  app?.querySelectorAll('[data-cli-carousel]').forEach(enhanceCarousel);
}

const observer = new MutationObserver(enhanceAll);
if (app) observer.observe(app, { childList: true, subtree: true });
enhanceAll();
