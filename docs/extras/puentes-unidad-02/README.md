# Puentes conceptuales · Unidad 2 · DSY1102

**Biblioteca complementaria para aprender haciendo**  
**Estado:** guías listas para revisión docente · Fuente Git versionada en DSY1102 · [ADU-129](https://adumun.atlassian.net/browse/ADU-129)

## Para la persona que estudia

¿Te pidieron guardar objetos en JSON, escribir un DAO o usar `ObjectMapper` y aún no sabes bien qué es un archivo, un objeto JSON o una lista? **No necesitas estudiar JavaScript ni recorrer un curso nuevo entero**. Empieza por la cápsula que te falta. Cada una dura aproximadamente 10–18 minutos, tiene un ejemplo, errores típicos y preguntas para comprobar comprensión.

### Ruta recomendada

| Nº | Necesito comprender… | Cápsula | Momento recomendado |
| --- | --- | --- | --- |
| 01 | Qué es dato, campo, registro, lista | [Datos y colecciones](01-datos-colecciones-y-registros.md) | Antes de TableView y JSON |
| 02 | Qué es JSON, sin conocer JavaScript | [JSON desde cero](02-json-desde-cero.md) | Antes de guardar archivos |
| 03 | Cómo pasan los objetos Java a JSON | [Jackson y serialización](03-java-a-json-con-jackson.md) | Antes de DAO JSON |
| 04 | Por qué memoria, pantalla y archivo difieren | [Memoria y recuperación](04-memoria-archivo-y-recuperacion.md) | R05–R06 |
| 05 | Cómo interpretar datos inválidos y excepciones | [Errores y excepciones](05-errores-validacion-y-excepciones.md) | Formulario y DAO |
| 06 | Qué es una biblioteca y cómo funciona Maven | [Maven, POM y dependencias](06-maven-pom-y-bibliotecas.md) | Antes de Jackson/JavaFX |
| 07 | Qué hace FXML y qué hace un Controller | [Interfaz y eventos](07-interfaz-fxml-controller-eventos.md) | R00–R04 |
| 08 | Qué es una lista observable y cómo funciona una tabla | [TableView y estado](08-tablas-observables-y-estado.md) | R02–R04 |
| 09 | Por qué existen Service y DAO | [Responsabilidades](09-mvc-service-dao-sin-magia.md) | R05 |
| 10 | Qué evidencia una prueba y qué es JUnit | [Pruebas y evidencias](10-pruebas-evidencia-y-junit.md) | R05–R06 |
| 11 | Vocabulario mínimo para pasar de archivo a base de datos | [Puente hacia JDBC](11-de-archivo-a-tablas-jdbc-introduccion.md) | **Opcional**, antes de la siguiente unidad |

### Dos guías adicionales que ya teníamos

No se duplican: conservamos sus archivos y les damos un lugar en esta ruta.

- [Streams, lambdas, `anyMatch` y referencias a métodos](../../../clases/unidad-02/capsula-tiempo-fx/docs/GUIA-STREAMS-LAMBDAS-R06.md). Se consulta cuando aparece `this::esInvalido`, no como requisito inicial.
- [API `Path`, `Files`, NIO.2 y respaldos](../../../clases/unidad-02/capsula-tiempo-fx/docs/GUIA-NIO2-PATH-FILES-R06.md). Se consulta al trabajar con archivos reales.

### Práctica breve

**[Detective JSON — actividad sin cuentas, compatible con Academic Labs](../../../actividades/puentes-unidad-02/detective-json/index.html)**. Se trabaja con ejemplos editables y se exportan respuestas a un TXT que el estudiante entrega por el AVA de su institución. La herramienta utiliza JavaScript **internamente en el navegador**, pero la actividad **no requiere que el alumno lo conozca** ni lo evalúa.

## Para quien enseña

**Principio:** el currículo oficial define el objetivo de la clase. Estas cápsulas sirven para **remover barreras** que quedaron implícitas en los prerrequisitos. No introducen una segunda evaluación ni una progresión paralela obligatoria. Pueden asignarse individualmente según el problema que aparece en clase.

**Guía mínima de uso:**
1. Mostrar el problema concreto del proyecto.
2. Enlazar la cápsula relacionada y explicar qué parte debe comprender.
3. Pedir una comprobación pequeña: predecir salida, explicar ejemplo, detectar error o justificar una decisión.
4. Volver al código del curso. No evaluar un tema nuevo por aparecer en la cápsula.

**Separación de plataformas:**
- **ADÜMÜN Academy:** futuro índice de lectura por temas y rutas; debe **referenciar las fuentes canónicas** de estas guías, sin copiarlas hasta definir un sistema de publicación. **No afirmar despliegue en `academy.adumun.cl` todavía.**
- **ADÜMÜN Academic Labs:** actividades interactivas independientes de asignatura, originadas en archivos Git HTML/CSS/JS. Aquí la actividad Detective JSON está **preparada en el repositorio docente**; su integración y catálogo en `academic-labs.adumun.cl` son un paso posterior que debe verificarse. **No es el mismo producto que Academy.**
- **DSY1102:** material curricular y clase [Cápsula del Tiempo FX](../../../clases/unidad-02/capsula-tiempo-fx/README.md). Se enlaza el material de apoyo; no se reescriben R00–R06.

## Contrato editorial reutilizable

**En cada cápsula:** problema humano → objetivo puntual → ejemplo verificable → error frecuente → autocomprobación → referencia curricular y siguiente paso. Evitamos referencias circulares, términos no explicados, copiar frameworks ajenos y prometer resultados de ejecución que no fueron observados.

**Autoridad y trazabilidad:** autoría docente en el repositorio DSY1102, [ADU-129](https://adumun.atlassian.net/browse/ADU-129) para el paquete, [ADU-86](https://adumun.atlassian.net/browse/ADU-86) para decidir eventual fuente canónica transversal y [ADU-93](https://adumun.atlassian.net/browse/ADU-93) para Academy. No modificar documentación institucional ni declarar adopción de un estándar corporativo por elaborar una guía.

**Derechos y uso:** material docente preparado para revisión y reutilización educativa; la publicación de una URL no implica por sí sola una licencia abierta general. Definir licencia y atribuciones antes de republicarlo en otros repositorios.

## Control de calidad

- [x] Rutas conceptuales y ejemplos versionados.
- [x] Guías previas de Streams/NIO.2 referenciadas sin duplicación.
- [ ] Validación editorial con estudiantes / docente externo.
- [ ] Publicación y verificación en dominio Academy.
- [ ] Incorporación y verificación en catálogo de Academic Labs (cuando corresponda).

> Fuente de la necesidad: discrepancia entre prerrequisitos asumidos y conceptos reales de estudiantes de Unidad 2. Esto no constituye una crítica al estudiante ni una alteración del programa oficial.
