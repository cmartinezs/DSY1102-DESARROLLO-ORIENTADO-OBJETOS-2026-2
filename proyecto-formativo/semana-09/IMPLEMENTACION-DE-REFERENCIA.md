# Implementación de referencia · PetCare 09

**Referencia didáctica, no solución oficial para copiar.** Adapta nombres de paquetes, contratos y constructores a tu PetCare real. La guía muestra sólo el incremento JavaFX.

## Posible estructura
```text
cl.duoc.petcare
├── core/model/...            (ya existente)
├── core/service/PetCareService.java (ya existente)
├── cli/App.java              (se conserva)
└── ui/
    ├── PetCareFxApp.java
    ├── MascotaController.java
    └── mascota.fxml          (ubicado en resources)
```

## Fragmentos focalizados
```java
// El FXML apunta al Controller; el Controller delega en el servicio.
@FXML private TextField nombreField;
@FXML private Label estadoLabel;

@FXML
private void registrar() {
    try {
        // Adapta creación/identificador y método a TU contrato real.
        // petCareService.registrar(...);
        estadoLabel.setText("Operación completada");
    } catch (IllegalArgumentException ex) {
        estadoLabel.setText(ex.getMessage());
    }
}
```
Para una base runnable sin PetCare completo, estudia [el ejemplo independiente](../../ejemplos/semana-09/proyecto-demo/).

## Decisiones propias
- Elegir registro o consulta según el servicio disponible.
- Decidir cómo compartir una instancia de Service sin crear datos duplicados.
- Escoger mensaje de éxito y manejo de error.
- Conservar toda regla de dominio donde estaba; el Controller sólo coordina presentación.

## Errores frecuentes
Crear un PetCareService nuevo en cada clic perdiendo estado; copiar colecciones al Controller; mover validaciones de negocio desde modelo a FXML; romper CLI al añadir la UI.
