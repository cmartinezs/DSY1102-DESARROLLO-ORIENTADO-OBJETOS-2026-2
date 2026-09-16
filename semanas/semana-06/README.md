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

Semana 6 no parte directamente desde Veterinaria. Primero se aprende cada herramienta con código pequeño y sin contexto complejo; después se practica de forma individual; finalmente se integra sobre la solución de Semana 05.

```text
concepto mínimo
    ↓
ejemplo ejecutable
    ↓
ejercicio breve
    ↓
variación / práctica
    ↓
integración en Veterinaria II
```

## Material de enseñanza

1. [`01-arrays.md`](01-arrays.md) — tamaño fijo, índices, recorridos y arrays de objetos.
2. [`02-list-arraylist.md`](02-list-arraylist.md) — colección dinámica, operaciones básicas y listas de objetos.
3. [`03-excepciones.md`](03-excepciones.md) — `try/catch`, `throw`, responsabilidades y excepción propia.

Los ejemplos ejecutables viven en [`../../ejemplos/semana-06/`](../../ejemplos/semana-06/).

## Práctica individual

El banco de [`../../ejercicios/semana-06/`](../../ejercicios/semana-06/) contiene ejercicios pequeños de 5–15 minutos. Los primeros bloques aíslan arrays, listas y excepciones; sólo al final aparecen ejercicios puente con `Animal`.

## Laboratorio integrador

**Veterinaria II · Arrays, colecciones y excepciones**

Veterinaria II continúa el artefacto creado por el estudiante durante Veterinaria I. No crea otro proyecto.

Ruta esperada en el repositorio del estudiante:

```text
labs/lab-veterinaria-herencia-polimorfismo/
```

La guía canónica está en [`../../labs/semana-06/`](../../labs/semana-06/) y conduce paso a paso por:

```text
solución existente
    ↓
Animal[]
    ↓
limitaciones observables
    ↓
List<Animal> / ArrayList<Animal>
    ↓
buscar y eliminar
    ↓
modelar situaciones inválidas
    ↓
throw + try/catch
    ↓
integración final
```

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
- aplicar todo lo anterior a una solución OO ya existente sin concentrar responsabilidades en `main`.
