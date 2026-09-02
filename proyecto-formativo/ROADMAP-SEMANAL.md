# PetCare · Roadmap semanal del semestre

Este roadmap alinea el proyecto formativo con el contenido de DSY1102 y fija qué debe evolucionar semana a semana.

> El avance real de la sección manda. Si una clase avanza menos de lo previsto, la siguiente guía parte desde el checkpoint real.

---

# Semana 01 · Paradigma OO y fundamentos del lenguaje

## Contenido

- panorama POO;
- comparación general con programación estructurada;
- estructura básica de Java;
- variables, tipos, operadores y flujo básico según alcance real.

## PetCare

Presentación del contexto y primeras variables sueltas cuando corresponda.

No se introduce todavía una arquitectura formal.

---

# Semana 02 · Fundamentos Java y métodos

## PetCare

Datos simples de una mascota en `main`, condicionales, ciclos y extracción gradual de lógica a métodos cuando el grupo esté preparado.

No se fuerza todavía una arquitectura OO completa.

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
- composición introductoria, por ejemplo `Mascota -> Tutor`.

## Checkpoint

```text
cli.App
    ↓
core.model.Mascota ───> core.model.Tutor (opcional tras consolidar)
```

La CLI crea objetos y demuestra operaciones. El modelo protege su propio estado.

## Fuera de alcance mientras no se enseñe

- herencia;
- clases abstractas;
- interfaces;
- polimorfismo;
- colecciones;
- excepciones.

---

# Semana 05 · Continuidad POO aplicada / EF1

## Regla de entrada

La planificación concreta de Semana 05 se define a partir del checkpoint real de Semana 04.

Si constructores, encapsulamiento y colaboración simple están consolidados, el siguiente paso natural es:

```text
generalización / especialización
→ herencia
→ sobrescritura
→ polimorfismo
```

Solo después, y si el ritmo real lo permite, se incorporan colecciones y manejo de errores.

## Objetivo

Consolidar Unidad 1 sin introducir tecnologías de Unidad 2 y preparar EF1 desde lo efectivamente trabajado.

---

# Semana 06 · EP1

PetCare se pausa durante la evaluación formal.

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

PetCare se pausa.

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

PetCare se pausa.

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
