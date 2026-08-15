# 🖥️ Uso de PC para programadores

> **Nivel:** sin requisitos previos.  
> **Objetivo:** entender dónde están tus archivos y proyectos para trabajar con seguridad en Java, IntelliJ y Git.

## Sistema de archivos

Un proyecto Java existe como una **carpeta real en tu computador**. IntelliJ no guarda el código en un lugar misterioso: abre y modifica esos archivos.

Conceptos que debes manejar:

- archivo y carpeta;
- extensión (`.java`, `.md`, `.gitignore`);
- ruta absoluta y relativa;
- carpeta de usuario;
- carpeta raíz del proyecto;
- archivos ocultos, como `.git`.

## Organización recomendada

Usa una ubicación estable, por ejemplo:

### Windows

```text
C:\Users\TuUsuario\Documents\DUOC\DSY1102\
```

### Linux

```text
/home/tuusuario/DUOC/DSY1102/
```

Dentro puedes tener un repositorio por actividad o la estructura indicada por el profesor.

## Evita el caos de copias

No trabajes así:

```text
actividad-final
actividad-final2
actividad-final-ahora-si
actividad-final-definitiva
```

Git existe precisamente para conservar versiones sin duplicar carpetas completas.

## ¿Dónde está mi proyecto de IntelliJ?

En IntelliJ puedes observar la ruta del proyecto y luego abrir esa misma ubicación desde el explorador de archivos.

Aprende a distinguir:

```text
proyecto/
├── src/
├── .git/
├── .gitignore
└── README.md
```

La estructura exacta puede variar según cómo se cree el proyecto.

## Archivos ocultos y extensiones

Conviene configurar Windows para mostrar extensiones conocidas. Así puedes distinguir `Main.java` de archivos con nombres engañosos como `Main.java.txt`.

También debes saber que `.git` normalmente está oculto. **No lo borres** si quieres conservar el historial Git del repositorio.

## ZIP no es una carpeta de trabajo

Si recibes un `.zip`:

1. guárdalo;
2. extráelo completamente;
3. mueve la carpeta extraída a una ubicación de trabajo estable;
4. abre la carpeta del proyecto desde IntelliJ.

No edites archivos directamente dentro del ZIP.

## Repositorio clonado

Si el proyecto está en GitHub, evita descargar ZIP cada vez. Aprende a clonar:

```bash
git clone URL_DEL_REPOSITORIO
```

Después trabajas sobre esa carpeta y sincronizas mediante `pull` y `push`.

## Equipos de laboratorio

Antes de retirarte:

- confirma que hiciste commit y push de lo necesario;
- comprueba en GitHub que los archivos realmente llegaron;
- cierra sesión en GitHub y servicios personales;
- no dejes tokens o contraseñas guardados;
- no dependas del disco local de un equipo compartido como única copia.

## Carpetas sincronizadas

OneDrive, Google Drive u otros sincronizadores pueden ser útiles para documentos, pero un repositorio Git activo dentro de una carpeta sincronizada puede provocar duplicados, bloqueos o conflictos difíciles de entender. Para comenzar, prefiere una carpeta local normal y usa Git/GitHub como mecanismo de versionado.

## Qué se adaptó desde Fullstack

La versión original incluía proyectos descargados desde Spring Initializr y referencias a Maven/Spring Boot. En DSY1102 la misma alfabetización digital se aplica a **proyectos Java normales**, sin depender de frameworks.