# Ejemplos · Semana 10 · TableView y navegación JavaFX

Dos demostraciones ejecutables y focalizadas, **no** un nuevo laboratorio de reservas deportivas. Ambas comparten solo la configuración Maven y son aplicaciones independientes.

## Requisitos
JDK 21, Maven 3.9+ y acceso a dependencias JavaFX 21.0.8. Abre **esta carpeta** (`ejemplos/semana-10/`) como proyecto Maven en IntelliJ y espera la sincronización.

1. **TableView/ObservableList:** [TableViewDemo.java](src/main/java/cl/duoc/dsy1102/w10/TableViewDemo.java). Una ventana muestra un listado. Con el botón se agrega una tarea sin llamar de nuevo a `setItems`. **Prueba:** antes 1 fila, después del clic 2 filas.
2. **FXML/navegación:** [NavegacionFXMLDemo.java](src/main/java/cl/duoc/dsy1102/w10/NavegacionFXMLDemo.java), [InicioController](src/main/java/cl/duoc/dsy1102/w10/ui/InicioController.java), [DetalleController](src/main/java/cl/duoc/dsy1102/w10/ui/DetalleController.java) y dos vistas FXML. **Prueba:** Inicio → Detalle → Inicio varias veces, siempre en la misma ventana.

## Cómo ejecutar
Desde terminal de IntelliJ en la raíz de esta carpeta:

```bash
mvn clean javafx:run
# Demostración alternativa de tabla:
mvn javafx:run -Dapp.mainClass=cl.duoc.dsy1102.w10.TableViewDemo
```

**Observa:** la `ObservableList` notifica cambios a la tabla; el evento del Controller solicita cambiar la `Scene` del mismo `Stage`. Aquí no se enseña DAO ni persistencia. Los [ejercicios de semana 10](../../ejercicios/semana-10/) plantean problemas diferentes; el [laboratorio](../../labs/semana-10/) integra varias capacidades.

**Validación pendiente:** es una fuente Maven revisable; no se declara ejecución de JavaFX hasta probar en un entorno con dependencias descargadas y pantalla.
