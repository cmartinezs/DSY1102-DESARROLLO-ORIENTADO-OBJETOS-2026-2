# Etapa 5 · Buscar y eliminar animales

## Propósito

Agregar operaciones de gestión sin convertir `main` en un bloque de lógica procedural.

## Qué debes hacer

1. Define una identidad estable para cada animal. Si tu modelo ya posee un identificador adecuado, reutilízalo; si no, incorpóralo en `Animal`.
2. Implementa una operación de búsqueda por identificador.
3. Implementa una operación de eliminación usando esa misma identidad.
4. La colección debe permanecer encapsulada dentro del objeto responsable de administrarla.
5. Prueba al menos un caso encontrado y uno no encontrado.

## Entregables

- `src/Animal.java` si necesitas incorporar o ajustar la identidad;
- `src/Veterinaria.java` o clase de servicio equivalente con búsqueda y eliminación;
- `evidencias/veterinaria-ii/01-busqueda-eliminacion.txt` con resultados observables.

## Commits sugeridos

```text
LAB-VET2-06: incorpora identidad busqueda y eliminacion
LAB-VET2-07: registra evidencia de busqueda y eliminacion
```

## Checkpoint

Debes poder explicar por qué buscar y eliminar son responsabilidades de la capa que administra la colección y no una cadena de decisiones repetidas en `main`.
