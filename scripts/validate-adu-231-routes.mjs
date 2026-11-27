import { readFileSync } from 'node:fs';
const { weeks } = JSON.parse(readFileSync('docs/adu-231-ecosystem-routes.json','utf8'));
const urls = [...new Set(weeks.flatMap(w => [...w.knowledge.map(k => k.url), w.practice, w.lab, ...w.projects]).filter(Boolean))];
if (weeks.length !== 13 || urls.length !== 64) throw new Error('Unexpected coverage: ' + weeks.length + ' weeks, ' + urls.length + ' URLs');
const origins = new Set(['https://academy.adumun.cl','https://academic-labs.adumun.cl']);
const normalized = u => u.pathname.replace(/\/+$/, '') || '/';
async function check(url) {
  try {
    const expected = new URL(url);
    if (!origins.has(expected.origin)) throw new Error('Unexpected origin');
    const response = await fetch(expected, { signal: AbortSignal.timeout(15000), redirect: 'follow' });
    const actual = new URL(response.url);
    const html = (response.headers.get('content-type') || '').includes('text/html');
    const same = actual.origin === expected.origin && normalized(actual) === normalized(expected);
    await response.body?.cancel();
    const passed = response.ok && same && html;
    return {url, passed, status: response.status, final: actual.href, html};
  } catch (error) {
    return {url, passed: false, error: String(error)};
  }
}
const results = [];
for (let i = 0; i < urls.length; i += 8) results.push(...await Promise.all(urls.slice(i,i+8).map(check)));
for (const r of results) console.log(r.passed ? 'PASS' : 'FAIL', JSON.stringify(r));
const passed = results.filter(r => r.passed).length;
console.log('HTTP routes: ' + passed + '/' + urls.length + ' PASS');
process.exitCode = passed === urls.length ? 0 : 1;
