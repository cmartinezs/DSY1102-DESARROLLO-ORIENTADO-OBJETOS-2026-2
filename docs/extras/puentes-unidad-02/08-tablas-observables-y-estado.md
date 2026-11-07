# 08 · TableView, listas y estado: mostrar no es guardar

**Microcápsula · 12–15 min · DSY1102 Unidad 2**

## De lista a tabla
`List<MensajeFuturo>` representa datos del dominio. `ObservableList<MensajeFuturo>` es una lista de JavaFX que **notifica cambios** a controles de interfaz; `TableView<MensajeFuturo>` presenta una tabla de esos objetos.

```java
List<String> datos = List.of("Primero", "Segundo");
ObservableList<String> observables =
        FXCollections.observableArrayList(datos);
```

Si modificamos `datos` por otro lado, **no se actualiza mágicamente `observables`**: arriba se hizo una copia inicial. Si queremos reflejar novedades, actualizamos la lista observable o volvemos a cargar la vista según el diseño.

## Lo que ocurre en el proyecto de ejemplo
- Al iniciar, `MensajeService` recupera mensajes mediante DAO.
- Al abrir la pantalla, el Controller convierte la lista recibida en `ObservableList` y configura la tabla.
- Un nuevo registro válido modifica el estado del Service después de escribir el JSON.
- Al regresar, la pantalla muestra el nuevo estado.

La tabla **no es un repositorio**, y una fila visible no demuestra que se escribió un archivo. Son pruebas separadas.

## Pregunta de depuración real
Si editas `mensajes.json` mientras la aplicación sigue abierta, ¿la tabla tiene que cambiar? **No:** R06 no observa archivos continuamente. Por eso detectar «la tabla sigue igual» no significa que Jackson haya ignorado una excepción o leído `.bak`.

## Tres checkpoints
1. ¿Hay datos en el Service? Observa `listar()`.
2. ¿La tabla recibe elementos? Observa `getItems().size()`.
3. ¿El disco contiene JSON válido? Revisa el archivo y prueba una nueva ejecución.

**Distingue:** UI observable, estado en memoria y persistencia son tres capas relacionadas, pero no idénticas.

**Ejercicio:** Dibuja tres rectángulos «TableView», «Service», «JSON» y marca en qué sentido viajan los datos al iniciar y al registrar.

**Siguiente:** [09 · MVC, Service y DAO](09-mvc-service-dao-sin-magia.md).  
**Proyecto real:** [HelloController.java](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/feat/dsy1102-r06-json-recovery/src/main/java/cl/duoc/dsy1102/timecapsule/HelloController.java).
