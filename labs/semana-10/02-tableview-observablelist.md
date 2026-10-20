# 02 · Mostrar vehículos con TableView y ObservableList

## Paso 1. Crear vista de listado
En `src/main/resources`, junto al FXML de semana 09, crea **lista-view.fxml**. Copia la estructura y **sustituye** `tu.paquete.controller` por el paquete real de tu clase `ListaController`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.control.*?>
<?import javafx.scene.layout.*?>
<VBox xmlns:fx="http://javafx.com/fxml"
      fx:controller="tu.paquete.controller.ListaController"
      spacing="12" prefWidth="600" prefHeight="420">
    <children>
        <Label text="Vehículos disponibles"/>
        <TableView fx:id="tablaVehiculos" VBox.vgrow="ALWAYS">
            <columns>
                <TableColumn fx:id="colPatente" text="Patente" prefWidth="180"/>
                <TableColumn fx:id="colMarca" text="Marca" prefWidth="380"/>
            </columns>
        </TableView>
        <Button text="Nuevo vehículo" onAction="#abrirFormulario"/>
    </children>
</VBox>
```

**Checkpoint:** el XML tiene apertura/cierre correctos. Aún puede fallar el cargador por faltar el controlador; continúa con paso 2.

## Paso 2. Crear controlador
En el package `controller`, crea `ListaController`. Ajusta los `package` y `import` a tu estructura:

```java
import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;

public class ListaController {
    @FXML private TableView<Vehiculo> tablaVehiculos;
    @FXML private TableColumn<Vehiculo, String> colPatente;
    @FXML private TableColumn<Vehiculo, String> colMarca;
    private VehiculoRepository repository;
    private Runnable abrirFormulario;

    public void configurar(VehiculoRepository repository, Runnable abrirFormulario) {
        this.repository = repository;
        this.abrirFormulario = abrirFormulario;
        colPatente.setCellValueFactory(new PropertyValueFactory<>("patente"));
        colMarca.setCellValueFactory(new PropertyValueFactory<>("marca"));
        tablaVehiculos.setItems(repository.obtenerTodos());
    }

    @FXML private void abrirFormulario() { abrirFormulario.run(); }
}
```

Este ejemplo elige explícitamente inyección mediante el método `configurar`. El `FXMLLoader` llama automáticamente a `initialize()` (si existe), **no** a `configurar()`; tendrás que llamar a este último desde la clase `Application` después de `loader.load()`.

**Checkpoint:** los tipos se resuelven. Para proyectos con `module-info.java`, el paquete de `Vehiculo` debe exportarse/abrirse correctamente para reflexión en `PropertyValueFactory`. Si la tabla muestra celdas vacías, revisa getters, nombres de propiedades y configuración modular.

## Paso 3. Comprender la actualización automática
Anota el contrato:
```java
tablaVehiculos.setItems(repository.obtenerTodos());
```
Al añadir un **nuevo elemento** a la `ObservableList`, `TableView` observa la modificación estructural. Una mutación interna de `Vehiculo` no está garantizada como observable si `Vehiculo` sólo tiene campos String sin properties/extractor; este laboratorio añade objetos inmutables.

**Checkpoint:** explica la diferencia entre colección observable y propiedades observables.

[Continuar: navegación](03-navegacion.md)
