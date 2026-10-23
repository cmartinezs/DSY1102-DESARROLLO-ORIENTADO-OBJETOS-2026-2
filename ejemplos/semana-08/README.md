# Ejemplos · Semana 08

Ejemplos mínimos y ejecutables para comprender `Set`, `Map` y su uso conjunto con `List`.

1. [`01-SetBasico.java`](01-SetBasico.java) — `HashSet`, duplicados, `add` y recorrido con valores simples.
2. [`02-MapBasico.java`](02-MapBasico.java) — `put`, `get`, `containsKey` y claves únicas.
3. [`03-ListSetMapIntegrado.java`](03-ListSetMapIntegrado.java) — **demostración de integración opcional**, no mínimo atómico. Un mismo sistema usa:
   - `List<Libro>` como colección principal;
   - `Set<String>` para autores únicos;
   - `Map<String, Libro>` para búsqueda por ISBN. Se rechaza un ISBN duplicado **antes** de agregarlo a cualquier colección; de lo contrario la lista y el mapa podrían representar estados contradictorios.
4. [`04-SetLibrosEqualsHashCode.java`](04-SetLibrosEqualsHashCode.java) — `Set<Libro>` con igualdad de negocio basada en ISBN y sobrescritura de `equals` / `hashCode`.
5. [`05-SetAlumnosEqualsHashCode.java`](05-SetAlumnosEqualsHashCode.java) — segundo caso con `Set<Alumno>`, usando RUT como identidad estable.

## Ejecutar y observar

En un proyecto IntelliJ con **JDK 21**, copia los cinco archivos y ejecuta cada `main`; son autónomos, con auxiliares anidadas. **HashSet/HashMap no prometen orden de iteración**, por lo que comprueba cantidad, rechazo de duplicados y búsqueda, no el orden visual de salida. El ejemplo 03 es una integración deliberada para discutir la responsabilidad de mantener estructuras sincronizadas.

## Regla pedagógica

Antes de mirar la sintaxis, identifique la necesidad:

```text
cantidad variable / recorrido → List
unicidad                     → Set
clave → valor                → Map
```

Cuando un `Set` almacena objetos propios, además debe existir una definición coherente de igualdad. En `HashSet`, normalmente eso significa sobrescribir `equals()` y `hashCode()` usando el atributo o conjunto de atributos que represente la identidad del objeto para el negocio.

Los ejemplos usan dominios distintos de EP1 para no entregar accidentalmente una solución de la evaluación.
