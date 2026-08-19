# Estándar de repositorio del estudiante · DSY1102-012V

Este documento define cómo debe nombrarse, organizarse y mantenerse el repositorio personal de cada estudiante durante el semestre.

La idea es simple: **un solo repositorio para toda la asignatura**, ordenado de forma predecible, sin archivos basura y con una estructura que permita encontrar rápidamente cualquier entrega.

---

## 1. Nombre obligatorio del repositorio

Formato general:

```text
<SIGLA>-<SECCION>-nombre-apellido
```

Para esta asignatura:

```text
DSY1102-012V-nombre-apellido
```

Ejemplo:

```text
DSY1102-012V-carlos-martinez
```

### Reglas del nombre

- La sigla y sección se escriben exactamente como se indican: `DSY1102-012V`.
- Nombre y apellido van en minúsculas.
- Se separan las palabras con guion `-`.
- No usar espacios.
- No usar tildes, `ñ` ni caracteres especiales.
- Si tienes dos nombres o dos apellidos, utiliza al menos el primer nombre y primer apellido, salvo que el docente indique otra cosa.

Ejemplos válidos:

```text
DSY1102-012V-ana-perez
DSY1102-012V-jose-gonzalez
DSY1102-012V-maria-jose-rojas
```

---

## 2. Un repositorio para toda la asignatura

No se debe crear un repositorio nuevo por cada ejercicio, laboratorio o evaluación. El repositorio personal representa **todo el trabajo del semestre**.

```text
DSY1102-012V-nombre-apellido/
├── README.md
├── .gitignore
├── practica/
│   ├── semana-01/
│   ├── semana-02/
│   └── ...
├── examples/
│   ├── semana-01/
│   ├── semana-02/
│   └── ...
├── labs/
│   ├── semana-02/
│   └── ...
├── proyecto-formativo/
│   └── petcare/
├── desafios/
│   ├── semanales/
│   ├── desafio-150-java/
│   ├── desafio-100-poo/
│   ├── desafio-25-javafx/
│   └── desafio-25-bd/
└── evaluaciones/
    ├── ep1/
    ├── ep2/
    ├── ep3/
    └── eft/
```

> No todas las carpetas tendrán contenido desde el primer día. Se completarán a medida que avance el semestre.

---

## 3. Identificador personal para packages Java

El nombre del repositorio identifica **asignatura + sección + estudiante**. En cambio, el package Java utilizará el **usuario institucional Duoc del estudiante**, porque es un identificador más estable y evita repetir la sigla y sección en cada package.

### Cómo obtener el identificador

Toma tu usuario Duoc **sin el dominio del correo** y elimina los puntos.

Ejemplo del docente:

```text
Usuario Duoc: c.martinez
Identificador para packages: cmartinez
```

Por lo tanto, la raíz del package será:

```text
cl.duoc.cmartinez
```

Para otro estudiante cuyo usuario fuera `a.perez`, sería:

```text
cl.duoc.aperez
```

### Reglas de normalización

- utilizar el usuario institucional asignado por Duoc;
- no utilizar el correo completo;
- eliminar los puntos del usuario;
- escribir todo en minúsculas;
- no utilizar espacios, guiones, tildes ni caracteres especiales;
- no inventar abreviaciones distintas a su usuario institucional.

Incorrecto:

```text
cl.duoc.c.martinez
cl.duoc.carlosmartinez
cl.duoc.dsy1102.s012v
cl.duoc.CMartinez
```

Correcto para `c.martinez`:

```text
cl.duoc.cmartinez
```

---

## 4. Práctica de clase

Los ejercicios cortos de una misma actividad pueden compartir un único proyecto Java. Cada ejercicio de un solo archivo se separa mediante un package propio.

Ejemplo para el usuario `c.martinez`:

```text
practica/semana-02/fundamentos-java/
└── src/
    └── cl/
        └── duoc/
            └── cmartinez/
                └── practica/
                    └── semana02/
                        ├── ejercicio01/
                        │   └── Main.java
                        ├── ejercicio02/
                        │   └── Main.java
                        ├── ejercicio03/
                        │   └── Main.java
                        └── ejercicio04/
                            └── Main.java
```

El primer archivo declararía:

```java
package cl.duoc.cmartinez.practica.semana02.ejercicio01;

public class Main {
    public static void main(String[] args) {
        // solución del ejercicio
    }
}
```

No se crea un proyecto IntelliJ completo por cada `Main.java`.

---

## 5. Ejemplos de clase

`examples/` puede contener código escrito siguiendo ejemplos desarrollados o reconstruidos durante la clase. No es una carpeta para copiar sin entender: sirve para conservar pruebas, modificaciones o extensiones hechas por el estudiante.

Ejemplo de package:

```text
cl.duoc.cmartinez.examples.semana02
```

---

## 6. Laboratorios

Los laboratorios son actividades de mayor alcance y cada uno debe tener su propia subcarpeta.

```text
labs/
└── semana-02/
    └── cuenta-simple/
        ├── README.md
        └── src/
            └── cl/duoc/cmartinez/labs/cuentasimple/
                ├── Main.java
                └── Cuenta.java
```

Package:

```java
package cl.duoc.cmartinez.labs.cuentasimple;
```

Si el laboratorio utiliza Maven o Gradle más adelante, se incluyen también los archivos de construcción necesarios (`pom.xml`, `build.gradle`, etc.).

---

## 7. Proyecto formativo

Para este curso, el proyecto longitudinal es PetCare:

```text
proyecto-formativo/
└── petcare/
```

Package base sugerido para el usuario `c.martinez`:

```text
cl.duoc.cmartinez.petcare
```

PetCare debe evolucionar dentro de la misma carpeta. No crear `petcare-v2`, `petcare-final`, `petcare-ahora-si`, etc. Git conserva el historial mediante commits.

---

## 8. Desafíos

Para el desafío de 150 ejercicios pre-POO se utiliza un solo proyecto y un package por ejercicio:

```text
desafios/
└── desafio-150-java/
    └── src/
        └── cl/duoc/cmartinez/desafios/d150/
            ├── ejercicio001/
            │   └── Main.java
            ├── ejercicio002/
            │   └── Main.java
            └── ...
```

Ejemplo:

```java
package cl.duoc.cmartinez.desafios.d150.ejercicio025;
```

Cuando los desafíos posteriores sean proyectos POO, JavaFX o BD de mayor tamaño, cada desafío podrá tener su propia subcarpeta de proyecto.

---

## 9. Evaluaciones

La carpeta `evaluaciones/` queda reservada exclusivamente para entregas evaluadas:

```text
evaluaciones/
├── ep1/
├── ep2/
├── ep3/
└── eft/
```

Ejemplo de package para EP1:

```text
cl.duoc.cmartinez.evaluaciones.ep1
```

Cada evaluación debe contener exactamente lo necesario para ejecutar y revisar la entrega correspondiente.

---

## 10. Tres formatos de entrega

### A. Ejercicio de un solo archivo

Un proyecto compartido y un package específico por ejercicio:

```text
src/cl/duoc/cmartinez/practica/semana02/ejercicio01/Main.java
```

### B. Actividad de varios archivos

Todos los archivos relacionados permanecen dentro de la subcarpeta de la actividad y de un package coherente:

```text
labs/semana-02/cuenta-simple/
└── src/
    └── cl/duoc/cmartinez/labs/cuentasimple/
        ├── Main.java
        └── Cuenta.java
```

### C. Proyecto completo

Para PetCare, JavaFX, BD o una evaluación tipo proyecto se sube el proyecto completo dentro de su subcarpeta.

Se incluyen:

- `src/`;
- código fuente;
- recursos necesarios;
- `README.md` cuando corresponda;
- `pom.xml`, `build.gradle` u otro archivo de construcción cuando corresponda;
- configuración necesaria de la aplicación que no contenga secretos.

No se incluyen:

- `.idea/`, `.vscode/`, `*.iml`;
- `out/`, `target/`, `build/`, `.gradle/`;
- logs y temporales;
- archivos `.class`;
- contraseñas, tokens, claves o credenciales.

---

## 11. Regla package ↔ carpeta

El package declarado y la carpeta física deben coincidir.

Si el código declara:

```java
package cl.duoc.cmartinez.practica.semana02.ejercicio01;
```

el archivo debe encontrarse bajo:

```text
src/cl/duoc/cmartinez/practica/semana02/ejercicio01/Main.java
```

Esta regla se mantiene para todos los ejercicios, laboratorios, proyectos y evaluaciones.

---

## 12. `.gitignore` obligatorio

```gitignore
# IntelliJ IDEA
.idea/
*.iml
*.iws
*.ipr

# VS Code
.vscode/

# Java
*.class
out/
target/
build/

# Gradle
.gradle/

# Logs y temporales
*.log
*.tmp
*.temp

# Sistema operativo
.DS_Store
Thumbs.db

# Credenciales y secretos
.env
.env.*
*.key
*.pem
```

Si un archivo es necesario para ejecutar el proyecto, no se ignora solo porque sea una configuración. Se excluyen configuraciones locales del IDE, artefactos generados, temporales y secretos.

---

## 13. README de la raíz

```markdown
# DSY1102-012V · Desarrollo Orientado a Objetos

**Estudiante:** Carlos Martínez  
**Usuario Duoc:** c.martinez  
**Package base:** cl.duoc.cmartinez  
**Sección:** 012V  
**Semestre:** 2026-2

Repositorio personal de trabajo para la asignatura DSY1102.
```

No publicar RUT, teléfono, dirección, contraseña ni otros datos personales innecesarios.

---

## 14. README por entrega importante

Un laboratorio grande, proyecto formativo o evaluación debe incluir un README breve con:

```text
Nombre de la actividad
Objetivo
Cómo ejecutar
Punto de entrada
Requisitos especiales, si existen
```

---

## 15. Commits

Se esperan commits pequeños y comprensibles:

```text
practica: resolver ejercicio 03 semana 02
lab: implementar validacion de retiro
petcare: agregar clase Mascota
challenge: resolver ejercicio 018
evaluacion: entregar EP1
```

Evitar mensajes como `cambios`, `asdf`, `final`, `ahora si` o `ultimo final definitivo`.

---

## 16. Flujo mínimo de trabajo

Primera vez:

```bash
git clone URL-DE-TU-REPOSITORIO
cd DSY1102-012V-nombre-apellido
```

Al comenzar en cualquier computador:

```bash
git pull
```

Después de trabajar:

```bash
git status
git add .
git commit -m "practica: resolver ejercicio 01 semana 02"
git push
```

Siempre verifica en github.com que los archivos realmente estén publicados.

---

## 17. Un solo repositorio Git

No ejecutar `git init` dentro de cada ejercicio o proyecto si ya estás dentro del repositorio de la asignatura.

Correcto:

```text
DSY1102-012V-ana-perez/.git/
└── labs/semana-02/cuenta-simple/
```

Incorrecto:

```text
DSY1102-012V-ana-perez/.git/
└── labs/semana-02/cuenta-simple/.git/
```

---

## 18. Entregas evaluadas

Antes de entregar:

1. Verifica que el proyecto esté en `evaluaciones/<evaluacion>/`.
2. Ejecuta y prueba la entrega.
3. Revisa `git status`.
4. Registra todos los archivos necesarios.
5. Haz un commit final identificable.
6. Ejecuta `git push`.
7. Revisa el repositorio desde github.com.
8. Entrega la URL indicada por el docente.

Una vez vencido el plazo, no modificar la entrega salvo autorización del docente.

---

## 19. Checklist final

- [ ] El repositorio tiene el nombre correcto.
- [ ] Conozco mi usuario Duoc y lo normalicé correctamente para el package.
- [ ] Mi package raíz tiene la forma `cl.duoc.<usuario-sin-puntos>`.
- [ ] El archivo está en la carpeta correcta.
- [ ] El package coincide con la ruta física.
- [ ] El código compila y ejecuta.
- [ ] No subí archivos del IDE, logs, compilados ni secretos.
- [ ] Hice commit.
- [ ] Hice push.
- [ ] Verifiqué los archivos directamente en GitHub.

> **Regla práctica:** si el docente no puede encontrar, clonar y ejecutar una entrega de manera razonable, la estructura del repositorio todavía no está terminada.
