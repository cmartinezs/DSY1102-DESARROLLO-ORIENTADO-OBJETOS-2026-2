# Ejemplos · Semana 08

Ejemplos mínimos y ejecutables para comprender `Set`, `Map` y su uso conjunto con `List`.

1. [`01-SetBasico.java`](01-SetBasico.java) — `HashSet`, duplicados, `add` y recorrido.
2. [`02-MapBasico.java`](02-MapBasico.java) — `put`, `get`, `containsKey` y claves únicas.
3. [`03-ListSetMapIntegrado.java`](03-ListSetMapIntegrado.java) — un mismo sistema usa:
   - `List<Libro>` como colección principal;
   - `Set<String>` para autores únicos;
   - `Map<String, Libro>` para búsqueda por ISBN.

## Regla pedagógica

Antes de mirar la sintaxis, identifique la necesidad:

```text
cantidad variable / recorrido → List
unicidad                     → Set
clave → valor                → Map
```

Los ejemplos usan un dominio distinto de EP1 para no entregar accidentalmente una solución de la evaluación.
