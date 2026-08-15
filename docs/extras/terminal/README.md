# 🖥️ Terminal — fundamentos para el curso

> **Objetivo:** poder ubicarse en el sistema de archivos y ejecutar las herramientas básicas del curso sin depender completamente de la interfaz gráfica.

No necesitas administrar servidores ni aprender comandos avanzados. La terminal será útil principalmente para **rutas, Git y Java**.

## Conceptos básicos

- **Terminal:** aplicación donde escribes comandos.
- **Shell:** programa que interpreta esos comandos, por ejemplo PowerShell o Bash.
- **Directorio actual:** carpeta en la que estás trabajando.
- **Ruta absoluta:** dirección completa desde la raíz del sistema.
- **Ruta relativa:** dirección calculada desde tu ubicación actual.

## Navegación

### PowerShell

```powershell
Get-Location
Get-ChildItem
Set-Location .\proyecto
Set-Location ..
```

También funcionan alias habituales:

```powershell
pwd
ls
cd .\proyecto
cd ..
```

### Bash

```bash
pwd
ls
cd proyecto
cd ..
```

## Crear carpetas

PowerShell y Bash:

```bash
mkdir proyectos
```

## Verificar herramientas

```bash
java -version
javac -version
git --version
```

## Compilar y ejecutar Java desde terminal

Para un ejemplo simple sin paquetes:

```bash
javac Main.java
java Main
```

IntelliJ realizará normalmente estas tareas por ti, pero conocer estos comandos ayuda a comprender que el IDE no "hace magia": utiliza las herramientas del JDK.

## Git desde terminal

```bash
git status
git add .
git commit -m "feat: agrega ejercicio de clases"
git pull
git push
```

## Rutas y espacios

Si una ruta contiene espacios, utiliza comillas:

```powershell
cd "C:\Users\TuUsuario\Documentos\Mis Proyectos"
```

```bash
cd "/home/usuario/Mis Proyectos"
```

Para proyectos de programación es recomendable usar nombres simples y consistentes, evitando caracteres problemáticos.

## Comandos peligrosos

Antes de eliminar desde terminal, confirma siempre tu ubicación y qué vas a borrar. La terminal puede ejecutar operaciones sin la misma protección visual del explorador de archivos.

No copies comandos con `sudo`, eliminación recursiva o cambios de permisos si no comprendes su efecto.

## Qué se eliminó del material original

La versión Fullstack estaba orientada a servidores Linux, `curl`, variables de entorno, logs, Maven, Docker y ejecución de Spring Boot. Esos usos son válidos en backend, pero no son prerrequisitos de DSY1102.

Aquí la terminal se enseña como una herramienta para comprender **archivos, rutas, JDK y Git**.