# 🐙 Git y GitHub — fundamentos para DSY1102

> **Objetivo:** versionar, respaldar y compartir el código del curso sin convertir Git en una barrera para aprender Java.

## ¿Qué es cada cosa?

- **Git:** sistema de control de versiones que registra la historia de un proyecto.
- **GitHub:** plataforma que permite alojar repositorios Git y colaborar con otras personas.

## Conceptos que debes dominar

| Concepto | Significado |
|---|---|
| repositorio | carpeta/proyecto controlado por Git |
| commit | registro de un conjunto coherente de cambios |
| staging | zona donde preparas qué incluirás en el siguiente commit |
| branch | línea de trabajo independiente |
| remote | referencia a un repositorio remoto, normalmente `origin` |
| clone | crear una copia local desde GitHub |
| push | enviar commits locales al remoto |
| pull | traer cambios del remoto e integrarlos |
| merge | integrar cambios de ramas diferentes |
| `.gitignore` | archivos o carpetas que Git no debe versionar |

## Flujo mínimo recomendado

```bash
git status
git add .
git commit -m "feat: agrega clase Auto"
git push
```

Antes de comenzar a trabajar desde otro computador:

```bash
git pull
```

## Crear o clonar un repositorio

Proyecto nuevo:

```bash
git init
git add .
git commit -m "chore: inicia proyecto"
```

Proyecto existente:

```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

## Ramas, sin complicarlo

```bash
git switch -c feature/clase-auto
# trabajar y hacer commits
git switch main
git merge feature/clase-auto
```

En esta asignatura interesa comprender **para qué sirve una rama**. Los flujos de releases y despliegue pertenecen a contextos posteriores.

## Commits útiles para aprender

Un commit debe explicar qué cambió:

```text
feat: agrega clase Persona
fix: corrige calculo de promedio
docs: explica como ejecutar el ejercicio
refactor: separa calculo en un metodo
```

No es necesario memorizar todo Conventional Commits, pero sí evitar mensajes como `cambios`, `listo`, `aaa` o `final-final`.

## `.gitignore` para un proyecto Java/IntelliJ

Ejemplo inicial:

```gitignore
*.class
out/
target/
.idea/
*.iml
```

> [!NOTE]
> Si el repositorio del curso ya incluye un `.gitignore`, no necesitas inventar otro.

## Conflictos

Un conflicto no significa que Git se rompió. Significa que necesita que una persona decida qué contenido conservar.

```text
<<<<<<< HEAD
contenido actual
=======
contenido entrante
>>>>>>> otra-rama
```

Pasos:

1. Lee ambas versiones.
2. Deja el contenido correcto y elimina las marcas.
3. Guarda el archivo.
4. Ejecuta `git add archivo`.
5. Completa el commit o merge.

## En computadores compartidos

Verifica siempre quién está configurado:

```bash
git config --global user.name
git config --global user.email
```

Configura tus datos sólo si corresponde:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@ejemplo.com"
```

También revisa que el navegador o gestor de credenciales no esté autenticado con la cuenta de otro estudiante.

## Errores frecuentes

### `fatal: not a git repository`

Estás ejecutando Git fuera de la carpeta del repositorio. Usa `pwd`/`cd` o revisa la ruta actual.

### `src refspec main does not match any`

Normalmente aún no existe un primer commit o tu rama tiene otro nombre.

### Push rechazado porque el remoto tiene cambios

Primero integra lo que existe remotamente:

```bash
git pull --rebase
```

Luego resuelve cualquier conflicto y ejecuta `git push`.

> [!WARNING]
> No uses `git push --force` para "arreglar" un problema que no comprendes. Puedes sobrescribir historia remota.

## GitHub durante DSY1102

Conviene aprender progresivamente a:

- crear repositorios;
- mantener un README;
- subir ejercicios mediante commits pequeños;
- crear ramas para una actividad puntual;
- leer el historial;
- compartir la URL correcta del repositorio.

Pull Requests e Issues son útiles y pueden introducirse cuando exista una actividad colaborativa. GitHub Actions, CI/CD y automatización quedan fuera del alcance inicial.