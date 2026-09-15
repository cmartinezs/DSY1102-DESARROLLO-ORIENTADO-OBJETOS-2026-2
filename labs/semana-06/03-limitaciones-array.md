# Etapa 3 · Descubrir las limitaciones del array

## Propósito

No migrar a `ArrayList` por receta. Primero debes identificar qué problemas reales aparecen al administrar animales con un array de tamaño fijo.

## Qué debes analizar

En `docs/veterinaria-ii/01-array.md`, agrega respuestas razonadas a estas preguntas:

- ¿qué ocurre cuando el array se llena?;
- ¿cómo sabes cuántas posiciones están realmente ocupadas?;
- ¿qué significa una posición `null`?;
- ¿qué costo conceptual tiene agregar un animal cuando no quedan posiciones?;
- ¿qué implica eliminar un animal de una posición intermedia?;
- ¿qué lógica adicional estás escribiendo sólo para administrar el contenedor?

## Entregable

El mismo `docs/veterinaria-ii/01-array.md`, ahora ampliado con al menos tres limitaciones verificadas en tu propia implementación.

## Commit sugerido

```text
LAB-VET2-03: documenta limitaciones del almacenamiento con array
```

## Checkpoint

Debes poder justificar el cambio a una colección dinámica por una necesidad observada en tu solución, no porque `ArrayList` sea “mejor” de forma abstracta.
