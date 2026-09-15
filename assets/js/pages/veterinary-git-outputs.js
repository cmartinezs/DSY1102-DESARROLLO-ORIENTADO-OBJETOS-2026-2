import { loadState, stages } from '../business/labs/veterinary-inheritance-model.js';

const LAB_PATH = 'labs/lab-veterinaria-herencia-polimorfismo';
const app = document.querySelector('#vet1-app');

function deliverablePaths(step) {
  const matches = String(step?.deliver || '').match(/[A-Za-z0-9_.\/-]+\.(?:java|md)/g) || [];
  return [...new Set(matches.map(path => `${LAB_PATH}/${path}`))];
}

function gitRemoteUrl(state) {
  const url = String(state?.student?.repoUrl || '').replace(/\/$/, '');
  if (!url) return 'https://github.com/<usuario>/<repositorio>.git';
  return url.endsWith('.git') ? url : `${url}.git`;
}

function expectedOutputs(step, state) {
  const targets = deliverablePaths(step);
  const paths = targets.length ? targets : [LAB_PATH];
  const indented = paths.map(path => `        ${path}`).join('\n');
  const modified = paths.map(path => `        modified:   ${path}`).join('\n');
  const stagedNew = paths.map(path => `        new file:   ${path}`).join('\n');
  const stagedModified = paths.map(path => `        modified:   ${path}`).join('\n');
  const count = Math.max(1, paths.length);
  const filesLabel = count === 1 ? 'file' : 'files';

  return [
    [
      {
        label: 'Si los entregables de este paso son archivos nuevos',
        text: `On branch master\nYour branch is up to date with 'origin/master'.\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n${indented}\n\nnothing added to commit but untracked files present (use "git add" to track)`
      },
      {
        label: 'Si estás modificando archivos que ya existían',
        text: `On branch master\nYour branch is up to date with 'origin/master'.\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n${modified}\n\nno changes added to commit (use "git add" and/or "git commit -a")`
      },
      {
        label: 'Si ves el árbol limpio',
        text: `On branch master\nYour branch is up to date with 'origin/master'.\n\nnothing to commit, working tree clean`,
        note: 'En este punto, un árbol limpio sólo es correcto si ya habías registrado este avance. Si todavía no has hecho el commit de este paso, detente y comprueba que guardaste los archivos en la ruta correcta.'
      }
    ],
    [
      {
        label: 'Salida esperada',
        text: '(sin salida)',
        note: 'git add normalmente no imprime nada cuando funciona. Si vuelve al prompt sin error, el staging terminó correctamente.'
      }
    ],
    [
      {
        label: 'Si los archivos son nuevos',
        text: `On branch master\nYour branch is up to date with 'origin/master'.\n\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n${stagedNew}`
      },
      {
        label: 'Si los archivos ya existían y fueron modificados',
        text: `On branch master\nYour branch is up to date with 'origin/master'.\n\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n${stagedModified}`
      }
    ],
    [
      {
        label: 'Salida esperada; el hash y los conteos cambian',
        text: `[master a1b2c3d] ${step.commit}\n ${count} ${filesLabel} changed, <n> insertions(+), <m> deletions(-)`,
        note: 'Lo importante es reconocer el mensaje de commit que acabas de usar y que Git informe que creó un commit nuevo.'
      }
    ],
    [
      {
        label: 'Al enviar un commit nuevo',
        text: `Enumerating objects: ..., done.\nCounting objects: 100% (.../...), done.\nWriting objects: 100% (.../...), done.\nTo ${gitRemoteUrl(state)}\n   <commit-anterior>..<commit-nuevo>  master -> master`
      },
      {
        label: 'Si ese commit ya estaba enviado al remoto',
        text: 'Everything up-to-date',
        note: 'Este mensaje indica que Git no encontró commits locales pendientes de enviar.'
      }
    ]
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

function renderExpectedOutput(terminalBody, outputs) {
  const wrapper = document.createElement('div');
  wrapper.className = 'vet1-terminal__expected';

  const title = document.createElement('div');
  title.className = 'vet1-terminal__expected-title';
  title.textContent = 'Salida esperada (o similar)';
  wrapper.appendChild(title);

  outputs.forEach(output => {
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

    wrapper.appendChild(item);
  });

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
