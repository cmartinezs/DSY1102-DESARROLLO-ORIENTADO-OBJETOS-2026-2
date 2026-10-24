# Clase consolidada · hoja de ruta editorial y de implementación

**Realizado:** R00 (Java 21 + Maven + JavaFX, Launcher, HelloApplication, primera ventana, diagnóstico de módulo Java 8).

**En preparación, SIN implementar aún:**
- R01 Modelo `MensajeFuturo` (autor, texto, plazo 1/5/10 años). Captura: estructura de paquetes y código del modelo.
- R02 Mostrar mensajes de ejemplo en una `TableView` enlazada a `ObservableList`. Captura: tabla en memoria.
- R03 Crear formulario FXML con Controller y navegación de ida/vuelta; registrar un mensaje. Captura: formulario y lista con nuevo mensaje.
- R04 Introducir validación de campos y plazo; separar Controller/Service. Captura: un error visible.
- R05 Mostrar el problema de pérdida de datos al cerrar; introducir contrato `MensajeDao`, implementación JSON con Jackson. Captura: proyecto con capas y archivo JSON.
- R06 Cerrar, reiniciar y comprobar persistencia, error de JSON malformado (con respaldo). Captura: tabla recuperada y validación de error.

**Diseño de slides futuro:** 2–3 láminas de requerimiento + concepto por incremento, implementación guiada con código completo y captura real, checkpoint. No revelar requerimientos futuros como obligaciones de un paso anterior.

**Observación:** cualquier paso de IntelliJ o Maven que genere errores se registra como `síntoma → hipótesis → causa → corrección → prueba`, sin culpar al estudiante.
