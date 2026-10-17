# 03 · Dar vida al formulario: controlador, modelo y evento

[← 02 · Vista FXML](02-vista-fxml.md) · [Índice](README.md) · [04 · Pruebas →](04-verificacion-y-tarea.md)

## Cómo funciona lo que construirás

Al hacer clic en Registrar: **vista FXML → controlador → constructor de Vehiculo → mensaje en la vista**. El constructor es responsable de rechazar patentes vacías, aunque no se use JavaFX.

### Paso 1 · Identifica el paquete generado

1. Abre `HelloController.java` en IntelliJ.
2. Copia el nombre del paquete que aparece en la primera línea `package ...;`. Usaremos **ese mismo paquete** para `Vehiculo` y el controlador.
3. En el ejemplo del laboratorio se muestra `cl.duoc.dsy1102.w09.demo`. **Si IntelliJ creó otro nombre, cambia la línea package de los ejemplos y el atributo fx:controller por el paquete real**.

> Mantendremos el modelo en el mismo paquete del controlador para no introducir configuración modular extra. Es una simplificación didáctica de esta primera clase JavaFX.

### Paso 2 · Crea la clase Vehiculo

1. En el panel **Project**, busca el paquete donde existe `HelloController.java`.
2. Haz clic derecho sobre ese paquete → **New → Java Class**.
3. Escribe `Vehiculo` y presiona Enter.
4. Sustituye el contenido de `Vehiculo.java` por el siguiente código. **Conserva el package real de tu proyecto**:

```java
package cl.duoc.dsy1102.w09.demo;

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

**Entiende lo que acabas de hacer:** `private` protege el dato, `final` impide reasignarlo, el constructor evita nombres vacíos y `trim().toUpperCase()` quita espacios exteriores y transforma la patente a mayúsculas. `getPatente()` permite consultar el resultado.

**Checkpoint pequeño:** IntelliJ no marca `Vehiculo.java` con errores de compilación.

### Paso 3 · Modifica el HelloController generado

1. Abre el **HelloController.java** que creó IntelliJ. **No crees otro Controller en paralelo**.
2. Selecciona su contenido y reemplázalo por el siguiente. Conserva el mismo paquete real del paso 1:

```java
package cl.duoc.dsy1102.w09.demo;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;

public class HelloController {
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

**¿Qué significa?** `@FXML` conecta atributos y métodos del controlador con FXML; `getText()` lee la patente; `new Vehiculo(...)` valida; `setText()` muestra el resultado. Si la patente está vacía, el bloque `catch` presenta un aviso en vez de detener la aplicación.

### Paso 4 · Conecta el FXML con ese Controller

1. En IntelliJ abre **hello-view.fxml**.
2. Busca la etiqueta inicial `<VBox ...>`.
3. Agrégale el atributo `fx:controller` **con el paquete que viste en HelloController.java**, por ejemplo:

```xml
fx:controller="cl.duoc.dsy1102.w09.demo.HelloController"
```

4. Busca el botón Registrar y agrega el atributo `onAction="#registrar"`, de manera que quede:

```xml
<Button text="Registrar" onAction="#registrar"/>
```

5. Comprueba que el TextField tenga `fx:id="patenteField"` y el Label de resultado tenga `fx:id="resultadoLabel"`.
6. Guarda todos los archivos.

**Si usas Scene Builder:** selecciona la raíz VBox y escribe la clase del controlador en **Controller class**; luego selecciona el botón y escribe `#registrar` en **On Action**. Guarda.

**No escribas** un nombre de controlador distinto al de la clase Java: ambos deben coincidir.

### Paso 5 · Ejecuta y comprueba

1. Abre `HelloApplication.java`.
2. Haz clic en el ícono verde junto a `main` → **Run**.
3. Escribe `ABCD12` y pulsa **Registrar**.
4. **Resultado esperado:** `Vehículo disponible: ABCD12`.
5. Borra el campo y pulsa **Registrar**.
6. **Resultado esperado:** `La patente no puede estar vacía`. La ventana sigue abierta.
7. Escribe `  abcd12  ` y confirma que la pantalla muestra `ABCD12`.

### Si algo falla

- **`LoadException` por controlador:** copia literalmente el valor de `package` de `HelloController.java` y añade `.HelloController` en `fx:controller`.
- **Error con `module-info.java` o acceso reflectivo:** si el proyecto tiene `module-info.java`, revisa que el paquete del Controller figure en una directiva `opens ... to javafx.fxml;`. Si está en el mismo paquete generado, normalmente IntelliJ ya lo dejó configurado; **no borres ese archivo**.
- **`NullPointerException` tras hacer clic:** revisa que `patenteField` y `resultadoLabel` coincidan letra por letra en Java y `fx:id` de FXML.
- **Error `onAction='#registrar'`:** comprueba que el método se llama `registrar` y está anotado con `@FXML`.
- **Sigue saliendo Hello!:** tal vez ejecutas otro proyecto o no guardaste `hello-view.fxml`. Vuelve al checkpoint anterior.

## ✅ Checkpoint de la etapa 03

- [ ] No creé otro proyecto ni otra clase Application.
- [ ] Reutilicé `HelloController.java` y `hello-view.fxml` generados.
- [ ] Creé la clase simple `Vehiculo`.
- [ ] La patente válida se registra y la vacía muestra error.
- [ ] El modelo no importa JavaFX.

**Siguiente:** [04 · Verificar y ampliar](04-verificacion-y-tarea.md).
