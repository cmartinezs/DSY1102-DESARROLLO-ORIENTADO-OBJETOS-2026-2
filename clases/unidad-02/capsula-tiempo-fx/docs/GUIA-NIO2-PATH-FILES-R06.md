# Guía complementaria · `Path`, `Files` y la API NIO.2

**DSY1102 · Cápsula del Tiempo FX · R06 · Java 21**

El proyecto R06 introduce la API de archivos **`java.nio.file` (NIO.2)**. Esta cápsula acompaña las slides: no reemplaza las clases de POO ni exige aprender toda la biblioteca antes de comprender el caso.

## 1. ¿Por qué hay tres nombres: `File`, `Path` y `Files`?

| Tipo | Paquete | Responsabilidad |
| --- | --- | --- |
| `File` | `java.io` | Abstracción histórica de ruta/archivo. Sigue siendo válida y compatible. |
| `Path` | `java.nio.file` | Representa una ruta, sus partes y sus relaciones. **No lee ni escribe** por sí sola. |
| `Files` | `java.nio.file` | Clase con métodos estáticos para consultar, crear, leer, copiar, mover y borrar archivos/directorios. |

No hay que «reemplazar todo `java.io`». En R06 Jackson todavía recibe `archivo.toFile()` porque `ObjectMapper.readValue(File,...)` trabaja con `File`. `IOException` también pertenece a `java.io`. Estamos combinando APIs compatibles.

## 2. Ruta relativa y directorio de trabajo

```java
Path archivo = Path.of("data", "mensajes.json");
Path absoluto = archivo.toAbsolutePath();
System.out.println(absoluto);
```

`Path.of("data", "mensajes.json")` representa una ruta **relativa al directorio de trabajo del proceso**. En IntelliJ ese directorio puede diferir del terminal. Para R06, esto es crucial: si se dañó un JSON pero la aplicación abre normalmente, puede estar leyendo **otro `data/mensajes.json`**.

```java
System.out.println("Directorio de trabajo: " + Path.of("").toAbsolutePath());
System.out.println("JSON efectivo: " + archivo.toAbsolutePath());
```

Es una comprobación temporal de diagnóstico, no una nueva característica de la aplicación.

## 3. Métodos de `Path` empleados

| Expresión | Qué obtiene |
| --- | --- |
| `Path.of("data", "mensajes.json")` | Construir la ruta |
| `archivo.toAbsolutePath()` | Mostrar ruta absoluta |
| `archivo.getParent()` | Carpeta contenedora (puede ser `null` si la ruta no tiene padre explícito) |
| `archivo.getFileName()` | Último componente (`mensajes.json`) |
| `archivo.resolve("otra.txt")` | Construir ruta hija |
| `archivo.resolveSibling("mensajes.json.bak")` | Construir ruta hermana |
| `archivo.toFile()` | Interoperar con APIs que reciben `File` |

`Path` es inmutable: estas operaciones devuelven una ruta, no mueven archivos.

## 4. Métodos de `Files` que usa nuestro R06

| Método | Propósito y detalle |
| --- | --- |
| `Files.exists(path)` | Comprobar existencia (salvo restricciones de permisos/enlaces) |
| `Files.notExists(path)` | Comprobar que no existe; no es siempre el opuesto de `exists` ante información indeterminada |
| `Files.createDirectories(path)` | Crear carpeta y padres si faltan |
| `Files.createTempFile(dir, prefix, suffix)` | Crear archivo temporal real en la carpeta indicada |
| `Files.copy(origen, destino, opciones)` | Copiar bytes; no elimina el origen |
| `Files.move(origen, destino, opciones)` | Mover/renombrar |
| `Files.deleteIfExists(path)` | Eliminar solo si existe; útil en limpieza |
| `Files.readString(path)` | Leer texto como `String` (usado en tests) |
| `Files.writeString(path, texto)` | Escribir texto (usado para simular corrupción en tests) |
| `Files.list(dir)` | Producir un `Stream<Path>` de las entradas de una carpeta; **se debe cerrar** |

Otros métodos que puedes explorar después: `newBufferedReader`, `newBufferedWriter`, `size`, `isRegularFile`, `isDirectory`, `walk`, `lines`, `readAllBytes`, `write`. No los necesitamos ahora.

## 5. R06: leer y validar con Jackson

```java
if (Files.notExists(archivo)) {
    return List.of();
}
List<MensajeFuturo> recuperados =
        mapper.readValue(archivo.toFile(), TIPO_MENSAJES);
```

El archivo ausente se interpreta como primera ejecución. Un archivo **presente pero corrupto no equivale a una lista vacía**: se captura el error, se conserva una copia para diagnóstico y se impide iniciar una interfaz engañosa.

La validación de campos se realiza en Java, **no** con `Files`: para comprender `recuperados.stream().anyMatch(this::esInvalido)`, consulta la [guía de Streams y lambdas](GUIA-STREAMS-LAMBDAS-R06.md).

## 6. R06: secuencia de escritura

```java
Path destino = archivo.toAbsolutePath();
Path directorio = destino.getParent();
Files.createDirectories(directorio);

Path temporal = Files.createTempFile(directorio, "mensajes-", ".tmp");
try {
    mapper.writerWithDefaultPrettyPrinter().writeValue(temporal.toFile(), mensajes);

    if (Files.exists(destino)) {
        Path respaldo = destino.resolveSibling(destino.getFileName() + ".bak");
        Files.copy(destino, respaldo, StandardCopyOption.REPLACE_EXISTING);
    }

    try {
        Files.move(temporal, destino,
                StandardCopyOption.ATOMIC_MOVE,
                StandardCopyOption.REPLACE_EXISTING);
    } catch (AtomicMoveNotSupportedException error) {
        Files.move(temporal, destino, StandardCopyOption.REPLACE_EXISTING);
    }
} finally {
    Files.deleteIfExists(temporal);
}
```

**Lectura guiada, en orden:**

1. Se asegura que la carpeta exista.
2. Se crea un temporal **en la misma carpeta** del destino.
3. Jackson serializa la lista completa en el temporal.
4. Si el JSON existía, se copia la versión previa a `.bak`.
5. Se intenta sustituir el destino mediante un movimiento atómico; si el sistema no lo soporta, se utiliza una alternativa no atómica.
6. En `finally` se intenta retirar el archivo temporal si todavía existe.

### Dos opciones que debemos distinguir

- `StandardCopyOption.REPLACE_EXISTING`: permite reemplazar un destino existente en operaciones que la admiten.
- `StandardCopyOption.ATOMIC_MOVE`: solicita una operación de movimiento atómica. **No está garantizada en todos los sistemas de archivos**; R06 maneja `AtomicMoveNotSupportedException`. Un movimiento atómico no sustituye un respaldo ni asegura durabilidad frente a un corte eléctrico.

## 7. `IOException`, `try/catch` y `finally`

Operaciones de archivos pueden fallar por ruta inexistente, permisos, disco, formato o sistema de archivos. Por eso la interfaz DAO declara `throws IOException` y el punto de entrada de la aplicación debe informar el problema.

```java
try {
    Files.writeString(archivo, "texto");
} catch (IOException error) {
    System.err.println("No fue posible escribir: " + error.getMessage());
}
```

`finally` ejecuta la limpieza al terminar el bloque incluso ante error. En el proyecto se usa para evitar archivos temporales sobrantes.

El `try (Stream<Path> entradas = Files.list(carpeta))` de las pruebas es *try-with-resources*: cierra el Stream y los recursos del sistema cuando termina el bloque. No es igual a una colección en memoria.

## 8. `.bak` vs `.corrupt-*.json`

| Archivo | Qué contiene | Para qué se usa |
| --- | --- | --- |
| `mensajes.json` | Estado actual si es válido | Carga normal |
| `mensajes.json.bak` | Estado anterior al último guardado | Recuperación manual |
| `mensajes.json.corrupt-*.json` | Copia del archivo inválido encontrado al iniciar | Evidencia para diagnóstico |

**No hay restauración automática.** El docente o estudiante decide qué versión recuperar. El `.bak` se sobreescribe con el siguiente guardado: no es un historial de versiones ilimitado.

## 9. Laboratorio reproducible de corrupción (sin perder datos)

Detén **completamente** JavaFX antes de alterar el archivo. Conserva una copia del JSON correcto **fuera de `data/`**. Verifica qué ruta está leyendo el proceso (sección 2).

1. En el `data/mensajes.json` correcto, guarda una copia manual externa.
2. Sustituye su contenido por `{json roto` o elimina una coma entre objetos.
3. **Vuelve a ejecutar la aplicación desde cero.** La aplicación no vigila cambios al archivo mientras permanece abierta.
4. Espera la alerta de carga y comprueba si se creó `mensajes.json.corrupt-*.json`.
5. Restaura la copia válida y arranca otra vez.

Si no hay alerta, **no afirmes que la prueba pasó**. Comprueba si realmente se cerró el proceso, si la rama `feat/dsy1102-r06-json-recovery` está activa y si el directorio de trabajo apunta al JSON adulterado. Como diagnóstico adicional, ejecuta en la rama R06 `bash ./mvnw -Dtest=R06RecuperacionTest test`, conservando la salida.

## 10. Ejercicios rápidos

- Construye con `Path.of` una ruta para `datos/registro.txt` e imprime su ruta absoluta.
- Crea la carpeta con `Files.createDirectories`; escribe un texto con `Files.writeString` y léelo con `Files.readString`.
- Copia ese archivo como `registro.txt.bak`. ¿Qué método no debe usarse si quieres preservar el origen?
- Explica por qué no basta con ver `mensajes.json` para afirmar que JavaFX lo recuperó.

## Fuentes oficiales de Java 21

- [`Path`](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html)
- [`Files`](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html)
- [`StandardCopyOption`](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/StandardCopyOption.html)
- [`AtomicMoveNotSupportedException`](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/AtomicMoveNotSupportedException.html)
- [`File`](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html)

**Código real del ejemplo:** [`JsonMensajeDao.java` de R06](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/feat/dsy1102-r06-json-recovery/src/main/java/cl/duoc/dsy1102/timecapsule/dao/JsonMensajeDao.java).


## 11. Protección adicional: el archivo puede cambiar mientras JavaFX está abierto

La aplicación carga los mensajes en memoria al iniciar. En la primera implementación de R06, si alguien dañaba `mensajes.json` **con la ventana abierta**, el DAO podía escribir la lista que seguía en memoria y «reparar» el JSON accidentalmente. Eso era un riesgo: podía además sobrescribir el respaldo `.bak` con el archivo corrupto.

La implementación corregida del [DAO R06](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/feat/dsy1102-r06-json-recovery/src/main/java/cl/duoc/dsy1102/timecapsule/dao/JsonMensajeDao.java) conserva una instantánea de los bytes válidos al leer o guardar, mediante `Files.readAllBytes`. Antes del siguiente guardado relee el archivo y utiliza `Arrays.equals` para detectar una edición externa:

```java
byte[] contenidoActual = leerContenidoActual();
if (contenidoActual != null) {
    leerYValidar(contenidoActual);  // puede lanzar IOException y preservar .corrupt
}

if (versionRegistrada && !Arrays.equals(versionConocida, contenidoActual)) {
    throw new IOException("El archivo JSON cambió mientras la aplicación estaba abierta.");
}
```

`Arrays.equals(byte[], byte[])` compara el **contenido** de los arreglos, no si son el mismo objeto. Si el archivo cambió aunque todavía sea JSON válido, el guardado se cancela; el Service no actualiza la memoria y el Controller muestra una alerta. Si está corrupto, el DAO preserva una copia diagnóstica **antes** de cualquier escritura.

| Situación | Acción esperada |
| --- | --- |
| JSON válido y sin cambios externos | Guardar normalmente |
| JSON dañado mientras la ventana está abierta | Rechazar guardado, conservar JSON y `.bak`, crear `.corrupt` |
| JSON modificado externamente pero aún válido | Rechazar guardado y pedir reinicio |
| JSON dañado y se inicia un proceso nuevo | Informar error de carga sin mostrar lista falsa |

**Límite:** comparar bytes no equivale a bloquear el archivo. En este laboratorio de un solo usuario reduce el riesgo demostrado, pero no elimina todas las carreras entre otros procesos.

