# Semana 06 · Arrays, colecciones y excepciones

## Propósito

Aprender a administrar conjuntos de datos y objetos con arrays y colecciones, y controlar situaciones inválidas mediante excepciones, separando claramente **enseñanza del concepto**, **práctica breve** e **integración guiada**.

## Contenidos

- arrays y arrays de objetos;
- tamaño fijo, índices y recorridos;
- `List` y `ArrayList`;
- `add`, `get`, `size`, búsqueda y eliminación;
- colecciones de objetos y polimorfismo;
- situaciones inválidas;
- `throw`, `try` y `catch`;
- excepciones específicas y manejo explícito de errores.

## Ruta de aprendizaje

Semana 6 no parte directamente desde Veterinaria. Primero se aprende cada herramienta con código pequeño y sin contexto complejo; después se practica de forma individual; finalmente se integra en un **laboratorio autónomo** de inscripciones a talleres. La cadena Veterinaria queda como alternativa histórica opcional.

```text
concepto mínimo
    ↓
ejemplo ejecutable
    ↓
ejercicio breve
    ↓
variación / práctica
    ↓
laboratorio independiente Inscripciones a talleres
```

## Material de enseñanza

1. [`01-arrays.md`](01-arrays.md) — tamaño fijo, índices, recorridos y arrays de objetos.
2. [`02-list-arraylist.md`](02-list-arraylist.md) — colección dinámica, operaciones básicas y listas de objetos.
3. [`03-excepciones.md`](03-excepciones.md) — `try/catch`, `throw`, responsabilidades y excepción propia.

Los ejemplos ejecutables viven en [`../../ejemplos/semana-06/`](../../ejemplos/semana-06/).

## Práctica individual

El banco de [`../../ejercicios/semana-06/`](../../ejercicios/semana-06/) contiene ejercicios pequeños de 5–15 minutos. Los primeros bloques aíslan arrays, listas y excepciones; sólo al final aparecen ejercicios puente con `Animal`.

## Laboratorio integrador
**[Inscripciones a talleres · guía autónoma](../../labs/semana-06/independiente/README.md)**. Se crea un proyecto nuevo y autónomo; dentro de él se compara `Inscripcion[]` con `List<Inscripcion>`, se agregan búsquedas y se practican excepciones.

**[Veterinaria II · guía histórica opcional](../../labs/semana-06/HISTORICO-VETERINARIA.md)**: conserva su continuidad con Veterinaria I, pero **no es prerrequisito ni entrega obligatoria** del laboratorio semanal.


## Separación de capas

| Capa | Responsabilidad |
|---|---|
| `semanas/semana-06/` | Enseñar conceptos con snippets pequeños y código suelto |
| `ejemplos/semana-06/` | Proveer programas Java mínimos y ejecutables |
| `ejercicios/semana-06/` | Practicar individualmente una habilidad concreta |
| `labs/semana-06/` | Integrar conocimiento semanal y acumulado con guía, código de apoyo, entregables y checkpoints |

## Criterio de salida

Al cerrar la semana, el estudiante debe poder:

- crear y recorrer arrays;
- explicar sus limitaciones;
- usar `List` / `ArrayList` y sus operaciones esenciales;
- administrar objetos dentro de una colección;
- distinguir quién detecta una condición inválida, quién lanza una excepción y quién debe capturarla;
- integrar estos conceptos en una solución OO creada durante **este mismo laboratorio**, sin concentrar responsabilidades en `main`.
