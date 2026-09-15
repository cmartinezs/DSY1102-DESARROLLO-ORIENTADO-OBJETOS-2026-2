const STORAGE_KEY = 'dsy1102-vet2';

export const checkpoints = [
  { title: '1 · Recupera tu solución', body: 'Abre el repositorio donde terminaste Veterinaria I. Revisa Animal y sus subclases. Antes de modificar código, escribe qué clases existen y cuál es la responsabilidad de cada una.', evidence: 'docs/decisiones.md con inventario de clases.' },
  { title: '2 · ¿Dónde guardamos varios animales?', body: 'Antes de usar colecciones, implementa una primera solución con Animal[]. Crea varios animales de subclases distintas y recorre el array invocando un método polimórfico.', evidence: 'Ejecución con al menos 4 objetos de 2 subtipos distintos.' },
  { title: '3 · Descubre el problema del array', body: 'Responde: ¿qué ocurre si se llena?, ¿cómo agregas otro animal?, ¿cómo eliminas uno?, ¿qué significado tienen posiciones vacías? No cambies todavía a ArrayList hasta justificarlo.', evidence: 'Al menos 3 limitaciones documentadas.' },
  { title: '4 · Evoluciona a List<Animal>', body: 'Migra el almacenamiento a List<Animal> usando ArrayList. Implementa registrar y listar. El recorrido debe seguir aprovechando polimorfismo.', evidence: 'add(), size() y recorrido funcionando.' },
  { title: '5 · Buscar y eliminar', body: 'Agrega una forma estable de identificar animales. Implementa búsqueda y eliminación sin duplicar la lógica en main. Decide qué objeto debe asumir esas responsabilidades.', evidence: 'Caso encontrado y caso no encontrado.' },
  { title: '6 · ¿Qué puede salir mal?', body: 'Identifica al menos tres situaciones inválidas del sistema: identificador inexistente, dato inválido, duplicado u otra que puedas justificar.', evidence: 'Tabla situación → comportamiento esperado.' },
  { title: '7 · Manejo de excepciones', body: 'Controla al menos una situación mediante try/catch y provoca explícitamente otra con throw. El objetivo no es esconder el error, sino expresar y controlar el problema.', evidence: 'Ejecución válida + ejecución inválida controlada.' },
  { title: '8 · Integración final', body: 'Ejecuta un flujo completo: registrar distintos animales, listarlos, buscar uno, eliminar uno y provocar/controlar un error. Revisa que el proyecto compile en cada etapa.', evidence: 'Captura o salida de consola final y reflexión breve.' }
];

export function loadProgress(storage = localStorage) {
  try {
    const value = JSON.parse(storage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(value) ? value.filter(Number.isInteger) : [];
  } catch {
    return [];
  }
}

export function toggleCheckpoint(progress, index) {
  return progress.includes(index)
    ? progress.filter(item => item !== index)
    : [...progress, index].sort((a, b) => a - b);
}

export function saveProgress(progress, storage = localStorage) {
  storage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
