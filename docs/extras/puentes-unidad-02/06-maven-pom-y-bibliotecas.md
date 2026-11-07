# 06 · Biblioteca, dependencia y Maven: ¿qué estamos instalando?

**Microcápsula · DSY1102 Unidad 2 · 10–15 min**  
**Pregunta:** ¿por qué Java reconoce `ObjectMapper` después de modificar `pom.xml`?

## Cuatro conceptos
- **JDK:** conjunto de herramientas para compilar y ejecutar Java (el curso usa JDK 21).
- **Biblioteca:** código reutilizable de terceros, por ejemplo Jackson o JavaFX.
- **Dependencia:** biblioteca que un proyecto declara necesitar.
- **Maven:** herramienta de construcción que resuelve dependencias y ejecuta tareas como compilar y probar.

`pom.xml` **no contiene la biblioteca**; declara las coordenadas con que Maven la identifica y obtiene.

## Ejemplo de dependencia

```xml
<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-databind</artifactId>
  <version>2.22.4</version>
</dependency>
```

Los tres valores identifican el artefacto y su versión. En el código docente R05 se actualizó la versión de Jackson por una advertencia de seguridad; **cada actualización requiere comprobar compatibilidad y ejecutar pruebas**. No copies una versión de otra clase sin revisar el `pom.xml` vigente.

## ¿Qué son plugins de Maven?
`maven-compiler-plugin` configura cómo compilar; `maven-surefire-plugin` ejecuta tests; `javafx-maven-plugin` ayuda a lanzar JavaFX. Los plugins ejecutan tareas; **no equivalen a dependencias de tu aplicación**.

## Ejecución reproducible

Desde la raíz que contiene `pom.xml`:

```bash
java -version
bash ./mvnw -version
bash ./mvnw clean test
bash ./mvnw javafx:run
```

En Windows PowerShell: `./mvnw.cmd clean test`. Si `./mvnw` en WSL da «permission denied», `bash ./mvnw ...` permite ejecutarlo sin cambiar permisos. `mvnw` es un **wrapper**: ayuda a usar una versión definida de Maven.

## Dos errores comunes
- `release version 21 not supported`: probablemente el JDK usado por Maven es anterior al configurado.
- `package com.fasterxml.jackson.databind does not exist`: revisa dependencia, sincronización Maven y proyecto correcto.

## Autoevaluación
1. Si compilas sin Jackson, ¿`ObjectMapper` es parte de Java 21? **No.**
2. ¿Qué comando corre los tests? **`bash ./mvnw test`**, o `clean test`.
3. ¿`pom.xml` y `mensajes.json` hacen el mismo trabajo? **No:** configuración del build vs datos de la aplicación.

**Contenido curricular complementario:** [Semana 09 · Maven y JavaFX](../../../semanas/semana-09/01-maven-y-javafx.md).  
**Siguiente:** [07 · FXML, eventos y Controller](07-interfaz-fxml-controller-eventos.md).
