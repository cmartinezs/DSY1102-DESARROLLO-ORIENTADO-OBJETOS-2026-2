# Site Migration Matrix

Estado de migración desde la raíz plana de `gh-pages` hacia la arquitectura por features.

| Legacy | Canonical target | HTML | CSS | Page JS | Business JS | Legacy redirect | Estado |
|---|---|---:|---:|---:|---:|---:|---|
| `index.html` | `pages/home/` | ✅ | ✅ | N/A | N/A | ⏳ | MIGRATED_NOT_CUTOVER |
| `semanas.html` | `pages/weeks/` | ✅ | ✅ | N/A | N/A | ⏳ | MIGRATED_NOT_CUTOVER |
| `laboratorios.html` | `pages/labs/index/` | ✅ | ✅ | N/A | N/A | ⏳ | MIGRATED_NOT_CUTOVER |
| `lab-veterinaria-colecciones-excepciones.html` | `pages/labs/veterinary-collections/` | ✅ | ✅ | ✅ | ✅ | ⏳ | MIGRATED_NOT_CUTOVER |
| `lab-veterinaria-herencia-polimorfismo.html` | `pages/labs/veterinary-inheritance/` | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | BLOCKED_BY_DECOMPOSITION |
| `lab-veterinaria-enhancements.js` | `assets/js/pages/` + `assets/js/business/` | N/A | N/A | ⏳ | ⏳ | N/A | BLOCKED_BY_DECOMPOSITION |
| `ejercicios-clase.html` | `pages/exercises/class-practice/` | ⏳ | ⏳ | N/A | N/A | ⏳ | PENDING |
| `desafio-150.html` | `pages/exercises/challenge-150/` | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | PENDING |
| `ejercicios-150.html` | `pages/exercises/challenge-150/exercises/` | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | PENDING |
| `desafio-150-data.js` | `assets/js/business/challenge-150/exercises.js` | N/A | N/A | N/A | ⏳ | N/A | PENDING |
| `desafio-150-hints.js` | `assets/js/business/challenge-150/hints.js` | N/A | N/A | N/A | ⏳ | N/A | PENDING |
| `desafio-semanal.html` | `pages/challenges/weekly/` | ⏳ | ⏳ | N/A | N/A | ⏳ | PENDING |
| `desafio-semana-01.html` | `pages/challenges/weekly/week-01/` | ⏳ | ⏳ | N/A | N/A | ⏳ | PENDING |
| `desafio-semana-02.html` | `pages/challenges/weekly/week-02/` | ⏳ | ⏳ | N/A | N/A | ⏳ | PENDING |
| `desafio-100-poo.html` | `pages/challenges/oop-100/` | ⏳ | ⏳ | N/A | N/A | ⏳ | PENDING |
| `desafio-25-javafx.html` | `pages/challenges/javafx-25/` | ⏳ | ⏳ | N/A | N/A | ⏳ | PENDING |
| `desafio-25-bd.html` | `pages/challenges/database-25/` | ⏳ | ⏳ | N/A | N/A | ⏳ | PENDING |
| `proyecto-formativo.html` | `pages/project/petcare/` | ⏳ | ⏳ | N/A | N/A | ⏳ | PENDING |
| `progreso.html` | `pages/progress/` | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | PENDING |
| `repositorio-estudiante.html` | `pages/student-repository/` | ⏳ | ⏳ | N/A | N/A | ⏳ | PENDING |

## Cutover gate

No cambiar URLs legacy a redirects ni mergear a `gh-pages` hasta que:

1. todos los targets canónicos existan;
2. no haya enlaces internos hacia archivos legacy salvo redirects;
3. no existan cargas propias desde `raw.githubusercontent.com`;
4. CSS inline significativo sea 0;
5. JS inline de lógica sea 0;
6. módulos `business` no accedan al DOM;
7. controllers de página no dupliquen reglas de negocio;
8. navegación y recursos relativos hayan sido verificados.
