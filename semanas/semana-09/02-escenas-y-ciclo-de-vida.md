# 02 · Escenas y ciclo de vida

`Application.launch(...)` inicia el runtime JavaFX. El método `start(Stage primaryStage)` recibe la ventana inicial.

```java
public class App extends Application {
    @Override public void start(Stage stage) {
        Label mensaje = new Label("Mi primer JavaFX");
        Scene scene = new Scene(new StackPane(mensaje), 400, 220);
        stage.setTitle("DSY1102");
        stage.setScene(scene);
        stage.show();
    }
    public static void main(String[] args) { launch(args); }
}
```

## Identifica responsabilidades
- **`Stage`:** ventana.
- **`Scene`:** contenido asociado a un árbol de nodos.
- **`Node`:** control o contenedor de UI.
- **`init()`, `start()`, `stop()`:** puntos del ciclo de vida; para iniciar basta `start`.
- **`show()`:** hace visible la ventana.

Prueba cambiar tamaño, título y texto. Cerrar correctamente la aplicación. Evitar reglas de negocio en `Application`.

**Checkpoint:** explica la diferencia Stage/Scene y señala dónde se construye o carga la vista.
