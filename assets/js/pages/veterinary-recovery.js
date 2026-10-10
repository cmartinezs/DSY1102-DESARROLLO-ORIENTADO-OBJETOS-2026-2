// Page controller for retrospective Veterinaria III/IV lab checkpoints.
// Checkmarks reflect student self-report and are not grading or automatic code verification.
const root = document.querySelector('[data-lab-recovery]');
if (root) {
  const key = 'dsy1102:recovery:' + root.dataset.labRecovery + ':v1';
  const checks = [...root.querySelectorAll('[data-check]')];
  const label = root.querySelector('#lab-progress-label');
  const bar = root.querySelector('#lab-progress-bar');
  const meter = root.querySelector('[role="progressbar"]');
  const reset = root.querySelector('#lab-progress-reset');
  let saved = {};
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) saved = parsed;
    }
  } catch {
    // Browsers in restricted/private environments may disable storage.
  }
  checks.forEach(c => { c.checked = saved[c.dataset.check] === true; });
  function render() {
    const n = checks.filter(c => c.checked).length;
    const total = checks.length;
    label.textContent = n + '/' + total + ' verificaciones';
    const percentage = total > 0 ? Math.round(100 * n / total) : 0;
    bar.style.width = percentage + '%';
    meter.setAttribute('aria-valuenow', String(percentage));
    for (let i = 0; i < 7; i++) {
      const status = root.querySelector('[data-stage-status="' + i + '"]');
      const stageChecks = checks.filter(c => c.dataset.check.startsWith(i + '-'));
      const completed = stageChecks.length > 0 && stageChecks.every(c => c.checked);
      status.textContent = completed ? 'Checks marcados' : 'Pendiente';
      status.dataset.done = String(completed);
    }
  }
  function persist() {
    const data = Object.fromEntries(checks.map(c => [c.dataset.check, c.checked]));
    try { localStorage.setItem(key, JSON.stringify(data)); } catch { /* local-only best effort */ }
  }
  checks.forEach(c => c.addEventListener('change', () => { persist(); render(); }));
  reset.addEventListener('click', () => {
    if (!window.confirm('¿Reiniciar las marcas de los checkpoints de este laboratorio?')) return;
    checks.forEach(c => { c.checked = false; });
    persist(); render();
  });
  render();
}
