# Ejemplos · Semana 08

Ejemplos mínimos y ejecutables para comprender `Set`, `Map` y su uso conjunto con `List`.

1. [`01-SetBasico.java`](01-SetBasico.java) — `HashSet`, duplicados, `add` y recorrido con valores simples.
2. [`02-MapBasico.java`](02-MapBasico.java) — `put`, `get`, `containsKey` y claves únicas.
3. [`03-ListSetMapIntegrado.java`](03-ListSetMapIntegrado.java) — un mismo sistema usa:
   - `List<Libro>` como colección principal;
   - `Set<String>` para autores únicos;
   - `Map<String, Libro>` para búsqueda por ISBN.
4. [`04-SetLibrosEqualsHashCode.java`](04-SetLibrosEqualsHashCode.java) — `Set<Libro>` con igualdad de negocio basada en ISBN y sobrescritura de `equals` / `hashCode`.
5. [`05-SetAlumnosEqualsHashCode.java`](05-SetAlumnosEqualsHashCode.java) — segundo caso con `Set<Alumno>`, usando RUT como identidad estable.

## Regla pedagógica

Antes de mirar la sintaxis, identifique la necesidad:

```text
cantidad variable / recorrido → List
unicidad                     → Set
clave → valor                → Map
```

Cuando un `Set` almacena objetos propios, además debe existir una definición coherente de igualdad. En `HashSet`, normalmente eso significa sobrescribir `equals()` y `hashCode()` usando el atributo o conjunto de atributos que represente la identidad del objeto para el negocio.

Los ejemplos usan dominios distintos de EP1 para no entregar accidentalmente una solución de la evaluación.
