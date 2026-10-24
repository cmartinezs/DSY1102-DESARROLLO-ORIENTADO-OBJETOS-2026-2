# Clase consolidada · hoja de ruta editorial y de implementación

**Realizado y respaldado por capturas:** R00 (entorno JavaFX y error Maven Java 8), R01 (clase MensajeFuturo y prueba), R02 (TableView con dos mensajes en memoria).

**Pendientes de implementar:**
- R03 Crear formulario FXML con Controller y navegación de ida/vuelta; registrar un mensaje. Captura: formulario y lista con nuevo mensaje.
- R04 Introducir validación de campos y plazo; separar Controller/Service. Captura: un error visible.
- R05 Mostrar el problema de pérdida de datos al cerrar; introducir contrato `MensajeDao`, implementación JSON con Jackson. Captura: proyecto con capas y archivo JSON.
- R06 Cerrar, reiniciar y comprobar persistencia, error de JSON malformado (con respaldo). Captura: tabla recuperada y validación de error.

**Diseño de slides futuro:** 2–3 láminas de requerimiento + concepto por incremento, implementación guiada con código completo y captura real, checkpoint. No revelar requerimientos futuros como obligaciones de un paso anterior.

**Observación:** cualquier paso de IntelliJ o Maven que genere errores se registra como `síntoma → hipótesis → causa → corrección → prueba`, sin culpar al estudiante.


## R01 · 24-10-2026 · Validado

Modelo `MensajeFuturo(autor,texto,plazoAnios)` creado dentro de `model`; prueba de consola con tres getters, salida esperada y exit code 0. Evidencia visual cronológica en `assets/11-...` a `assets/21-...`. R02 aún no implementado.


## R02 · 24-10-2026 · Validado

En el proyecto real, `hello-view.fxml` declara TableView y tres columnas, `HelloController` enlaza el modelo mediante `ReadOnlyStringWrapper` y `ObservableList`. `Launcher` abre la ventana con dos filas visibles: Valentina (5 años) y Carlos (10 años). Capturas 13:11:31, 13:11:46, 13:12:35 y 13:13:10, en los assets 22–25. La lista sigue en memoria. El centrado en WSL queda pendiente visual, no bloqueante. **R03 no está implementado.**
