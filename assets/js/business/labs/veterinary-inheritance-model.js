export const LAB_ID = 'DSY1102-VET-01';
export const STORAGE_KEY = 'dsy1102-vet-lab-v1';

export const stages = [
  { id:'s0', title:'0 · Preparar entorno', mins:8, steps:[
    { id:'s0p1', title:'Identifícate y ubica tu repositorio', xp:20, what:'Antes de programar necesitamos saber quién realiza el laboratorio, desde qué equipo y en qué repositorio trabajará.', why:'El laboratorio registra evidencia por pasos. Si no sabemos cuál es tu repositorio local, los comandos posteriores podrían ejecutarse en una carpeta incorrecta.', mission:'Completa tus datos. Si todavía no tienes el repositorio en este equipo, clónalo. Después indica la ruta exacta donde quedó.', deliver:'Sesión y ruta local configuradas.', special:'identity' },
    { id:'s0p2', title:'Crea la estructura base del laboratorio', xp:30, what:'Todas las evidencias de esta actividad vivirán dentro de una carpeta autocontenida.', why:'Mantener análisis, diseño, código y evidencias juntos permite revisar tu proceso sin mezclarlo con otros ejercicios.', mission:'Crea labs/lab-veterinaria-herencia-polimorfismo/ con docs, docs/diagramas, src y evidencias.', deliver:'labs/lab-veterinaria-herencia-polimorfismo/README.md', commit:'LAB-VET-00: prepara estructura del laboratorio', template:'# Lab Veterinaria — Herencia y Polimorfismo\n\nNombre: TU NOMBRE\nSección: TU SECCIÓN\n\nEstado: en progreso\n' }
  ], quiz:[
    { q:'¿Dónde deben quedar las entregas de este laboratorio?', a:['En cualquier carpeta mientras compile','Dentro de labs/lab-veterinaria-herencia-polimorfismo/','En la raíz del repositorio'], ok:1 },
    { q:'Si cambias de computador, ¿qué dato debes confirmar antes de continuar?', a:['La ruta local del repositorio','El nombre de la clase Animal','La cantidad de XP'], ok:0 }
  ]},
  { id:'s1', title:'1 · Comprender el problema', mins:10, steps:[
    { id:'s1p1', title:'Lee el problema sin pensar todavía en Java', xp:35, what:'Una veterinaria atiende animales. Algunos son mascotas y otros son animales salvajes. Entre las mascotas podemos encontrar perros y gatos; entre los salvajes, tigres y leones.', why:'Si saltas directo a escribir clases, es fácil confundir la necesidad del problema con una implementación particular.', mission:'Escribe con tus palabras qué necesita hacer el sistema. No uses palabras como class, extends, private, constructor ni super.', deliver:'docs/01-analisis-problema.md', commit:'LAB-VET-01: analiza problema de la veterinaria' },
    { id:'s1p2', title:'Encuentra sustantivos, acciones y reglas', xp:35, what:'Los sustantivos suelen señalar conceptos; las acciones sugieren responsabilidades; las reglas indican condiciones.', why:'Antes de decidir clases necesitamos saber qué existe y qué hace cada cosa.', mission:'Agrega tres listas: Conceptos, Acciones y Reglas. Incluye veterinaria, animal, mascota, salvaje, perro, gato, tigre y león.', deliver:'docs/01-analisis-problema.md', commit:'LAB-VET-02: identifica conceptos acciones y reglas' }
  ], quiz:[
    { q:'En esta etapa, ¿qué debemos decidir primero?', a:['La sintaxis exacta de extends','Qué necesita representar y hacer el sistema','Cuántos archivos .java existirán'], ok:1 },
    { q:'¿Por qué evitamos escribir Java inmediatamente?', a:['Porque Java no soporta animales','Para separar la comprensión del problema de su implementación','Porque primero debemos usar una base de datos'], ok:1 }
  ]},
  { id:'s2', title:'2 · Diseñar el algoritmo', mins:10, steps:[
    { id:'s2p1', title:'Describe cómo ocurre una atención', xp:40, what:'Imagina que llega un animal a la veterinaria. Antes de pensar en objetos, necesitamos una secuencia lógica de atención.', why:'Un algoritmo describe qué debe ocurrir; todavía no decide cómo se implementará.', mission:'Escribe un paso a paso desde que llega un animal hasta que termina su atención.', deliver:'docs/02-algoritmo-atencion.md', commit:'LAB-VET-03: define algoritmo de atencion', diagram:'flow' },
    { id:'s2p2', title:'Revisa decisiones y resultados del flujo', xp:40, what:'Un flujo puede tener decisiones, pero una decisión del problema no significa automáticamente un if en el código final.', why:'Estamos modelando el comportamiento esperado, no fijando todavía la implementación.', mission:'Agrega qué información entra, qué resultado se espera y qué decisiones aparecen. Marca cuáles son decisiones del negocio.', deliver:'docs/02-algoritmo-atencion.md', commit:'LAB-VET-04: completa flujo conceptual de atencion' }
  ], quiz:[
    { q:'¿Qué describe el algoritmo construido hasta ahora?', a:['La secuencia de lo que debe ocurrir','Las líneas exactas de Java','La estructura de paquetes definitiva'], ok:0 },
    { q:'Una decisión del flujo conceptual...', a:['Obliga a usar un if en Java','Describe una necesidad; la implementación se decide después','Siempre debe convertirse en una clase'], ok:1 }
  ]},
  { id:'s3', title:'3 · Diseñar el modelo', mins:12, steps:[
    { id:'s3p1', title:'Descubre lo que todos los animales comparten', xp:45, what:'Perro, gato, tigre y león son diferentes, pero todos son animales.', why:'La generalización aparece cuando varios conceptos comparten información o comportamiento significativo.', mission:'Crea una tabla con datos comunes, datos particulares, acciones comunes y acciones particulares.', deliver:'docs/03-modelo-objetos.md', commit:'LAB-VET-05: compara tipos de animales' },
    { id:'s3p2', title:'Propón una jerarquía conceptual', xp:45, what:'Ahora sí podemos organizar conceptos desde lo más general a lo más específico.', why:'La jerarquía debe nacer de similitudes reales, no de memorizar una figura.', mission:'Dibuja tu propuesta: Animal → Mascota/Salvaje → especies concretas.', deliver:'docs/diagramas/jerarquia-clases.md', commit:'LAB-VET-06: modela jerarquia de animales', diagram:'tree' }
  ], quiz:[
    { q:'¿Qué justifica que Mascota y Salvaje compartan una clase Animal?', a:['Que sus nombres sean cortos','Que comparten datos o comportamientos relevantes','Que Java exige siempre una clase padre'], ok:1 },
    { q:'¿Cuál es la relación conceptual correcta?', a:['Animal es un tipo de Perro','Perro es un tipo de Mascota y Mascota es un tipo de Animal','Veterinaria es un tipo de Animal'], ok:1 }
  ]},
  { id:'s4', title:'4 · Construir la herencia', mins:12, steps:[
    { id:'s4p1', title:'Implementa Animal y observa el constructor', xp:50, what:'Animal concentrará estado y comportamiento realmente común.', why:'La clase padre evita repetir la misma definición en cada especie.', mission:'Crea Animal.java con atributos comunes y un constructor que deje el objeto en estado válido.', deliver:'src/Animal.java', commit:'LAB-VET-07: implementa clase Animal' },
    { id:'s4p2', title:'Crea Mascota y Salvaje usando super()', xp:55, what:'Cuando una subclase se construye, primero debe construirse la parte que pertenece a su clase padre.', why:'super(...) delega al constructor de Animal la inicialización de lo común.', mission:'Crea Mascota.java y Salvaje.java con al menos un dato particular y llamadas explícitas a super(...).', deliver:'src/Mascota.java y src/Salvaje.java', commit:'LAB-VET-08: implementa mascota salvaje y constructores', diagram:'construct' }
  ], quiz:[
    { q:'¿Para qué usamos super(...) dentro del constructor de una subclase?', a:['Para ejecutar el constructor de la clase padre','Para convertir un objeto en static','Para crear una lista automáticamente'], ok:0 },
    { q:'¿Qué debería inicializar Animal?', a:['Sólo datos propios de Perro','Los datos comunes que Animal conoce','Todo el sistema de la veterinaria'], ok:1 }
  ]},
  { id:'s5', title:'5 · Especializar especies', mins:10, steps:[
    { id:'s5p1', title:'Implementa Perro y Gato', xp:45, what:'Perro y Gato son mascotas concretas.', why:'Una subclase tiene sentido cuando especializa el concepto padre.', mission:'Crea Perro.java y Gato.java heredando de Mascota y justifica al menos una diferencia.', deliver:'src/Perro.java y src/Gato.java', commit:'LAB-VET-09: implementa especies domesticas' },
    { id:'s5p2', title:'Implementa Tigre y Leon', xp:45, what:'Tigre y Leon son animales salvajes concretos.', why:'Una jerarquía coherente permite trabajar con conceptos generales sin perder particularidades.', mission:'Crea Tigre.java y Leon.java heredando de Salvaje. Evita duplicar atributos heredados.', deliver:'src/Tigre.java y src/Leon.java', commit:'LAB-VET-10: implementa especies salvajes' }
  ], quiz:[
    { q:'Si nombre y edad ya pertenecen a Animal, Perro debería...', a:['Declararlos de nuevo siempre','Heredarlos y agregar sólo lo que corresponda','Eliminar Animal'], ok:1 },
    { q:'¿Qué indica una buena especialización?', a:['Que la subclase representa un tipo válido del concepto padre','Que tiene exactamente diez métodos','Que todas las clases tienen los mismos atributos repetidos'], ok:0 }
  ]},
  { id:'s6', title:'6 · Descubrir polimorfismo', mins:10, steps:[
    { id:'s6p1', title:'Haz que distintos animales respondan a la misma acción', xp:60, what:'La veterinaria necesita atender animales sin escribir un proceso distinto para cada especie.', why:'El polimorfismo permite enviar el mismo mensaje y obtener el comportamiento apropiado para cada objeto real.', mission:'Define o reutiliza una operación común y sobrescríbela donde tenga sentido.', deliver:'src/Animal.java y subclases modificadas', commit:'LAB-VET-11: aplica sobrescritura de comportamiento' },
    { id:'s6p2', title:'Representa una interacción polimórfica', xp:55, what:'El código puede referirse a un Animal y el objeto concreto decide qué implementación ejecutar.', why:'Evitamos preguntar continuamente “¿qué tipo eres?” para decidir manualmente cada comportamiento.', mission:'Crea un diagrama donde Main/Veterinaria envía la misma acción a varios Animal.', deliver:'docs/diagramas/interaccion-objetos.md', commit:'LAB-VET-12: documenta interaccion polimorfica', diagram:'interaction' }
  ], quiz:[
    { q:'¿Qué ocurre al invocar un método sobrescrito mediante una referencia Animal?', a:['Siempre se ejecuta Animal sin importar el objeto','Se ejecuta el comportamiento correspondiente al objeto real','Java genera un error necesariamente'], ok:1 },
    { q:'¿Qué diseño intentamos reducir usando polimorfismo?', a:['Una cadena de decisiones por tipo para elegir manualmente cada comportamiento','El uso de constructores','La existencia de métodos'], ok:0 }
  ]},
  { id:'s7', title:'7 · Construir el main', mins:8, steps:[
    { id:'s7p1', title:'Convierte el algoritmo inicial en un main progresivo', xp:65, what:'Ahora tienes suficiente modelo para volver al algoritmo del comienzo y transformarlo en una ejecución concreta.', why:'El main debe coordinar objetos; no convertirse en el lugar donde vive toda la lógica.', mission:'Crea Main.java. Instancia un Perro, Gato, Tigre y Leon y trátalos mediante Animal cuando sea posible.', deliver:'src/Main.java', commit:'LAB-VET-13: integra flujo principal de veterinaria' },
    { id:'s7p2', title:'Cierra, compara y registra lo aprendido', xp:65, what:'La última evidencia es comprobar cómo cambió tu forma de resolver el problema.', why:'Explicar una decisión demuestra comprensión mejor que sólo mostrar que compila.', mission:'Compara algoritmo inicial y solución final. Explica herencia, super(), polimorfismo y qué mejorarías.', deliver:'evidencias/cierre.md y README.md actualizado', commit:'LAB-VET-14: cierra laboratorio y documenta aprendizaje' }
  ], quiz:[
    { q:'¿Cuál es la responsabilidad principal de main en esta solución?', a:['Coordinar la creación y uso de objetos','Contener toda la lógica de cada especie','Repetir todos los atributos de Animal'], ok:0 },
    { q:'¿Qué evidencia demuestra mejor comprensión?', a:['Sólo que el código compila','Poder explicar las decisiones del modelo y relacionarlas con el comportamiento observado','Tener muchas líneas de código'], ok:1 }
  ]}
];

export function blankState(now = new Date()) {
  const stamp = now.toISOString();
  return { version:2, labId:LAB_ID, student:{name:'',section:'',repoUrl:'',repoPath:'',deviceAlias:''}, startedAt:stamp, lastActivityAt:stamp, currentStage:0, steps:{}, quizzes:{}, xp:0, events:[] };
}

export function loadState(storage = localStorage) {
  try {
    const state = JSON.parse(storage.getItem(STORAGE_KEY) || 'null');
    if (state?.labId === LAB_ID) return { ...blankState(), ...state, student:{...blankState().student,...state.student}, steps:state.steps||{}, quizzes:state.quizzes||{}, events:state.events||[] };
  } catch {}
  return blankState();
}

export function saveState(state, storage = localStorage) { storage.setItem(STORAGE_KEY, JSON.stringify(state)); }
export function validRepoUrl(value) { return /^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/i.test(String(value||'').trim()); }
export function validLocalPath(value) { const x=String(value||'').trim(); return !!x && !/^https?:\/\//i.test(x) && (/^[A-Za-z]:\\/.test(x) || x.startsWith('/') || x.startsWith('\\\\')); }
export function identityComplete(student) { return !!(student?.name?.trim() && student?.section?.trim() && validRepoUrl(student?.repoUrl) && validLocalPath(student?.repoPath) && student?.deviceAlias?.trim()); }
export function stageDone(state, index) { const stage=stages[index]; return stage.steps.every(step=>state.steps[step.id]) && state.quizzes[stage.id]?.passed === true; }
export function stageUnlocked(state, index) { return index === 0 || stageDone(state, index-1); }
export function progressPercent(state) { const completed=stages.flatMap(s=>s.steps).filter(step=>state.steps[step.id]).length; const quizzes=stages.filter(s=>state.quizzes[s.id]?.passed).length; const total=stages.flatMap(s=>s.steps).length + stages.length; return Math.round((completed+quizzes)/total*100); }
export function stepById(id) { return stages.flatMap(stage=>stage.steps).find(step=>step.id===id); }

export function updateIdentity(state, student) {
  if (!identityComplete(student)) throw new Error('INVALID_IDENTITY');
  return record({ ...state, student:{...student} }, 'session_configured', { section:student.section, repoPath:student.repoPath, deviceAlias:student.deviceAlias });
}

export function toggleStep(state, stepId, checked) {
  const step=stepById(stepId); if (!step) return state;
  const was=Boolean(state.steps[stepId]);
  const steps={...state.steps,[stepId]:Boolean(checked)};
  let xp=state.xp;
  if (checked && !was) xp += step.xp;
  if (!checked && was) xp = Math.max(0, xp-step.xp);
  return record({ ...state, steps, xp }, checked?'step_completed':'step_unchecked', { step:stepId, xp:step.xp });
}

export function submitQuiz(state, stageIndex, answers) {
  const stage=stages[stageIndex];
  if (!stage || answers.length !== stage.quiz.length || answers.some(value=>value==null)) throw new Error('INCOMPLETE_QUIZ');
  const passed=answers.every((value,index)=>Number(value)===stage.quiz[index].ok);
  const attempts=(state.quizzes[stage.id]?.attempts||0)+1;
  const quizzes={...state.quizzes,[stage.id]:{passed,attempts,lastAt:new Date().toISOString()}};
  if (passed) return record({ ...state, quizzes, xp:state.xp+75 }, 'checkpoint_passed', { stage:stage.id, attempt:attempts });
  const steps={...state.steps}; stage.steps.forEach(step=>{steps[step.id]=false;});
  return record({ ...state, quizzes, steps }, 'checkpoint_failed', { stage:stage.id, attempt:attempts });
}

export function moveToStage(state, index) {
  if (!stageUnlocked(state,index)) return state;
  return record({ ...state, currentStage:index }, 'stage_opened', { stage:stages[index].id });
}

export function updateRepoPath(state, repoPath) {
  if (!validLocalPath(repoPath)) throw new Error('INVALID_REPO_PATH');
  return record({ ...state, student:{...state.student,repoPath} }, 'repo_path_updated', { repoPath });
}

function record(state, type, detail={}) {
  const at=new Date().toISOString();
  return { ...state, lastActivityAt:at, events:[...(state.events||[]),{at,type,detail,deviceAlias:state.student?.deviceAlias||''}] };
}
