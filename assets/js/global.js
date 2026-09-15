export const $ = (selector, root = document) => root.querySelector(selector);
export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

export async function copyText(text) {
  await navigator.clipboard.writeText(String(text));
}

export function safeJsonParse(value, fallback = null) {
  try { return JSON.parse(value); } catch { return fallback; }
}

export function resolveSitePath(path) {
  return new URL(path, document.baseURI).toString();
}
