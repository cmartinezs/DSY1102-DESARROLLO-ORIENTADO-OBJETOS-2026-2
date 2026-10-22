# 01 · Crear InventarioInstrumentosFX y entender las capas

[← Índice](README.md) · [02 · DAO JSON →](02-dao-json.md)

## Punto de partida
**No necesitas ningún laboratorio anterior.** Solo IntelliJ IDEA, JDK 21, Maven y conexión a internet para que Maven descargue dependencias.

### Paso 1 · Comprobar JavaFX en IntelliJ
1. Abre IntelliJ IDEA.
2. Selecciona **File → Settings → Plugins → Installed**.
3. Busca **JavaFX** y comprueba que está habilitado.
4. Regresa a **File → New → Project** (o **New Project** desde la bienvenida).
5. En **Generators**, selecciona **JavaFX**, no el generador genérico Java.

**Checkpoint:** a la derecha aparecen los campos Name, Location, Language, Build system y JDK.

### Paso 2 · Crear el proyecto
Utiliza estos valores (si tu IDE muestra otros valores por defecto, cámbialos):

| Campo | Valor |
|---|---|
| Name | `InventarioInstrumentosFX` |
| Language | Java |
| Build system | Maven |
| JDK | 21 |
| Group | `cl.duoc` |
| Artifact | `inventario-instrumentos-fx` |

1. Haz clic en **Next** si aparece una pantalla de dependencias JavaFX. Mantén **Controls** y **FXML**.
2. Haz clic en **Create**.
3. Espera a que termine la importación de Maven y a que desaparezcan los indicadores de descarga.
4. En el panel lateral abre `src/main/java` y localiza `HelloApplication.java`.
5. Ejecuta **Run** desde el botón verde asociado a la clase.

**Checkpoint:** aparece la ventana Hello generada por IntelliJ. Si no aparece, **no avances**; revisa primero el error en Run.

### Paso 3 · Reconocer los archivos existentes
Abre **View → Tool Windows → Project**, despliega:
```text
InventarioInstrumentosFX/
  pom.xml
  src/main/java/         ← Java
  src/main/resources/    ← FXML y otros recursos
```
Tu generador puede usar un paquete distinto de `cl.duoc.inventario`. Para los ejemplos siguientes **usaremos** `cl.duoc.inventario`. Si el proyecto generado usa otro, cambia consistentemente `package`, `import`, las rutas de recursos y `fx:controller`. Puedes renombrar el paquete inicial con **Refactor → Rename** para adoptar el de la guía, evitando dejar clases duplicadas.

### Paso 4 · Crear las carpetas Java
En el panel Project:
1. Sobre `src/main/java/cl/duoc/inventario`, clic derecho → **New → Package**, crea `cl.duoc.inventario.model`.
2. Repite para `cl.duoc.inventario.dao`, `cl.duoc.inventario.service` y `cl.duoc.inventario.controller`.
3. Mantén `HelloApplication.java` en el paquete base.
4. Dentro de la carpeta de recursos donde ya existe `hello-view.fxml`, más adelante crearás `listado.fxml` y `formulario.fxml`.

**Checkpoint:** identificas claramente cuatro paquetes nuevos y no has creado una segunda clase Application.

### Paso 5 · Crear el modelo
Haz clic derecho en `model` → **New → Java Class** → `Instrumento`. Pega el contenido completo:

```java
package cl.duoc.inventario.model;

public class Instrumento {
    private String codigo;
    private String nombre;
    private String categoria;

    public Instrumento() {
        // Jackson necesita construir el objeto al leer JSON.
    }

    public Instrumento(String codigo, String nombre, String categoria) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
    }

    public String getCodigo() { return codigo; }
    public void setCodigo(String codigo) { this.codigo = codigo; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }
}
```

Guarda con `Ctrl+S` y observa que IntelliJ no subraya en rojo el código.

**¿Por qué dos constructores?** El que recibe valores sirve para registrar instrumentos nuevos; el vacío permite que el lector de JSON reconstruya objetos a partir de los datos guardados.

### Paso 6 · Comprender quién hace qué
```text
FXML (interfaz) → Controller → InventarioService → InstrumentoDao → archivo JSON
                         ↘ modelo Instrumento ↗
```
- **FXML:** pinta botones, formularios y tabla.
- **Controller:** recibe clics y muestra mensajes, no abre archivos.
- **Service:** valida reglas del inventario y coordina registros.
- **DAO:** define las operaciones de leer y escribir datos.
- **Modelo:** representa los tres campos de cada instrumento.

**Checkpoint final:** responde dónde pondrías (a) validación de código duplicado, (b) lectura JSON y (c) mensaje de error. Respuestas: Service, DAO, Controller.

**Si te aparece un error:** verifica que el directorio Java aparece como Sources Root y que la primera línea `package` corresponde al árbol real. En la siguiente etapa incorporaremos Jackson sin alterar las dependencias JavaFX que creó IntelliJ.

[Continuar con etapa 02 →](02-dao-json.md)
