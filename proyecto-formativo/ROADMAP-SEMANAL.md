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

# Semana 02 · Métodos, clases, abstracción y encapsulamiento

## Entrada

Datos simples de una mascota en `main`.

## Clase martes 18

Recuperación necesaria por el feriado:

```text
variables
→ operadores
→ if/else
→ ciclos
→ detectar repetición
→ primer método si el ritmo permite
```

## Clase sábado 22

```text
métodos
→ datos relacionados
→ clase Mascota
→ objetos
→ private
→ comportamiento que protege estado
```

## Checkpoint

Al cierre:

```text
cli.App
    ↓
core.model.Mascota
```

La CLI muestra/interactúa; `Mascota` mantiene su estado y reglas básicas.

No agregar herencia/listas/excepciones todavía.

---

# Semana 03 · Herencia, interfaces y polimorfismo

## Problema de entrada

No todas las mascotas necesariamente comparten exactamente el mismo comportamiento.

## Evolución posible

- analizar qué es común y qué varía;
- generalización/especialización solo cuando tenga sentido;
- herencia;
- sobrescritura;
- polimorfismo;
- interfaces para comportamientos transversales si el contenido lo justifica.

Ejemplo conceptual posible:

```text
Mascota
├── Perro
└── Gato
```

La jerarquía no se entrega resuelta de antemano: debe nacer del problema trabajado en clase.

## Checkpoint

CLI puede trabajar con referencias del tipo general y obtener comportamiento específico.

---

# Semana 04 · Excepciones y colecciones

## Problema de entrada

PetCare ya no administra una sola mascota.

## Evolución

- `List<Mascota>`;
- agregar/eliminar/buscar;
- recorridos;
- validaciones;
- excepciones para situaciones inválidas cuando corresponda;
- separar operaciones de colección del flujo de impresión.

Puede comenzar a aparecer un servicio:

```text
core.service.PetCareService
```

si la cantidad de operaciones ya justifica extraer responsabilidad desde `App`.

## Checkpoint

```text
CLI
 ↓
PetCareService
 ↓
modelo de dominio
```

Datos todavía en memoria.

---

# Semana 05 · POO aplicada / EF1

## Objetivo

Consolidar Unidad 1 sin introducir tecnologías de Unidad 2.

## PetCare

Revisión/refactor del core:

- responsabilidades;
- encapsulamiento;
- herencia/polimorfismo si corresponde;
- colecciones;
- excepciones;
- métodos reutilizables;
- CLI delgada.

## Checkpoint Unidad 1

El core debe ser Java puro y ejecutable desde CLI.

Debe evitar dependencia directa de:

- JavaFX;
- JDBC;
- JSON;
- componentes visuales.

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

Dirección:

```text
CLI ────┐
        ├──> core
JavaFX ─┘
```

## Checkpoint

Una UI JavaFX mínima invoca una operación real del core.

---

# Semana 08 · Scene Builder, FXML, componentes y eventos

## Evolución

- FXML;
- Controller;
- campos y botones;
- eventos;
- formulario de mascota;
- mostrar resultado devuelto por el core.

Evitar trasladar validaciones de negocio al controlador solo porque ahora existe una GUI.

---

# Semana 09 · MVC, TableView, navegación y validación

## Evolución

- TableView con varias mascotas;
- formularios;
- navegación;
- Controllers más organizados;
- aplicación del patrón MVC según material;
- validaciones de interfaz separadas de reglas del dominio.

## Checkpoint

La interfaz puede listar, crear/modificar y navegar utilizando el core existente.

---

# Semana 10 · JSON + DAO/Repository + MVC completo

## Problema de entrada

Al cerrar la app los datos desaparecen.

## Evolución

- persistencia JSON;
- contrato de persistencia cuando el contenido lo permita;
- implementación concreta JSON;
- recuperación de datos al iniciar;
- integración con JavaFX/MVC.

Dirección posible:

```text
FX → core/service → MascotaRepository
                       ↑
                 implementación JSON
```

## Checkpoint

Cambiar el mecanismo de almacenamiento no debería requerir reescribir `Mascota` ni las pantallas completas.

---

# Semana 11 · JavaFX + MVC + persistencia / EF2

Consolidación y refactor:

- flujo completo;
- persistencia JSON;
- TableView/formularios;
- manejo de errores;
- responsabilidades claras.

---

# Semana 12 · EP2

PetCare se pausa.

---

# Semana 13 · JDBC, CRUD y PreparedStatement

## Problema de entrada

Ahora la persistencia debe vivir en una BD relacional.

## Evolución

- conexión JDBC;
- SELECT;
- INSERT;
- UPDATE;
- DELETE;
- `PreparedStatement`;
- manejo de recursos y errores.

Crear una implementación JDBC del mismo contrato cuando corresponda:

```text
MascotaRepository
├── JsonMascotaRepository
└── JdbcMascotaRepository
```

## Objetivo pedagógico

Mostrar que cambia **cómo se guarda**, no qué significa una mascota ni cómo funciona toda la interfaz.

---

# Semana 14 · DAO + integración BD

## Evolución

- completar DAO/Repository JDBC;
- integrar con JavaFX;
- CRUD completo;
- refactorizar duplicación;
- mantener SQL fuera del modelo y de los Controllers cuando sea razonable.

## Checkpoint

Aplicación JavaFX operando sobre persistencia relacional.

---

# Semana 15 · BD y persistencia / EF3

Consolidación de:

- CRUD;
- JDBC;
- DAO/Repository;
- UI + core + persistencia;
- manejo de errores.

---

# Semana 16 · EP3

PetCare se pausa.

---

# Semanas 17–18 · EFT / defensa técnica

PetCare puede servir como evidencia histórica del aprendizaje y material de repaso, pero no como plantilla de respuesta de la EFT.

El alumno debería poder recorrer su historial y explicar:

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
6. definir qué queda en core y qué pertenece a la interfaz/persistencia;
7. definir checkpoint de salida de cada clase.
