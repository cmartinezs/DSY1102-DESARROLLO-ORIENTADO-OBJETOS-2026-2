function bytesToBase64(bytes) { let value=''; bytes.forEach(byte => value += String.fromCharCode(byte)); return btoa(value); }
function base64ToBytes(value) { return Uint8Array.from(atob(value), char => char.charCodeAt(0)); }

async function deriveKey(password, salt) {
  const raw = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name:'PBKDF2', salt, iterations:250000, hash:'SHA-256' }, raw, { name:'AES-GCM', length:256 }, false, ['encrypt','decrypt']);
}

export async function encryptProgress(state, password) {
  if (String(password).length < 6) throw new Error('PASSWORD_TOO_SHORT');
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt);
  const payload = JSON.stringify({ ...state, exportedAt:new Date().toISOString() });
  const encrypted = await crypto.subtle.encrypt({ name:'AES-GCM', iv }, key, new TextEncoder().encode(payload));
  return { format:'DSY1102-PROGRESS-AESGCM', version:1, kdf:'PBKDF2-SHA256', iterations:250000, salt:bytesToBase64(salt), iv:bytesToBase64(iv), data:bytesToBase64(new Uint8Array(encrypted)) };
}

export async function decryptProgress(wrapper, password, expectedLabId) {
  if (wrapper?.format !== 'DSY1102-PROGRESS-AESGCM') throw new Error('INVALID_FORMAT');
  const salt = base64ToBytes(wrapper.salt);
  const iv = base64ToBytes(wrapper.iv);
  const data = base64ToBytes(wrapper.data);
  const key = await deriveKey(password, salt);
  const decrypted = await crypto.subtle.decrypt({ name:'AES-GCM', iv }, key, data);
  const state = JSON.parse(new TextDecoder().decode(decrypted));
  if (state.labId !== expectedLabId) throw new Error('WRONG_LAB');
  return state;
}
