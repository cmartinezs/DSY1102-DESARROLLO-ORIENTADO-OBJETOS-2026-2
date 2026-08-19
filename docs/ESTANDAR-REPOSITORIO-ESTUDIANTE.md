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
- No usar tildes, ñ ni caracteres especiales.
- Si tienes dos nombres o dos apellidos, utiliza al menos el primer nombre y primer apellido, salvo que el docente indique otra cosa.

Ejemplos válidos:

```text
DSY1102-012V-ana-perez
DSY1102-012V-jose-gonzalez
DSY1102-012V-maria-jose-rojas
```

Ejemplos incorrectos:

```text
POO Carlos
DSY1102_Carlos_Martinez
DSY1102-012V-Carlos Martinez
mi-repo-java
```

---

## 2. Un repositorio para toda la asignatura

No se debe crear un repositorio nuevo por cada ejercicio, laboratorio o evaluación.

El repositorio personal representa **todo el trabajo del semestre**.

Estructura base:

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

## 3. Qué va en cada carpeta

### `practica/`

Ejercicios cortos de la clase.

Ejemplo:

```text
practica/
└── semana-02/
    └── fundamentos-java/
```

Cuando varios ejercicios son de **un solo archivo**, no es necesario crear un proyecto IntelliJ completo para cada uno.

Se puede utilizar un solo proyecto Java y separar cada ejercicio mediante packages.

Ejemplo:

```text
practica/semana-02/fundamentos-java/
└── src/
    └── cl/
        └── duoc/
            └── dsy1102/
                └── s012v/
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

Cada `Main.java` debe declarar el package correspondiente.

Ejemplo:

```java
package cl.duoc.dsy1102.s012v.practica.semana02.ejercicio01;

public class Main {
    public static void main(String[] args) {
        // solución del ejercicio
    }
}
```

### `examples/`

Código escrito siguiendo ejemplos desarrollados o reconstruidos durante la clase.

No es una carpeta para copiar sin entender: si el estudiante modifica, prueba o extiende un ejemplo, ese trabajo puede quedar registrado aquí.

### `labs/`

Los laboratorios son actividades de mayor alcance.

Cada laboratorio debe tener su propia subcarpeta.

Ejemplo:

```text
labs/
└── semana-02/
    └── cuenta-simple/
        ├── README.md
        └── src/
            └── cl/duoc/dsy1102/s012v/labs/cuentasimple/
                ├── Main.java
                └── Cuenta.java
```

Si el laboratorio utiliza Maven o Gradle más adelante, se sube también el archivo de configuración necesario (`pom.xml`, `build.gradle`, etc.).

### `proyecto-formativo/`

Contiene el proyecto longitudinal del semestre.

Para este curso:

```text
proyecto-formativo/
└── petcare/
```

PetCare debe evolucionar dentro de la misma carpeta. No crear `petcare-v2`, `petcare-final`, `petcare-ahora-si`, etc.

Git ya conserva el historial de versiones mediante commits.

### `desafios/`

Aquí se guardan los desafíos autónomos.

Para el desafío de 150 ejercicios, al igual que con la práctica corta, **no se deben crear 150 proyectos IntelliJ diferentes**.

Se utiliza un solo proyecto y un package por ejercicio:

```text
desafios/
└── desafio-150-java/
    └── src/
        └── cl/duoc/dsy1102/s012v/desafios/d150/
            ├── ejercicio001/
            │   └── Main.java
            ├── ejercicio002/
            │   └── Main.java
            ├── ejercicio003/
            │   └── Main.java
            └── ...
```

Cuando los desafíos posteriores ya sean proyectos POO, JavaFX o BD, cada desafío podrá tener su propia subcarpeta de proyecto.

### `evaluaciones/`

Esta carpeta queda reservada exclusivamente para entregas evaluadas.

```text
evaluaciones/
├── ep1/
├── ep2/
├── ep3/
└── eft/
```

Cada evaluación debe contener exactamente lo necesario para ejecutar y revisar la entrega correspondiente.

No utilizar esta carpeta para borradores de práctica.

---

## 4. Tres formatos de entrega

### A. Ejercicio de un solo archivo

Se recomienda un proyecto compartido con un package específico para cada ejercicio.

Ejemplo:

```text
src/cl/duoc/dsy1102/s012v/practica/semana02/ejercicio01/Main.java
```

Ventaja: no se crean decenas de carpetas `.idea`, archivos `.iml` ni proyectos repetidos.

### B. Actividad de varios archivos

Si la actividad necesita varias clases relacionadas, todos sus archivos deben quedar dentro del mismo package o conjunto coherente de packages.

Ejemplo:

```text
labs/semana-02/cuenta-simple/
└── src/
    └── cl/duoc/dsy1102/s012v/labs/cuentasimple/
        ├── Main.java
        └── Cuenta.java
```

### C. Proyecto completo

Cuando la entrega sea un proyecto real —PetCare, JavaFX, una evaluación o una aplicación con BD— se sube el proyecto completo dentro de su subcarpeta.

Se incluyen:

- `src/`;
- código fuente;
- recursos necesarios;
- `README.md` de la entrega cuando corresponda;
- `pom.xml`, `build.gradle` u otro archivo de construcción cuando corresponda;
- archivos de configuración propios de la aplicación que sean necesarios para ejecutarla y que no contengan secretos.

No se incluyen:

- `.idea/`;
- `.vscode/`;
- `*.iml`;
- `out/`;
- `target/`;
- `build/`;
- `.gradle/`;
- logs;
- archivos temporales;
- caches;
- archivos compilados `.class`;
- contraseñas, tokens, claves o credenciales.

---

## 5. Packages Java

Los packages deben:

- escribirse en minúsculas;
- no contener espacios;
- no contener guiones;
- no contener tildes ni caracteres especiales;
- indicar claramente a qué actividad pertenece el código.

Base sugerida para esta sección:

```text
cl.duoc.dsy1102.s012v
```

Ejemplos:

```text
cl.duoc.dsy1102.s012v.practica.semana02.ejercicio01
cl.duoc.dsy1102.s012v.labs.cuentasimple
cl.duoc.dsy1102.s012v.proyecto.petcare
cl.duoc.dsy1102.s012v.desafios.d150.ejercicio025
cl.duoc.dsy1102.s012v.evaluaciones.ep1
```

La carpeta física debe coincidir con el package.

Si el código dice:

```java
package cl.duoc.dsy1102.s012v.practica.semana02.ejercicio01;
```

el archivo debe estar bajo:

```text
src/cl/duoc/dsy1102/s012v/practica/semana02/ejercicio01/
```

---

## 6. `.gitignore` obligatorio

El repositorio debe tener un archivo `.gitignore` en la raíz.

Base recomendada:

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

> Si un archivo es necesario para ejecutar el proyecto, no se debe ignorar solo porque sea una “configuración”. Lo que se excluye es configuración local del IDE, archivos generados, temporales y secretos.

---

## 7. README de la raíz

El repositorio debe tener un `README.md` que permita identificar al estudiante y el curso.

Ejemplo:

```markdown
# DSY1102-012V · Desarrollo Orientado a Objetos

**Estudiante:** Carlos Martínez  
**Sección:** 012V  
**Semestre:** 2026-2

Repositorio personal de trabajo para la asignatura DSY1102.
```

No publicar RUT, teléfono, dirección, contraseña ni otros datos personales innecesarios.

---

## 8. README por proyecto o entrega importante

Un laboratorio grande, proyecto formativo o evaluación debe incluir un README breve que indique:

```text
Nombre de la actividad
Objetivo
Cómo ejecutar
Punto de entrada
Requisitos especiales, si existen
```

Ejemplo:

```markdown
# Cuenta simple

## Ejecución
Ejecutar `Main.java`.

## Contenido
- `Main.java`: inicia la aplicación.
- `Cuenta.java`: representa y administra una cuenta.
```

---

## 9. Commits

No esperar al final para hacer un único commit con todo el semestre.

Se esperan commits pequeños y comprensibles.

Ejemplos:

```text
practica: resolver ejercicio 03 semana 02
lab: implementar validación de retiro
petcare: agregar clase Mascota
petcare: encapsular peso de mascota
challenge: resolver ejercicio 018
```

Evitar mensajes como:

```text
cambios
asdf
final
ahora si
ultimo final definitivo
```

---

## 10. Flujo mínimo de trabajo

Primera vez:

```bash
git clone URL-DE-TU-REPOSITORIO
cd DSY1102-012V-nombre-apellido
```

Después de trabajar:

```bash
git status
git add .
git commit -m "practica: resolver ejercicio 01 semana 02"
git push
```

Antes de comenzar a trabajar desde otro computador:

```bash
git pull
```

Orden recomendado:

```text
llegar al computador
↓
git pull
↓
trabajar
↓
probar que el código funciona
↓
git status
↓
git add .
↓
git commit
↓
git push
```

---

## 11. Trabajar en más de un computador

Si trabajas en el instituto y luego en casa:

1. Antes de empezar, ejecuta `git pull`.
2. Trabaja normalmente.
3. Antes de irte, realiza commit y `git push`.
4. En el otro computador, vuelve a ejecutar `git pull` antes de modificar archivos.

No copies manualmente versiones distintas de la misma carpeta entre computadores si puedes evitarlo.

Git es el mecanismo de sincronización del código del curso.

---

## 12. Qué NO subir

No subir:

```text
.idea/
out/
target/
build/
*.class
*.log
.zip del mismo proyecto
copias del proyecto completas dentro del propio proyecto
credenciales
contraseñas
tokens
archivos temporales
```

Tampoco hacer esto:

```text
petcare/
├── petcare-final/
├── petcare-final2/
├── petcare-nuevo/
└── petcare-definitivo/
```

La versión correcta es:

```text
petcare/
└── ... código actual ...
```

Los estados anteriores quedan registrados en Git.

---

## 13. Repositorios Git dentro de repositorios Git

No ejecutar `git init` dentro de cada ejercicio o proyecto si ya estás dentro del repositorio de la asignatura.

Debe existir **un solo repositorio Git**, el de la asignatura.

Incorrecto:

```text
DSY1102-012V-ana-perez/.git/
└── labs/semana-02/cuenta-simple/.git/   ← NO
```

Correcto:

```text
DSY1102-012V-ana-perez/.git/
└── labs/semana-02/cuenta-simple/        ← carpeta normal
```

---

## 14. Entregas evaluadas

Cuando se indique una entrega evaluada:

1. Verifica que el proyecto se encuentre en `evaluaciones/<evaluacion>/`.
2. Ejecuta el proyecto desde una copia limpia si es posible.
3. Revisa `git status`.
4. No deben quedar archivos importantes sin registrar.
5. Haz un commit final identificable.
6. Haz `git push`.
7. Verifica en github.com que los archivos realmente aparezcan.
8. Entrega la URL solicitada en AVA o por el mecanismo informado.

Ejemplo de commit:

```text
evaluacion: entregar EP1
```

Una vez vencido el plazo, no modificar esa entrega salvo autorización del docente.

---

## 15. Lista de comprobación rápida

Antes de decir “está listo”, revisa:

- [ ] El repositorio tiene el nombre correcto.
- [ ] Estoy trabajando en el repositorio de la asignatura, no en otro.
- [ ] El archivo está en la carpeta correcta.
- [ ] El package coincide con su carpeta.
- [ ] El código compila y ejecuta.
- [ ] No subí `.idea`, `out`, `target`, logs o archivos `.class`.
- [ ] No subí credenciales.
- [ ] Hice commit.
- [ ] Hice push.
- [ ] Entré a GitHub desde el navegador y confirmé que el archivo aparece.

---

## Regla final

> **Si el docente no puede encontrar, clonar y ejecutar una entrega de manera razonable, la estructura del repositorio no está terminada.**

El objetivo de este estándar no es agregar burocracia: es aprender a mantener código ordenado, versionado y entregable, como se espera en un entorno profesional.