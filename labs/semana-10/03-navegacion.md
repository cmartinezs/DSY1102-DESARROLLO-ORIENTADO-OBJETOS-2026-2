# Etapa 03 · Formulario y navegación entre vistas

## 1. Crear `form-view.fxml`
Guárdalo junto a `lista-view.fxml`, corrigiendo el paquete del controlador si es distinto:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.control.*?>
<?import javafx.scene.layout.*?>
<VBox xmlns:fx="http://javafx.com/fxml"
      fx:controller="cl.duoc.recintos.controller.FormController"
      spacing="12" prefWidth="480" prefHeight="340">
    <children>
        <Label text="Nueva reserva deportiva"/>
        <TextField fx:id="campoResponsable" promptText="Responsable"/>
        <ComboBox fx:id="selectorRecinto" promptText="Selecciona recinto"/>
        <ComboBox fx:id="selectorHora" promptText="Selecciona horario"/>
        <Label fx:id="mensajeError" text=""/>
        <HBox spacing="8">
            <children>
                <Button text="Guardar" onAction="#guardar"/>
                <Button text="Volver" onAction="#volver"/>
            </children>
        </HBox>
    </children>
</VBox>
```

## 2. Crear `controller/FormController.java`
```java
package cl.duoc.recintos.controller;

import cl.duoc.recintos.model.Reserva;
import cl.duoc.recintos.repository.ReservaRepository;
import javafx.fxml.FXML;
import javafx.scene.control.ComboBox;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;

public class FormController {
    @FXML private TextField campoResponsable;
    @FXML private ComboBox<String> selectorRecinto;
    @FXML private ComboBox<String> selectorHora;
    @FXML private Label mensajeError;
    private ReservaRepository repositorio;
    private Runnable volverAlListado;

    @FXML private void initialize() {
        selectorRecinto.getItems().addAll(
                "Cancha fútbol 1", "Cancha fútbol 2", "Gimnasio");
        for (int h = 8; h < 22; h++) {
            selectorHora.getItems().add(String.format("%02d:00", h));
        }
    }

    public void configurar(ReservaRepository repositorio, Runnable volverAlListado) {
        this.repositorio = repositorio;
        this.volverAlListado = volverAlListado;
    }

    @FXML private void guardar() {
        String responsable = campoResponsable.getText().trim();
        String recinto = selectorRecinto.getValue();
        String hora = selectorHora.getValue();

        if (responsable.isBlank()) {
            mensajeError.setText("Ingresa un responsable");
            return;
        }
        if (recinto == null || hora == null) {
            mensajeError.setText("Selecciona recinto y horario");
            return;
        }
        if (repositorio.estaOcupado(recinto, hora)) {
            mensajeError.setText("El recinto ya está reservado a esa hora");
            return;
        }
        repositorio.registrar(new Reserva(responsable, recinto, hora));
        volverAlListado.run();
    }

    @FXML private void volver() { volverAlListado.run(); }
}
```

## 3. Adaptar la clase Application generada
Reemplaza la **clase HelloApplication existente** por este código, no crees una segunda Application. Ajusta `package` según IntelliJ y comprueba que los FXML estén en el mismo path de resources que `hello-view.fxml`:

```java
package cl.duoc.recintos;

import cl.duoc.recintos.controller.FormController;
import cl.duoc.recintos.controller.ListaController;
import cl.duoc.recintos.repository.ReservaRepository;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;
import java.io.IOException;

public class HelloApplication extends Application {
    private final ReservaRepository repositorio = new ReservaRepository();
    private Stage stage;

    @Override public void start(Stage stage) throws IOException {
        this.stage = stage;
        stage.setTitle("Arriendo de recintos deportivos");
        mostrarListado();
        stage.show();
    }

    private void mostrarListado() throws IOException {
        FXMLLoader loader = new FXMLLoader(
                HelloApplication.class.getResource("lista-view.fxml"));
        Parent root = loader.load();
        ListaController controller = loader.getController();
        controller.configurar(repositorio, this::irAFormulario);
        stage.setScene(new Scene(root));
    }

    private void mostrarFormulario() throws IOException {
        FXMLLoader loader = new FXMLLoader(
                HelloApplication.class.getResource("form-view.fxml"));
        Parent root = loader.load();
        FormController controller = loader.getController();
        controller.configurar(repositorio, this::irAListado);
        stage.setScene(new Scene(root));
    }

    private void irAFormulario() {
        try { mostrarFormulario(); }
        catch (IOException e) { throw new IllegalStateException("Carga formulario", e); }
    }

    private void irAListado() {
        try { mostrarListado(); }
        catch (IOException e) { throw new IllegalStateException("Carga listado", e); }
    }

    public static void main(String[] args) { launch(args); }
}
```

## 4. Revisar módulo y rutas
En proyectos **modulares**, si `module-info.java` existe, conserva sus declaraciones generadas y asegúrate de incluir (ajusta el package):

```java
opens cl.duoc.recintos.controller to javafx.fxml;
```

Conserva `requires javafx.controls;`, `requires javafx.fxml;` y la apertura/exportación de la clase Application según el generador. Si IntelliJ creó `module-info.java`, **no crees otro**. `getResource("lista-view.fxml")` es relativo al package de `HelloApplication`; cambia a ruta absoluta de classpath si el FXML está en otra carpeta.

**Checkpoint:** abre listado, entra al formulario, guarda una reserva y vuelve. El mismo repositorio conserva filas; al volver sin guardar no se crea nada.

[Continuar a etapa 04](04-verificacion-y-entrega.md)
