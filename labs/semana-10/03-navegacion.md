# 03 · Navegar entre listado y formulario

## Paso 1. Preparar el formulario
En `src/main/resources`, crea `form-view.fxml`. Reutiliza la vista de semana 09 adaptando los campos y el botón si lo prefieres, pero mantiene identificadores **exactamente iguales** a los del controlador:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.control.*?>
<?import javafx.scene.layout.*?>
<VBox xmlns:fx="http://javafx.com/fxml"
      fx:controller="tu.paquete.controller.FormController"
      spacing="12" prefWidth="500" prefHeight="320">
    <children>
        <Label text="Registrar vehículo"/>
        <TextField fx:id="campoPatente" promptText="Patente"/>
        <TextField fx:id="campoMarca" promptText="Marca"/>
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

**Checkpoint:** cada `fx:id` coincide con un campo `@FXML` y cada `onAction` con un método del controlador.

## Paso 2. Crear FormController
Crea `FormController` en el paquete de controladores y agrega los imports/clases de tu paquete:

```java
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;

public class FormController {
    @FXML private TextField campoPatente;
    @FXML private TextField campoMarca;
    @FXML private Label mensajeError;
    private VehiculoRepository repository;
    private Runnable volverAlListado;

    public void configurar(VehiculoRepository repository, Runnable volverAlListado) {
        this.repository = repository;
        this.volverAlListado = volverAlListado;
    }

    @FXML private void guardar() {
        String patente = campoPatente.getText().trim();
        String marca = campoMarca.getText().trim();

        if (patente.isBlank()) { mensajeError.setText("Ingresa una patente"); return; }
        if (marca.isBlank()) { mensajeError.setText("Ingresa una marca"); return; }
        if (repository.existePatente(patente)) {
            mensajeError.setText("La patente ya está registrada");
            return;
        }

        repository.registrar(new Vehiculo(patente, marca));
        volverAlListado.run();
    }

    @FXML private void volver() { volverAlListado.run(); }
}
```

**Checkpoint:** los errores se muestran sin guardar ni cerrar el formulario. Guarda solo datos validados.

## Paso 3. Implementar navegación en la clase Application
En la clase `Application` **ya generada en semana 09**, conserva el `main` y adapta `start(Stage stage)` para crear **un único** `VehiculoRepository` y compartirlo.

La clase principal necesita campos y métodos como estos, ajustando los recursos a tu ubicación real:

```java
private final VehiculoRepository repository = new VehiculoRepository();
private Stage stage;

@Override
public void start(Stage stage) throws Exception {
    this.stage = stage;
    mostrarListado();
    stage.setTitle("Rent-a-Car");
    stage.show();
}

private void mostrarListado() {
    try {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("lista-view.fxml"));
        Parent root = loader.load();
        ListaController controller = loader.getController();
        controller.configurar(repository, this::mostrarFormulario);
        stage.setScene(new Scene(root));
    } catch (IOException ex) {
        throw new IllegalStateException("No se pudo cargar lista-view.fxml", ex);
    }
}

private void mostrarFormulario() {
    try {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("form-view.fxml"));
        Parent root = loader.load();
        FormController controller = loader.getController();
        controller.configurar(repository, this::mostrarListado);
        stage.setScene(new Scene(root));
    } catch (IOException ex) {
        throw new IllegalStateException("No se pudo cargar form-view.fxml", ex);
    }
}
```

Imports: `java.io.IOException`, `javafx.fxml.FXMLLoader`, `javafx.scene.Parent`, `javafx.scene.Scene`, `javafx.stage.Stage` y los controladores/repositorio propios. **Crítico:** `getClass().getResource("lista-view.fxml")` es relativo al paquete de la clase Application: si guardaste las vistas en otra carpeta, usa **ruta absoluta de classpath**, por ejemplo `getResource("/tu/paquete/lista-view.fxml")`. Debe existir en `src/main/resources`.

**Checkpoint:** abrir listado → Nuevo vehículo → Volver → Nuevo vehículo, sin excepción y sin perder objetos registrados. Si no funciona, revisa el stacktrace de la causa raíz (`LoadException`, `NullPointerException` o `InaccessibleObjectException`).

[Continuar: pruebas y evidencia](04-verificacion-y-entrega.md)
