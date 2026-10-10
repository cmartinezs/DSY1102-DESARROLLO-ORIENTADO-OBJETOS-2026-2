# 03 · Scene Builder y FXML

FXML describe declarativamente el árbol de interfaz. Scene Builder es **un editor** que facilita construir esa descripción: el archivo resultante sigue siendo XML legible y versionable.

## Flujo de trabajo
1. Diseñar un formulario sencillo con `VBox`, `Label`, `TextField`, `Button`.
2. Guardar `MainView.fxml` en `src/main/resources/...`.
3. Declarar `fx:controller` con el nombre completo de la clase Java.
4. Dar un `fx:id` a cada control que deba leerse desde el Controller.
5. Definir `onAction="#registrar"` en el botón y el método `@FXML` correspondiente.
6. Cargar el recurso mediante `FXMLLoader` desde `start(Stage)`.

Ejemplo breve:
```xml
<VBox xmlns:fx="http://javafx.com/fxml" fx:controller="cl.duoc.dsy1102.w09.demo.ui.MainController">
    <TextField fx:id="nombreField"/>
    <Button text="Aceptar" onAction="#registrar"/>
</VBox>
```

Este fragmento sirve para ver las asociaciones; el FXML completo con imports y layout está en el [proyecto demo](../../ejemplos/semana-09/proyecto-demo/).

## Error típico
Un `fx:id` que no coincide con un campo `@FXML`, una clase `fx:controller` incorrecta o una ruta de recurso errónea impide cargar o utilizar la vista.

**Checkpoint:** editar un FXML en Scene Builder, guardar, ejecutar y reconocer su Controller.
