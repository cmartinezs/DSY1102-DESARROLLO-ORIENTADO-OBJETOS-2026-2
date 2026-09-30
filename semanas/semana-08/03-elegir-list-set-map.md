# 03 · Elegir entre List, Set y Map

## No existe una colección “mejor”

Cada estructura expresa una intención distinta.

| Necesidad | Estructura típica | Idea principal |
|---|---|---|
| mantener muchos elementos y recorrerlos | `List` | secuencia / colección principal |
| impedir valores repetidos | `Set` | unicidad |
| relacionar una clave con un valor | `Map` | clave → valor |

## Ejemplo

Una biblioteca puede necesitar simultáneamente:

```java
List<Libro> catalogo;
Set<String> autoresRegistrados;
Map<String, Libro> librosPorIsbn;
```

Cada colección responde a una pregunta:

- `catalogo`: ¿qué libros administra el sistema?;
- `autoresRegistrados`: ¿qué autores distintos existen?;
- `librosPorIsbn`: ¿qué libro corresponde a este ISBN?

## Señales del requerimiento

**List** suele aparecer con ideas como catálogo, historial, recorrer todos o filtrar.

**Set** suele aparecer con palabras como único, distintos, sin repetir o evitar duplicados.

**Map** suele aparecer con frases como por código, por identificador, asociar o recuperar mediante clave.

## Error frecuente

Mal criterio:

> “Como aprendimos Set y Map, voy a poner uno de cada uno.”

Buen criterio:

> “Necesito unicidad aquí, por eso uso Set; necesito buscar por clave acá, por eso uso Map.”

Primero se identifica la necesidad del negocio. Después se elige la estructura.
