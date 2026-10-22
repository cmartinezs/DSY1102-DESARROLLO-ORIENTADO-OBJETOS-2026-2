# Auditoría y homologación de laboratorios · DSY1102
**Fecha de intervención:** 22 de octubre de 2026  
**Alcance:** laboratorios históricos semana 01 a 09, con foco en 02–08; documentación canónica y portal `gh-pages`.

## Decisiones adoptadas
1. **Laboratorios oficiales semanales autónomos**: cada caso comienza desde cero; las etapas dentro del mismo laboratorio sí se suceden. PetCare es el proyecto formativo longitudinal.
2. **Conservación sin borrado del patrimonio Veterinaria I–IV**: las experiencias y rutas antiguas mantienen su valor didáctico, se identifican como **históricas opcionales**, y sus dependencias internas solo aplican a esa alternativa.
3. **Acompañamiento tipo «bicicleta con rueditas»**: menú de IntelliJ, rutas, archivos concretos, código, ejecución, checkpoints, resultados esperados y evidencias.
4. **Markdown en master canónico; `gh-pages` read-model**: la web enlaza, no sustituye los guiones de los labs.

## Matriz de tratamiento
| Semana | Estado previo | Tratamiento |
|---|---|---|
| 01 | Referencia histórica sin lab formal | Sin nueva actividad inventada |
| 02 | Enlace a archivo inexistente y solo stub | Laboratorio Cuenta simple con 4 etapas; se retira enlace roto |
| 03 | Cuenta segura muy breve; solapamiento con semana 02 | Caso nuevo Batería de un dron, con 4 etapas, estado válido y `boolean` |
| 04 | Pedidos: dos checkpoints breves | Pedidos de cafetería en 4 etapas, pruebas y código completo |
| 05 | Veterinaria I exclusiva en portal | Despachos urbanos autónomo, 4 etapas; Veterinaria preservada |
| 06 | Veterinaria II dependiente de I | Inscripciones a talleres autónomo en `independiente/`; legado en `HISTORICO-VETERINARIA.md` |
| 07 | Veterinaria III dependiente de II | Soporte técnico autónomo en `independiente/`; evita repetir MediaHub del contenido semanal |
| 08 | Veterinaria IV dependiente de III | Control de acceso a feria autónomo en `independiente/`; legado preservado |
| 09 | Referencia sólida de guía JavaFX | Sin reescritura |

## Homologación editorial y de navegación
- `labs/README.md` actualizado como índice y política.
- Índices de `semanas/semana-05..08/README.md` conciliados; semana 03 remite al caso nuevo desde portal.
- Portal `pages/labs/index/index.html` reestructurado con laboratorios 02–11 y archivo histórico separado.
- 7 páginas de navegación autónoma para semanas 02–08 en `gh-pages`.
- 4 páginas interactivas históricas de Veterinaria reciben aviso explícito y link a lab oficial autónomo.
- `pages/weeks/index.html` actualizado para enlazar los nuevos laboratorios.
- `docs/ESTRUCTURA-CANONICA.md` deja de presentar `master/page/` como fuente viva y refleja la estructura vigente.

## Validación documentada
- Se verificó la presencia de `labs/semana-02..08/README.md` en `master` y de `pages/labs/semana-02..08/index.html` en `gh-pages`.
- Se inspeccionaron enlaces internos Markdown de las cuatro etapas y README de semanas 02–08: no se detectaron destinos locales inexistentes en las rutas evaluadas.
- Se inspeccionaron enlaces relativos de las siete nuevas páginas, los dos índices web y las cuatro páginas Veterinaria históricas: no se detectaron destinos locales inexistentes.
- Se efectuó una prueba Java 21 **aislada** de invariantes de batería y unicidad de acreditación, con resultado PASS; **no equivale** a compilar los proyectos de estudiantes ni a ejecutar todos los fragmentos remotos juntos.

## Límites y pendientes
- No se realizó compilación de extremo a extremo de los siete laboratorios con los pasos exactamente como los ejecutaría cada alumno.
- No se comprobó el HTTP público de GitHub Pages con acceso remoto; las fuentes HTML en `gh-pages` sí fueron comprobadas.
- No se editaron originales institucionales ni las entregas de estudiantes.
- El material histórico antiguo mantiene sus enlaces y requerimientos internos propios, pero está fuera de la ruta obligatoria.
- La estructura `independiente/` de semanas 06–08 existe **para preservar sin eliminar** guías históricas preexistentes; no es una segunda actividad oficial.

## Aceptación recomendada
Una etapa se considera pedagógicamente lista cuando un estudiante puede empezar desde su proyecto autónomo, encontrar cada archivo, ejecutar y contrastar un resultado verificable **sin necesitar que el docente adivine o complete un paso omitido**. Antes de declarar validación funcional total, realizar ejecución guiada fresca de cada lab.
