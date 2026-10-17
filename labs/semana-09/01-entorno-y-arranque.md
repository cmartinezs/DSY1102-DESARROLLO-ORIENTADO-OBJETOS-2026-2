# 01 · Crear Rent-a-Car desde cero con el generador JavaFX de IntelliJ

[← Índice](README.md) · [02 · Diseñar el formulario →](02-vista-fxml.md)

## Punto de partida

**No tienes un proyecto todavía.** IntelliJ IDEA está instalado. Hoy vamos a crear una aplicación JavaFX desde **New Project**, comprobar que funciona y recién después modificarla.

**Por qué importa:** el asistente JavaFX de IntelliJ prepara las bibliotecas y un proyecto demostrativo ejecutable. No tiene sentido construir manualmente todo eso si el IDE ya sabe hacerlo.

### Paso 1 · Comprueba el complemento JavaFX

1. Abre **IntelliJ IDEA**.
2. Si estás en un proyecto abierto, entra a **File → Settings** (en macOS, **IntelliJ IDEA → Settings**). También puedes usar `Ctrl+Alt+S` en Windows.
3. En el menú izquierdo, haz clic en **Plugins**.
4. Abre la pestaña **Installed**.
5. Busca **JavaFX** y comprueba que esté **Enabled**.
6. Si aparece deshabilitado, habilítalo y reinicia IntelliJ cuando te lo solicite.

**¿Qué deberías comprobar?** Al crear un proyecto aparece la opción **JavaFX** bajo **Generators**. Si ya la ves, el complemento está disponible.

### Paso 2 · Abre el asistente correcto

1. Si estás en la pantalla de bienvenida, presiona **New Project**.
2. Si tienes otro proyecto abierto, usa **File → New → Project…**.
3. En la columna izquierda, **NO selecciones Java**.
4. Baja a la sección **Generators** y haz clic en **JavaFX** (el elemento con su propio ícono).

**Checkpoint:** en el formulario de la derecha ves campos como **Name**, **Location**, **Language**, **Build system**, **Group**, **Artifact** y **JDK**.

### Paso 3 · Completa cada campo

Usa estos valores. En algunas versiones el asistente coloca valores de ejemplo que debes reemplazar.

| Campo de IntelliJ | Valor para este laboratorio |
|---|---|
| **Name** | `RentACarJavaFX` |
| **Location** | Una carpeta de tu elección donde guardarás el proyecto (verifica la ruta final debajo del campo) |
| **Language** | **Java** |
| **Build system** | **Maven** |
| **Group** | `cl.duoc.dsy1102.w09.demo` |
| **Artifact** | `rentacar-javafx` |
| **JDK** | **21** |

1. Escribe `RentACarJavaFX` en **Name**.
2. Elige la carpeta de destino en **Location**. Debajo de ese campo IntelliJ indica dónde quedará guardado; verifica que corresponda.
3. Selecciona **Java** en **Language**.
4. Selecciona **Maven** en **Build system**.
5. Escribe el **Group** y **Artifact** de la tabla.
6. En **JDK** selecciona una instalación de **Java 21**. Si únicamente ves 17, 27 u otra versión, abre el desplegable y utiliza **Download JDK** → versión **21**; confirma la descarga. No uses JDK 27 solo porque venga seleccionado automáticamente.
7. Puedes activar **Create Git repository** si ya quieres registrar cambios; **no es obligatorio** para ejecutar el laboratorio.
8. Presiona **Next**, no **Create**, cuando el asistente ofrezca un siguiente paso.

**¿El botón Next no aparece?** Comprueba que seleccionaste **JavaFX** en Generators, no Java. Algunas pantallas requieren desplazarse hasta el pie del diálogo.

### Paso 4 · Selecciona las bibliotecas

1. En la pantalla de características/bibliotecas, busca **FXML** y asegúrate de incluirlo, si el asistente lo presenta como opción.
2. Mantén los componentes JavaFX básicos seleccionados por defecto, incluyendo **Controls** cuando aparezca.
3. No necesitas elegir tecnologías adicionales para este laboratorio.
4. Haz clic en **Create**.
5. Si IntelliJ pregunta dónde abrirlo, elige abrirlo en una nueva ventana cuando quieras mantener separado un proyecto anterior.
6. Espera a que termine la importación **Maven**. La primera apertura puede descargar dependencias y demorar un poco.

**Checkpoint:** a la izquierda se ve el proyecto **RentACarJavaFX**. Si no aparece el panel, abre **View → Tool Windows → Project** (en Windows suele ser `Alt+1`).

### Paso 5 · Reconoce lo que creó IntelliJ

1. En el panel **Project**, expande `src/main/java`.
2. Busca la clase de arranque, habitualmente **HelloApplication.java**.
3. Busca **HelloController.java** junto a esa clase (o en su paquete).
4. Expande `src/main/resources` y busca **hello-view.fxml** en el paquete de recursos.
5. En la raíz comprueba la existencia de `pom.xml`.
6. Puede existir **module-info.java** bajo `src/main/java`: **no lo borres**.
7. Abre `HelloApplication.java` y mira su primera línea, por ejemplo:

```java
package cl.duoc.dsy1102.w09.demo;
```

**Guarda ese nombre de paquete:** es el que usaremos en la etapa 03. Si tu asistente creó otro paquete, **usa el que realmente aparece en tu archivo**, no inventes otro.

**¡Muy importante!** No reemplaces `pom.xml`, no agregues otra clase `Application`, no cambies `module-info.java` y no descargues un proyecto de ejemplo externo: IntelliJ ya generó una aplicación configurada.

**¿El asistente creó otros nombres?** Usa los nombres reales que aparecen en tu proyecto y ubica las tres funciones equivalentes: clase que extiende `Application`, clase controller y archivo FXML. Si falta controller o FXML, vuelve al paso 4 y confirma que elegiste soporte FXML.

### Paso 6 · Ejecuta el proyecto generado SIN modificarlo

1. Haz doble clic en `HelloApplication.java`.
2. Busca el ícono de ejecución **verde** a la izquierda del método `main` (o junto a la clase).
3. Haz clic en el ícono y selecciona **Run 'HelloApplication.main()'**.
4. Espera la compilación y la descarga inicial de bibliotecas.
5. **Resultado esperado:** aparece una ventana del ejemplo JavaFX generado por IntelliJ. Generalmente muestra un botón **Hello!**.
6. Haz clic en el botón y verifica que el ejemplo reacciona según el código generado.
7. Cierra la ventana.

**¡Bien!** Ya tienes una aplicación JavaFX funcionando, **antes de escribir nuestro formulario**.

**¿No aparece el ícono verde?** Comprueba que importó Maven y que IntelliJ reconoce JDK 21. También puedes ejecutar el objetivo **javafx:run** en **View → Tool Windows → Maven → Plugins → javafx** si el proyecto generado lo ofrece.

### Paso 7 · Solución de bloqueos frecuentes

- **No aparece JavaFX en Generators:** verifica **Settings → Plugins → Installed → JavaFX** y habilita el complemento.
- **Solo aparece JDK 27 en la lista:** selecciona **Download JDK → 21** en el desplegable.
- **Maven está descargando bibliotecas:** espera; no cierres IntelliJ.
- **Cannot resolve symbol javafx:** espera la importación, abre el panel **Maven** y haz clic en **Reload All Maven Projects**.
- **release version 21 not supported:** entra a **File → Project Structure → Project**, selecciona SDK 21 y confirma en Maven Runner que también se utilice JDK 21.
- **No existe HelloController o hello-view.fxml:** confirma que en el paso 4 se eligió **FXML**. Si el asistente ofreció una plantilla diferente, consulta al docente antes de continuar.
- **Error de JavaFX runtime:** utiliza la configuración Run generada por IntelliJ o el objetivo Maven `javafx:run`; no intentes resolverlo agregando VM options sin comprender la configuración existente.

## ✅ Checkpoint obligatorio

- [ ] Abrí **Generators → JavaFX** en IntelliJ.
- [ ] Creé un proyecto **nuevo** con Java, Maven y JDK 21.
- [ ] Seleccioné FXML si se ofrecía en el asistente.
- [ ] Encontré `pom.xml`, el archivo `Application` y la vista FXML generada.
- [ ] Ejecuté **Run 'HelloApplication.main()'**.
- [ ] Vi la ventana inicial del ejemplo y pude cerrarla.

**No avances a la etapa 02 si no puedes ejecutar primero el ejemplo generado.**

**Siguiente:** [02 · Convertir el formulario a Rent-a-Car](02-vista-fxml.md).

**Referencia consultada:** [Documentación oficial IntelliJ IDEA: Crear un proyecto JavaFX](https://www.jetbrains.com/help/idea/javafx.html).
