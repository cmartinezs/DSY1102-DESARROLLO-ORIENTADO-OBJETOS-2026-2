# 02 · Diseñar la vista FXML con Scene Builder

[← 01 · Entorno](01-entorno-y-arranque.md) · [Índice](README.md) · [03 · Controller →](03-controller-eventos.md)

## ¿Qué haremos y por qué?

Ya sabes abrir una ventana. Ahora queremos crear el formulario **sin dibujar cada control manualmente en Java**. El archivo **FXML** describe qué elementos aparecen. **Scene Builder** permite colocarlos visualmente. El botón todavía no registrará vehículos: eso viene en la etapa 03.

**Antes de continuar:** confirma que superaste el checkpoint de la etapa 01.

### Paso 1. Crea la carpeta de recursos correcta

1. En **IntelliJ IDEA**, abre el panel **Project** (habitualmente `Alt+1`).
2. Ubica `src/main`.
3. La carpeta `resources` debió quedar creada en la etapa 01. Si falta, clic derecho sobre `main` → **New → Directory** → `resources`, y luego clic derecho sobre ella → **Mark Directory as → Resources Root** si aún no tiene ese rol.
4. Haz clic derecho en **resources → New → Directory** y crea la ruta `cl/duoc/dsy1102/w09/demo/ui` (si tu IntelliJ no admite rutas con `/` de una vez, crea una carpeta dentro de la anterior).
5. Haz clic derecho en la carpeta final `ui` → **New → File**, escribe **MainView.fxml** y confirma. No elijas «Java Class»: FXML es un archivo de texto XML.

La ruta completa es:

```text
src/main/resources/cl/duoc/dsy1102/w09/demo/ui/MainView.fxml
```

**Comprueba:** el archivo termina en `.fxml`, no `.fxml.txt`. Guarda.

### Paso 2. Abre el archivo en Scene Builder

1. Inicia Scene Builder.
2. En Scene Builder usa **File → Open** y busca el archivo `MainView.fxml` dentro de la carpeta del proyecto creada en IntelliJ.
3. Si está completamente vacío y Scene Builder no lo abre, crea una nueva vista en Scene Builder con **File → New**, elige **VBox** como raíz y guárdala **en esa misma ruta**, con el mismo nombre.
4. Debes visualizar el área de diseño, el árbol **Hierarchy** y el panel **Inspector**.

**Si Scene Builder no está instalado o el archivo no abre:** puedes pegar el FXML mínimo del paso 5 desde tu IDE, guardarlo y reabrirlo en Scene Builder. No bloquees todo el laboratorio por el editor visual.

### Paso 3. Construye el formulario visualmente

1. En **Library**, busca `VBox`. Si aún no es el contenedor principal, colócalo como raíz.
2. Selecciona VBox. En **Layout**, configura `Spacing = 12` y una separación interna (**Padding**) de `16` en los cuatro lados; centra el contenido con `Alignment = CENTER`.
3. Arrastra un **Label** dentro de VBox. En **Properties → Text**, escribe `Registro de vehículo disponible`.
4. Debajo agrega un **TextField**. En **Properties → Prompt Text**, escribe `Patente del vehículo`.
5. Debajo agrega un **Button**. En **Properties → Text**, escribe `Registrar`.
6. Debajo agrega un segundo **Label**. En **Properties → Text**, escribe `Completa el formulario`.
7. En **Hierarchy**, comprueba el orden: `Label → TextField → Button → Label`. Si un control quedó fuera de VBox, muévelo al interior.

**¿Por qué estos cuatro elementos?** El primer Label explica la pantalla, TextField recoge texto, Button representa la acción y el último Label mostrará resultados o errores.

### Paso 4. Asigna solo los identificadores (el controlador vendrá después)

1. Selecciona **TextField**.
2. En **Inspector → Code → fx:id**, escribe exactamente `patenteField` (sin `#`).
3. Selecciona el **segundo Label** y en **fx:id** escribe `resultadoLabel`.
4. **Deja vacío** el campo **On Action** del botón.
5. **No asignes aún** una **Controller class** al elemento raíz VBox: la clase `MainController.java` todavía no existe. Ambos atributos se crearán en la etapa 03. Así evitamos un error de carga de FXML.

### Paso 5. Comprueba el FXML como texto

Guarda (`Ctrl+S`) y abre el archivo desde el IDE. Tu resultado debe ser equivalente al siguiente (pueden cambiar algunos espacios o imports porque Scene Builder los genera):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.geometry.Insets?>
<?import javafx.scene.control.Button?>
<?import javafx.scene.control.Label?>
<?import javafx.scene.control.TextField?>
<?import javafx.scene.layout.VBox?>
<VBox alignment="CENTER" spacing="12"
      xmlns="http://javafx.com/javafx/21"
      xmlns:fx="http://javafx.com/fxml/1">
    <padding>
        <Insets top="16" right="16" bottom="16" left="16"/>
    </padding>
    <Label text="Registro de vehículo disponible"/>
    <TextField fx:id="patenteField" promptText="Patente del vehículo"/>
    <Button text="Registrar"/>
    <Label fx:id="resultadoLabel" text="Completa el formulario"/>
</VBox>
```

**Importante para este checkpoint:** todavía **no** hay `fx:controller` ni `onAction` en el fragmento ejecutable de la etapa 02. En la etapa 03 los agregaremos **juntos** con la clase Java. Si Scene Builder ya insertó esos atributos, retíralos provisionalmente para probar esta etapa.

**Comprueba:** `patenteField` y `resultadoLabel` son distintos; no inventes mayúsculas ni tildes en esos identificadores.

### Paso 6. Haz que MainApp cargue el FXML

1. Abre `src/main/java/cl/duoc/dsy1102/w09/demo/MainApp.java`.
2. Selecciona todo el contenido (`Ctrl+A`) y reemplaza la implementación temporal por el código siguiente. **No cambies el nombre del paquete ni la ruta del recurso**: ambos ya quedaron establecidos en la etapa 01.

```java
package cl.duoc.dsy1102.w09.demo;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class MainApp extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader loader = new FXMLLoader(
            MainApp.class.getResource("/cl/duoc/dsy1102/w09/demo/ui/MainView.fxml")
        );
        Scene scene = new Scene(loader.load(), 440, 240);
        stage.setTitle("Rent-a-Car - Semana 09");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

**¿Qué cambió?** Antes construíamos el Label desde Java. Ahora `FXMLLoader` **lee** `MainView.fxml` desde `resources`. El `/` inicial de la ruta significa «desde la raíz de recursos».

3. Guarda Java y FXML.
4. En IntelliJ abre **View → Tool Windows → Maven**, expande **Plugins → javafx** y ejecuta **javafx:run**. Si no aparece, usa **Execute Maven Goal** y escribe `clean javafx:run`.

**Deberías observar:** una ventana con título, campo de texto, botón **Registrar** y mensaje **Completa el formulario**. El botón **todavía no hace nada**, y eso es normal **en este punto**.

### Si algo no funciona

- **`Location is not set`**: la ruta del `getResource` no apunta al FXML. Revisa letras, subcarpetas, extensión y que esté bajo `src/main/resources`.
- **`LoadException` por Controller**: eliminaste la clase temporal, pero el FXML ya tiene `fx:controller` o `onAction`; retíralos ahora y agrégalos en la etapa 03.
- **El campo no se ve**: comprueba en **Hierarchy** que todos los controles estén dentro de la VBox.
- **`XMLStreamException`**: existe un error de sintaxis XML; compara signos `<`, `>`, comillas y cierre de etiquetas con el paso 5.
- **La ventana muestra el texto anterior de la etapa 01**: `MainApp` todavía crea un `Label` en Java, o ejecutaste otro proyecto.

## ✅ Checkpoint de la etapa 02

- [ ] El FXML está dentro de `src/main/resources`.
- [ ] El formulario muestra sus cuatro controles en orden.
- [ ] `MainApp` usa `FXMLLoader`.
- [ ] La ejecución funciona aunque el botón todavía no tenga comportamiento.
- [ ] Sé explicar dónde se guarda FXML y por qué no es una clase Java.

**Commit sugerido (cuando hayas habilitado Git):** `feat: crear formulario inicial con FXML`.

**Siguiente:** [03 · Conectar Controller, evento y modelo](03-controller-eventos.md). **Aquí sí agregaremos el controlador.**
