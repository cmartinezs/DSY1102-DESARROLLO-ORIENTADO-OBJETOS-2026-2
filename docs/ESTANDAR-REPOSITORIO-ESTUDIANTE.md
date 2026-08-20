# Estándar de repositorio del estudiante · DSY1102-012V

Este documento define cómo organiza y entrega su trabajo el estudiante. **No copia la estructura del repositorio docente.**

## 1. Repositorio único y público

Formato obligatorio:

```text
DSY1102-012V-nombre-apellido
```

Ejemplo:

```text
DSY1102-012V-carlos-martinez
```

Reglas:

- un solo repositorio para todo el semestre;
- repositorio **público**, salvo instrucción excepcional del docente;
- nombre y apellido en minúsculas, separados por `-`;
- sin espacios, tildes, `ñ` ni caracteres especiales.

El repositorio público permite revisar el trabajo real, la evolución, la documentación, el DevLog y los commits sin depender de entregas aisladas.

## 2. Estructura oficial

```text
DSY1102-012V-nombre-apellido/
├── README.md
├── .gitignore
├── docs/
│   ├── README.md
│   └── devlog/
│       ├── README.md
│       ├── semana-02.md
│       ├── semana-03.md
│       └── ...
├── practica/
│   └── README.md
├── labs/
│   └── README.md
├── proyecto-formativo/
│   └── README.md
├── desafios/
│   └── README.md
└── evaluaciones/
    ├── README.md
    ├── ep1/
    ├── ep2/
    ├── ep3/
    └── eft/
```

La carpeta `docs/` contiene documentación transversal del estudiante. Dentro de ella, `devlog/` registra el proceso semanal.

Las semanas son una dimensión curricular del curso; **no deben organizar el código técnico**. La excepción es el DevLog, porque su propósito es precisamente registrar el avance en el tiempo.

## 3. DevLog transversal

El DevLog real vive en:

```text
docs/devlog/semana-XX.md
```

Formato mínimo:

```markdown
# DevLog · Semana XX

## Objetivo
...

## Avance
...

## Bloqueo
...

## Aprendizaje
...

## Siguiente
...
```

No registra horas ni exige textos largos. Debe ser breve, específico y coherente con el trabajo real del repositorio.

Manual completo:

➡️ [`docs/DEVLOG-ESTUDIANTE.md`](./DEVLOG-ESTUDIANTE.md)

## 4. Identidad de packages

Usa el usuario institucional Duoc normalizado:

```text
c.martinez → cmartinez → cl.duoc.cmartinez
```

Patrón:

```text
cl.duoc.<usuario-duoc-sin-puntos>
```

## 5. Práctica

La práctica corta vive en un solo proyecto y se organiza por bloques conceptuales, no por semanas:

```text
practica/
└── src/cl/duoc/cmartinez/
    ├── fundamentos/ejercicio01/Main.java
    ├── condicionales/ejercicio01/Main.java
    ├── ciclos/ejercicio01/Main.java
    └── metodos/ejercicio01/Main.java
```

Ejemplo:

```java
package cl.duoc.cmartinez.ciclos.ejercicio01;
```

No crear un proyecto IntelliJ por cada ejercicio corto.

## 6. Laboratorios

Cada laboratorio de mayor alcance tiene su propia subcarpeta:

```text
labs/
└── cuenta-simple/
    ├── README.md
    └── src/cl/duoc/cmartinez/cuentasimple/
```

La carpeta del laboratorio debe contener todo lo necesario para entenderlo y ejecutarlo.

## 7. Proyecto formativo · PetCare

```text
proyecto-formativo/
└── petcare/
```

Package base:

```text
cl.duoc.cmartinez.petcare
```

PetCare evoluciona siempre en la misma carpeta. No crear `petcare-v2`, `petcare-final`, etc.; Git conserva la historia.

## 8. Desafíos

```text
desafios/
├── desafio-150-java/
├── desafio-100-poo/
├── desafio-25-javafx/
└── desafio-25-bd/
```

Cada gran desafío es un proyecto, no una colección de 150 proyectos independientes.

## 9. Evaluaciones

```text
evaluaciones/
├── ep1/
├── ep2/
├── ep3/
└── eft/
```

Cada entrega evaluada incluye exactamente lo necesario para ejecutar y revisar el trabajo y su propio `README.md` cuando corresponda.

## 10. Markdown obligatorio

README mínimo obligatorio en:

```text
/README.md
/docs/README.md
/docs/devlog/README.md
/practica/README.md
/labs/README.md
/proyecto-formativo/README.md
/desafios/README.md
/evaluaciones/README.md
```

Además, cada laboratorio, proyecto, desafío o evaluación con identidad propia debe tener su propio README.

El README raíz debe identificar al estudiante, asignatura/sección y explicar la estructura. También debe enlazar el DevLog:

```markdown
## Seguimiento
- [DevLog](docs/devlog/)
```

Un buen README explica objetivo, contenido, ejecución y decisiones. Los README sobresalientes pueden recibir bonificación definida por el docente; cumplir el mínimo no genera bonificación automática.

## 11. Qué versionar

Sí:

- código fuente;
- recursos necesarios;
- README y documentación Markdown;
- DevLog;
- archivos de construcción/configuración necesarios sin secretos.

No:

```text
.idea/
.vscode/
*.iml
*.class
out/
target/
build/
.gradle/
*.log
*.tmp
.env
.env.*
*.key
*.pem
```

Nunca subir secretos, tokens o credenciales.

## 12. Flujo Git mínimo

Al comenzar:

```bash
git pull
```

Al terminar:

```bash
git status
git add .
git commit -m "mensaje claro"
git push
```

Debe existir un solo `.git`: el del repositorio completo de la asignatura.

## 13. Relación entre evidencias

```text
Código     → qué construiste
Commits    → cómo fue cambiando
README     → cómo se entiende y ejecuta
DevLog     → qué ocurrió y qué aprendiste
Issues     → qué trabajo quieres abordar, cuando los incorporemos
```

No deben contradecirse entre sí.

## 14. Checklist

- [ ] Repo público con nombre correcto.
- [ ] Package raíz `cl.duoc.<usuario-sin-puntos>`.
- [ ] `docs/devlog/` existe y contiene el DevLog semanal.
- [ ] DevLog tiene objetivo, avance, bloqueo, aprendizaje y siguiente.
- [ ] Práctica organizada por bloques conceptuales, no por semanas.
- [ ] Labs, PetCare, desafíos y evaluaciones separados por naturaleza.
- [ ] README raíz, `docs/`, `devlog/` y carpetas principales documentados.
- [ ] Documentación coherente con el código real.
- [ ] Código compila/ejecuta según corresponda.
- [ ] No hay archivos de IDE, builds ni secretos versionados.
- [ ] Commit y push realizados y verificados en GitHub.

> La estructura docente y la estructura del estudiante son conceptos distintos. El repo del curso publica material; tu repo personal conserva tu trabajo, evolución y evidencia de aprendizaje.
