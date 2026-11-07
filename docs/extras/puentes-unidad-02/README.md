# Puentes conceptuales · Unidad 2

## ¿Por qué existen estas guías?

En esta unidad trabajarás con interfaces gráficas en JavaFX y aprenderás a guardar información en archivos JSON. En el camino encontrarás términos que quizá no hayas estudiado todavía: *dato estructurado*, *serialización*, *dependencia*, *DAO*, *ObservableList* y otros.

Este material te ayuda a entenderlos **sin tener que conocer JavaScript, bases de datos ni frameworks adicionales**. Son explicaciones complementarias: puedes leer solo la que necesites y regresar al proyecto que estás desarrollando.

**Cómo aprovecharlas:** identifica qué concepto no entiendes, lee su explicación, ejecuta o analiza el ejemplo, responde las preguntas de comprobación y vuelve a probarlo en tu proyecto.

## ¿Por dónde empiezo?

| Si te preguntas... | Lee esta guía | Tiempo aproximado |
| --- | --- | --- |
| ¿Qué son un dato, un registro y una lista? | [01 · Datos, registros y colecciones](01-datos-colecciones-y-registros.md) | 10–15 min |
| ¿Qué es JSON? ¿Necesito aprender JavaScript? | [02 · JSON desde cero](02-json-desde-cero.md) | 12–18 min |
| ¿Cómo se convierten objetos Java en JSON y viceversa? | [03 · Jackson y serialización](03-java-a-json-con-jackson.md) | 12–18 min |
| ¿Por qué lo que veo en pantalla no siempre coincide con el archivo? | [04 · Memoria, archivos y recuperación](04-memoria-archivo-y-recuperacion.md) | 10–15 min |
| ¿Qué diferencia hay entre dato inválido, error JSON y excepción? | [05 · Errores, validación y excepciones](05-errores-validacion-y-excepciones.md) | 12–18 min |
| ¿Para qué sirven `pom.xml`, Maven y las dependencias? | [06 · Maven y bibliotecas](06-maven-pom-y-bibliotecas.md) | 10–15 min |
| ¿Qué hace FXML y qué hace el Controller? | [07 · Interfaz, eventos y Controller](07-interfaz-fxml-controller-eventos.md) | 10–15 min |
| ¿En qué se diferencian una lista y una tabla en JavaFX? | [08 · TableView y ObservableList](08-tablas-observables-y-estado.md) | 12–15 min |
| ¿Por qué separar Controller, Service y DAO? | [09 · Responsabilidades en el proyecto](09-mvc-service-dao-sin-magia.md) | 15 min |
| ¿Qué es una prueba y qué demuestra un test JUnit? | [10 · Pruebas y evidencias](10-pruebas-evidencia-y-junit.md) | 12–18 min |
| ¿Qué debo saber antes de empezar JDBC? | [11 · Del archivo a la base de datos](11-de-archivo-a-tablas-jdbc-introduccion.md) | 12–18 min · opcional |

**No es necesario leerlas todas en orden.** Si estás trabajando con archivos JSON, por ejemplo, empieza por las guías 01, 02 y 03.

## Practica: Detective JSON

¿Ya leíste qué es JSON? Pon a prueba lo aprendido con **seis situaciones interactivas**. Podrás detectar errores de sintaxis, reconocer objetos y arreglos, distinguir datos inválidos y analizar claves repetidas.

**[Abrir Detective JSON — actividad interactiva](https://academic-labs.adumun.cl/activities/detective-json/)**

Puedes hacer la actividad desde el navegador, sin instalar programas ni crear una cuenta. Al terminar, descarga el archivo TXT y entrégalo solo si tu docente lo solicita.

## ¿Y si el código usa algo que todavía no vimos?

Estas dos lecturas explican herramientas que aparecen en el código de la Cápsula del Tiempo FX, sin convertirlas en conocimientos obligatorios de entrada:

- [Streams, expresiones lambda y referencias a métodos](../../../clases/unidad-02/capsula-tiempo-fx/docs/GUIA-STREAMS-LAMBDAS-R06.md): por ejemplo, qué significa `this::esInvalido`.
- [Rutas y archivos con `Path` y `Files`](../../../clases/unidad-02/capsula-tiempo-fx/docs/GUIA-NIO2-PATH-FILES-R06.md): cómo se ubica, lee y escribe un archivo en Java.

También puedes consultar los [materiales complementarios generales](../README.md) o volver a la [clase Cápsula del Tiempo FX](../../../clases/unidad-02/capsula-tiempo-fx/README.md).

> **Lo importante es comprender lo que hace el programa.** No memorices un método porque aparezca en una diapositiva: intenta explicar qué datos recibe, qué resultado produce y qué ocurriría si falla.
