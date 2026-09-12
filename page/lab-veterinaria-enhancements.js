(() => {
  'use strict';

  const STORE = 'dsy1102-vet-lab-v1';
  const STANDARD_URL = 'https://github.com/cmartinezs/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/blob/master/docs/ESTANDAR-REPOSITORIO-ESTUDIANTE.md';
  const STEP_IDS = [
    ['s0p1','s0p2'],['s1p1','s1p2'],['s2p1','s2p2'],['s3p1','s3p2'],
    ['s4p1','s4p2'],['s5p1','s5p2'],['s6p1','s6p2'],['s7p1','s7p2']
  ];

  const GUIDES = {
    s0p1: {
      steps: [
        'Abre tu repositorio personal de DSY1102 en GitHub.',
        'Antes de continuar, revisa que tu repositorio siga el estándar oficial del curso. Si es nuevo, abre la guía enlazada en esta pantalla y prepara primero su estructura.',
        'Si todavía no tienes el repositorio en este computador, clónalo con GitHub Desktop o con git clone.',
        'Ubica la carpeta clonada en tu computador. La ruta local se parece a C:\\Users\\TuNombre\\Documents\\DSY1102-... y NO empieza por https://.',
        'Completa nombre, sección, URL de GitHub, ruta local y un nombre corto para identificar este equipo.',
        'Presiona Guardar datos de sesión.',
        'Comprueba que los comandos mostrados en esta misma pantalla cambien y usen tus datos reales.',
        'Sólo después de guardar correctamente se habilitará el switch del paso.'
      ],
      check: [
        'La URL empieza por https://github.com/.',
        'La ruta local corresponde a una carpeta de tu computador.',
        'Los comandos ya no muestran placeholders como <URL-DE-TU-REPOSITORIO>.',
        'El switch se habilita sólo después de guardar.'
      ]
    },
    s0p2: {
      steps: [
        'Abre la carpeta raíz de tu repositorio.',
        'Verifica que exista la carpeta labs. Si no existe, vuelve al estándar del repositorio y completa primero la estructura base.',
        'Dentro de labs crea exactamente lab-veterinaria-herencia-polimorfismo.',
        'Dentro de esa carpeta crea docs, src y evidencias.',
        'Dentro de docs crea además diagramas.',
        'Crea README.md usando la plantilla mostrada y reemplaza TU NOMBRE y TU SECCIÓN.',
        'Guarda el archivo.',
        'Ejecuta los comandos Git indicados y espera que git push termine sin error.'
      ],
      check: [
        'Existe labs/lab-veterinaria-herencia-polimorfismo/README.md.',
        'Existen docs, docs/diagramas, src y evidencias.',
        'El commit LAB-VET-00 está visible en GitHub.'
      ]
    }
  };

  const NOTES = {
    s0p1: [
      ['Repositorio','Es el proyecto que Git controla y que puede tener una copia en GitHub.','Permite guardar la historia del trabajo y compartirlo.'],
      ['Clonar','Es copiar el repositorio desde GitHub hacia tu computador usando git clone.','Después trabajas sobre los archivos locales.'],
      ['Ruta local','Es la dirección de una carpeta en tu computador, por ejemplo C:\\Users\\Ana\\Documents\\mi-repo.','Los comandos cd necesitan una ruta local; una URL no sirve como ruta del computador.']
    ],
    s0p2: [
      ['Estructura de proyecto','Es la forma acordada de ordenar carpetas y archivos.','Ayuda a encontrar rápidamente código, documentación y evidencias.'],
      ['README','Es un archivo de presentación e instrucciones, normalmente README.md.','Explica qué contiene una carpeta o proyecto.'],
      ['Commit','Es un punto guardado en la historia de Git.','Permite saber qué cambió y cuándo.'],
      ['Push','Es enviar a GitHub los commits hechos en tu computador.','Un commit local no aparece en GitHub hasta hacer push.']
    ],
    s1p1: [['Dominio del problema','Es la realidad que el software intenta representar; aquí, una veterinaria y sus animales.','Primero entendemos el problema y después decidimos cómo programarlo.'],['Requerimiento','Es algo que el sistema necesita hacer o cumplir.','Separa la necesidad de la forma concreta de implementarla.']],
    s1p2: [['Concepto de dominio','Es una cosa importante del problema, como Animal o Veterinaria.','Después algunos conceptos pueden convertirse en clases.'],['Responsabilidad','Es algo que un elemento debe hacer o conocer.','Ayuda a decidir dónde debería vivir cada comportamiento.'],['Regla de negocio','Es una condición propia del problema.','No es una regla de Java, sino de la situación que modelamos.']],
    s2p1: [['Algoritmo','Es una secuencia ordenada de pasos para lograr un resultado.','Primero puede escribirse en palabras y después convertirse en código.'],['Flujo','Es el recorrido del proceso desde inicio hasta resultado.','Permite ver el orden de las acciones.']],
    s2p2: [['Entrada','Es información que el proceso necesita recibir.','Por ejemplo, datos del animal antes de atenderlo.'],['Salida','Es el resultado que produce el proceso.','Permite definir qué esperamos obtener.'],['Decisión','Es un punto donde el camino puede cambiar según una condición.','Primero detectamos la decisión; después elegimos cómo programarla.']],
    s3p1: [['Abstracción','Es quedarse con las características importantes y dejar fuera detalles innecesarios.','Ayuda a descubrir qué comparten distintos animales.'],['Generalización','Es reunir características comunes en un concepto más general.','Permite llegar al concepto Animal desde varias especies.']],
    s3p2: [['Jerarquía de clases','Organiza clases desde conceptos generales a específicos.','Permite visualizar Animal → Mascota → Perro.'],['Relación es-un','Indica que un concepto específico también pertenece a uno más general.','Un Perro es una Mascota y también es un Animal.']],
    s4p1: [['Clase','Es una definición que indica qué datos y comportamientos tendrán ciertos objetos.','Animal.java define cómo será un Animal.'],['Atributo','Es un dato que pertenece a un objeto.','Representa parte de su estado.'],['Constructor','Es el código que prepara un objeto cuando se crea.','Permite iniciar sus datos correctamente.'],['Instancia','Es un objeto concreto creado desde una clase.','La clase es la definición; la instancia es un objeto real.']],
    s4p2: [['Herencia','Permite crear una clase específica reutilizando una clase general.','Mascota y Salvaje reutilizan lo definido en Animal.'],['Superclase','Es la clase más general de la que otra hereda.','Animal es superclase de Mascota y Salvaje.'],['Subclase','Es una clase más específica que hereda de otra.','Puede reutilizar lo heredado y agregar características propias.'],['super(...)','Llama al constructor de la clase padre.','Construye correctamente la parte heredada del objeto.']],
    s5p1: [['Especialización','Es crear un concepto más específico desde uno general.','Perro y Gato especializan Mascota.'],['Reutilización','Es aprovechar código existente en vez de copiarlo.','La herencia permite reutilizar lo que ya existe.']],
    s5p2: [['Duplicación de código','Es repetir la misma información o lógica en varios lugares.','Hace más difícil corregir y mantener el programa.'],['DRY','Significa Don’t Repeat Yourself: evita repetir código innecesariamente.','Es un principio común de desarrollo.']],
    s6p1: [['Sobrescritura','Es reemplazar en una subclase un comportamiento heredado por una versión propia.','En Java suele usarse @Override.'],['Firma de método','Identifica una operación por su nombre y parámetros.','La sobrescritura debe mantener la firma correspondiente.']],
    s6p2: [['Polimorfismo','Permite pedir la misma acción a objetos relacionados y obtener respuestas distintas según el objeto real.','Podemos trabajar con Animal sin preguntar manualmente qué especie es.'],['Despacho dinámico','Es la decisión que Java hace en ejecución sobre qué versión de un método ejecutar.','Por eso una referencia Animal puede ejecutar el método de Perro o Tigre.']],
    s7p1: [['Tipo de referencia','Es el tipo con que una variable trata a un objeto.','Una variable Animal puede referirse a un Perro.'],['Compilar','Es revisar y transformar el código antes de ejecutarlo.','Aquí suelen aparecer errores de sintaxis o tipos.'],['Ejecutar','Es poner el programa en funcionamiento.','Permite comprobar su comportamiento real.']],
    s7p2: [['Refactorización','Es mejorar el código sin cambiar lo que hace hacia afuera.','Ayuda a mejorar diseño y claridad.'],['Evidencia técnica','Son archivos, diagramas, commits y documentos que muestran qué se hizo.','Permite revisar y seguir el trabajo en equipo.']]
  };

  function readState() {
    try { return JSON.parse(localStorage.getItem(STORE) || 'null'); } catch (_) { return null; }
  }
  function writeState(s) { localStorage.setItem(STORE, JSON.stringify(s)); }
  function ensureActions(s) { if (!s.actionRequirements) s.actionRequirements = {}; return s.actionRequirements; }
  function isUrl(v) { return /^https?:\/\//i.test(String(v || '').trim()); }
  function validRepoUrl(v) { return /^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/i.test(String(v || '').trim()); }
  function validLocalPath(v) {
    const x = String(v || '').trim();
    return !!x && !isUrl(x) && (/^[A-Za-z]:\\/.test(x) || x.startsWith('/') || x.startsWith('\\\\'));
  }
  function currentStepIds() {
    const s = readState();
    return STEP_IDS[Number(s?.currentStage) || 0] || [];
  }
  function showMessage(text, ok) {
    const card = document.querySelector('.step-card');
    if (!card) return;
    let box = card.querySelector('.session-validation-msg');
    if (!box) {
      box = document.createElement('div');
      const actions = card.querySelector('.actions');
      if (actions) actions.insertAdjacentElement('afterend', box);
    }
    box.className = 'session-validation-msg notice ' + (ok ? 'notice-ok' : 'notice-danger');
    box.textContent = text;
  }
  function setCodeText(code, text) {
    if (!code) return;
    const btn = code.querySelector('.copy');
    code.innerHTML = '';
    if (btn) code.appendChild(btn);
    code.appendChild(document.createTextNode((btn ? '\n' : '') + text));
  }
  function personalizeCommands() {
    const s = readState();
    if (!s?.student) return;
    const repo = String(s.student.repoUrl || '').trim();
    const path = String(s.student.repoPath || '').trim();
    if (!validRepoUrl(repo) || !validLocalPath(path)) return;

    document.querySelectorAll('.step-card .code').forEach(code => {
      const t = code.textContent;
      if (t.includes('git clone')) {
        setCodeText(code, `git clone "${repo}" "${path}"\ncd "${path}"\ngit status`);
        return;
      }
      if (t.includes('git status') && t.includes('git add')) {
        let nt = t.replace(/^Copiar\s*/,'').trim();
        nt = nt.replace(/cd\s+"[^"]*"/, `cd "${path}"`);
        setCodeText(code, nt);
      }
    });
    document.querySelectorAll('.git-desktop code').forEach(el => {
      if (el.textContent.includes('<ruta del repositorio>') || isUrl(el.textContent)) el.textContent = path;
    });
  }
  function injectStandardNotice() {
    if (document.querySelector('.repo-standard-notice')) return;
    const first = document.querySelector('.step-card');
    if (!first) return;
    const mission = first.querySelector('.mission');
    if (!mission) return;
    const box = document.createElement('div');
    box.className = 'repo-standard-notice';
    box.style.cssText = 'background:#fff7ed;border:1px solid #fdba74;border-left:5px solid #ea580c;border-radius:.8rem;padding:1rem;margin:.9rem 0';
    box.innerHTML = `<strong>📁 Antes de continuar: revisa la estructura de tu repositorio</strong><p style="margin:.55rem 0">Este laboratorio usa la estructura oficial del repositorio del estudiante. Si acabas de crear tu repositorio o todavía no tienes carpetas como <code>docs</code>, <code>practica</code>, <code>labs</code>, <code>proyecto-formativo</code>, <code>desafios</code> y <code>evaluaciones</code>, prepara primero esa estructura.</p><a href="${STANDARD_URL}" target="_blank" rel="noopener noreferrer" style="font-weight:800">Abrir Estándar de Repositorio del Estudiante ↗</a><p style="margin:.55rem 0 0;color:#9a3412">La guía se abrirá en otra pestaña. Completa la estructura, vuelve a este laboratorio y recién continúa.</p>`;
    mission.insertAdjacentElement('beforebegin', box);
  }
  function injectGuidance() {
    const ids = currentStepIds();
    document.querySelectorAll('.step-card').forEach((card, i) => {
      const g = GUIDES[ids[i]];
      if (!g || card.querySelector('.guided-now')) return;
      const mission = card.querySelector('.mission');
      if (!mission) return;
      const box = document.createElement('div');
      box.className = 'guided-now';
      box.style.cssText = 'background:#eff6ff;border:1px solid #93c5fd;border-radius:.8rem;padding:1rem;margin:.9rem 0';
      box.innerHTML = '<strong>🧭 Haz esto ahora</strong><ol style="padding-left:1.35rem;line-height:1.55">' + g.steps.map(x => `<li style="margin:.45rem 0">${x}</li>`).join('') + '</ol><div style="background:#fff;border:1px solid #bfdbfe;border-radius:.65rem;padding:.75rem"><strong>✅ Comprueba antes de continuar</strong><ul style="padding-left:1.25rem;margin-bottom:0">' + g.check.map(x => `<li style="margin:.3rem 0">${x}</li>`).join('') + '</ul></div>';
      mission.insertAdjacentElement('afterend', box);
    });
  }
  function injectNotes() {
    const ids = currentStepIds();
    document.querySelectorAll('.step-card').forEach((card, i) => {
      if (card.querySelector('.technical-notes')) return;
      const notes = NOTES[ids[i]];
      if (!notes) return;
      const anchor = card.querySelector('.guided-now') || card.querySelector('.mission');
      if (!anchor) return;
      const box = document.createElement('div');
      box.className = 'technical-notes';
      box.style.cssText = 'background:#f8fafc;border:1px solid #cbd5e1;border-left:5px solid #475569;border-radius:.8rem;padding:1rem;margin:.9rem 0';
      box.innerHTML = '<strong>🧠 Nota técnica · Así se llama en desarrollo de software</strong>' + notes.map(n => `<div style="margin-top:.75rem"><strong>${n[0]}</strong><br><span>${n[1]}</span><br><span style="color:#64748b"><strong>¿Para qué sirve?</strong> ${n[2]}</span></div>`).join('');
      anchor.insertAdjacentElement('afterend', box);
    });
  }
  function hardGuard() {
    const s = readState();
    if (!s || Number(s.currentStage) !== 0) return;
    const first = document.querySelector('.step-card');
    const sw = first?.querySelector('.switch input[type=checkbox]');
    if (!sw) return;
    const ok = validRepoUrl(s.student?.repoUrl) && validLocalPath(s.student?.repoPath) && String(s.student?.name || '').trim() && String(s.student?.section || '').trim() && String(s.student?.deviceAlias || '').trim() && ensureActions(s).s0p1 === true;
    sw.disabled = !ok;
    if (!ok) sw.checked = false;
    const slider = sw.nextElementSibling;
    if (slider) { slider.style.opacity = ok ? '1' : '.45'; slider.style.cursor = ok ? 'pointer' : 'not-allowed'; }
    const line = sw.closest('.switchline');
    if (line) {
      let note = line.querySelector('.action-required-note');
      if (!ok) {
        if (!note) { note = document.createElement('span'); note.className = 'action-required-note'; line.appendChild(note); }
        note.style.cssText = 'display:block;margin-left:.5rem;color:#b45309;font-size:.82rem;font-weight:700';
        note.textContent = '🔒 Primero guarda correctamente los datos de sesión.';
      } else if (note) note.remove();
    }
  }
  function invalidateLegacy() {
    const s = readState();
    if (!s?.student || !s.student.repoPath || validLocalPath(s.student.repoPath)) return;
    ensureActions(s).s0p1 = false;
    if (s.steps?.s0p1) { s.steps.s0p1 = false; s.xp = Math.max(0, (Number(s.xp) || 0) - 20); }
    if (Number(s.currentStage) > 0) s.currentStage = 0;
    writeState(s);
  }
  function refresh() {
    injectStandardNotice();
    injectGuidance();
    injectNotes();
    personalizeCommands();
    hardGuard();
  }

  invalidateLegacy();

  const oldSaveIdentity = window.saveIdentity;
  if (typeof oldSaveIdentity === 'function') {
    window.saveIdentity = function() {
      const name = document.getElementById('studentName')?.value.trim() || '';
      const section = document.getElementById('studentSection')?.value.trim() || '';
      const repo = document.getElementById('repoUrl')?.value.trim() || '';
      const path = document.getElementById('repoPath')?.value.trim() || '';
      const dev = document.getElementById('deviceAlias')?.value.trim() || '';
      if (!name || !section || !dev) { showMessage('Completa nombre, sección y nombre del equipo antes de guardar.', false); return; }
      if (!validRepoUrl(repo)) { showMessage('La URL del repositorio debe verse como https://github.com/usuario/repositorio.', false); return; }
      if (!validLocalPath(path)) { showMessage('La ruta local debe ser una carpeta real del computador, por ejemplo C:\\Users\\TuNombre\\Documents\\DSY1102-... No pegues aquí la URL de GitHub.', false); return; }
      if (isUrl(dev)) { showMessage('El nombre del equipo debe ser un nombre corto, por ejemplo Notebook-Casa o LAB-PC-12.', false); return; }
      oldSaveIdentity.apply(this, arguments);
      setTimeout(() => {
        const s = readState();
        if (s) { ensureActions(s).s0p1 = true; writeState(s); }
        refresh();
        showMessage('Datos guardados correctamente. Los comandos ya usan tu URL de GitHub y tu ruta local.', true);
      }, 0);
    };
  }

  const oldRender = window.render;
  if (typeof oldRender === 'function') {
    window.render = function() {
      const r = oldRender.apply(this, arguments);
      setTimeout(refresh, 0);
      return r;
    };
  }

  document.addEventListener('input', e => {
    if (!['studentName','studentSection','repoUrl','repoPath','deviceAlias'].includes(e.target?.id)) return;
    const s = readState();
    if (!s) return;
    ensureActions(s).s0p1 = false;
    if (s.steps?.s0p1) { s.steps.s0p1 = false; s.xp = Math.max(0, (Number(s.xp) || 0) - 20); }
    writeState(s);
    hardGuard();
  }, true);

  document.addEventListener('click', e => {
    const s = readState();
    if (!s || Number(s.currentStage) !== 0) return;
    const first = document.querySelector('.step-card');
    const wrap = e.target?.closest?.('.switch');
    if (!first || !wrap || !first.contains(wrap)) return;
    const sw = wrap.querySelector('input[type=checkbox]');
    if (sw?.disabled) { e.preventDefault(); e.stopImmediatePropagation(); sw.checked = false; }
  }, true);

  refresh();
})();
