# 01 · Preparar el entorno y abrir la primera ventana

[← Índice del laboratorio](README.md) · [Siguiente: 02 · Vista FXML →](02-vista-fxml.md)

## Antes de comenzar: ¿para qué sirve este paso?

JavaFX dibuja ventanas. **Java** ejecuta el programa, **Maven** descarga bibliotecas y **el IDE** ayuda a editar. Primero haremos que la aplicación se abra **antes** de agregar un formulario. Así, si algo falla después, sabremos que el entorno ya funcionaba.

**Al terminar esta etapa:** tendrás una ventana JavaFX vacía o inicial que se puede abrir desde el proyecto.

### Paso 1. Abre una terminal

1. Abre el IDE.
2. Busca la opción **Terminal** (o abre PowerShell/Terminal del sistema).
3. Escribe `java -version` y presiona Enter.

```bash
java -version
```

**Deberías observar:** un texto que indica Java **21**. El último número de actualización puede cambiar.

4. Ahora escribe:

```bash
mvn -version
```

**Deberías observar:** Apache Maven y una línea que muestra que está usando Java 21. Si Java aparece como 17, 22 u otra versión, primero configura el JDK 21 del IDE o `JAVA_HOME` de tu equipo.

**Si `java` o `mvn` no se reconoce:** no avances todavía. Instala/configura JDK 21 y Maven, cierra y reabre la terminal. Si tu IDE trae Maven integrado, puedes ejecutar el objetivo de Maven desde su panel **Maven**, pero igualmente verifica qué JDK utiliza.

### Paso 2. Decide si continúas un proyecto o necesitas uno inicial

- **¿Tu proyecto JavaFX ya abre?** Continúa sobre ese mismo proyecto; **no lo dupliques**. Ubica `pom.xml` y la clase que extiende `Application`. En el paso siguiente verifica sus dependencias.
- **¿No tienes ningún proyecto JavaFX?** Crea una carpeta llamada `mi-primer-javafx` en tu repositorio, ábrela como proyecto Maven en el IDE y crea dentro las rutas que se muestran más abajo. Puedes apoyarte en la [estructura completa de la demo](../../ejemplos/semana-09/proyecto-demo/).

### Paso 3. Revisa o crea `pom.xml`

1. En el explorador de archivos del IDE, busca `pom.xml` **en la raíz del proyecto**.
2. Si no existe, crea un archivo con ese nombre.
3. Para el proyecto inicial, pega este contenido. Si ya tienes un `pom.xml` que funciona, no lo reemplaces sin revisar: comprueba que tenga JavaFX Controls, JavaFX FXML, el plugin JavaFX y `mainClass` correcto.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>cl.duoc.dsy1102</groupId>
    <artifactId>mi-primer-javafx</artifactId>
    <version>1.0.0</version>
    <properties>
        <maven.compiler.release>21</maven.compiler.release>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <javafx.version>21.0.8</javafx.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.openjfx</groupId>
            <artifactId>javafx-controls</artifactId>
            <version>${javafx.version}</version>
        </dependency>
        <dependency>
            <groupId>org.openjfx</groupId>
            <artifactId>javafx-fxml</artifactId>
            <version>${javafx.version}</version>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.13.0</version>
            </plugin>
            <plugin>
                <groupId>org.openjfx</groupId>
                <artifactId>javafx-maven-plugin</artifactId>
                <version>0.0.8</version>
                <configuration>
                    <mainClass>cl.duoc.dsy1102.w09.demo.MainApp</mainClass>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

**¿Qué significa?** `dependencies` declara las bibliotecas; `maven.compiler.release` fija Java 21; `javafx-maven-plugin` permite lanzar la aplicación; `mainClass` debe coincidir exactamente con el paquete y nombre de tu clase de arranque.

**Comprueba:** guarda el archivo y espera a que el IDE cargue Maven. Si aparece «Reload Maven», haz clic.

### Paso 4. Crea los paquetes y la primera clase

En el IDE, expande `src/main/java`. Si aún no existen, crea los directorios y paquetes `cl.duoc.dsy1102.w09.demo`. Dentro crea **MainApp.java**.

Copia esta versión **temporal**, que dibuja una ventana sin FXML; en la etapa 02 la reemplazaremos por la carga del formulario:

```java
package cl.duoc.dsy1102.w09.demo;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class MainApp extends Application {
    @Override
    public void start(Stage stage) {
        VBox contenido = new VBox(new Label("¡JavaFX funciona!"));
        Scene scene = new Scene(contenido, 440, 240);
        stage.setTitle("Mi primera ventana");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

**¿Qué hiciste?** `main` llama a `launch`; JavaFX invoca `start`; `Stage` es la ventana; `Scene` es su contenido; `Label` es un texto visible. No debes aprenderlo de memoria aún: identifica dónde aparece cada parte.

**Atención:** si ya tienes una clase `Application` funcional, puedes **usarla**: no necesitas crear otra clase con el mismo propósito. Mantén el `mainClass` sincronizado.

### Paso 5. Ejecuta desde la carpeta correcta

1. En la terminal, ubícate en la carpeta que contiene **ese `pom.xml`**. Por ejemplo:

```bash
cd mi-primer-javafx
```

2. Ejecuta:

```bash
mvn clean javafx:run
```

3. La primera vez Maven puede descargar archivos: espera a que termine, siempre que siga mostrando actividad.
4. **Deberías ver:** una ventana titulada `Mi primera ventana` con el texto `¡JavaFX funciona!`.
5. Cierra la ventana; si la terminal queda disponible, el programa terminó normalmente.

**Si ves «no POM in this directory»:** ejecutaste el comando desde otra carpeta; usa `pwd` (macOS/Linux) o `cd` (PowerShell) y localiza `pom.xml`.

**Si ves «invalid target release: 21»:** Maven está usando otro JDK; revisa `mvn -version` y configura JDK 21.

**Si ves «JavaFX runtime components are missing»:** ejecuta con el plugin (`mvn javafx:run`) en vez de iniciar directamente la clase desde un botón genérico que no configuró JavaFX.

**Si no descarga dependencias:** comprueba internet, proxy/red y el mensaje Maven más cercano a `Could not resolve`; no cambies versiones al azar.

### Paso 6. Haz un cambio pequeño y verifica

1. En `MainApp.java`, cambia el título a `Rent-a-Car - Semana 09`.
2. Guarda.
3. Ejecuta nuevamente `mvn javafx:run`.
4. Comprueba que la ventana tenga el **nuevo título**.

Esto demuestra que editas y ejecutas **tu código**, no otro proyecto.

## ✅ Checkpoint de la etapa 01

- [ ] `java -version` muestra Java 21.
- [ ] `mvn -version` utiliza un JDK 21.
- [ ] Existe `pom.xml` en la carpeta correcta.
- [ ] `mvn clean javafx:run` abre una ventana.
- [ ] El título cambió después de modificar el código.

Si alguno está pendiente, **no avances a FXML**: vuelve al paso donde dejó de funcionar.

**Commit sugerido:** `build: configurar Maven y ejecutar JavaFX`.

**Siguiente:** [02 · Crear la vista FXML](02-vista-fxml.md).
