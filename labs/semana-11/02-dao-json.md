# 02 · Conectar Maven con Jackson y construir el DAO JSON

[← Etapa 01](01-proyecto-y-arquitectura.md) · [Índice](README.md) · [Etapa 03 →](03-servicio-y-reglas.md)

## ¿Qué vamos a conseguir?
Que una clase Java pueda escribir una lista de instrumentos en `data/instrumentos.json` y volver a leerla. Todavía no programaremos los botones.

### Paso 1 · Agregar Jackson sin destruir la configuración generada
1. Abre `pom.xml` desde la raíz de IntelliJ.
2. Localiza el bloque `<dependencies>`. **No lo elimines**; contiene JavaFX.
3. Dentro de ese bloque agrega esta dependencia (versión didáctica fijada, su descarga debe verificarse en tu instalación):

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.18.3</version>
</dependency>
```

4. Guarda `pom.xml`.
5. Pulsa **Load Maven Changes** si IntelliJ muestra el aviso, o abre **View → Tool Windows → Maven** y pulsa el ícono de recarga.
6. En **External Libraries**, comprueba que aparece `jackson-databind`.

**Checkpoint A:** los imports `com.fasterxml.jackson.databind.ObjectMapper` se resuelven. Si Maven falla, comprueba acceso a internet y que el bloque quedó dentro de `<dependencies>`.

### Paso 2 · Revisar el módulo
1. Busca `module-info.java` dentro de `src/main/java`. Si no existe, omite este paso.
2. Si existe, conserva las líneas JavaFX creadas por el IDE. Agrega solo lo necesario:

```java
requires com.fasterxml.jackson.databind;
opens cl.duoc.inventario.model to com.fasterxml.jackson.databind;
opens cl.duoc.inventario.controller to javafx.fxml;
```

3. Revisa que `cl.duoc.inventario` coincide con **tu paquete**. Evita líneas `opens` duplicadas; si el paquete ya está abierto a otro módulo, integra ambos destinos en una única directiva.

**Checkpoint B:** no existen errores rojos en `module-info.java`. La apertura del modelo permite que Jackson reconstruya objetos usando reflexión.

### Paso 3 · Definir el contrato
1. Clic derecho en `dao` → **New → Java Class** → `InstrumentoDao`.
2. Cambia `class` por `interface` o crea directamente **New → Java Interface**.
3. Reemplaza el contenido:

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

**¿Por qué `throws IOException`?** Porque el disco puede fallar; quien usa el DAO debe conocer la posibilidad de error.

### Paso 4 · Implementar el DAO
1. Clic derecho en `dao` → **New → Java Class** → `JsonInstrumentoDao`.
2. Pega el archivo entero:

```java
package cl.duoc.inventario.dao;

import cl.duoc.inventario.model.Instrumento;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

public final class JsonInstrumentoDao implements InstrumentoDao {
    private final Path archivo;
    private final ObjectMapper mapper = new ObjectMapper();

    public JsonInstrumentoDao(Path archivo) {
        this.archivo = archivo;
    }

    @Override
    public List<Instrumento> cargar() throws IOException {
        if (Files.notExists(archivo)) {
            return List.of();
        }
        return mapper.readValue(
                archivo.toFile(),
                new TypeReference<List<Instrumento>>() {}
        );
    }

    @Override
    public void guardar(List<Instrumento> instrumentos) throws IOException {
        Path directorio = archivo.toAbsolutePath().getParent();
        if (directorio != null) {
            Files.createDirectories(directorio);
        }
        // Para esta práctica pequeña guardamos la lista JSON completa.
        mapper.writerWithDefaultPrettyPrinter()
              .writeValue(archivo.toFile(), instrumentos);
    }
}
```

**Checkpoint C:** la clase implementa ambos métodos sin errores de compilación. Identifica que `mapper.writeValue` serializa y `mapper.readValue` deserializa.

### Paso 5 · Probar el DAO antes de involucrar JavaFX
1. Crea en el paquete base una clase temporal `PruebaDao` con método `main`:

```java
package cl.duoc.inventario;

import cl.duoc.inventario.dao.JsonInstrumentoDao;
import cl.duoc.inventario.model.Instrumento;
import java.nio.file.Path;
import java.util.List;

public class PruebaDao {
    public static void main(String[] args) throws Exception {
        var dao = new JsonInstrumentoDao(
                Path.of("data", "instrumentos.json"));
        dao.guardar(List.of(
                new Instrumento("G01", "Guitarra", "Cuerdas"),
                new Instrumento("B01", "Bajo", "Cuerdas")));
        System.out.println("Leídos: " + dao.cargar().size());
    }
}
```

2. Ejecuta `PruebaDao.main()` desde IntelliJ.
3. En la consola debes leer `Leídos: 2`.
4. Busca la carpeta `data/` en la **raíz de ejecución**; si no aparece, usa **View → Tool Windows → Project**, activa vista Project y sincroniza archivos.
5. Abre `instrumentos.json`; debes reconocer un arreglo JSON con dos objetos.
6. **Elimina `PruebaDao.java` y `data/instrumentos.json` antes de la etapa siguiente**. Si conservas el archivo, el primer arranque de la interfaz ya mostrará dos registros.

**Checkpoint D:** un archivo JSON se generó, es legible y el DAO devuelve dos objetos. Si hay `InvalidDefinitionException`, revisa constructor vacío, getters y `opens` del modelo.

**Advertencia para este laboratorio:** escribir directamente sobre el archivo puede dejarlo incompleto si se interrumpe la operación. No simules fallos apagando el equipo. El ejercicio sobre errores de lectura se realizará con una copia de seguridad; mejorar la escritura atómica es una extensión posterior, no un requisito oculto.

[Continuar a Service y reglas →](03-servicio-y-reglas.md)
