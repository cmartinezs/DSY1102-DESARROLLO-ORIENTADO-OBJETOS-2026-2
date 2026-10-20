# 04 · Verificación, evidencia y tarea autónoma

## Paso 1. Ejecutar en IntelliJ
1. Guarda los archivos.
2. Abre Maven en IntelliJ y espera a que sincronice (si solicita reload).
3. Inicia la configuración de ejecución JavaFX existente de semana 09; **no reemplaces** `pom.xml` ni cambies dependencias sin necesidad.
4. Si aparece `Location is not set`, revisa `getResource` y ubicación del FXML.
5. Si aparece `LoadException`, revisa `fx:controller`, `fx:id`, `onAction` y que el controlador sea accesible a `javafx.fxml` en `module-info.java`.
6. Si `PropertyValueFactory` no muestra datos, revisa getters públicos y apertura del paquete del modelo.

**Checkpoint:** dos vistas abren mediante sus botones, sin excepciones.

## Paso 2. Ejecutar pruebas
Sigue la [matriz T01–T09](02-actividades-y-pruebas.md). Para cada caso anota: dato de entrada, esperado, real, éxito/error y evidencia. En particular:
- Guardar `ABCD12` / `Toyota` produce una fila.
- Guardar `abcd12` / `Nissan` se rechaza por duplicado.
- Patente o marca vacías se rechazan.
- Volver sin guardar no crea registros.
- Regresar varias veces no elimina lo que está en memoria.

**Checkpoint:** T01–T08 en verde. T09 es diagnóstico deliberado: **corrige** cualquier alteración de `fx:id` que hayas hecho para probar.

## Paso 3. Documentar decisiones
Escribe 5–10 líneas sobre: modelo, vista, controlador, repositorio, lista observable y validación. Incluye dos capturas de navegación y una de validación de error.

## Paso 4. Trabajo autónomo
Resuelve los ejercicios institucionales **2.3.6** para su propio caso de estudiantes. No copies código de Rent-a-Car como si fuera la respuesta; compara la arquitectura e identifica las diferencias.

## Entrega / fin
Sube al **repositorio personal de la asignatura** el código y evidencias en la ubicación semanal acordada con tu docente. El laboratorio es formativo, no sustituye por sí solo la EP2.

- [ ] Proyecto compila y ejecuta.
- [ ] Dos vistas y navegación funcional.
- [ ] Repositorio único, datos visibles en tabla.
- [ ] Validaciones y duplicados comprobados.
- [ ] Evidencias y decisiones registradas.

[Volver a semana 10](README.md)
