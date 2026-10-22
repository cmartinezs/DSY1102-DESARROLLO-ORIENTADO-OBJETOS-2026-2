# Laboratorio independiente · Semana 11: InventarioInstrumentosFX
**DSY1102 · JavaFX · MVC · JSON · Repository/DAO**

## Empieza desde cero
Abre IntelliJ IDEA y crea **un proyecto nuevo** `InventarioInstrumentosFX` (Java 21, Maven, JavaFX). **No** uses Rent-a-Car, ReservaRecintosFX ni PetCare. Este laboratorio ejercita de forma acotada las habilidades de semanas previas, sin exigir sus entregas.

## Problema
Una pequeña sala de ensayo administra sus instrumentos. Necesita registrar un **código único**, **nombre** y **categoría** (guitarra, bajo, batería, teclado). Puede consultar una tabla de instrumentos; al cerrar y volver a abrir, los registros deben recuperarse desde `data/instrumentos.json`. Los campos incompletos y los códigos repetidos se rechazan.

## Alcance (mínimo viable)
- Dos vistas FXML: listado y formulario; `TableView` conectada a `ObservableList`.
- Modelo `Instrumento` con constructor vacío/accesores para el mapeador JSON, sin referencias a JavaFX.
- Contrato `InstrumentoDao` que expone lectura y escritura; `JsonInstrumentoDao` lo implementa con Jackson.
- Servicio/repositorio en memoria que carga al iniciar, valida alta y **persiste**; el controlador sólo invoca operaciones de alto nivel y muestra errores.
- Manejo de JSON inexistente (arrancar vacío) y lectura inválida (mostrar error, **no sobrescribir** archivo corrupto). En esta versión didáctica la escritura es directa; no se afirma seguridad ante cortes de energía.
- Verificar archivo JSON y recuperación tras reiniciar.

## Cómo usar la guía

Lee las etapas **en orden**, desde el generador IntelliJ hasta la prueba de reinicio. Cada etapa explica qué archivo crear, dónde ubicarlo, qué código escribir, cuál debe ser el resultado y cómo diagnosticar fallos habituales. Puedes ejecutar y comprobar antes de pasar a la siguiente. Se usa el paquete de ejemplo `cl.duoc.inventario`; si IntelliJ creó otro, adapta paquetes y `fx:controller` de modo consistente.

## Mapa de incrementos — determinados por resultados distintos
1. [01 · Proyecto inicial y modelo](01-proyecto-y-arquitectura.md) — resultado: JavaFX arranca y el modelo compila.
2. [02 · DAO JSON](02-dao-json.md) — resultado: leer y guardar sin interfaz, con prueba aislada.
3. [03 · Service y reglas](03-servicio-y-reglas.md) — resultado: registro válido, duplicado rechazado, persistencia coordinada sin controladores.
4. [04 · Interfaz MVC y navegación](04-interfaz-y-navegacion.md) — resultado: la tabla, formulario y navegación muestran los cambios.
5. [05 · Pruebas de reinicio y recuperación](05-pruebas-persistencia.md) — resultado: JSON recuperado después de cerrar, validaciones y falla de archivo controlada.

**Por qué cinco y no cuatro:** validación de negocio en Service y conexión de JavaFX son dos resultados distintos; se prueban por separado antes de la prueba final de persistencia. Cada incremento contiene los pasos que realmente necesita, sin cuota fija.

**Los ejemplos de este lab son elaboración propia del curso**, basados en las orientaciones del coordinador; las guías institucionales 2.4.1–2.4.4 aún no se han recibido.

## Criterios de terminado
- [ ] El proyecto nuevo ejecuta sin dependencias de otro lab.
- [ ] El controlador no lee/escribe JSON.
- [ ] Añadir dos instrumentos crea un JSON válido.
- [ ] Cerrar y reiniciar conserva las dos filas.
- [ ] Un código duplicado o campo vacío no modifica el archivo.
- [ ] JSON corrupto no se borra silenciosamente y se informa error.
