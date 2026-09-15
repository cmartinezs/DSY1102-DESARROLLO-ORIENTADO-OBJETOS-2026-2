const COMPLETED_KEY = 'dsy1102-desafio150-completados';
const HINTS_KEY = 'dsy1102-desafio150-hints';
export const AVAILABLE_MAX_ID = 45;

function readJson(storage, key, fallback) {
  try { return JSON.parse(storage.getItem(key) || JSON.stringify(fallback)); }
  catch { return fallback; }
}

export function loadCompleted(storage = localStorage) {
  const raw = readJson(storage, COMPLETED_KEY, []);
  return new Set(Array.isArray(raw) ? raw.filter(Number.isInteger) : []);
}

export function saveCompleted(completed, storage = localStorage) {
  storage.setItem(COMPLETED_KEY, JSON.stringify([...completed].sort((a,b)=>a-b)));
}

export function toggleCompleted(completed, id) {
  const next = new Set(completed);
  next.has(id) ? next.delete(id) : next.add(id);
  return next;
}

export function loadHints(storage = localStorage) {
  const raw = readJson(storage, HINTS_KEY, {});
  return raw && typeof raw === 'object' ? raw : {};
}

export function revealHint(hintsUsed, stage, hintIndex) {
  const current = Array.isArray(hintsUsed[stage]) ? hintsUsed[stage] : [];
  return { ...hintsUsed, [stage]: [...new Set([...current, hintIndex])].sort((a,b)=>a-b) };
}

export function saveHints(hintsUsed, storage = localStorage) {
  storage.setItem(HINTS_KEY, JSON.stringify(hintsUsed));
}

export function summarize(completed) {
  const done = [...completed].filter(id => id >= 1 && id <= AVAILABLE_MAX_ID).length;
  return { done, total: AVAILABLE_MAX_ID, pending: AVAILABLE_MAX_ID - done, percent: Math.round(done / AVAILABLE_MAX_ID * 100) };
}

export function exportState(completed, hintsUsed) {
  return { version: 1, exportedAt: new Date().toISOString(), completed: [...completed].sort((a,b)=>a-b), hintsUsed };
}

export function importState(payload) {
  if (!payload || payload.version !== 1 || !Array.isArray(payload.completed) || typeof payload.hintsUsed !== 'object') throw new Error('INVALID_CHALLENGE_PROGRESS');
  return { completed: new Set(payload.completed.filter(Number.isInteger)), hintsUsed: payload.hintsUsed };
}
