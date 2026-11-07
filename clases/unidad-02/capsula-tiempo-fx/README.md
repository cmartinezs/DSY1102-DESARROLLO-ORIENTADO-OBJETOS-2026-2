# DSY1102 · Unidad 2 consolidada · Cápsula del Tiempo FX

## Evolución de entregas (24 octubre 2026)

Presentación HTML/CSS/JavaScript **incremental** para dos bloques de 40 minutos de DSY1102. La presentación publicada incluye R00–R04 con sus capturas originales y R05 con evidencia docente de Service, DAO y JSON. Las pruebas de recuperación robusta y corrupción se reservan para R06.

## Apoyos conceptuales para R00–R06 (lectura opcional)

La Unidad 2 utiliza términos que no son necesariamente conocimientos previos: JSON no requiere saber JavaScript; un archivo no equivale a una lista en memoria; `ObjectMapper`, `Path`, `Files` y `Maven` tienen responsabilidades distintas.

**[Abrir ruta de 11 microcápsulas de apoyo](../../../docs/extras/puentes-unidad-02/)**: datos y colecciones, JSON desde cero, Jackson, memoria/archivo, errores, Maven, FXML, TableView, MVC/DAO, tests y puente hacia JDBC. Reutiliza las guías existentes de Streams/lambdas y NIO.2; no duplica material curricular ni cambia las diapositivas de R00–R06.

**[Practicar en Detective JSON](../../../actividades/puentes-unidad-02/detective-json/index.html)**: HTML autocontenido, seis escenarios y exportación TXT. Se trabaja sin cuentas ni conocimientos previos de JavaScript. La integración final de catálogo en Academic Labs se gestiona por [ADU-129](https://adumun.atlassian.net/browse/ADU-129).

## Abrir

Abre `index.html` en un navegador actual; también puedes usar un servidor estático con `python -m http.server 8000`. Navega con flechas, barra espaciadora, botones inferiores o índice con `G`. `N` alterna notas docentes, `F` pantalla completa, clic en una captura la amplía y `Copiar código` lleva los snippets al portapapeles (requiere HTTPS/localhost para portapapeles).

## Estructura

```
index.html        shell accesible y navegación
styles.css        diseño responsive de proyección
slides.js         32 slides, requisitos, explicación y checkpoints
assets/           25 capturas reales de IntelliJ, ordenadas cronológicamente
docs/             decisiones docentes y capturas/checkpoints
```

## Estado técnico

- Confirmado por captura: JavaFX abre la ventana Hello! tras corregir Maven.
- Captura del POM registra el **error original** `<source>8</source>` / `<target>8</target>`; la corrección es `<release>21</release>`.
- `MensajeFuturo` y `TableView` cuentan con pruebas capturadas. El formulario, DAO y JSON aún no están implementados; no presentarlos como validados.
- Ruta preparada para publicación en `gh-pages/pages/classes/capsula-tiempo-fx/` y fuente de trabajo en `master/clases/unidad-02/capsula-tiempo-fx/`.

## Capturas originales

Se conservan en esta carpeta veinticinco capturas optimizadas sin cambiar su significado; los archivos originales entregados por el docente permanecen en la conversación.


## Entrega 02 · R01 validado

Se incorporaron capturas reales del 24-10-2026 (12:26:30–12:29:40): creación de paquete/clase, constructor y getters, clase PruebaMensaje, ejecución de main y resultado exitoso. Se ordenaron cronológicamente sin invertir el contenido de las imágenes. R02 permanece como siguiente incremento por construir.


## Entrega 04 · R03 validado (27-10-2026)

Se incorporaron siete capturas reales (20:51:34–20:53:24), ordenadas por tiempo: FXML del formulario, imports, controles @FXML, método agregarMensaje, formulario completado, registro exitoso y validación de campos vacíos. R03 utiliza un único FXML y el estado continúa en memoria: el texto «Guardar» aún no implica persistencia. R04 es navegación entre vistas, pendiente.


## Entrega 05 · R04 y snapshots del código (27 octubre 2026)

Se incorporaron slides R04 sobre dos vistas FXML y estado compartido en memoria. El código completo ya no depende de pantallazos: [matriz de snapshots R00–R04](CODIGO-POR-INCREMENTO.md), con cada commit histórico y el ZIP de esa versión del proyecto [DSY1102-JFX-TIME-CAPSULE](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE). Las diez capturas **originales** de R04 (archivos 33–42) están restauradas y publicadas en ambas ramas, sin sustituirlas por ilustraciones SVG. Los vínculos al código de R00–R04 siguen apuntando a commits fijos. R05 integra Service, DAO y persistencia JSON.


### Fotografías originales restauradas de R04

Se recuperaron los WebP originales `assets/33-r04-*` a `assets/42-r04-*` desde Entrega 05. La secuencia de diapositivas R04 también se restauró del JavaScript original de esa entrega; las SVG recreadas ya no se usan en la presentación. Las capturas pueden consultarse dentro del portal y en las carpetas `assets/` de `master` y `gh-pages`.


## Entrega 06–07 · R05 Service, DAO y JSON (3 noviembre 2026)

La presentación `slides.js` incluye la secuencia narrativa de R05 original: necesidad de persistencia, responsabilidades, contrato DAO, implementación JSON con Jackson, actualización de Maven, registro en la UI y verificación del JSON con uno y dos mensajes. El material usa once capturas reales del docente, referenciadas como `assets/r05-01.webp` a `assets/r05-11.webp`.

**Estado editorial actual:** fuentes HTML y las 11 capturas reales de R05 están publicadas tanto en `master` como en `gh-pages`, junto con los 10 originales de R04. El código de presentación fue corregido para mostrar saltos de línea auténticos en los snippets. Jackson **2.22.4** está confirmado en el POM remoto de la rama de aplicación. Los enlaces R05 siguen apuntando a la rama de implementación hasta fijar el snapshot de aceptación. La ejecución de tests y la recuperación después de reiniciar aún requieren evidencia.

**Siguiente:** R06 — pruebas de recuperación, corrupción y respaldos, sin rehacer R05.


## Entrega 08 · R06 Recuperación y resguardo (7 noviembre 2026)

La presentación incorpora ocho diapositivas de R06 con **ocho capturas reales** del docente (archivos `r06-01.png` a `r06-08.png`). Se publicaron en ambos árboles `assets/` de `master` y `gh-pages`. Las etapas R00–R05 permanecen intactas.

**Estado histórico de Entrega 08:** ya se habían comprobado JSON, reinicio, tercer registro y respaldo. La Entrega 09 incorpora posteriormente las alertas, las copias `.corrupt`, la restauración del archivo y el resultado real de Maven; consulta la sección siguiente para el estado vigente.

**Lectura complementaria voluntaria:** [Streams, lambdas y referencias a métodos](docs/GUIA-STREAMS-LAMBDAS-R06.md), [API NIO.2: Path y Files](docs/GUIA-NIO2-PATH-FILES-R06.md). El código R06 sigue utilizando `stream().anyMatch(this::esInvalido)`, sin reescritura. Las slides enlazan ambas guías y el [PR #2](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/pull/2) sigue en revisión.


## Entrega 09 · R06 JSON estricto y pruebas verificadas (7 noviembre 2026)

Se conservaron las ocho capturas previas y se incorporaron siete nuevas fotografías auténticas, publicadas en `master` y `gh-pages`. La secuencia R06 quedó reorganizada en **15 diapositivas**: recuperación, DAO, respaldos, detección estricta de claves duplicadas, rechazo al iniciar, preservación de `.corrupt`, restauración manual del archivo, bloqueo de guardado con datos alterados y **13 tests JUnit exitosos** (`BUILD SUCCESS`). R00–R05 no se reescribieron.

**Matriz canónica:** [Evidencias reales R06 y orden de las 15 capturas](docs/EVIDENCIAS-R06.md). Cada diapositiva presenta evidencia real, sin ilustraciones sustitutas, y conserva enlaces al código y las guías independientes de Streams y NIO.2.

**Límites:** `.bak` no se carga automáticamente; no existe captura de una ejecución posterior a la restauración manual específica. PR #2 continúa en revisión; no equivale a merge.
