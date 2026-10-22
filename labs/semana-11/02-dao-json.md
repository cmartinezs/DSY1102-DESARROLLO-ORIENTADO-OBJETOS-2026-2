# 02 · Contrato DAO y archivo JSON

## 1. Dependencia Maven
En el `pom.xml` **generado por IntelliJ**, incorpora Jackson Databind usando una versión compatible consultada en Maven Central o la sugerida por el docente; conserva las dependencias JavaFX generadas. Ejemplo de bloque (reemplaza `VERSION_JACKSON_VALIDADA` por una versión real antes de compilar):

```xml
<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-databind</artifactId>
  <version>VERSION_JACKSON_VALIDADA</version>
</dependency>
```

**Importante:** es un marcador explícito, NO un `pom.xml` copiable sin adaptación. Si existe `module-info.java`, Jackson requiere que el paquete modelo esté abierto a reflexión y que el módulo pueda acceder a `com.fasterxml.jackson.databind`, según la versión seleccionada.

## 2. Interfaz `InstrumentoDao`
```java
package cl.duoc.inventario.dao;
import cl.duoc.inventario.model.Instrumento;
import java.io.IOException;
import java.util.List;

public interface InstrumentoDao {
    List<Instrumento> cargar() throws IOException;
    void guardar(List<Instrumento> instrumentos) throws IOException;
}
```

## 3. Implementación JSON
```java
package cl.duoc.inventario.dao;

import cl.duoc.inventario.model.Instrumento;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.nio.file.*;
import java.util.List;

public class JsonInstrumentoDao implements InstrumentoDao {
    private final Path archivo;
    private final ObjectMapper mapper = new ObjectMapper();

    public JsonInstrumentoDao(Path archivo) { this.archivo = archivo; }

    @Override public List<Instrumento> cargar() throws IOException {
        if (Files.notExists(archivo)) return List.of();
        return mapper.readValue(archivo.toFile(), new TypeReference<List<Instrumento>>() {});
    }

    @Override public void guardar(List<Instrumento> instrumentos) throws IOException {
        Path padre = archivo.toAbsolutePath().getParent();
        if (padre != null) Files.createDirectories(padre);
        Path temporal = Files.createTempFile(padre, "instrumentos-", ".tmp");
        try {
            mapper.writerWithDefaultPrettyPrinter().writeValue(temporal.toFile(), instrumentos);
            try {
                Files.move(temporal, archivo, StandardCopyOption.REPLACE_EXISTING,
                        StandardCopyOption.ATOMIC_MOVE);
            } catch (AtomicMoveNotSupportedException e) {
                Files.move(temporal, archivo, StandardCopyOption.REPLACE_EXISTING);
            }
        } finally { Files.deleteIfExists(temporal); }
    }
}
```

Se usa archivo temporal para no escribir encima del original durante una serialización interrumpida. El fallback de move no es atómico en todos los sistemas.

**Checkpoint B:** razona qué devuelve `cargar()` si no existe el archivo y qué excepción produce si el JSON está corrupto. No captures esa excepción devolviendo lista vacía: ocultaría pérdida de datos.

[Continuar a JavaFX](03-javafx-mvc.md)
