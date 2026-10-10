# 03 · Vincular Controller, objeto y evento

1. Implementa una clase simple del dominio (por ejemplo `Mascota` con nombre válido y constructor).
2. Asigna `onAction="#registrar"` en el botón FXML.
3. Declara el método `@FXML private void registrar()` y referencias `@FXML` a campos por `fx:id`.
4. En el evento, lee y normaliza entrada; instancia el objeto y presenta resultado en el Label.
5. Muestra error comprensible cuando la entrada es inválida.

Evita colocar `Scanner` o validaciones completas del dominio en Controller. El constructor debe proteger su invariante incluso fuera de JavaFX.

**Checkpoint:** botón crea objeto y actualiza respuesta sin excepciones no controladas.
**Commit:** `feat: vincular eventos de formulario a objetos Java`.
