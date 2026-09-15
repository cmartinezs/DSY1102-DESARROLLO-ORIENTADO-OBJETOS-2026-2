# Site Migration Matrix

Migración desde la raíz plana de `gh-pages` hacia arquitectura por features.

| Legacy | Canonical target | HTML | CSS | Page JS | Business JS | Legacy redirect | Estado |
|---|---|---:|---:|---:|---:|---:|---|
| `index.html` | `pages/home/` | ✅ | ✅ | N/A | N/A | ✅ | DONE |
| `semanas.html` | `pages/weeks/` | ✅ | ✅ | N/A | N/A | ✅ | DONE |
| `laboratorios.html` | `pages/labs/index/` | ✅ | ✅ | N/A | N/A | ✅ | DONE |
| `lab-veterinaria-colecciones-excepciones.html` | `pages/labs/veterinary-collections/` | ✅ | ✅ | ✅ | ✅ | ✅ | DONE |
| `lab-veterinaria-herencia-polimorfismo.html` | `pages/labs/veterinary-inheritance/` | ✅ | ✅ | ✅ | ✅ | ✅ | DONE |
| `lab-veterinaria-enhancements.js` | decomposed into layered assets | N/A | N/A | ✅ | ✅ | REMOVED | DONE |
| `ejercicios-clase.html` | `pages/exercises/class-practice/` | ✅ | ✅ | N/A | N/A | ✅ | DONE |
| `desafio-150.html` | `pages/exercises/challenge-150/` | ✅ | ✅ | N/A | ✅ | ✅ | DONE |
| `ejercicios-150.html` | `pages/exercises/challenge-150/exercises/` | ✅ | ✅ | ✅ | ✅ | ✅ | DONE |
| `desafio-150-data.js` | `assets/js/business/challenge-150/exercises.js` | N/A | N/A | N/A | ✅ | REMOVED | DONE |
| `desafio-150-hints.js` | `assets/js/business/challenge-150/hints.js` | N/A | N/A | N/A | ✅ | REMOVED | DONE |
| `desafio-semanal.html` | `pages/challenges/weekly/` | ✅ | ✅ | N/A | N/A | ✅ | DONE |
| `desafio-semana-01.html` | `pages/challenges/weekly/week-01/` | ✅ | ✅ | N/A | N/A | ✅ | DONE |
| `desafio-semana-02.html` | `pages/challenges/weekly/week-02/` | ✅ | ✅ | N/A | N/A | ✅ | DONE |
| `desafio-100-poo.html` | `pages/challenges/oop-100/` | ✅ | ✅ | N/A | N/A | ✅ | DONE |
| `desafio-25-javafx.html` | `pages/challenges/javafx-25/` | ✅ | ✅ | N/A | N/A | ✅ | DONE |
| `desafio-25-bd.html` | `pages/challenges/database-25/` | ✅ | ✅ | N/A | N/A | ✅ | DONE |
| `proyecto-formativo.html` | `pages/project/petcare/` | ✅ | ✅ | N/A | N/A | ✅ | DONE |
| `progreso.html` | `pages/progress/` | ✅ | ✅ | ✅ | ✅ | ✅ | DONE |
| `repositorio-estudiante.html` | `pages/student-repository/` | ✅ | ✅ | N/A | N/A | ✅ | DONE |

## Gate de cutover

- [x] Todos los targets canónicos existen.
- [x] URLs legacy reducidas a redirects mínimos.
- [x] No se requieren recursos propios desde `raw.githubusercontent.com`.
- [x] CSS significativo extraído de HTML canónico.
- [x] Lógica dinámica extraída de HTML canónico.
- [x] `business/*` separado de controllers de página.
- [x] Bancos de Challenge 150 movidos a assets de negocio.
- [x] Script legacy de Veterinaria I eliminado.
- [x] Navegación interna actualizada a rutas canónicas.
- [x] Completion controls normalizados como switches.
- [x] Iconografía local compartida disponible.
- [x] Veterinaria I implementa trabajo → checkpoint → aprobado → repaso no destructivo.
- [x] Instrucciones Git de Veterinaria I ofrecen rutas equivalentes GitHub Desktop y CLI.
- [x] CLI presenta y copia cada comando como acción individual, con validación del resultado antes de continuar.

Estado: `MIGRATED_AND_PUBLISHED`.
