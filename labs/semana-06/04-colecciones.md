# Etapa 4 · Evolucionar a `List<Animal>`

## Propósito

Reemplazar el almacenamiento fijo por una colección dinámica manteniendo la abstracción `Animal` y el comportamiento polimórfico.

## Qué debes hacer

1. Cambia el almacenamiento interno de la veterinaria a `List<Animal>`.
2. Usa `ArrayList<Animal>` como implementación concreta.
3. Conserva una operación para registrar animales.
4. Conserva o mejora la operación para listar animales.
5. Evita que `main` administre directamente la colección.
6. Documenta en `docs/veterinaria-ii/02-colecciones.md` por qué la variable debería declararse como `List<Animal>` y no necesariamente como `ArrayList<Animal>`.

## Entregables

- `src/Veterinaria.java` o clase de servicio equivalente evolucionada;
- `docs/veterinaria-ii/02-colecciones.md`.

## Commits sugeridos

```text
LAB-VET2-04: migra almacenamiento a List de Animal
LAB-VET2-05: documenta decision de colecciones
```

## Checkpoint

Debes distinguir entre la interfaz `List` y la implementación `ArrayList`, y explicar por qué el polimorfismo de los animales sigue funcionando dentro de la colección.
