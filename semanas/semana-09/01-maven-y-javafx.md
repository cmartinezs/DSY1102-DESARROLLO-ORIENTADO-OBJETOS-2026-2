# 01 · Maven y configuración JavaFX

## Problema
Una aplicación gráfica requiere dependencias y un modo reproducible de compilar/ejecutar en diferentes equipos.

## Maven, en lo esencial
- `pom.xml` describe coordenadas de proyecto, dependencias, compilación y plugins.
- La estructura habitual es `src/main/java` para Java y `src/main/resources` para FXML/otros recursos.
- Maven **no es** JavaFX: es la herramienta que recupera bibliotecas y ejecuta tareas reproducibles.
- JDK y versión de JavaFX deben ser compatibles. Este curso usa un **ejemplo con JDK 21 y JavaFX 21**; si el laboratorio utiliza otra versión, ajusta explícitamente el ejemplo.

## Pasos mínimos
1. Verificar `java -version` y `mvn -version` (o usar el Maven de IntelliJ).
2. Crear proyecto Maven con `pom.xml`.
3. Agregar `javafx-controls`, `javafx-fxml` y el plugin `javafx-maven-plugin`.
4. Crear una clase que extienda `javafx.application.Application`.
5. Ejecutar `mvn clean javafx:run` desde la carpeta del proyecto.

La referencia completa y ejecutable está en [ejemplos/semana-09/proyecto-demo](../../ejemplos/semana-09/proyecto-demo/).

## Diagnóstico rápido
- `mvn` no existe: revisar PATH o usar Maven integrado.
- `release version 21 not supported`: Maven apunta a un JDK anterior.
- `Location is not set` al cargar FXML: ruta o nombre de recurso incorrecto.
- La ventana no aparece: leer el **primer error causal** completo, no solo la última línea del stacktrace.

**Checkpoint:** proyecto compila y se abre una ventana JavaFX. Documentar comando y entorno utilizado.
