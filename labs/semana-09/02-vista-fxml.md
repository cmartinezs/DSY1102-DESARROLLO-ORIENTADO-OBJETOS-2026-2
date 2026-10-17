# 02 · Transformar la vista generada en el formulario Rent-a-Car

[← 01 · Crear proyecto](01-entorno-y-arranque.md) · [Índice](README.md) · [03 · Controlador →](03-controller-eventos.md)

## ¿Qué vamos a lograr?

La ventana inicial de IntelliJ ya funciona. **No crearemos otro proyecto ni otro FXML:** vamos a modificar el archivo que el generador creó para cambiar el ejemplo «Hello!» por nuestro formulario de patente.

### Paso 1 · Encuentra el FXML que ya existe

1. En IntelliJ, abre **View → Tool Windows → Project**.
2. Despliega `src/main/resources`.
3. Busca **hello-view.fxml**, generalmente dentro de una carpeta con el nombre del paquete.
4. Ábrelo con doble clic y observa que contiene el botón del ejemplo.
5. En `HelloApplication.java`, identifica dónde aparece `FXMLLoader`: carga ese archivo FXML.

**Checkpoint:** sabes qué archivo FXML se muestra al ejecutar. **No crees `MainView.fxml` ni otro FXML paralelo.**

### Paso 2 · Decide cómo lo editarás

**Ruta recomendada, sin instalaciones adicionales:** editar `hello-view.fxml` como texto en IntelliJ, copiando la vista completa del paso 3.

**Si tienes Scene Builder instalado:** abre el FXML con Scene Builder mediante las opciones del IDE (si aparecen) o desde Scene Builder → **File → Open** y selecciona el archivo. Usa el panel de jerarquía para construir `VBox`, un título `Label`, `TextField`, `Button` y un `Label` de resultado. Luego guarda el archivo. La vista debe quedar equivalente al paso 3.

**Para estudiantes que recién comienzan:** la ruta de texto está completamente documentada y es suficiente; Scene Builder puede utilizarse después para practicar la edición visual.

### Paso 3 · Escribe la vista completa sin controlador por ahora

1. Selecciona la pestaña que muestra **hello-view.fxml** como código.
2. Presiona `Ctrl+A` y pega lo siguiente (reemplaza todo el contenido).
3. Guarda con `Ctrl+S`.

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

**¿Qué hace cada elemento?** `VBox` pone los controles uno bajo el otro; el primer `Label` es el título; `TextField` permite escribir; `Button` representa el registro; el último `Label` mostrará mensajes.

**¿Por qué aún no existe `fx:controller` ni `onAction`?** En esta etapa queremos comprobar primero que **se dibuja la pantalla**; conectaremos la acción después de escribir nuestro Controller en la etapa 03.

### Paso 4 · Ejecuta la ventana modificada

1. Guarda el archivo FXML.
2. Abre `HelloApplication.java`.
3. Haz clic en el ícono verde junto a `main` → **Run 'HelloApplication.main()'**.
4. **Deberías ver:** el título «Registro de vehículo disponible», una entrada con pista «Patente del vehículo», el botón **Registrar** y el texto «Completa el formulario».
5. Escribe cualquier patente de prueba y haz clic. **El botón no hace nada todavía; eso es normal**.

**Si todavía aparece «Hello!»:** verifica que editaste el FXML que carga la clase Application; mira el nombre de archivo dentro de `getResource(...)` y vuelve al paso 1.

### Si algo falla

- **`Location is not set`**: el nombre del archivo FXML o su ubicación ya no coincide con la ruta que carga `HelloApplication`.
- **`LoadException`**: comprueba que copiaste el XML completo y que todavía **no** agregaste un `fx:controller` o `onAction` incorrecto.
- **No se actualiza la ventana:** guarda, detén la ejecución anterior y vuelve a ejecutar `HelloApplication.main()`.
- **El FXML se abre en Scene Builder en vez de mostrar código:** busca la pestaña **Text**/Editor o usa **Open in → Editor**, dependiendo de tu versión de IntelliJ.

## ✅ Checkpoint de la etapa 02

- [ ] Modifiqué el `hello-view.fxml` generado, **sin crear otro**.
- [ ] El formulario muestra `TextField`, `Button` y `Label`.
- [ ] La ventana abre desde la clase Application **original**.
- [ ] El botón aún no registra (eso se hará en la etapa 03).

**Siguiente:** [03 · Conectar controlador y modelo](03-controller-eventos.md).
