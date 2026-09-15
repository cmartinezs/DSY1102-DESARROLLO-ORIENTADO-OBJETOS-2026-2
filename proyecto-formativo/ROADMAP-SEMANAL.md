# PetCare · Roadmap semanal del semestre

Este roadmap alinea el proyecto formativo con el contenido de DSY1102 y fija qué debe evolucionar semana a semana.

> El avance real de la sección manda. Si una clase avanza menos o más de lo previsto, la siguiente guía parte desde el checkpoint real. Las referencias históricas a evaluaciones no reemplazan el contenido efectivamente trabajado.

---

# Semana 01 · Paradigma OO y fundamentos del lenguaje

## Contenido

- panorama POO;
- comparación general con programación estructurada;
- estructura básica de Java;
- variables, tipos, operadores y flujo básico según alcance real.

## PetCare

Presentación del contexto y primeras variables sueltas cuando corresponda. No se introduce todavía una arquitectura formal.

---

# Semana 02 · Fundamentos Java y métodos

## PetCare

Datos simples de una mascota en `main`, condicionales, ciclos y extracción gradual de lógica a métodos cuando el grupo esté preparado. No se fuerza todavía una arquitectura OO completa.

---

# Semana 03 · De métodos a objetos y encapsulamiento

## Evolución real

```text
métodos
→ clase Mascota
→ atributos
→ métodos operacionales
→ accesores / mutadores con criterio
→ encapsulamiento
→ constructor al cierre / transición a Semana 04
```

## Checkpoint

```text
cli.App
    ↓
core.model.Mascota
```

`Mascota` comienza a mantener su estado y reglas simples. No agregar herencia, listas ni excepciones todavía.

---

# Semana 04 · Constructores, estado válido y composición introductoria

## Punto de entrada real

El martes 1 de septiembre la sección llegó a **constructores**.

## Evolución

- constructor con parámetros;
- instancias completamente inicializadas;
- diferencia entre constructor y método operacional;
- `this` cuando corresponda;
- encapsulamiento y estado válido;
- getters/setters con criterio;
- responsabilidades;
- colaboración simple entre objetos;
- composición introductoria, por ejemplo `Mascota -> Tutor`;
- entrada por consola y refactor de responsabilidades cuando corresponde.

## Checkpoint

```text
cli.App
    ↓
core.model.Mascota ───> core.model.Tutor
```

La CLI crea objetos y demuestra operaciones. El modelo protege su propio estado.

---

# Semana 05 · Herencia y polimorfismo · Veterinaria I

## Evolución real

```text
generalización / especialización
→ herencia
→ sobrescritura
→ polimorfismo dinámico
```

El laboratorio Veterinaria I consolida una jerarquía de animales y permite observar comportamiento polimórfico. Arrays, colecciones y excepciones se reservan para la siguiente progresión.

## Checkpoint

El estudiante debe poder construir una jerarquía sencilla, sobrescribir comportamiento y utilizar referencias del tipo base para trabajar con subtipos.

---

# Semana 06 · Arrays, colecciones y excepciones · Veterinaria II

## Entrada

Se parte desde la jerarquía OO consolidada en Semana 05, pero los conceptos nuevos se enseñan primero mediante ejemplos mínimos e independientes.

## Progresión

```text
arrays
→ arrays de objetos
→ limitaciones de tamaño fijo
→ List / ArrayList
→ búsqueda y eliminación
→ situaciones inválidas
→ throw
→ try/catch
→ excepción específica cuando corresponda
```

## Integración

Veterinaria II evoluciona el mismo artefacto del estudiante para administrar múltiples animales y manejar situaciones inválidas de forma explícita.

## Checkpoint

Al cerrar la semana el estudiante debe poder administrar conjuntos de objetos, justificar array versus lista, y explicar quién detecta, lanza y captura una excepción.

> La planificación histórica que ubicaba EP1 como única actividad de Semana 06 queda subordinada al avance real confirmado al 15 de septiembre de 2026.

---

# Semana 07 · Maven y JavaFX

## Problema de entrada

La aplicación funciona, pero toda interacción ocurre por consola.

## Evolución

- incorporar Maven según contenido institucional;
- crear aplicación JavaFX;
- comprender ciclo de vida;
- primera ventana;
- reutilizar el mismo core.

```text
CLI ────┐
        ├──> core
JavaFX ─┘
```

---

# Semana 08 · Scene Builder, FXML, componentes y eventos

- FXML;
- Controller;
- campos y botones;
- eventos;
- formularios;
- reutilización del core.

---

# Semana 09 · MVC, TableView, navegación y validación

- TableView;
- formularios;
- navegación;
- Controllers organizados;
- MVC;
- validaciones de interfaz separadas de reglas del dominio.

---

# Semana 10 · JSON + DAO/Repository + MVC completo

- persistencia JSON;
- contrato de persistencia cuando corresponda;
- recuperación de datos al iniciar;
- integración con JavaFX/MVC.

```text
FX → core/service → MascotaRepository
                       ↑
                 implementación JSON
```

---

# Semana 11 · JavaFX + MVC + persistencia / EF2

Consolidación y refactor del flujo completo.

---

# Semana 12 · EP2

PetCare se pausa cuando corresponda según calendario institucional vigente.

---

# Semana 13 · JDBC, CRUD y PreparedStatement

- conexión JDBC;
- SELECT;
- INSERT;
- UPDATE;
- DELETE;
- `PreparedStatement`;
- manejo de recursos y errores.

```text
MascotaRepository
├── JsonMascotaRepository
└── JdbcMascotaRepository
```

---

# Semana 14 · DAO + integración BD

Completar persistencia relacional e integración con JavaFX manteniendo responsabilidades separadas.

---

# Semana 15 · BD y persistencia / EF3

Consolidación de CRUD, JDBC, DAO/Repository, UI, core y manejo de errores.

---

# Semana 16 · EP3

PetCare se pausa cuando corresponda según calendario institucional vigente.

---

# Semanas 17–18 · EFT / defensa técnica

PetCare sirve como evidencia histórica del aprendizaje. El alumno debería poder explicar:

```text
qué cambió
por qué cambió
qué se reutilizó
qué tecnología quedó aislada
```

---

# Regla de preparación semanal

Antes de escribir la siguiente guía:

1. revisar contenido institucional;
2. revisar avance real de la clase anterior;
3. abrir checkpoint PetCare actual;
4. identificar una necesidad concreta que permita aplicar lo nuevo;
5. evitar adelantar conceptos futuros;
6. definir qué queda en core y qué pertenece a interfaz/persistencia;
7. definir checkpoint de salida de cada clase.
