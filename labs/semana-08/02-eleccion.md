# Etapa 02 · Elegir List, Set o Map razonadamente

## Tabla de decisión (no una obligación de usar tres estructuras)

| Requerimiento | Estructura candidata | Idea |
| --- | --- | --- |
| Recorrer animales en orden o mostrar catálogo | `List<Animal>` | Recorrido e índice |
| Conocer si un chip ya está registrado | `Set<String>` | Unicidad del valor |
| Recuperar un animal por chip | `Map<String, Animal>` | Asociación clave → valor |
| Mantener orden y buscar por clave | `List + Map` | Necesita sincronización explícita |

## Procedimiento
1. Describe la operación frecuente del requisito U1 o B1.
2. Identifica qué estructura es hoy la **fuente de verdad**.
3. Escribe una alternativa descartada con motivo: simplicidad, duplicación de estado o búsqueda.
4. Decide si sustituir la colección principal o añadir un índice separado realmente se justifica.
5. Documenta en `docs/veterinaria-iv/02-decision-colecciones.md` la opción escogida.

## Precaución
Tener `List`, `Set` y `Map` con los mismos datos crea más responsabilidad que beneficio si no necesitas todos. Una `List` con búsqueda lineal sigue siendo correcta cuando el problema es pequeño.

## Checkpoint
- [ ] La decisión está ligada a un requerimiento.
- [ ] Puedes justificar por qué no usaste otra estructura.
- [ ] La elección no destruye operaciones que ya funcionaban.

**Commit:** `docs: justificar estrategia de colecciones`.
