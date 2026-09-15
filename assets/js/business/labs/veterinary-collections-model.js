export const LAB_ID = 'DSY1102-VET-02';
export const STORAGE_KEY = 'dsy1102-vet2-guided-v1';
export const PREVIOUS_STORAGE_KEY = 'dsy1102-vet-lab-v1';
export const LAB_PATH = 'labs/lab-veterinaria-herencia-polimorfismo';

export const stages = [
  { id:'s0', title:'0 · Retomar Veterinaria I', mins:8, steps:[
    { id:'s0p1', title:'Confirma identidad y repositorio', xp:20, what:'Veterinaria II continúa el mismo proyecto y debe saber dónde estás trabajando.', why:'No queremos crear una segunda solución ni perder la trazabilidad del laboratorio anterior.', mission:'Confirma tus datos, la URL de GitHub y la ruta local del mismo repositorio usado en Veterinaria I.', deliver:'Sesión y continuidad confirmadas.', special:'identity' },
    { id:'s0p2', title:'Registra la línea base', xp:30, what:'Antes de evolucionar la solución debemos saber qué clases existen y qué comportamiento ya funciona.', why:'Una línea base permite distinguir lo heredado de Veterinaria I de lo que realmente agregamos en Veterinaria II.', mission:'Ejecuta la solución actual y documenta clases, responsabilidades y comportamiento polimórfico existente.', deliver:'docs/veterinaria-ii/00-linea-base.md', commit:'LAB-VET2-00: registra linea base de la solucion', git:{newPaths:['docs/veterinaria-ii/00-linea-base.md']} }
  ], quiz:[
    { q:'¿Dónde se implementa Veterinaria II?', a:['En un proyecto nuevo','Sobre la misma solución de Veterinaria I','En una carpeta src paralela'], ok:1 },
    { q:'¿Para qué sirve la línea base?', a:['Para borrar lo anterior','Para distinguir el estado previo de las nuevas modificaciones','Para reemplazar los commits'], ok:1 }
  ]},
  { id:'s1', title:'1 · Administrar varios animales', mins:12, steps:[
    { id:'s1p1', title:'Diseña una primera solución con array', xp:35, what:'La veterinaria ahora necesita almacenar varios animales.', why:'Antes de introducir colecciones conviene resolver el problema con una estructura conocida y observar sus consecuencias.', mission:'Documenta qué necesita almacenar la veterinaria y cómo usarás un Animal[] para una primera versión.', deliver:'docs/veterinaria-ii/01-array.md', commit:'LAB-VET2-01: diseña almacenamiento inicial con array', git:{newPaths:['docs/veterinaria-ii/01-array.md']} },
    { id:'s1p2', title:'Implementa Animal[] y conserva el polimorfismo', xp:45, what:'Un array de Animal puede contener instancias de distintos subtipos.', why:'La colección de objetos no debe destruir el diseño polimórfico construido en Veterinaria I.', mission:'Crea o evoluciona Veterinaria.java para almacenar al menos cuatro animales de dos subtipos y recorrerlos mediante Animal.', deliver:'src/Veterinaria.java', commit:'LAB-VET2-02: implementa gestion inicial con Animal array', git:{newPaths:['src/Veterinaria.java']} }
  ], quiz:[
    { q:'¿Por qué Animal[] puede contener Perro, Gato o Tigre?', a:['Porque todos son String','Porque son subtipos de Animal','Porque un array ignora tipos'], ok:1 },
    { q:'¿Qué debería hacer main en esta etapa?', a:['Coordinar el flujo','Administrar manualmente cada posición del array','Repetir la lógica de Veterinaria'], ok:0 }
  ]},
  { id:'s2', title:'2 · Descubrir las limitaciones', mins:10, steps:[
    { id:'s2p1', title:'Observa qué empieza a molestar del array', xp:45, what:'El array resuelve almacenamiento básico, pero tiene tamaño fijo y exige administración manual.', why:'Migrar a ArrayList sólo tiene sentido si puedes explicar qué necesidad concreta resuelve.', mission:'Amplía 01-array.md con al menos tres limitaciones observadas: capacidad, posiciones vacías, agregar, eliminar u otra que hayas verificado.', deliver:'docs/veterinaria-ii/01-array.md', commit:'LAB-VET2-03: documenta limitaciones del almacenamiento con array', git:{modifiedPaths:['docs/veterinaria-ii/01-array.md']} }
  ], quiz:[
    { q:'¿Cuál es una limitación real de Animal[]?', a:['Tiene tamaño fijo','No acepta objetos','No permite polimorfismo'], ok:0 },
    { q:'¿Por qué no migramos inmediatamente a ArrayList?', a:['Porque está prohibido','Porque primero necesitamos justificar el cambio desde una necesidad observada','Porque ArrayList no funciona con Animal'], ok:1 }
  ]},
  { id:'s3', title:'3 · Evolucionar a List<Animal>', mins:12, steps:[
    { id:'s3p1', title:'Migra el almacenamiento a List<Animal>', xp:50, what:'La veterinaria necesita una colección dinámica sin perder la abstracción Animal.', why:'List expresa la capacidad que necesitamos; ArrayList es una implementación concreta de esa abstracción.', mission:'Reemplaza Animal[] por List<Animal> e inicializa con ArrayList. Mantén registrar y listar dentro de Veterinaria.', deliver:'src/Veterinaria.java', commit:'LAB-VET2-04: migra almacenamiento a List de Animal', git:{modifiedPaths:['src/Veterinaria.java']} },
    { id:'s3p2', title:'Documenta la decisión de colección', xp:35, what:'El cambio de estructura debe poder explicarse.', why:'Elegir List como tipo de referencia reduce acoplamiento con una implementación específica.', mission:'Explica la diferencia entre List y ArrayList, y qué limitaciones del array desaparecen o cambian.', deliver:'docs/veterinaria-ii/02-colecciones.md', commit:'LAB-VET2-05: documenta decision de colecciones', git:{newPaths:['docs/veterinaria-ii/02-colecciones.md']} }
  ], quiz:[
    { q:'¿Qué representa List en List<Animal>?', a:['Una interfaz/abstracción de colección','Una clase Animal especial','Un array dinámico obligatorio'], ok:0 },
    { q:'¿Qué ocurre con el polimorfismo al migrar a List<Animal>?', a:['Se pierde','Se mantiene','Sólo funciona con Perro'], ok:1 }
  ]},
  { id:'s4', title:'4 · Buscar y eliminar', mins:12, steps:[
    { id:'s4p1', title:'Define identidad y responsabilidades', xp:50, what:'Para buscar o eliminar un animal necesitamos una identidad estable.', why:'La lógica de gestión debe vivir donde se administra la colección, no repetirse en main.', mission:'Usa o incorpora un identificador estable en Animal e implementa buscar y eliminar dentro de Veterinaria.', deliver:'src/Animal.java y src/Veterinaria.java', commit:'LAB-VET2-06: incorpora identidad busqueda y eliminacion', git:{modifiedPaths:['src/Animal.java','src/Veterinaria.java']} },
    { id:'s4p2', title:'Registra evidencia de búsqueda y eliminación', xp:30, what:'Una operación debe comprobarse con resultados observables.', why:'La evidencia separa “creo que funciona” de un comportamiento verificado.', mission:'Ejecuta un caso encontrado, uno no encontrado y una eliminación válida. Guarda la salida.', deliver:'evidencias/veterinaria-ii/01-busqueda-eliminacion.txt', commit:'LAB-VET2-07: registra evidencia de busqueda y eliminacion', git:{newPaths:['evidencias/veterinaria-ii/01-busqueda-eliminacion.txt']} }
  ], quiz:[
    { q:'¿Dónde debería vivir la búsqueda en este diseño?', a:['En la clase que administra la colección','Repetida en cada subclase','Sólo en main'], ok:0 },
    { q:'¿Qué necesita una búsqueda estable?', a:['Una identidad consistente','Muchos if por especie','Un array fijo'], ok:0 }
  ]},
  { id:'s5', title:'5 · Modelar errores del dominio', mins:10, steps:[
    { id:'s5p1', title:'Decide qué situaciones son inválidas', xp:40, what:'No todo resultado inesperado es el mismo tipo de problema.', why:'Antes de lanzar excepciones debemos identificar qué condiciones del dominio no deberían continuar como si nada.', mission:'Documenta al menos tres situaciones inválidas y el comportamiento esperado del sistema.', deliver:'docs/veterinaria-ii/03-errores.md', commit:'LAB-VET2-08: modela situaciones invalidas del dominio', git:{newPaths:['docs/veterinaria-ii/03-errores.md']} }
  ], quiz:[
    { q:'¿Una excepción sirve para ocultar cualquier error?', a:['Sí','No','Sólo si usamos Exception'], ok:1 },
    { q:'¿Qué hacemos antes de decidir un throw?', a:['Modelar la situación inválida y su responsabilidad','Agregar catch(Exception)','Mover todo a main'], ok:0 }
  ]},
  { id:'s6', title:'6 · Aplicar excepciones', mins:12, steps:[
    { id:'s6p1', title:'Lanza y captura una excepción con intención', xp:60, what:'Una operación responsable puede detectar una condición inválida y expresarla con una excepción.', why:'throw y catch tienen responsabilidades distintas: uno señala el problema y el otro decide cómo responder.', mission:'Implementa al menos una excepción específica, lánzala desde la operación responsable y captúrala donde exista contexto para informar o continuar.', deliver:'src/AnimalNoEncontradoException.java, src/Veterinaria.java y src/Main.java', commit:'LAB-VET2-09: incorpora excepciones de dominio', git:{newPaths:['src/AnimalNoEncontradoException.java'],modifiedPaths:['src/Veterinaria.java','src/Main.java']} },
    { id:'s6p2', title:'Registra una ejecución válida y una inválida', xp:35, what:'El manejo de excepciones debe observarse en ejecución.', why:'Un catch que nunca se prueba no demuestra que el flujo de error sea comprensible ni controlado.', mission:'Ejecuta un caso válido y uno que provoque deliberadamente la excepción. Guarda la salida.', deliver:'evidencias/veterinaria-ii/02-excepciones.txt', commit:'LAB-VET2-10: registra evidencia de manejo de excepciones', git:{newPaths:['evidencias/veterinaria-ii/02-excepciones.txt']} }
  ], quiz:[
    { q:'¿Quién debería hacer throw?', a:['La operación que detecta la condición inválida','Cualquier método al azar','Siempre main'], ok:0 },
    { q:'¿Quién debería hacer catch?', a:['El nivel que tenga contexto para responder','La misma línea que hace throw obligatoriamente','Todas las clases'], ok:0 }
  ]},
  { id:'s7', title:'7 · Integrar y cerrar', mins:12, steps:[
    { id:'s7p1', title:'Ejecuta el flujo completo', xp:60, what:'La solución debe demostrar registro, listado, búsqueda, eliminación y manejo de error en un flujo coherente.', why:'Integrar revela si las decisiones aisladas realmente colaboran entre sí.', mission:'Actualiza Main.java para ejecutar el flujo completo y guarda una salida final verificable.', deliver:'src/Main.java y evidencias/veterinaria-ii/03-integracion-final.txt', commit:'LAB-VET2-11: integra flujo completo de colecciones y excepciones', git:{newPaths:['evidencias/veterinaria-ii/03-integracion-final.txt'],modifiedPaths:['src/Main.java']} },
    { id:'s7p2', title:'Compara la evolución de la solución', xp:50, what:'Cerrar el laboratorio significa poder explicar qué cambió y por qué.', why:'La comprensión se demuestra al relacionar decisiones, no sólo al producir código que compile.', mission:'Escribe una reflexión final y actualiza el README del laboratorio con el estado alcanzado.', deliver:'docs/veterinaria-ii/04-reflexion.md y README.md', commit:'LAB-VET2-12: cierra veterinaria II y documenta aprendizaje', git:{newPaths:['docs/veterinaria-ii/04-reflexion.md'],modifiedPaths:['README.md']} }
  ], quiz:[
    { q:'¿Qué justifica mejor la migración de array a List?', a:['Una necesidad observada en la gestión de múltiples animales','Que List tenga menos letras','Que Java prohíba arrays'], ok:0 },
    { q:'¿Qué demuestra mejor el cierre del laboratorio?', a:['Poder explicar la evolución completa y sus decisiones','Tener muchas clases','Usar catch(Exception)'], ok:0 }
  ]}
];

function previousStudent(storage = localStorage) {
  try {
    const previous = JSON.parse(storage.getItem(PREVIOUS_STORAGE_KEY) || 'null');
    if (previous?.student) return { ...previous.student };
  } catch {}
  return { name:'', section:'', repoUrl:'', repoPath:'', deviceAlias:'' };
}

export function blankState(storage = localStorage) {
  const now = new Date().toISOString();
  return { version:1, labId:LAB_ID, student:previousStudent(storage), startedAt:now, lastActivityAt:now, currentStage:0, steps:{}, quizzes:{}, xp:0, events:[] };
}

export function loadState(storage = localStorage) {
  try {
    const value = JSON.parse(storage.getItem(STORAGE_KEY) || 'null');
    if (value?.labId === LAB_ID) return { ...blankState(storage), ...value, student:{...blankState(storage).student,...value.student}, steps:value.steps||{}, quizzes:value.quizzes||{}, events:value.events||[] };
  } catch {}
  return blankState(storage);
}

export function saveState(state, storage = localStorage) { storage.setItem(STORAGE_KEY, JSON.stringify(state)); }
export function identityComplete(student) { return !!(student?.name?.trim() && student?.section?.trim() && /^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/i.test(student?.repoUrl||'') && student?.repoPath?.trim() && student?.deviceAlias?.trim()); }
export function stageDone(state,index) { const stage=stages[index]; return stage.steps.every(step=>state.steps[step.id]) && state.quizzes[stage.id]?.passed === true; }
export function stageUnlocked(state,index) { return index===0 || stageDone(state,index-1); }
export function progressPercent(state) { const totalSteps=stages.flatMap(s=>s.steps).length; const doneSteps=stages.flatMap(s=>s.steps).filter(step=>state.steps[step.id]).length; const doneQuiz=stages.filter(s=>state.quizzes[s.id]?.passed).length; return Math.round((doneSteps+doneQuiz)/(totalSteps+stages.length)*100); }
export function stepById(id) { return stages.flatMap(stage=>stage.steps).find(step=>step.id===id); }

function record(state,type,data={}) { return { ...state, lastActivityAt:new Date().toISOString(), events:[...(state.events||[]),{at:new Date().toISOString(),type,data}] }; }
export function updateIdentity(state,student) { if (!identityComplete(student)) throw new Error('INVALID_IDENTITY'); return record({...state,student:{...student}},'session_configured',{section:student.section,repoPath:student.repoPath}); }
export function updateRepoPath(state,repoPath) { if (!String(repoPath||'').trim()) throw new Error('INVALID_PATH'); return record({...state,student:{...state.student,repoPath:String(repoPath).trim()}},'repo_path_updated'); }
export function moveToStage(state,index) { if (!stageUnlocked(state,index)) return state; return record({...state,currentStage:index},'stage_opened',{index}); }
export function toggleStep(state,id,checked) { const step=stepById(id); if (!step) return state; const already=!!state.steps[id]; const steps={...state.steps,[id]:checked}; if (!checked) delete steps[id]; let xp=state.xp; if (checked&&!already) xp+=step.xp; if (!checked&&already) xp=Math.max(0,xp-step.xp); return record({...state,steps,xp},checked?'step_completed':'step_reopened',{id}); }
export function submitQuiz(state,index,answers) { const stage=stages[index]; if (!stage || answers.some(v=>v===null||v===undefined)) throw new Error('INCOMPLETE_QUIZ'); const passed=stage.quiz.every((q,i)=>Number(answers[i])===q.ok); let next={...state,quizzes:{...state.quizzes,[stage.id]:{passed,answers,at:new Date().toISOString()}}}; if (passed) next={...next,xp:next.xp+25}; else { const steps={...next.steps}; stage.steps.forEach(step=>delete steps[step.id]); next={...next,steps}; } return record(next,passed?'quiz_passed':'quiz_failed',{stage:stage.id}); }
