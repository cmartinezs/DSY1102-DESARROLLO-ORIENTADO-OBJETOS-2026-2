# Etapa 02 · Listado con TableView y ObservableList

**Requisito:** etapa 01 de este laboratorio, no un laboratorio anterior.

## 1. Archivo `lista-view.fxml`
En la misma carpeta de resources donde IntelliJ creó `hello-view.fxml`, crea este archivo. Reemplaza el package en `fx:controller` si el proyecto generado usa otro:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.control.*?>
<?import javafx.scene.layout.*?>
<VBox xmlns:fx="http://javafx.com/fxml"
      fx:controller="cl.duoc.recintos.controller.ListaController"
      spacing="12" prefWidth="660" prefHeight="440">
    <children>
        <Label text="Reservas de recintos deportivos"/>
        <TableView fx:id="tablaReservas" VBox.vgrow="ALWAYS">
            <columns>
                <TableColumn fx:id="colResponsable" text="Responsable" prefWidth="220"/>
                <TableColumn fx:id="colRecinto" text="Recinto" prefWidth="240"/>
                <TableColumn fx:id="colHora" text="Hora" prefWidth="150"/>
            </columns>
        </TableView>
        <Button text="Nueva reserva" onAction="#abrirFormulario"/>
    </children>
</VBox>
```

## 2. Archivo `controller/ListaController.java`
```java
package cl.duoc.recintos.controller;

import cl.duoc.recintos.model.Reserva;
import cl.duoc.recintos.repository.ReservaRepository;
import javafx.beans.property.ReadOnlyStringWrapper;
import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;

public class ListaController {
    @FXML private TableView<Reserva> tablaReservas;
    @FXML private TableColumn<Reserva, String> colResponsable;
    @FXML private TableColumn<Reserva, String> colRecinto;
    @FXML private TableColumn<Reserva, String> colHora;
    private Runnable abrirFormulario;

    public void configurar(ReservaRepository repositorio, Runnable abrirFormulario) {
        this.abrirFormulario = abrirFormulario;
        colResponsable.setCellValueFactory(c ->
                new ReadOnlyStringWrapper(c.getValue().getResponsable()));
        colRecinto.setCellValueFactory(c ->
                new ReadOnlyStringWrapper(c.getValue().getRecinto()));
        colHora.setCellValueFactory(c ->
                new ReadOnlyStringWrapper(c.getValue().getHora()));
        tablaReservas.setItems(repositorio.obtenerTodas());
    }

    @FXML private void abrirFormulario() { abrirFormulario.run(); }
}
```

## 3. Comprobar diseño
Compara todos los `fx:id`, los nombres de los campos Java y el método `#abrirFormulario`. No invoques `configurar` durante `initialize`: lo hará Application **después** de `FXMLLoader.load()`.

**Checkpoint:** FXML y controlador son coherentes y Java compila. El listado arrancará una vez conectada la navegación en etapa 03. Al agregar objetos a la lista observable aparecerán filas automáticamente; no necesitas `table.refresh()` para insertar elementos.

[Continuar a etapa 03](03-navegacion.md)
