# 03 · Dar vida al botón: Controller, objeto y validación

[← 02 · Vista FXML](02-vista-fxml.md) · [Índice](README.md) · [04 · Pruebas →](04-verificacion-y-tarea.md)

## ¿Qué haremos ahora?

Ya tenemos una ventana que **se ve**, pero el botón aún no hace nada. Crearemos una clase **Mascota** (modelo) que protege el dato, y un **MainController** que toma lo escrito y le pide al modelo crear una mascota.

**Flujo completo:** escribes nombre → clic en Registrar → Controller lee TextField → constructor de Mascota verifica nombre → Controller muestra resultado o error.

### Paso 1. Crea el modelo `Mascota.java`

1. En `src/main/java/cl/duoc/dsy1102/w09/demo`, crea el paquete `model` si no existe.
2. Dentro, crea **Mascota.java**.
3. Escribe:

```java
package cl.duoc.dsy1102.w09.demo.model;

public final class Mascota {
    private final String nombre;

    public Mascota(String nombre) {
        if (nombre == null || nombre.isBlank()) {
            throw new IllegalArgumentException("El nombre no puede estar vacío");
        }
        this.nombre = nombre.trim();
    }

    public String getNombre() {
        return nombre;
    }
}
```

**Entiende cada decisión:** `private` evita modificar libremente el nombre; `final` lo conserva una vez creado; el constructor rechaza nulos o cadenas en blanco y `trim` quita espacios alrededor; `getNombre` permite consultar sin exponer el atributo.

**Pregunta rápida:** ¿por qué validar aquí y no únicamente en la pantalla? Porque otra interfaz —o una prueba Java— también podría crear una `Mascota` y debe respetar la misma regla.

**Comprueba:** el nombre del archivo es `Mascota.java` y la primera línea coincide con la carpeta `model`. Si ves errores, revisa las llaves y el paquete.

### Paso 2. Crea el controlador `MainController.java`

1. En `src/main/java/cl/duoc/dsy1102/w09/demo`, crea el paquete `ui`.
2. Dentro, crea **MainController.java**.
3. Copia lo siguiente:

```java
package cl.duoc.dsy1102.w09.demo.ui;

import cl.duoc.dsy1102.w09.demo.model.Mascota;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;

public class MainController {
    @FXML private TextField nombreField;
    @FXML private Label resultadoLabel;

    @FXML
    private void registrar() {
        try {
            Mascota mascota = new Mascota(nombreField.getText());
            resultadoLabel.setText("Mascota: " + mascota.getNombre());
        } catch (IllegalArgumentException exception) {
            resultadoLabel.setText(exception.getMessage());
        }
    }
}
```

**Línea por línea, sin misterio:**

- `@FXML` permite que JavaFX conecte el controlador con componentes y métodos declarados en el FXML.
- `nombreField` recibirá la referencia al TextField con el mismo `fx:id`.
- `resultadoLabel` recibirá el Label donde mostramos el mensaje.
- `registrar()` será invocado por el clic.
- `nombreField.getText()` obtiene lo escrito por la persona.
- `new Mascota(...)` ejecuta **el constructor y su validación**.
- `setText` cambia lo que se ve.
- `catch` evita que una entrada inválida termine en un error sin explicar al usuario.

**Comprueba:** `MainController` debe ser `public` y los nombres son sensibles a mayúsculas: `nombreField` es distinto de `nombrefield`.

### Paso 3. Conecta FXML con el controlador

1. Abre `MainView.fxml` en Scene Builder.
2. Selecciona **VBox** y asigna **Controller class** = `cl.duoc.dsy1102.w09.demo.ui.MainController`.
3. Selecciona **TextField** y verifica `fx:id = nombreField`.
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

Si quieres comparar el **archivo final completo**, consulta [MainView.fxml del ejemplo](../../ejemplos/semana-09/proyecto-demo/src/main/resources/cl/duoc/dsy1102/w09/demo/ui/MainView.fxml). Los nombres y rutas usados aquí coinciden con ese ejemplo.

### Paso 4. Ejecuta y prueba el caso correcto

1. Guarda todos los archivos.
2. En la terminal, desde la carpeta con `pom.xml`, ejecuta:

```bash
mvn clean javafx:run
```

3. En el campo escribe `Luna`.
4. Haz clic **Registrar** una sola vez.
5. **Debes observar:** `Mascota: Luna`.

**¿Qué pasó?** JavaFX detectó el evento, invocó `registrar()`, el constructor aceptó el nombre y `resultadoLabel` cambió.

### Paso 5. Prueba el caso inválido (es parte del requisito, no opcional)

1. Borra el contenido del TextField.
2. Haz clic **Registrar**.
3. **Debes observar:** `El nombre no puede estar vacío`.
4. Verifica que **la ventana siga abierta**.
5. Escribe únicamente tres espacios e intenta registrar otra vez: debe mostrar el mismo error.
6. Escribe `  Luna  ` (con espacios alrededor), registra y comprueba `Mascota: Luna`.

El modelo acepta nombres útiles, rechaza los vacíos y normaliza espacios exteriores.

### Si algo no funciona

**`javafx.fxml.LoadException: ... Controller`:** compara carácter por carácter `fx:controller` con el `package` más el nombre de `MainController`. La clase debe existir bajo `src/main/java`.

**`Error resolving onAction='#registrar'`:** revisa que exista el método `@FXML private void registrar()` y que el botón tenga `onAction="#registrar"` exactamente.

**`NullPointerException` al hacer clic:** algún `fx:id` no coincide con el campo Java; revisa `nombreField` y `resultadoLabel`, y que uses **fx:id**, no la propiedad ordinaria `id`.

**El clic no cambia el Label:** verifica el botón, el método, los nombres y que se haya guardado el FXML. Luego detén y reinicia desde Maven.

**El modelo aparece con error de importación:** verifica `package cl.duoc.dsy1102.w09.demo.model;` en Mascota y el `import` correspondiente en Controller.

**Los errores no aparecen en el Label:** verifica que el `catch` sea de `IllegalArgumentException` y que se capture la excepción lanzada por el constructor.

> **Regla:** no soluciones un problema borrando la validación del constructor. Si el dato es incorrecto, el programa **debe** indicarlo.

## ✅ Checkpoint de la etapa 03

- [ ] `Mascota` compila y valida su nombre.
- [ ] El Controller conecta ambos campos y el método del botón.
- [ ] `Luna` muestra `Mascota: Luna`.
- [ ] Vacío y solo espacios muestran el error.
- [ ] La ventana continúa funcionando después de un error.
- [ ] El modelo **no importa JavaFX**.

**Commit sugerido:** `feat: vincular formulario a objeto Mascota y validar entrada`.

**Siguiente:** [04 · Verificar, entregar y ampliar](04-verificacion-y-tarea.md).
