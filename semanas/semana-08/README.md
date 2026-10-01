# Semana 08 · Set, Map y cierre de EA1

## Propósito

Extender el trabajo con colecciones incorporando `Set` y `Map`, comprender **qué problema resuelve cada estructura** y cerrar la Experiencia de Aprendizaje 1 con preparación para la Evaluación Parcial 1.

La idea central no es memorizar APIs nuevas. El estudiante debe poder leer una necesidad de negocio y decidir si requiere:

- una colección principal de cantidad variable y recorrido → `List`;
- valores que no deben repetirse → `Set`;
- una asociación clave → valor para recuperar información → `Map`.

## Contenidos

1. [`01-set.md`](01-set.md) — `Set`, `HashSet`, unicidad y operaciones esenciales.
2. [`02-map.md`](02-map.md) — `Map`, `HashMap`, claves, valores y búsqueda por clave.
3. [`03-elegir-list-set-map.md`](03-elegir-list-set-map.md) — criterio de elección e integración.

## Anexo de apoyo

4. [`04-anexo-intellij-generacion-codigo.md`](04-anexo-intellij-generacion-codigo.md) — uso de **Code → Generate...** para constructor, getters, setters, `toString()`, `equals()`, `hashCode()` y otros métodos, con énfasis en revisar que lo generado respete las reglas del negocio.

## Ejemplos ejecutables

Los ejemplos están en [`../../ejemplos/semana-08/`](../../ejemplos/semana-08/):

- `Set` y detección natural de duplicados;
- `Map` y búsqueda por clave;
- caso integrado `List + Set + Map`;
- `Set` de objetos propios con `equals()` y `hashCode()`.

## Idea central

```text
cantidad variable / recorrido → List
unicidad                     → Set
clave → valor                → Map
```

Las tres estructuras pueden coexistir en un mismo sistema cuando cada una resuelve una necesidad diferente.

## Criterio de salida

Al cerrar la semana, el estudiante debe poder:

- explicar por qué `Set` modela unicidad;
- usar `HashSet` con `add`, `contains`, `remove` y recorrido;
- explicar la relación clave → valor de un `Map`;
- usar `HashMap` con `put`, `get`, `containsKey`, `remove` y `entrySet`;
- distinguir cuándo corresponde `List`, `Set` o `Map`;
- integrar las estructuras en una solución OO sin usarlas artificialmente;
- reconocer cuándo una clase usada en un `HashSet` necesita una definición coherente de `equals()` y `hashCode()`;
- utilizar la generación de código del IDE como apoyo, sin delegar en él las decisiones de diseño;
- llegar a EP1 con una solución compilable, ejecutable y probada.
