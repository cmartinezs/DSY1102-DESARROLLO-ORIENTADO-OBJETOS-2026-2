# 🛠️ Herramientas para desarrollar en DSY1102

> **Objetivo:** tener un entorno suficiente para aprender Java y POO sin instalar herramientas que todavía no se utilizarán.

## Kit mínimo

### JDK

El **JDK (Java Development Kit)** contiene lo necesario para compilar y ejecutar programas Java.

Verifica la instalación con:

```bash
java -version
javac -version
```

Durante el curso utiliza la versión indicada por la asignatura y evita mezclar JDK distintos sin necesidad.

### IntelliJ IDEA

IntelliJ IDEA será el entorno recomendado para escribir, ejecutar y depurar Java.

Para Java puro, **IntelliJ IDEA Community es suficiente**.

Funciones que conviene aprender desde el comienzo:

- crear y abrir proyectos;
- crear clases y paquetes;
- ejecutar `main`;
- usar autocompletado sin aceptar código que no comprendes;
- formatear código;
- renombrar símbolos mediante refactorización;
- colocar breakpoints y ejecutar el debugger;
- leer la ventana de errores y la consola.

### Git

Verifica:

```bash
git --version
```

Git se utilizará para mantener historial y respaldar ejercicios. Consulta también [Git y GitHub](../git-github/).

### GitHub

Durante el curso puede utilizarse para alojar repositorios, compartir avances y practicar colaboración. Mantén tu cuenta, correo y credenciales bajo tu control, especialmente en computadores compartidos.

## Herramientas útiles, pero secundarias

### Visual Studio Code

Es un editor excelente y puede trabajar con Java mediante extensiones, pero no es necesario alternar entre varios IDE mientras estás aprendiendo los fundamentos.

### GitHub Desktop

Puede ayudar a visualizar commits, ramas y cambios. Aun así, es recomendable comprender qué representan las operaciones básicas de Git.

### Navegador

Úsalo para consultar documentación oficial, GitHub y recursos del curso. Aprende a distinguir documentación de referencia de respuestas copiadas sin contexto.

## Herramientas que NO necesitas todavía

Para DSY1102 inicial no necesitas instalar por anticipado:

- Spring Boot o Spring Initializr;
- Postman, Insomnia u otros clientes REST;
- MySQL, PostgreSQL, DBeaver o XAMPP;
- Docker;
- Swagger/OpenAPI;
- herramientas de CI/CD;
- clientes de nube.

El material origen estaba preparado para backend y por eso incluía estas herramientas. Aquí se omiten deliberadamente.

## Configuración recomendada

Una instalación funcional debería permitirte hacer lo siguiente:

```text
1. Crear una carpeta de proyecto.
2. Abrirla en IntelliJ.
3. Crear Main.java.
4. Ejecutar un programa Java.
5. Crear un repositorio Git.
6. Hacer un commit.
7. Subirlo a GitHub.
```

Si alguno de esos pasos falla, corrige primero el entorno antes de añadir nuevas herramientas.