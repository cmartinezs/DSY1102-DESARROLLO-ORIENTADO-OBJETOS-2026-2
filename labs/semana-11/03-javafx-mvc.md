# 03 · Service y pantallas JavaFX

## 1. Servicio (única fuente de estado)
```java
package cl.duoc.inventario.service;

import cl.duoc.inventario.dao.InstrumentoDao;
import cl.duoc.inventario.model.Instrumento;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import java.io.IOException;
import java.util.ArrayList;

public class InventarioService {
    private final InstrumentoDao dao;
    private final ObservableList<Instrumento> instrumentos =
            FXCollections.observableArrayList();
    public InventarioService(InstrumentoDao dao) { this.dao = dao; }
    public ObservableList<Instrumento> listar() { return instrumentos; }

    public void cargar() throws IOException {
        var datos = dao.cargar(); // error => no sobrescribe estado
        instrumentos.setAll(datos);
    }

    public void registrar(String codigo, String nombre, String categoria) throws IOException {
        codigo=codigo.trim(); nombre=nombre.trim(); categoria=categoria.trim();
        if (codigo.isBlank() || nombre.isBlank() || categoria.isBlank())
            throw new IllegalArgumentException("Completa todos los campos");
        for (Instrumento i: instrumentos)
            if (i.getCodigo().equalsIgnoreCase(codigo))
                throw new IllegalArgumentException("Código duplicado");
        var nueva = new ArrayList<>(instrumentos);
        nueva.add(new Instrumento(codigo,nombre,categoria));
        dao.guardar(nueva); // sólo cambia lista observable si el archivo quedó guardado
        instrumentos.setAll(nueva);
    }
}
```

## 2. Pantallas
Crea `listado.fxml`: `TableView<Instrumento>` con columnas código, nombre y categoría y botón Nueva inscripción. Crea `formulario.fxml`: tres campos (código, nombre, categoría), mensaje de error, Guardar y Volver. En los respectivos controladores usa `@FXML` y carga las columnas mediante `ReadOnlyStringWrapper`, como ejemplo del uso de propiedades de JavaFX. Todos los `fx:id` y handlers `#guardar`/`#volver` deben coincidir con sus controladores.

## 3. Arranque y navegación
Dentro de la clase `Application` generada, crea **una sola** instancia compartida:
```java
private final InventarioService service = new InventarioService(
    new JsonInstrumentoDao(Path.of("data", "instrumentos.json")));
```
En `start(Stage)`, llama `service.cargar()` **antes** de mostrar la lista. Si ocurre `IOException`, informa al usuario con `Alert(Alert.AlertType.ERROR)` y detén la inicialización sin guardar. Carga `listado.fxml` con `FXMLLoader`, obtiene el controller después de `load()`, invoca su `configurar(service, this::mostrarFormulario)`; desde formulario configura `service` y retorno al listado. Mantén un solo `Stage`.

En `FormularioController.guardar()`, llama `service.registrar(...)` capturando `IllegalArgumentException` (datos incorrectos) e `IOException` (fallo al escribir); muestra mensajes distintos sin navegación en caso de error. **No abras JSON desde un controller.**

**Checkpoint C:** registro válido aparece en la tabla; registro inválido queda en formulario. Apaga la aplicación, vuelve a abrirla y confirma que aparecen datos anteriores.

### Reflexión
Se deja deliberadamente a los estudiantes construir FXML y controladores como ejercicio de la semana. La guía establece contratos y orden verificable, no un proyecto completo para copiar sin razonar.

[Pruebas y entrega](04-pruebas.md)
