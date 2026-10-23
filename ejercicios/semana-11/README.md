# Ejercicios · Semana 11 · Persistencia JSON y DAO
**Objetivo:** comprobar serialización/deserialización y límites de responsabilidad en operaciones mínimas, sin construir otra interfaz JavaFX. La semana curricular introduce Jackson o la biblioteca JSON definida por el docente y distingue datos en memoria de datos persistidos.

**Punto de partida del modelo:** para E01–E03 puedes declarar directamente una clase mínima `EstadoJuego` con `String nombreJugador`, `int nivel`, constructor vacío y getters/setters; no es necesario resolver los ejercicios anteriores para comenzar otro. Los objetos y archivos de prueba se crean localmente, no se copian desde un laboratorio.

**Punto de partida técnico común:** un proyecto **Java Maven nuevo de práctica** con JDK 21 y una biblioteca JSON configurada; los ejemplos siguientes presuponen Jackson (`ObjectMapper`) como elección propia del curso, **no atribuida a las PPT institucionales pendientes de revisión**. Puedes utilizar el `pom.xml` explicado en [DAO JSON del laboratorio](../../labs/semana-11/02-dao-json.md) **solo como referencia de dependencias**, sin necesitar su código ni su aplicación JavaFX. Usa la ruta de trabajo `data/`, fuera de `src/main/resources`.

## E01 · Guardar un estado mínimo
**Foco:** serialización Java → JSON. Modela `EstadoJuego` con `nombreJugador` y `nivel`, getters/setters y constructor vacío para Jackson. Guarda `new EstadoJuego("Lina", 3)` en `data/estado.json`.
- **Prueba:** el archivo se crea y contiene `"nombreJugador": "Lina"` y `"nivel": 3`.
- **Pista:** `ObjectMapper.writeValue(...)`; crear directorio previo con `Files.createDirectories` si falta.
- **Pregunta:** ¿por qué asignar valores solo en variables no conserva información después de cerrar el programa?
- **No hacer:** menú, pantalla, varias entidades.

## E02 · Recuperar, no volver a inventar
**Foco:** deserialización JSON → objeto. Partiendo de un archivo `data/estado.json` con `{"nombreJugador":"Ana","nivel":7}`, lee el objeto y muestra sus datos por consola.
- **Prueba:** ejecución imprime «Ana / nivel 7» sin construir en código un nuevo objeto `EstadoJuego("Ana", 7)`.
- **Caso límite:** si el archivo todavía no existe, informa «Sin partida guardada» sin crear ni sobrescribir un JSON vacío.
- **Pista:** `Files.exists`, `ObjectMapper.readValue`, `EstadoJuego.class`.
- **Pregunta:** ¿cuál es la diferencia entre inicializar datos y **recuperarlos**?
- **No hacer:** implementar pantalla JavaFX.

## E03 · Mover la lectura a un DAO
**Foco:** responsabilidad de acceso a datos. En una práctica independiente define `EstadoJuegoDao` con `EstadoJuego cargar() throws IOException` y una implementación `JsonEstadoJuegoDao` que lee el archivo del ejercicio. `Main` solo debe llamar al DAO y mostrar un mensaje.
- **Prueba:** con JSON válido, Main imprime «Ana / nivel 7»; al mover la ruta en el constructor del DAO, Main no cambia su lógica.
- **Caso inválido:** JSON `{incompleto` → capturar el error en Main; **no** reemplazar el archivo por datos vacíos.
- **Pregunta:** ¿qué clase cambiaría si más adelante el almacenamiento fuera una base de datos?
- **No hacer:** añadir Service, Repository, Controller, menús o dos capas DAO para un único método.

## Cobertura
Serialización (E01), recuperación/ausencia de archivo (E02), separación DAO y fallo de lectura (E03). Los ejercicios no requieren abrir el proyecto InventarioInstrumentosFX. La integración JavaFX + DAO + persistencia entre ejecuciones pertenece al [laboratorio de semana 11](../../labs/semana-11/).

**Fuente curricular:** correo de coordinación semana 11. Recursos institucionales 2.4.1–2.4.4 aún pendientes de revisión documental. [Índice](../README.md)
