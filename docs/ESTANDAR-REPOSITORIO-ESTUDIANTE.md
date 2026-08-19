# Estándar de repositorio del estudiante · DSY1102-012V

Este documento define **cómo entrega y organiza su trabajo el estudiante**. No intenta copiar la estructura interna del repositorio docente de la asignatura.

> El repositorio del curso puede organizar material por semanas, ejemplos, guías o recursos docentes. El repositorio del estudiante utiliza una estructura propia, pensada para trabajar y entregar de forma simple, consistente y fácil de revisar.

---

## 1. Nombre obligatorio del repositorio

Formato:

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
- palabras separadas por `-`;
- sin espacios, tildes, `ñ` ni caracteres especiales.

---

## 2. Un solo repositorio para todo el semestre

```text
DSY1102-012V-nombre-apellido/
├── README.md
├── .gitignore
├── practica/
├── labs/
├── proyecto-formativo/
├── desafios/
└── evaluaciones/
    ├── ep1/
    ├── ep2/
    ├── ep3/
    └── eft/
```

No existe obligación de replicar carpetas como `semanas/` o `examples/` del repositorio docente.

---

## 3. Package raíz personal

El código Java utiliza el usuario institucional Duoc normalizado.

Ejemplo:

```text
Usuario Duoc: c.martinez
Identificador: cmartinez
Package raíz: cl.duoc.cmartinez
```

Reglas:

- usar el usuario Duoc, no el correo completo;
- eliminar los puntos;
- minúsculas;
- no inventar otra abreviación.

---

## 4. Práctica de clase: un solo proyecto

Toda la práctica corta puede vivir en un único proyecto `practica/` durante el semestre.

La **semana no forma parte de la estructura técnica del proyecto**. La semana sirve para planificación y publicación del curso; el código del estudiante se organiza por **bloques conceptuales**.

Ejemplo:

```text
practica/
└── src/
    └── cl/
        └── duoc/
            └── cmartinez/
                ├── fundamentos/
                │   ├── ejercicio01/Main.java
                │   ├── ejercicio02/Main.java
                │   └── ejercicio03/Main.java
                ├── condicionales/
                │   ├── ejercicio01/Main.java
                │   └── ejercicio02/Main.java
                ├── ciclos/
                │   ├── ejercicio01/Main.java
                │   └── ejercicio02/Main.java
                └── metodos/
                    ├── ejercicio01/Main.java
                    └── ejercicio02/Main.java
```

Ejemplo de package:

```java
package cl.duoc.cmartinez.fundamentos.ejercicio01;
```

Otro ejemplo:

```java
package cl.duoc.cmartinez.ciclos.ejercicio02;
```

### Regla

```text
cl.duoc.<usuario>.<bloque>.<ejercicio>
```

No usar:

```text
cl.duoc.cmartinez.practica.semana02.fundamentos.ejercicio01
```

porque `practica` ya es el proyecto y la semana no aporta identidad técnica al ejercicio.

---

## 5. Laboratorios

Los laboratorios sí son entregas de mayor alcance y cada uno tiene su propia subcarpeta/proyecto.

```text
labs/
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

No es necesario colocar `semana-02` en el repositorio del estudiante si el laboratorio ya tiene un nombre único.

---

## 6. Proyecto formativo

```text
proyecto-formativo/
└── petcare/
```

Package base:

```text
cl.duoc.cmartinez.petcare
```

Puede crecer según responsabilidades reales del sistema:

```text
cl.duoc.cmartinez.petcare.model
cl.duoc.cmartinez.petcare.service
cl.duoc.cmartinez.petcare.ui
```

PetCare evoluciona en la misma carpeta durante todo el semestre.

---

## 7. Desafíos

Cada gran desafío tiene su propio proyecto dentro de `desafios/`.

```text
desafios/
├── desafio-150-java/
├── desafio-100-poo/
├── desafio-25-javafx/
└── desafio-25-bd/
```

Para el desafío 150:

```text
desafios/desafio-150-java/
└── src/cl/duoc/cmartinez/
    ├── fundamentos/ejercicio001/Main.java
    ├── condicionales/ejercicio021/Main.java
    ├── scanner/ejercicio046/Main.java
    └── ...
```

Los packages también pueden conservar el bloque conceptual:

```java
package cl.duoc.cmartinez.condicionales.ejercicio021;
```

Así el alumno sabe qué concepto ejercita sin depender de recordar en qué semana apareció.

---

## 8. Evaluaciones

```text
evaluaciones/
├── ep1/
├── ep2/
├── ep3/
└── eft/
```

Cada evaluación contiene exactamente lo necesario para revisar y ejecutar esa entrega.

Si la evaluación es un proyecto, su package se diseña según el nombre o dominio del proyecto, no según la carpeta `evaluaciones`.

---

## 9. Formatos de entrega

### A. Ejercicio de un archivo

Va dentro del proyecto correspondiente y de un package de bloque + ejercicio.

```text
practica/src/cl/duoc/cmartinez/ciclos/ejercicio03/Main.java
```

```java
package cl.duoc.cmartinez.ciclos.ejercicio03;
```

### B. Actividad de varios archivos

```text
labs/cuenta-simple/
└── src/cl/duoc/cmartinez/cuentasimple/
    ├── Main.java
    └── Cuenta.java
```

### C. Proyecto completo

Se suben:

- `src/`;
- código fuente;
- recursos necesarios;
- `README.md` cuando corresponda;
- `pom.xml`, `build.gradle` u otro archivo de construcción cuando corresponda;
- configuración necesaria y sin secretos.

No se suben:

- `.idea/`, `.vscode/`, `*.iml`;
- `out/`, `target/`, `build/`, `.gradle/`;
- logs, temporales y `.class`;
- claves, tokens o credenciales.

---

## 10. Package y carpeta física

Desde `src/` hacia abajo, la ruta física debe coincidir con el package.

```java
package cl.duoc.cmartinez.ciclos.ejercicio03;
```

corresponde a:

```text
src/cl/duoc/cmartinez/ciclos/ejercicio03/Main.java
```

---

## 11. `.gitignore` obligatorio

```gitignore
.idea/
*.iml
*.iws
*.ipr
.vscode/
*.class
out/
target/
build/
.gradle/
*.log
*.tmp
*.temp
.DS_Store
Thumbs.db
.env
.env.*
*.key
*.pem
```

---

## 12. Flujo mínimo de trabajo

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

No ejecutar `git init` dentro de cada proyecto. El repositorio Git es el repositorio completo de la asignatura.

---

## 13. Checklist

- [ ] El repositorio tiene el nombre correcto.
- [ ] Uso `cl.duoc.<usuario-duoc-sin-puntos>` como raíz de package.
- [ ] `practica/` es un solo proyecto.
- [ ] La práctica está organizada por bloques conceptuales, no por semanas.
- [ ] Cada ejercicio tiene su package de bloque + ejercicio.
- [ ] Labs, desafíos, proyecto formativo y evaluaciones están separados según su naturaleza.
- [ ] El package coincide con la carpeta desde `src/`.
- [ ] El código compila y ejecuta.
- [ ] No subí archivos basura del IDE ni secretos.
- [ ] Hice commit, push y verifiqué en GitHub.

> **Importante:** la estructura del repositorio docente y la estructura de entrega del estudiante son conceptos distintos. El alumno debe seguir este estándar para sus entregas, aunque el material del curso se publique de otra forma.
