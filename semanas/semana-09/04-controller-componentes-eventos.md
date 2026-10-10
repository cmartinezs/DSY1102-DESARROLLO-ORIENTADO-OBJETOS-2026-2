# 04 · Controller, componentes UI y eventos

## Flujo
`Button.onAction` → método del Controller → datos de TextField → instancia de un objeto Java → resultado mostrado en Label.

```java
@FXML private TextField nombreField;
@FXML private Label resultadoLabel;

@FXML private void registrar() {
    String nombre = nombreField.getText().trim();
    if (nombre.isEmpty()) {
        resultadoLabel.setText("Ingresa un nombre");
        return;
    }
    Persona persona = new Persona(nombre); // clase Java sin dependencias JavaFX
    resultadoLabel.setText("Registrada: " + persona.getNombre());
}
```

El fragmento es conceptual: `Persona` debe existir y mantener la validación de negocio que corresponda. Mira un ejemplo ejecutable en [proyecto-demo](../../ejemplos/semana-09/proyecto-demo/).

## Distinciones importantes
- **Vista/FXML:** estructura y controles.
- **Controller:** adapta gestos del usuario a llamadas de Java y actualiza presentación.
- **Modelo/servicio:** mantiene datos, reglas y operaciones; **no** importa clases JavaFX.
- **Validación de entrada:** impedir valores vacíos con feedback visible.
- **Validación de dominio:** mantener invariantes del modelo incluso fuera de la UI.

**Checkpoint:** mostrar ruta válida e inválida; explicar qué cambiaría si la misma operación se ejecutara desde consola.
