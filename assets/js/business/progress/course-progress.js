const STORAGE_KEY = 'dsy1102-progreso-semana-02';

export const items = [
  'Revisé el contenido disponible de Semana 2.',
  'Resolví práctica corta usando sólo contenidos que corresponden a esta etapa.',
  'Trabajé o revisé el laboratorio Cuenta simple cuando correspondió a mi avance.',
  'Apliqué lo aprendido en PetCare sin comenzar un proyecto nuevo.',
  'Mi repositorio personal tiene estructura clara y README mínimos en Markdown.',
  'Puedo explicar cuándo conviene extraer una operación a un método.',
  'Puedo explicar qué representa una clase, qué es un objeto y cómo se relacionan.',
  'Puedo explicar por qué el encapsulamiento protege el estado y no es sólo usar private.'
];

export function loadProgress(storage = localStorage) {
  try {
    const value = JSON.parse(storage.getItem(STORAGE_KEY) || '{}');
    return value && typeof value === 'object' ? value : {};
  } catch {
    return {};
  }
}

export function setItem(state, index, checked) {
  return { ...state, [index]: Boolean(checked) };
}

export function saveProgress(state, storage = localStorage) {
  storage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function resetProgress(storage = localStorage) {
  storage.removeItem(STORAGE_KEY);
}

export function summarize(state) {
  const done = items.reduce((count, _, index) => count + (state[index] ? 1 : 0), 0);
  return { done, total: items.length, percent: Math.round(done / items.length * 100) };
}
