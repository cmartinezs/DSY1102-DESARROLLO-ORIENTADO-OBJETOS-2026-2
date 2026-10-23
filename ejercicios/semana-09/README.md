# Ejercicios · Semana 09 · Primeros eventos JavaFX
**Objetivo:** aplicar una capacidad JavaFX/FXML por ejercicio sin construir el laboratorio completo. Para ahorrar configuración, puedes partir de **una copia** del [ejemplo JavaFX de semana 09](../../ejemplos/semana-09/), o crear tu propia aplicación JavaFX mínima desde el generador IntelliJ. **No** reutilices entregas de otros laboratorios.

**Punto de partida técnico:** proyecto JavaFX Maven con FXML y Controller ya conectados, como se presentó en clases. Es un **soporte de ejecución**, no el problema que debes resolver. En los ejercicios, identifica el archivo FXML y el Controller que modificas.

## E01 · Confirmar una acción en pantalla
**Foco:** evento `onAction`. Hay un botón «Confirmar asistencia» y un `Label` inicialmente «Pendiente». Al hacer clic, el texto debe convertirse en «Asistencia confirmada».
- **Prueba:** antes del clic → «Pendiente»; después del clic → «Asistencia confirmada».
- **Pista:** asigna `fx:id` al Label, `onAction="#confirmar"` al Button y un método `@FXML` en el Controller.
- **Pregunta:** ¿qué archivo declara el evento y cuál ejecuta el cambio?
- **No hacer:** lista de asistentes, archivos ni persistencia.

## E02 · Validar un único campo
**Foco:** leer un `TextField` en el Controller y comunicar éxito/error. La pantalla registra un alias para un concurso. El alias debe tener **al menos tres caracteres**, ignorando espacios extremos.
- **Prueba:** «  Ana  » → «Alias aceptado: Ana»; «Al» → «Alias demasiado corto»; vacío → error.
- **Pista:** `getText().trim()`, `length()` y `Label.setText()`.
- **Pregunta:** ¿qué error de usuario resulta de ignorar `trim()`?
- **No hacer:** crear modelo y DAO para guardar un único alias.

## E03 · Depuración dirigida de FXML
**Foco:** diagnóstico de enlace vista–controlador. Duplica una pantalla mínima **dentro de tu proyecto de práctica**, cambia intencionalmente el `fx:id` del campo o el nombre de su handler y ejecútala; luego corrige la discrepancia.
- **Prueba:** registrar el mensaje o síntoma observado; después de corregir, el botón vuelve a mostrar el cambio esperado.
- **Pregunta:** ¿en qué parte del stacktrace o del par FXML/Controller buscaste primero la causa?
- **Precaución:** usa una copia de tu pantalla y restaura la versión funcional al terminar.

## E04 · Crear el mismo control de dos maneras
**Foco:** relación entre Scene Builder y FXML. Agrega un `ComboBox` con opciones «Mañana» y «Tarde», y un botón «Elegir» que muestre el valor seleccionado.
- **Pruebas:** sin selección → «Selecciona horario»; elegir «Tarde» → «Horario: Tarde».
- **Pregunta:** ¿qué genera Scene Builder y qué responsabilidad mantiene el Controller?
- **No hacer:** navegación, TableView ni JSON (semanas posteriores).

## Cobertura
Evento UI (E01), validación e interacción (E02), depuración FXML (E03), componente + Scene Builder (E04). Los casos tienen resultado comprobable y evitan repetir el caso central del laboratorio.

[Banco original conservado](BANCO-ORIGINAL-2026.md) · [Índice](../README.md)
