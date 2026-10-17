# 03 · Dar vida al botón: Controller, objeto y validación

[← 02 · Vista FXML](02-vista-fxml.md) · [Índice](README.md) · [04 · Pruebas →](04-verificacion-y-tarea.md)

## ¿Qué haremos ahora?

Ya tenemos una ventana que **se ve**, pero el botón aún no hace nada. Crearemos una clase **Vehiculo** (modelo) que protege el dato, y un **MainController** que toma lo escrito y le pide al modelo crear un vehículo.

**Flujo completo:** escribes patente → clic en Registrar → Controller lee TextField → constructor de Vehiculo verifica patente → Controller muestra resultado o error.

### Paso 1. Crea el modelo `Vehiculo.java`

1. En el panel **Project** de IntelliJ, expande `src/main/java` y ubica el paquete `cl.duoc.dsy1102.w09.demo`. Haz clic derecho sobre el paquete → **New → Package** → escribe `model` (debe quedar `cl.duoc.dsy1102.w09.demo.model`).
2. Clic derecho sobre el paquete `model` → **New → Java Class** → escribe `Vehiculo` y confirma. IntelliJ creará `Vehiculo.java`.
3. Escribe:

```java
package cl.duoc.dsy1102.w09.demo.model;

public final class Vehiculo {
    private final String patente;

    public Vehiculo(String patente) {
        if (patente == null || patente.isBlank()) {
            throw new IllegalArgumentException("La patente no puede estar vacía");
        }
        this.patente = patente.trim().toUpperCase();
    }

    public String getPatente() {
        return patente;
    }
}
```

**Entiende cada decisión:** `private` evita modificar libremente la patente; `final` la conserva una vez creado; el constructor rechaza nulos o cadenas en blanco; `trim()` quita espacios alrededor y `toUpperCase()` estandariza la patente; `getPatente` permite consultar sin exponer el atributo.

**Pregunta rápida:** ¿por qué validar aquí y no únicamente en la pantalla? Porque otra interfaz —o una prueba Java— también podría crear un `Vehiculo` y debe respetar la misma regla.

**Comprueba:** el nombre del archivo es `Vehiculo.java` y la primera línea coincide con la carpeta `model`. Si ves errores, revisa las llaves y el paquete.

### Paso 2. Crea el controlador `MainController.java`

1. En IntelliJ, clic derecho en el paquete `cl.duoc.dsy1102.w09.demo` → **New → Package** → escribe `ui`.
2. Clic derecho en el nuevo paquete `ui` → **New → Java Class** → escribe `MainController`.
3. Copia lo siguiente:

```java
package cl.duoc.dsy1102.w09.demo.ui;

import cl.duoc.dsy1102.w09.demo.model.Vehiculo;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;

public class MainController {
    @FXML private TextField patenteField;
    @FXML private Label resultadoLabel;

    @FXML
    private void registrar() {
        try {
            Vehiculo vehiculo = new Vehiculo(patenteField.getText());
            resultadoLabel.setText("Vehículo disponible: " + vehiculo.getPatente());
        } catch (IllegalArgumentException exception) {
            resultadoLabel.setText(exception.getMessage());
        }
    }
}
```

**Línea por línea, sin misterio:**

- `@FXML` permite que JavaFX conecte el controlador con componentes y métodos declarados en el FXML.
- `patenteField` recibirá la referencia al TextField con el mismo `fx:id`.
- `resultadoLabel` recibirá el Label donde mostramos el mensaje.
- `registrar()` será invocado por el clic.
- `patenteField.getText()` obtiene lo escrito por la persona.
- `new Vehiculo(...)` ejecuta **el constructor y su validación**.
- `setText` cambia lo que se ve.
- `catch` evita que una entrada inválida termine en un error sin explicar al usuario.

**Comprueba:** `MainController` debe ser `public` y los identificadores son sensibles a mayúsculas: `patenteField` es distinto de `patentefield`.

### Paso 3. Conecta FXML con el controlador

1. Abre `MainView.fxml` en Scene Builder.
2. Selecciona **VBox** y asigna **Controller class** = `cl.duoc.dsy1102.w09.demo.ui.MainController`.
3. Selecciona **TextField** y verifica `fx:id = patenteField`.
4. Selecciona el **último Label** y verifica `fx:id = resultadoLabel`.
5. Selecciona el botón y establece **On Action** = `#registrar`.
6. Guarda el FXML.

**¿Qué líneas nuevas deberían aparecer?** En la etiqueta inicial de `VBox`:

```xml
fx:controller="cl.duoc.dsy1102.w09.demo.ui.MainController"
```

En el botón:

```xml
<Button text="Registrar" onAction="#registrar"/>
```

**No borres** los atributos `fx:id` de TextField y Label.

Si quieres comparar el **archivo final completo**, consulta [MainView.fxml del ejemplo](../../ejemplos/semana-09/proyecto-demo/src/main/resources/cl/duoc/dsy1102/w09/demo/ui/MainView.fxml). Los identificadores y rutas usados aquí coinciden con ese ejemplo.

### Paso 4. Ejecuta y prueba el caso correcto

1. Guarda todos los archivos.
2. En el panel **Maven** de IntelliJ, ejecuta **Plugins → javafx → javafx:run** (o **Execute Maven Goal** → `clean javafx:run`).

3. En el campo escribe `ABCD12`.
4. Haz clic **Registrar** una sola vez.
5. **Debes observar:** `Vehículo disponible: ABCD12`.

**¿Qué pasó?** JavaFX detectó el evento, invocó `registrar()`, el constructor aceptó la patente y `resultadoLabel` cambió.

### Paso 5. Prueba el caso inválido (es parte del requisito, no opcional)

1. Borra el contenido del TextField.
2. Haz clic **Registrar**.
3. **Debes observar:** `La patente no puede estar vacía`.
4. Verifica que **la ventana siga abierta**.
5. Escribe únicamente tres espacios e intenta registrar otra vez: debe mostrar el mismo error.
6. Escribe `  ABCD12  ` (con espacios alrededor), registra y comprueba `Vehículo disponible: ABCD12`.

El modelo acepta patentes útiles, rechaza las entradas vacías y normaliza espacios exteriores.

### Si algo no funciona

**`javafx.fxml.LoadException: ... Controller`:** compara carácter por carácter `fx:controller` con el `package` más el nombre de `MainController`. La clase debe existir bajo `src/main/java`.

**`Error resolving onAction='#registrar'`:** revisa que exista el método `@FXML private void registrar()` y que el botón tenga `onAction="#registrar"` exactamente.

**`NullPointerException` al hacer clic:** algún `fx:id` no coincide con el campo Java; revisa `patenteField` y `resultadoLabel`, y que uses **fx:id**, no la propiedad ordinaria `id`.

**El clic no cambia el Label:** verifica el botón, el método, los identificadores y que se haya guardado el FXML. Luego detén y reinicia desde Maven.

**El modelo aparece con error de importación:** verifica `package cl.duoc.dsy1102.w09.demo.model;` en Vehiculo y el `import` correspondiente en Controller.

**Los errores no aparecen en el Label:** verifica que el `catch` sea de `IllegalArgumentException` y que se capture la excepción lanzada por el constructor.

> **Regla:** no soluciones un problema borrando la validación del constructor. Si el dato es incorrecto, el programa **debe** indicarlo.

## ✅ Checkpoint de la etapa 03

- [ ] `Vehiculo` compila y valida su patente.
- [ ] El Controller conecta ambos campos y el método del botón.
- [ ] `ABCD12` muestra `Vehículo disponible: ABCD12`.
- [ ] Vacío y solo espacios muestran el error.
- [ ] La ventana continúa funcionando después de un error.
- [ ] El modelo **no importa JavaFX**.

**Commit sugerido (si habilitaste Git):** `feat: vincular formulario a objeto Vehiculo y validar entrada`.

**Siguiente:** [04 · Verificar, entregar y ampliar](04-verificacion-y-tarea.md).
