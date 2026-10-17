# 01 · Crear el proyecto Rent-a-Car desde cero con IntelliJ IDEA

[← Volver al índice](README.md) · [Siguiente: diseñar FXML →](02-vista-fxml.md)

## Nuestro punto de partida

**Hoy no existe ningún proyecto.** Vas a abrir **IntelliJ IDEA** y crear **RentACarJavaFX** desde cero. No debes descargar, copiar ni reutilizar otro proyecto del curso. Vamos a aprender a crear una aplicación JavaFX con Maven desde su primera carpeta.

**Meta de esta etapa:** crear el proyecto, configurarlo y abrir una ventana que diga «¡JavaFX funciona!». Si aparece un error, no continúes al siguiente paso sin resolverlo.

## Paso 1 · Abre IntelliJ IDEA

1. Abre **IntelliJ IDEA**.
2. Si aparece la pantalla de bienvenida, haz clic en **New Project**.
3. Si se abrió un proyecto anterior, selecciona **File → New → Project…**. **No** uses «New Module» dentro del proyecto anterior.
4. En la ventana **New Project**, selecciona **Java** (para crear un proyecto Java normal; agregaremos JavaFX por Maven).
5. En el campo **Name**, escribe exactamente `RentACarJavaFX`.
6. En **Location**, elige una carpeta de trabajo propia donde puedas encontrar después el proyecto (por ejemplo, `Documentos/DSY1102`). IntelliJ creará la carpeta del proyecto dentro de esa ubicación según la vista de tu versión. **Comprueba la ruta final antes de crear**.
7. En **Build system**, selecciona **Maven** (no IntelliJ, Gradle ni Ant).
8. En **JDK**, elige **Java 21**. Si no aparece, utiliza **Download JDK**, selecciona la versión **21**, elige un proveedor disponible y confirma la descarga. Vuelve al diálogo y comprueba que ahora se vea JDK 21.
9. Si IntelliJ muestra casillas para generar código de ejemplo, puedes dejarlas desmarcadas; crearemos nuestra propia clase.
10. Haz clic en **Create**.

**Deberías ver:** una nueva ventana de IntelliJ cuyo proyecto se llama **RentACarJavaFX**, con `pom.xml` en la raíz y la carpeta `src` (o con el proyecto Maven recién creado listo para agregarla).

**Si no encuentras Build system:** revisa que hayas seleccionado la plantilla **Java**, no «Empty Project». Los nombres o la distribución visual pueden cambiar entre versiones de IntelliJ; lo fundamental es **Java + Maven + JDK 21**.

## Paso 2 · Reconoce tu proyecto antes de programar

1. A la izquierda abre el panel **Project** (atajo habitual: `Alt+1` en Windows).
2. En el selector de vista del panel, utiliza **Project** para ver las carpetas reales.
3. Expande `RentACarJavaFX`.
4. Identifica `pom.xml`: es el archivo que configura Maven y las bibliotecas.
5. Identifica `src/main/java`: aquí vivirá nuestro código Java.
6. Identifica `src/main/resources`: aquí guardaremos FXML en la etapa 02.
7. Si no aparecen esas carpetas, créalas desde la raíz del proyecto con clic derecho **New → Directory** siguiendo el orden `src`, `main`, `java` y `resources`. En IntelliJ, `java` debe quedar marcado como **Sources Root** y `resources` como **Resources Root**; si no lo están, usa clic derecho sobre la carpeta → **Mark Directory as** → opción correspondiente.

```text
RentACarJavaFX/
├── pom.xml
└── src/
    └── main/
        ├── java/
        └── resources/
```

**Checkpoint corto:** tienes un proyecto **nuevo**, no anidado dentro de otro, y sabes dónde está `pom.xml`.

## Paso 3 · Configura Maven y JavaFX

1. En el panel **Project**, haz doble clic en `pom.xml`.
2. Selecciona todo el contenido con `Ctrl+A` y reemplázalo por **este archivo completo**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>cl.duoc.dsy1102</groupId>
    <artifactId>rentacar-javafx</artifactId>
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

3. Guarda con `Ctrl+S`.
4. IntelliJ puede mostrar **Load Maven Changes** o un ícono para sincronizar Maven: haz clic. Si no aparece, abre el panel **Maven** de la derecha y pulsa **Reload All Maven Projects**.
5. Espera a que termine la sincronización y las descargas. La primera vez necesitas internet.

**¿Por qué hacemos esto?** Maven descargará JavaFX por ti. **No debes instalar JavaFX SDK manualmente ni configurar VM options** para este laboratorio. En IntelliJ puedes utilizar su Maven integrado: **no hace falta instalar el comando `mvn` por separado**.

**Si ves las dependencias en rojo:** comprueba internet y que Maven haya completado el proceso; vuelve a sincronizar. **Si sale «invalid target release: 21»:** entra a **File → Project Structure → Project** y confirma SDK 21; luego revisa **Settings → Build, Execution, Deployment → Build Tools → Maven → Runner**, seleccionando JDK 21 para Maven.

## Paso 4 · Crea el paquete Java

1. En el panel **Project**, ubica `src/main/java`.
2. Haz **clic derecho en `java` → New → Package**.
3. Escribe exactamente:

```text
cl.duoc.dsy1102.w09.demo
```

4. Presiona Enter. IntelliJ mostrará el paquete, a veces como un solo nombre con puntos y otras como carpetas anidadas. Ambas vistas son normales.
5. Haz clic derecho sobre ese paquete → **New → Java Class**.
6. Escribe `MainApp` (sin `.java`) y presiona Enter.
7. Confirma que IntelliJ haya creado `MainApp.java` **dentro** del paquete elegido.

## Paso 5 · Escribe tu primera ventana

Reemplaza el contenido de `MainApp.java` por lo siguiente:

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
        stage.setTitle("Mi primera ventana Rent-a-Car");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

**Observa:** `MainApp` es el punto de inicio. `Stage` es la ventana, `Scene` su contenido, `VBox` organiza controles y `Label` muestra texto. Aún no usamos FXML: primero confirmamos que JavaFX abre.

**Comprueba:** los imports `javafx...` ya no aparecen en rojo; si aparecen, revisa el paso 3 y la sincronización Maven.

## Paso 6 · Ejecuta desde IntelliJ, sin depender de una terminal externa

1. Abre el panel **Maven** de IntelliJ: normalmente está en el borde derecho, o desde **View → Tool Windows → Maven**.
2. Expande tu proyecto `RentACarJavaFX`.
3. Busca **Plugins**. Expándelo.
4. Busca `javafx` (o `javafx-maven-plugin`) y ejecuta el objetivo **javafx:run** con doble clic. Si no aparece ese objetivo, haz clic en **Execute Maven Goal** (ícono habitual de Maven con comando) y escribe:

```text
clean javafx:run
```

5. Ejecuta el objetivo. Deberías ver el registro de Maven en el panel de ejecución.
6. **Resultado esperado:** se abre una ventana titulada «Mi primera ventana Rent-a-Car» con el texto **¡JavaFX funciona!**.

**Importante:** no uses por ahora el botón verde de ejecutar el método `main`; el objetivo de Maven configura automáticamente el lanzamiento JavaFX y evita errores de runtime.

### Si no funciona

- **«No goals have been specified» / no aparece el plugin:** verifica que `pom.xml` tenga el bloque `javafx-maven-plugin` y recarga Maven.
- **«Cannot resolve symbol javafx»:** faltó sincronizar dependencias. Vuelve al paso 3.
- **«release version 21 not supported»:** revisa Project SDK y Maven Runner JDK 21.
- **«Could not resolve dependencies»:** verifica tu conexión y que Maven terminó de descargar.
- **La ventana no abre y hay otro error:** lee desde la primera línea relevante de error en la salida de Maven; anota el mensaje exacto antes de cambiar el código.

## Paso 7 · Comprueba que modificas tu propio proyecto

1. Cambia en `MainApp.java` el título a `Rent-a-Car - Semana 09`.
2. Guarda.
3. Cierra la ventana anterior si continúa abierta.
4. Ejecuta nuevamente **javafx:run** desde el panel Maven.
5. **Debes ver el título nuevo**.

## ✅ Checkpoint obligatorio

- [ ] Creé **RentACarJavaFX** desde cero con **IntelliJ IDEA**.
- [ ] Seleccioné **Maven** y **JDK 21**.
- [ ] Veo `pom.xml`, `src/main/java` y `src/main/resources`.
- [ ] Creé el paquete `cl.duoc.dsy1102.w09.demo` desde IntelliJ.
- [ ] Creé `MainApp.java` dentro del paquete.
- [ ] Ejecuté el objetivo Maven **javafx:run** desde IntelliJ.
- [ ] Abrí una ventana JavaFX y comprobé que cambió su título.

**¿No se cumple algún punto?** Repite solo el paso correspondiente. No avances aún al FXML.

**Nota sobre Git:** si trabajas con Git, puedes activar el versionado desde **VCS → Enable Version Control Integration → Git**, cuando esa opción esté disponible, o mediante `git init` en la raíz del proyecto. Antes de compartir, configura `.gitignore` para excluir `.idea/` y `target/`. Los commits se abordarán al cerrar las etapas; Git no es requisito para abrir la primera ventana.

**Siguiente:** [02 · Crear el formulario FXML](02-vista-fxml.md).
