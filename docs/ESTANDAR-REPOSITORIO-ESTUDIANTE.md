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

Reglas:

- sigla y sección exactas;
- nombre y apellido en minúsculas;
- palabras separadas por guion `-`;
- sin espacios, tildes, `ñ` ni caracteres especiales.

---

## 2. Un repositorio para toda la asignatura

No se crea un repositorio por ejercicio, laboratorio o evaluación.

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

---

## 3. Identificador personal para packages Java

El repositorio identifica **asignatura + sección + estudiante**. El package Java identifica al estudiante mediante su **usuario institucional Duoc normalizado**.

Ejemplo:

```text
Usuario Duoc: c.martinez
Identificador: cmartinez
Package raíz: cl.duoc.cmartinez
```

Para `a.perez`:

```text
cl.duoc.aperez
```

Reglas:

- usar el usuario institucional asignado por Duoc;
- no usar el correo completo;
- eliminar los puntos;
- usar minúsculas;
- no inventar otro identificador.

Incorrecto:

```text
cl.duoc.c.martinez
cl.duoc.carlosmartinez
cl.duoc.dsy1102.s012v
```

---

## 4. Regla de diseño: no repetir en el package lo que ya dice la carpeta

Esta es la regla central del estándar.

Si la ruta externa ya indica:

```text
practica/semana-02/fundamentos-java/
```

**no repetimos** `practica`, `semana02` ni `fundamentosjava` dentro del package solo por copiar la ruta.

Las carpetas externas responden a:

```text
¿Qué tipo de entrega es? ¿De qué semana? ¿Qué proyecto es?
```

El package responde a:

```text
¿De quién es el código? ¿Cómo se organiza internamente este proyecto?
```

Por eso, para ejercicios de un archivo:

```text
practica/semana-02/fundamentos-java/
└── src/
    └── cl/
        └── duoc/
            └── cmartinez/
                ├── ejercicio01/
                │   └── Main.java
                ├── ejercicio02/
                │   └── Main.java
                └── ejercicio03/
                    └── Main.java
```

El primer archivo declara:

```java
package cl.duoc.cmartinez.ejercicio01;

public class Main {
    public static void main(String[] args) {
        // solución
    }
}
```

Esto evita estructuras artificialmente largas como:

```text
practica/semana-02/fundamentos-java/src/cl/duoc/cmartinez/practica/semana02/...
```

---

## 5. Práctica de clase

Los ejercicios cortos de una misma actividad comparten un único proyecto Java cuando sea razonable.

Ejemplo:

```text
practica/semana-02/fundamentos-java/
└── src/cl/duoc/cmartinez/
    ├── ejercicio01/Main.java
    ├── ejercicio02/Main.java
    ├── ejercicio03/Main.java
    └── ejercicio04/Main.java
```

Packages:

```text
cl.duoc.cmartinez.ejercicio01
cl.duoc.cmartinez.ejercicio02
cl.duoc.cmartinez.ejercicio03
cl.duoc.cmartinez.ejercicio04
```

No crear un proyecto IntelliJ completo por cada `Main.java`.

---

## 6. Ejemplos de clase

`examples/` conserva código escrito, probado, modificado o extendido por el estudiante a partir de ejemplos de clase.

Si una carpeta externa ya identifica semana y ejemplo, el package puede mantenerse simple:

```text
examples/semana-02/metodos/
└── src/cl/duoc/cmartinez/
    └── Main.java
```

Package:

```java
package cl.duoc.cmartinez;
```

Si dentro del mismo proyecto hay varias áreas de código, se agregan packages por responsabilidad, no para duplicar la ruta externa.

---

## 7. Laboratorios

Cada laboratorio tiene su propia subcarpeta.

```text
labs/
└── semana-02/
    └── cuenta-simple/
        ├── README.md
        └── src/
            └── cl/duoc/cmartinez/cuentasimple/
                ├── Main.java
                └── Cuenta.java
```

Package:

```java
package cl.duoc.cmartinez.cuentasimple;
```

Aquí `cuentasimple` sí aporta valor porque identifica el pequeño sistema o dominio del laboratorio. No repetimos `labs` ni `semana02`.

---

## 8. Proyecto formativo

PetCare vive durante todo el semestre en:

```text
proyecto-formativo/
└── petcare/
```

Package base:

```text
cl.duoc.cmartinez.petcare
```

Desde ahí el proyecto puede crecer por responsabilidad:

```text
cl.duoc.cmartinez.petcare.model
cl.duoc.cmartinez.petcare.service
cl.duoc.cmartinez.petcare.ui
```

No crear `petcare-v2`, `petcare-final`, `petcare-ahora-si`, etc. Git conserva el historial.

---

## 9. Desafío 150

Se utiliza un solo proyecto y un package por ejercicio:

```text
desafios/
└── desafio-150-java/
    └── src/
        └── cl/duoc/cmartinez/
            ├── ejercicio001/Main.java
            ├── ejercicio002/Main.java
            └── ...
```

Ejemplo:

```java
package cl.duoc.cmartinez.ejercicio025;
```

No repetimos `desafios` ni `d150` porque la carpeta externa `desafios/desafio-150-java/` ya entrega ese contexto.

---

## 10. Evaluaciones

La carpeta `evaluaciones/` queda reservada exclusivamente para entregas evaluadas:

```text
evaluaciones/
├── ep1/
├── ep2/
├── ep3/
└── eft/
```

Si EP1 es un proyecto completo:

```text
evaluaciones/ep1/
└── src/cl/duoc/cmartinez/<nombre-del-proyecto>/...
```

El package se diseña según el proyecto evaluado, no como `cl.duoc.cmartinez.evaluaciones.ep1` por obligación.

---

## 11. Tres formatos de entrega

### A. Ejercicio de un solo archivo

```text
practica/semana-02/fundamentos-java/
└── src/cl/duoc/cmartinez/ejercicio01/Main.java
```

```java
package cl.duoc.cmartinez.ejercicio01;
```

### B. Actividad de varios archivos

```text
labs/semana-02/cuenta-simple/
└── src/cl/duoc/cmartinez/cuentasimple/
    ├── Main.java
    └── Cuenta.java
```

### C. Proyecto completo

PetCare, JavaFX, BD o una evaluación tipo proyecto se sube como proyecto completo dentro de su subcarpeta.

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

## 12. Regla package ↔ carpeta

Dentro de `src/`, el package declarado debe coincidir con la carpeta física.

Si el código declara:

```java
package cl.duoc.cmartinez.ejercicio01;
```

el archivo debe estar bajo:

```text
src/cl/duoc/cmartinez/ejercicio01/Main.java
```

La estructura anterior a `src/` pertenece a la organización del repositorio y **no forma parte del package Java**.

---

## 13. `.gitignore` obligatorio

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

---

## 14. README de la raíz

```markdown
# DSY1102-012V · Desarrollo Orientado a Objetos

**Estudiante:** Carlos Martínez  
**Usuario Duoc:** c.martinez  
**Package raíz:** cl.duoc.cmartinez  
**Sección:** 012V  
**Semestre:** 2026-2
```

No publicar RUT, teléfono, dirección, contraseña ni otros datos personales innecesarios.

---

## 15. Commits y flujo de trabajo

Buenos ejemplos:

```text
practica: resolver ejercicio 03 semana 02
lab: implementar validacion de retiro
petcare: agregar clase Mascota
challenge: resolver ejercicio 018
evaluacion: entregar EP1
```

Al comenzar:

```bash
git pull
```

Después de trabajar:

```bash
git status
git add .
git commit -m "mensaje claro"
git push
```

No ejecutar `git init` dentro de cada ejercicio o proyecto. Debe existir un solo repositorio Git: el de la asignatura.

---

## 16. Checklist final

- [ ] El repositorio tiene el nombre correcto.
- [ ] Mi package raíz es `cl.duoc.<usuario-duoc-sin-puntos>`.
- [ ] No repetí innecesariamente `practica`, semana, desafío o evaluación dentro del package.
- [ ] El package coincide con la ruta física **desde `src/` hacia abajo**.
- [ ] El archivo está en la carpeta de entrega correcta.
- [ ] El código compila y ejecuta.
- [ ] No subí archivos del IDE, logs, compilados ni secretos.
- [ ] Hice commit y push.
- [ ] Verifiqué los archivos directamente en GitHub.

> **Regla práctica:** la organización del repositorio describe el contexto académico; el package describe la identidad y estructura interna del código. No dupliques información sin necesidad.
