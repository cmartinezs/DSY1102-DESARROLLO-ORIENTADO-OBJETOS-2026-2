# Clase consolidada · hoja de ruta editorial y de implementación

**Realizado y respaldado por capturas:** R00 (entorno JavaFX y error Maven Java 8), R01 (clase MensajeFuturo y prueba), R02 (TableView con dos mensajes en memoria), R03 (formulario, evento y rechazo de campos vacíos).

**Plan original (histórico; consultar la actualización R05 al final):**
- R04 Navegar entre vista de lista y formulario FXML; conservar la misma ObservableList compartida. La validación básica ya existe en R03. Capturas: navegación y regreso sin pérdida.
- R05 Separar validaciones y gestión de datos a Service/DAO, reemplazar almacenamiento temporal por JSON con Jackson.
- R06 Cerrar, reiniciar y comprobar persistencia JSON, control de archivo malformado (con respaldo). Captura: tabla recuperada y validación de error.

**Diseño de slides futuro:** 2–3 láminas de requerimiento + concepto por incremento, implementación guiada con código completo y captura real, checkpoint. No revelar requerimientos futuros como obligaciones de un paso anterior.

**Observación:** cualquier paso de IntelliJ o Maven que genere errores se registra como `síntoma → hipótesis → causa → corrección → prueba`, sin culpar al estudiante.


## R01 · 24-10-2026 · Validado

Modelo `MensajeFuturo(autor,texto,plazoAnios)` creado dentro de `model`; prueba de consola con tres getters, salida esperada y exit code 0. Evidencia visual cronológica en `assets/11-...` a `assets/21-...`. R02 aún no implementado.


## R02 · 24-10-2026 · Validado

En el proyecto real, `hello-view.fxml` declara TableView y tres columnas, `HelloController` enlaza el modelo mediante `ReadOnlyStringWrapper` y `ObservableList`. `Launcher` abre la ventana con dos filas visibles: Valentina (5 años) y Carlos (10 años). Capturas 13:11:31, 13:11:46, 13:12:35 y 13:13:10, en los assets 22–25. La lista sigue en memoria. El centrado en WSL queda pendiente visual, no bloqueante. **R03 no está implementado.**


## R03 · 27-10-2026 · Validado

Formulario en la misma vista FXML, propiedades @FXML, ComboBox con plazos 1/5/10, evento agregarMensaje y validación de autor/texto vacíos. Se observan entradas y filas agregadas, más aviso por datos faltantes. Siete capturas reales assets/26 a assets/32. Importante: no existe segunda vista FXML, Service, DAO ni JSON todavía.


## R04 · Navegación y memoria compartida (comprobado 27-10-2026)

- Estado compartido: una `ObservableList<MensajeFuturo>` alojada en `HelloApplication`, accesible a los controladores.
- Navegación: `hello-view.fxml` (listado) → `formulario-view.fxml` (registro) → regreso al listado.
- Datos introducidos de prueba: Pedro / «Un mensaje» / 1 año. Al regresar se observa como tercera fila.
- Diagnóstico real: `FXMLLoader.LoadException` por espacio inicial antes de `<?xml ...?>` en `formulario-view.fxml`.
- Fuente reproducible y archivos completos: [R04 en commit 09e5b99e](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/tree/09e5b99e9dce71998333f6c2718ff29040d9b00e) y [matriz de R00–R04](../CODIGO-POR-INCREMENTO.md).
- Imágenes reales entregadas para esta etapa: diez capturas en el ZIP local Entrega 05. Las diez capturas originales ya están publicadas en GitHub Pages tras la restauración de Entrega 05.

**Siguiente paso R05:** extraer Service para lógica/validaciones, sin introducir DAO ni JSON hasta resolver la necesidad de persistencia.


## Actualización R05 · 3 noviembre 2026 · Evidencia docente

El **alcance original de R05** se conserva: Service + contrato DAO + Jackson/JSON. La nota intermedia que posponía el JSON queda reemplazada por esta decisión. No modificar retrospectivamente R00–R04.

**Evidencia observada en capturas:** clases `MensajeService` y `JsonMensajeDao`; configuración Maven con Jackson **2.22.4 en el entorno local del docente** (actualización motivada por advertencia de seguridad); primera apertura con tabla vacía; formulario con Carlos / Mensaje de prueba / 5; tabla con una fila y archivo `data/mensajes.json`; segundo registro Carlos / Otro Mensaje / 5, tabla con dos filas y JSON con dos objetos.

**No evidenciado todavía en estas capturas:** ejecución completa de pruebas Maven, reinicio de aplicación recuperando registros y tratamiento de corrupción/respaldos. Estos escenarios se mantienen en R06. El código fuente R05 se halla en la rama `feat/dsy1102-r05-service` del repositorio de la aplicación, **no** en un commit de snapshot congelado; POM remoto ya comprobado con Jackson 2.22.4; sigue pendiente fijar el snapshot R05 y ejecutar la batería de pruebas final.

**Slides:** Entrega 06 agrega las secciones R05 y referencias `assets/r05-01.webp` a `assets/r05-11.webp`. Recursos optimizados provenientes de capturas docentes. Los 11 WebP de R05 y los 10 originales de R04 ya están cargados y verificados en `assets/` de `master` y `gh-pages`. Se restituyó el bloque R04 desde el JavaScript de Entrega 05; no quedan ilustraciones SVG utilizadas.


## R06 · 4 noviembre 2026 · Implementación preparada, pendiente de evidencias

**Objetivo oficial heredado:** cerrar y abrir la aplicación para comprobar la persistencia JSON; detectar archivos malformados, conservar evidencia del error y disponer de un respaldo para recuperación.

**Código:** [rama R06](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/tree/feat/dsy1102-r06-json-recovery) y [PR #2](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/pull/2), cuya base es la rama de R05 (PR #1, aún abierta). No fusionar R06 antes de conciliar R05.

**Cambios acotados:** `JsonMensajeDao` valida formato/estructura, conserva una copia `.corrupt-*.json` cuando el JSON está dañado, escribe mediante temporal y guarda la versión previa como `.bak`. En `HelloApplication` se informa el error de carga y se cierra la aplicación sin mostrar una tabla falsamente vacía. Se incorporaron pruebas JUnit en `R06RecuperacionTest.java`.

**Guía docente:** [R06-GUIA-DOCENTE.md](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/feat/dsy1102-r06-json-recovery/R06-GUIA-DOCENTE.md). Capturas solicitadas: reinicio con recuperación, temporal + `.bak`, error por JSON malformado, copia preservada y restauración manual. **Evidencias recibidas y publicadas:** lectura del JSON con dos registros, reinicio con ambos visibles, código de lectura/validación y guardado, tercera alta y `.bak` con dos registros anteriores. **No validados:** alerta por archivo corrupto y copia `.corrupt-*.json`. Se añadieron slides R06 sin alterar R00–R05.

**Límites explícitos:** `.bak` conserva la versión anterior, no la más reciente; no hay restauración automática; la escritura es atómica solo si el sistema de archivos admite `ATOMIC_MOVE`; no se certifica `mvn test` hasta ejecutarlo.

**Condición de cierre:** resultado Maven real + captura del reinicio correcto + prueba de archivo dañado y restauración + snapshot de código congelado.


## R06 · 7 noviembre 2026 · Evidencia parcial y cápsulas de apoyo

Se incorporaron ocho capturas **auténticas** en `assets/r06-01.png` a `assets/r06-08.png` de `master` y `gh-pages`. Las últimas diapositivas contienen R06: recuperación tras reiniciar, validación con `Stream.anyMatch(this::esInvalido)`, escritura con archivo temporal y backup, tercera alta y comparación entre `mensajes.json` (tres) y `mensajes.json.bak` (dos).

**Decisión docente:** no sustituir Streams ni referencias a métodos por sintaxis anterior. Se conservan en el código y se enseñan mediante [guía independiente de Streams y lambdas](GUIA-STREAMS-LAMBDAS-R06.md), enlazada desde las slides. El uso de `Path`, `Files`, archivos temporales y `ATOMIC_MOVE` se explica en la [guía NIO.2](GUIA-NIO2-PATH-FILES-R06.md).

**Pendientes sin maquillar:** no se observó alerta ni copia diagnóstica al alterar el JSON; aún faltan restauración comprobada y salida real de Maven. Diagnóstico: la aplicación lee al iniciar, no vigila cambios del archivo mientras está abierta; verificar ruta absoluta y reiniciar el proceso completo. Se añadió una prueba JUnit específica para JSON con coma faltante. No cerrar ni fusionar PR #2 hasta validar.


### R06 · 7 noviembre 2026 · Incidencia en guardado después de modificar el JSON

**Comportamiento comunicado por el docente:** un JSON dañado parecía ignorarse mientras la interfaz aún mostraba los mensajes anteriores; al registrar otro, la aplicación reescribía el archivo y lo dejaba válido. El DAO R06 revisado **no lee automáticamente `.bak`**; lo explicado por el código es que el Service ya tenía la lista cargada en memoria.

**Corrección aplicada en [PR #2](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/pull/2):** antes de cada guardado se relee/valida el archivo; se compara contra una instantánea de la versión conocida, para rechazar archivos externos alterados incluso cuando sigan siendo JSON válido. Si está corrupto, se conserva su copia diagnóstica y no se sobreescriben `mensajes.json` ni `.bak`. El Controller informa mediante una alerta visible y conserva el formulario.

**Pruebas agregadas:** edición con JSON malformado mientras JavaFX permanece abierto (garantiza no reescribir ni dañar backup) y modificación externa válida (conflicto que exige reinicio). Estas pruebas son código versionado y **no está confirmada su ejecución Maven**.

**Material de apoyo actualizado:** [API NIO.2 con `Files.readAllBytes` y `Arrays.equals`](GUIA-NIO2-PATH-FILES-R06.md). La guía de [Streams/lambdas](GUIA-STREAMS-LAMBDAS-R06.md) sigue igual; no se simplificó `this::esInvalido`. Slides R06 dejan la corrupción como prueba pendiente hasta nuevas capturas reales.

### R06 · 7 noviembre 2026 · Claves duplicadas en JSON

**Hallazgo de depuración:** el segundo elemento de `mensajes.json` tenía `autor`, `texto` y `plazoAnios` repetidos; Jackson aceptaba la entrada y reemplazaba sus propiedades por los últimos valores. **Decisión:** activar `StreamReadFeature.STRICT_DUPLICATE_DETECTION` en la construcción de `ObjectMapper` mediante `JsonMapper.builder()`. No reescribir los Streams usados para validar el modelo.

**Pruebas nuevas de R06 en PR #2:** rechazo de propiedades duplicadas dentro del segundo objeto (reproduce la captura), aceptación de nombres iguales en objetos diferentes y rechazo del guardado si aparecen duplicados mientras la aplicación sigue abierta; original, `.corrupt-*.json` y respaldo protegidos. [Guía R06](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/feat/dsy1102-r06-json-recovery/R06-GUIA-DOCENTE.md).

**Evidencia pendiente:** `mvn test` con el código actualizado y capturas reales de alerta y recuperación. No modificar slides históricas ni dar por cerrada la etapa con tests solo escritos.


## R06 · 7 noviembre 2026 · Entrega 09 con evidencia verificada

**Esta sección actualiza el estado de las notas históricas anteriores que indicaban pruebas pendientes.** Las capturas reales documentan: JSON con dos mensajes, recuperación tras reinicio, validación del DAO, escritura por temporal y respaldo, tercera alta, `mensajes.json` con tres registros y `.bak` con dos; posteriormente, `JsonMapper.builder().enable(StreamReadFeature.STRICT_DUPLICATE_DETECTION)`, alerta al abrir un JSON con propiedades duplicadas, existencia del archivo `.corrupt`, JSON restaurado a formato válido, bloqueo de un nuevo guardado con el archivo alterado y **13 tests JUnit R06 exitosos** (0 errores, 0 fallos).

Se organizaron 15 diapositivas R06 en esta secuencia y se publicaron las 15 imágenes originales (sin recreaciones) en ambas ramas. Véase [matriz y precisión de evidencias](EVIDENCIAS-R06.md). R00–R05 permanecen intactas; el código Java R06 se consulta desde la rama del PR #2.

**Límites y pendientes reales:** no se observa en esta tanda una apertura de JavaFX posterior a la restauración manual del archivo; ninguna captura demuestra restauración automática de `.bak` (no está implementada). El PR #2 permanece sin fusionar. Evitar afirmar resistencia total a cortes eléctricos o concurrencia multiusuario.
