# 07 · Antes de JavaFX: interfaz, evento y controlador

**Microcápsula de apoyo · 10–15 min · DSY1102 Unidad 2**

## Una interfaz no es la lógica del programa
Una interfaz permite que la persona vea y entregue información; la lógica decide qué significa. En la Cápsula del Tiempo FX, el formulario pregunta autor, texto y plazo; el **Controller** recibe la acción «Guardar»; el **Service** valida y ordena persistir.

| Pregunta | Responsable | Ejemplo |
| --- | --- | --- |
| ¿Qué se muestra? | Vista FXML | `TextField`, `Button`, `ComboBox` |
| ¿Qué ocurrió? | Controller | Clic en «Guardar mensaje» |
| ¿Qué datos son válidos? | Service | Autor no vacío, plazo positivo |
| ¿Cómo se guarda? | DAO | Archivo JSON mediante Jackson |

## FXML, sin confundirlo con Java
FXML es un formato **XML** de declaración de interfaz, no un programa Java ni JSON. Los nombres de las etiquetas describen controles visuales.

```xml
<VBox xmlns:fx="http://javafx.com/fxml"
      fx:controller="ejemplo.FormularioController"
      spacing="8">
    <TextField fx:id="campoAutor" promptText="Autor" />
    <Button text="Guardar" onAction="#guardar" />
</VBox>
```

`fx:id` identifica el control para enlazarlo con Java. `onAction="#guardar"` indica qué método ejecutar ante la acción. El nombre del controlador debe coincidir con la clase Java real.

## En Java: recibir un evento

```java
@FXML private TextField campoAutor;

@FXML
private void guardar() {
    String autor = campoAutor.getText();
    System.out.println("Se pulsó Guardar: " + autor);
}
```

Este fragmento ilustra el enlace, no la aplicación completa. En el proyecto real, `guardar()` llama al Service y controla las excepciones.

## Tres errores habituales
- `Location is not set`: el recurso FXML no está en la ruta indicada.
- `fx:id` distinto del campo Java: no se enlaza el componente esperado.
- Poner reglas de negocio y rutas de archivos dentro de `guardar()`: mezcla responsabilidades y dificulta probar.

## Comprueba
1. ¿FXML debería contener código que escriba JSON? **No.**
2. ¿Hacer clic significa que se guardó correctamente? **No:** puede fallar la validación o el DAO.
3. ¿Qué objeto conoce `@FXML`? **El Controller**, no el modelo del dominio.

**Conexión curricular:** [Semana 09 · Scene Builder y FXML](../../../semanas/semana-09/03-scene-builder-y-fxml.md) y [Controller, controles y eventos](../../../semanas/semana-09/04-controller-componentes-eventos.md).

**Siguiente:** [08 · TableView y ObservableList](08-tablas-observables-y-estado.md).
