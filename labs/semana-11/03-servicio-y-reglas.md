# 03 · Validaciones y coordinación de datos con Service

[← DAO y JSON](02-dao-json.md) · [Índice](README.md) · [04 · Interfaz y navegación →](04-interfaz-y-navegacion.md)

**Incremento observable:** el modelo y DAO existentes se integran con reglas de registro; el archivo se escribe solo cuando los datos son válidos. Aún no se programa la interfaz.

## Requisitos funcionales
- Registrar un instrumento válido identificado por código.
- Rechazar campos incompletos o códigos ya registrados.
- Conservar en `ObservableList` solamente los datos confirmados por el DAO.

## Requisitos técnicos
- `InventarioService` utiliza `InstrumentoDao`, no `ObjectMapper`.
- No existe escritura de archivos en controladores; aún no se crean controladores.
- El servicio propaga `IOException` y entrega `IllegalArgumentException` para violaciones de negocio.

## Paso 1 · Crear el servicio
1. En Project abre `src/main/java/cl/duoc/inventario/service`.
2. Clic derecho → **New → Java Class** → `InventarioService`.
3. Pega todo este código:

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
    private final ObservableList<Instrumento> datos =
            FXCollections.observableArrayList();

    public InventarioService(InstrumentoDao dao) { this.dao = dao; }

    public ObservableList<Instrumento> listar() { return datos; }

    public void cargar() throws IOException {
        var recuperados = dao.cargar();
        datos.setAll(recuperados);
    }

    public void registrar(String codigo, String nombre, String categoria)
            throws IOException {
        codigo = codigo == null ? "" : codigo.trim();
        nombre = nombre == null ? "" : nombre.trim();
        categoria = categoria == null ? "" : categoria.trim();

        if (codigo.isBlank() || nombre.isBlank() || categoria.isBlank()) {
            throw new IllegalArgumentException("Completa los tres campos");
        }
        for (Instrumento actual : datos) {
            if (actual.getCodigo().equalsIgnoreCase(codigo)) {
                throw new IllegalArgumentException("Código repetido");
            }
        }

        var nuevos = new ArrayList<>(datos);
        nuevos.add(new Instrumento(codigo, nombre, categoria));
        dao.guardar(nuevos);
        datos.setAll(nuevos);
    }
}
```

**Checkpoint A:** el servicio no contiene referencias a `Stage`, `FXMLLoader` ni `ObjectMapper`. Si se produce `IOException`, no agrega la nueva fila a la tabla.

## Paso 2 · Probar el servicio sin pantalla

1. Crea una clase temporal `PruebaService.java` **en el mismo paquete base de `HelloApplication`**, no dentro del paquete `service`.
2. Inserta este ejemplo; usa un archivo de pruebas diferente de la aplicación final:

```java
package cl.duoc.inventario;

import cl.duoc.inventario.dao.JsonInstrumentoDao;
import cl.duoc.inventario.service.InventarioService;
import java.nio.file.Path;

public class PruebaService {
    public static void main(String[] args) throws Exception {
        var servicio = new InventarioService(
                new JsonInstrumentoDao(Path.of("data", "instrumentos-prueba.json")));
        servicio.registrar("G01", "Guitarra", "Guitarra");
        System.out.println("Registrados: " + servicio.listar().size());
        try {
            servicio.registrar("g01", "Otra guitarra", "Guitarra");
            System.out.println("ERROR: debería rechazar duplicado");
        } catch (IllegalArgumentException e) {
            System.out.println("Rechazo esperado: " + e.getMessage());
        }
        System.out.println("Total final: " + servicio.listar().size());
    }
}
```

3. Ejecútala desde IntelliJ en una **carpeta de trabajo donde el archivo de pruebas no exista**. Si ya existía `data/instrumentos-prueba.json`, haz una copia y elimina solamente ese archivo de prueba antes de ejecutar.
4. Comprueba `Registrados: 1`, `Rechazo esperado: Código repetido`, `Total final: 1`.
5. Elimina `PruebaService.java` y el archivo de prueba cuando termines. Conserva `InventarioService.java`.

**Checkpoint B (antes de avanzar):** registraste un caso válido y rechazaste uno duplicado **sin interfaz gráfica**. Puedes identificar qué método valida, cuál persiste y cuál actualiza `ObservableList`.

**Cuando falla:** comprueba los paquetes, la recarga Maven, el constructor de `Instrumento`, `module-info.java` y los permisos de `data/`.

[Continuar a construir JavaFX →](04-interfaz-y-navegacion.md)
