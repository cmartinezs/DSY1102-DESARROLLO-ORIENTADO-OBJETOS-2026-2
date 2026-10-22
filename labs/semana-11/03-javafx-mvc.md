# 03 · Construir la interfaz y conectar MVC con DAO

[← Etapa 02](02-dao-json.md) · [Índice](README.md) · [Etapa 04 →](04-pruebas.md)

**Partimos del proyecto NUEVO que acabas de crear.** No hay que abrir ni reutilizar otro laboratorio.

## Paso 1 · Crear el servicio
1. En Project abre `src/main/java/cl/duoc/inventario/service`.
2. Clic derecho → **New → Java Class** → `InventarioService`.
3. Pega todo este código:

```java
package cl.duoc.inventario.service;

import cl.duoc.inventario.dao.InstrumentoDao;
import cl.duoc.inventario.model.Instrumento;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

import java.io.IOException;
import java.util.ArrayList;

public class InventarioService {
    private final InstrumentoDao dao;
    private final ObservableList<Instrumento> datos =
            FXCollections.observableArrayList();

    public InventarioService(InstrumentoDao dao) { this.dao = dao; }

    public ObservableList<Instrumento> listar() { return datos; }

    public void cargar() throws IOException {
        var recuperados = dao.cargar();
        datos.setAll(recuperados);
    }

    public void registrar(String codigo, String nombre, String categoria)
            throws IOException {
        codigo = codigo == null ? "" : codigo.trim();
        nombre = nombre == null ? "" : nombre.trim();
        categoria = categoria == null ? "" : categoria.trim();

        if (codigo.isBlank() || nombre.isBlank() || categoria.isBlank()) {
            throw new IllegalArgumentException("Completa los tres campos");
        }
        for (Instrumento actual : datos) {
            if (actual.getCodigo().equalsIgnoreCase(codigo)) {
                throw new IllegalArgumentException("Código repetido");
            }
        }

        var nuevos = new ArrayList<>(datos);
        nuevos.add(new Instrumento(codigo, nombre, categoria));
        dao.guardar(nuevos);
        datos.setAll(nuevos);
    }
}
```

**Checkpoint A:** el servicio no contiene referencias a `Stage`, `FXMLLoader` ni `ObjectMapper`. Si se produce `IOException`, no agrega la nueva fila a la tabla.

## Paso 2 · Crear el archivo `listado.fxml`
1. En `src/main/resources`, ubica la carpeta donde IntelliJ generó `hello-view.fxml`.
2. Clic derecho en **esa misma carpeta** → **New → File** → `listado.fxml`.
3. Pega el contenido completo; cambia el package `cl.duoc.inventario` si tu proyecto tiene otro:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.control.*?>
<?import javafx.scene.layout.*?>
<VBox xmlns:fx="http://javafx.com/fxml"
      fx:controller="cl.duoc.inventario.controller.ListadoController"
      prefWidth="640" prefHeight="420" spacing="12">
    <children>
        <Label text="Inventario de instrumentos"/>
        <TableView fx:id="tabla" VBox.vgrow="ALWAYS">
            <columns>
                <TableColumn fx:id="colCodigo" text="Código" prefWidth="140"/>
                <TableColumn fx:id="colNombre" text="Nombre" prefWidth="280"/>
                <TableColumn fx:id="colCategoria" text="Categoría" prefWidth="200"/>
            </columns>
        </TableView>
        <Button text="Nuevo instrumento" onAction="#irFormulario"/>
    </children>
</VBox>
```

**Checkpoint B:** hay exactamente una `TableView` con tres columnas; el atributo `fx:controller` apunta a la clase que crearás ahora.

## Paso 3 · Crear el controlador del listado
1. Clic derecho en el package `controller` → **New → Java Class** → `ListadoController`.
2. Pega:

```java
package cl.duoc.inventario.controller;

import cl.duoc.inventario.model.Instrumento;
import cl.duoc.inventario.service.InventarioService;
import javafx.beans.property.ReadOnlyStringWrapper;
import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;

public class ListadoController {
    @FXML private TableView<Instrumento> tabla;
    @FXML private TableColumn<Instrumento, String> colCodigo;
    @FXML private TableColumn<Instrumento, String> colNombre;
    @FXML private TableColumn<Instrumento, String> colCategoria;
    private Runnable abrirFormulario;

    public void configurar(InventarioService servicio, Runnable abrirFormulario) {
        this.abrirFormulario = abrirFormulario;
        colCodigo.setCellValueFactory(c ->
                new ReadOnlyStringWrapper(c.getValue().getCodigo()));
        colNombre.setCellValueFactory(c ->
                new ReadOnlyStringWrapper(c.getValue().getNombre()));
        colCategoria.setCellValueFactory(c ->
                new ReadOnlyStringWrapper(c.getValue().getCategoria()));
        tabla.setItems(servicio.listar());
    }

    @FXML private void irFormulario() {
        abrirFormulario.run();
    }
}
```

**Checkpoint C:** compara `fx:id="tabla"` con `@FXML private TableView ... tabla` y el evento `onAction="#irFormulario"` con el método. Un carácter diferente puede impedir la carga.

## Paso 4 · Crear formulario FXML
1. Regresa a la carpeta que contiene `listado.fxml`.
2. Clic derecho → **New → File** → `formulario.fxml`.
3. Pega:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.control.*?>
<?import javafx.scene.layout.*?>
<VBox xmlns:fx="http://javafx.com/fxml"
      fx:controller="cl.duoc.inventario.controller.FormularioController"
      prefWidth="480" prefHeight="330" spacing="12">
    <children>
        <Label text="Registrar instrumento"/>
        <TextField fx:id="codigo" promptText="Código (por ejemplo G01)"/>
        <TextField fx:id="nombre" promptText="Nombre del instrumento"/>
        <ComboBox fx:id="categoria" promptText="Selecciona categoría"/>
        <Label fx:id="mensaje" text=""/>
        <HBox spacing="8">
            <children>
                <Button text="Guardar" onAction="#guardar"/>
                <Button text="Volver" onAction="#volver"/>
            </children>
        </HBox>
    </children>
</VBox>
```

## Paso 5 · Crear el controlador del formulario
1. En package `controller`, **New → Java Class** → `FormularioController`.
2. Copia el archivo completo:

```java
package cl.duoc.inventario.controller;

import cl.duoc.inventario.service.InventarioService;
import javafx.fxml.FXML;
import javafx.scene.control.ComboBox;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import java.io.IOException;

public class FormularioController {
    @FXML private TextField codigo;
    @FXML private TextField nombre;
    @FXML private ComboBox<String> categoria;
    @FXML private Label mensaje;
    private InventarioService servicio;
    private Runnable volverAlListado;

    @FXML private void initialize() {
        categoria.getItems().addAll("Guitarra", "Bajo", "Batería", "Teclado");
    }

    public void configurar(InventarioService servicio, Runnable volverAlListado) {
        this.servicio = servicio;
        this.volverAlListado = volverAlListado;
    }

    @FXML private void guardar() {
        try {
            servicio.registrar(codigo.getText(), nombre.getText(),
                    categoria.getValue());
            volverAlListado.run();
        } catch (IllegalArgumentException e) {
            mensaje.setText("Dato inválido: " + e.getMessage());
        } catch (IOException e) {
            mensaje.setText("No se pudo guardar el archivo: " + e.getMessage());
        }
    }

    @FXML private void volver() { volverAlListado.run(); }
}
```

**Checkpoint D:** el controlador **no tiene** `Files.writeString`, `ObjectMapper` ni `Path.of`. Ante una excepción se queda en el formulario y muestra el motivo.

## Paso 6 · Conectar el arranque de la aplicación
1. Abre la clase **HelloApplication.java ya creada** por IntelliJ. No crees otra `Application`.
2. Reemplaza el archivo completo. El ejemplo presupone que `listado.fxml` y `formulario.fxml` están en el mismo paquete de recursos que el `hello-view.fxml` que creó el generador:

```java
package cl.duoc.inventario;

import cl.duoc.inventario.controller.FormularioController;
import cl.duoc.inventario.controller.ListadoController;
import cl.duoc.inventario.dao.JsonInstrumentoDao;
import cl.duoc.inventario.service.InventarioService;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.stage.Stage;
import java.io.IOException;
import java.nio.file.Path;

public class HelloApplication extends Application {
    private final InventarioService servicio = new InventarioService(
            new JsonInstrumentoDao(Path.of("data", "instrumentos.json")));
    private Stage ventana;

    @Override public void start(Stage stage) {
        this.ventana = stage;
        stage.setTitle("Inventario musical");
        try {
            servicio.cargar();
            mostrarListado();
            stage.show();
        } catch (IOException e) {
            new Alert(Alert.AlertType.ERROR,
                    "Error al leer datos. Se conservará el archivo: "
                    + e.getMessage()).showAndWait();
        }
    }

    private void mostrarListado() throws IOException {
        FXMLLoader loader = new FXMLLoader(
                HelloApplication.class.getResource("listado.fxml"));
        Parent root = loader.load();
        ListadoController controlador = loader.getController();
        controlador.configurar(servicio, this::abrirFormulario);
        ventana.setScene(new Scene(root));
    }

    private void mostrarFormulario() throws IOException {
        FXMLLoader loader = new FXMLLoader(
                HelloApplication.class.getResource("formulario.fxml"));
        Parent root = loader.load();
        FormularioController controlador = loader.getController();
        controlador.configurar(servicio, this::abrirListado);
        ventana.setScene(new Scene(root));
    }

    private void abrirFormulario() {
        try { mostrarFormulario(); }
        catch (IOException e) { mostrarError(e); }
    }

    private void abrirListado() {
        try { mostrarListado(); }
        catch (IOException e) { mostrarError(e); }
    }

    private void mostrarError(IOException e) {
        new Alert(Alert.AlertType.ERROR,
                "No se pudo cargar la vista: " + e.getMessage()).showAndWait();
    }

    public static void main(String[] args) { launch(args); }
}
```

3. Si `HelloApplication.class.getResource("listado.fxml")` devuelve `null`, tu archivo está en otra ubicación. Usa una **ruta absoluta de classpath** con `/...` o mueve los FXML a la carpeta real del paquete de Application.
4. Conserva las líneas JavaFX del `module-info.java`; revisa `opens cl.duoc.inventario.controller to javafx.fxml;` de la etapa 02.

**Checkpoint E:** Run abre la tabla vacía. Pulsa **Nuevo instrumento**, selecciona datos y **Guardar**: aparece una fila. Busca `data/instrumentos.json`, cierra la aplicación y ejecútala de nuevo; **la misma fila debe reaparecer**.

### Si falla
- `Location is not set`: nombre/ruta FXML incorrectos.
- `LoadException`: revisa `fx:controller`, `fx:id`, `onAction` y aperturas del módulo.
- `Cannot resolve symbol`: revisa package/import y recarga Maven.
- No aparece carpeta `data`: confirma que se guardó un registro y observa el directorio de trabajo de Run.
- Ventana no abre al iniciar: pudo fallar la lectura JSON; revisa el mensaje. **No borres el archivo sin guardar copia**.

[Ir a las pruebas finales →](04-pruebas.md)
