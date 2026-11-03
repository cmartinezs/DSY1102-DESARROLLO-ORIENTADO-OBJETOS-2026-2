# Clase consolidada · hoja de ruta editorial y de implementación

**Realizado y respaldado por capturas:** R00 (entorno JavaFX y error Maven Java 8), R01 (clase MensajeFuturo y prueba), R02 (TableView con dos mensajes en memoria), R03 (formulario, evento y rechazo de campos vacíos).

**Pendientes de implementar:**
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
- Imágenes reales entregadas para esta etapa: diez capturas en el ZIP local Entrega 05. No se afirma que las imágenes estén todavía publicadas en GitHub Pages.

**Siguiente paso R05:** extraer Service para lógica/validaciones, sin introducir DAO ni JSON hasta resolver la necesidad de persistencia.


## Actualización R05 · 3 noviembre 2026 · Evidencia docente

El **alcance original de R05** se conserva: Service + contrato DAO + Jackson/JSON. La nota intermedia que posponía el JSON queda reemplazada por esta decisión. No modificar retrospectivamente R00–R04.

**Evidencia observada en capturas:** clases `MensajeService` y `JsonMensajeDao`; configuración Maven con Jackson **2.22.4 en el entorno local del docente** (actualización motivada por advertencia de seguridad); primera apertura con tabla vacía; formulario con Carlos / Mensaje de prueba / 5; tabla con una fila y archivo `data/mensajes.json`; segundo registro Carlos / Otro Mensaje / 5, tabla con dos filas y JSON con dos objetos.

**No evidenciado todavía en estas capturas:** ejecución completa de pruebas Maven, reinicio de aplicación recuperando registros y tratamiento de corrupción/respaldos. Estos escenarios se mantienen en R06. El código fuente R05 se halla en la rama `feat/dsy1102-r05-service` del repositorio de la aplicación, **no** en un commit de snapshot congelado; confirmar que el POM local con Jackson 2.22.4 fue sincronizado antes de publicar enlaces definitivos.

**Slides:** Entrega 06 agrega las secciones R05 y referencias `assets/r05-01.webp` a `assets/r05-11.webp`. Recursos optimizados provenientes de capturas docentes. Se deben copiar a la carpeta `assets/` de la fuente y a su equivalente de `gh-pages` para su publicación; no confundir una referencia de archivo en JavaScript con una imagen ya publicada.
