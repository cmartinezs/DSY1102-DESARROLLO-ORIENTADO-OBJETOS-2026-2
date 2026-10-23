# Ejercicios · Semana 10 · MVC, TableView y navegación
**Objetivo:** practicar una decisión de MVC o una operación de JavaFX sin transformar cada problema en un sistema de reservas completo.

**Punto de partida técnico:** utiliza un proyecto de práctica **JavaFX Maven nuevo** con `javafx-controls` y `javafx-fxml` configurados como en la materia 2.3; puedes copiar una **plantilla vacía** de la clase o un ejemplo ejecutable mínimo. No exige abrir el laboratorio ReservaRecintosFX. Los ejercicios pueden resolverse en el **mismo proyecto de práctica**, siempre que cada caso se compruebe por separado.

## E01 · Tabla que observa altas
**Foco:** `TableView` y `ObservableList`. Modela `Tarea` con `titulo` y `prioridad`. Muestra ambas columnas en `TableView<Tarea>`; un botón «Añadir tarea» incorpora una tarea fija `("Repasar Java", "Alta")` a la misma lista observable.
- **Prueba:** antes → 0 filas; un clic → 1 fila; segundo clic → 2 filas.
- **Pista:** `FXCollections.observableArrayList()`, `tabla.setItems(datos)`, `ReadOnlyStringWrapper` para cada columna; el Controller coordina el evento.
- **Pregunta:** ¿por qué `tabla.setItems(datos)` una sola vez es suficiente si luego llamas `datos.add()`?
- **No hacer:** JSON, bases de datos, servicio de persistencia.

## E02 · Navegación y retorno sin duplicar datos
**Foco:** `FXMLLoader` y cambio de `Scene`. Crea dos vistas pequeñas: `inicio.fxml` (botón «Detalle») y `detalle.fxml` (botón «Volver»). Cambia la escena del **mismo Stage**.
- **Prueba:** Inicio → Detalle → Inicio, repetido tres veces; la aplicación no abre ventanas nuevas.
- **Pista:** verifica las rutas de `getResource`, los `fx:controller` y el método de retorno.
- **Pregunta:** ¿qué bug aparecería si crearas un Stage nuevo al navegar cada vez?
- **No hacer:** formularios ni listas para una prueba de navegación.

## E03 · Validar antes de modificar el modelo
**Foco:** Controller vs regla del modelo. Una pantalla tiene un `TextField` para código de paquete y botón «Agregar». Solo acepta códigos no vacíos y no repetidos, ignorando espacios y mayúsculas. Usa una pequeña lista **en memoria**.
- **Pruebas:** «PK01» → aceptado; « pk01 » → rechazado; «   » → rechazado; cantidad final = 1.
- **Requisito técnico:** deja la normalización/comprobación en una clase de dominio o repositorio de memoria pequeño, no mezclada con los controles FXML; el Controller muestra mensajes.
- **Pregunta:** ¿por qué esta validación seguiría siendo necesaria aunque mañana cambiase JavaFX por otra interfaz?
- **No hacer:** menú completo, DAO ni archivo JSON.

## Cobertura
Tabla observable (E01), navegación de vistas (E02), separación MVC y validación (E03). Estos ejercicios son focalizados; [laboratorio semana 10](../../labs/semana-10/) integra los conceptos en una aplicación distinta.

[Índice](../README.md)
