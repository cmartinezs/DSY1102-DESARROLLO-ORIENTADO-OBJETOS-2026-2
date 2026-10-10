# Etapa 04 · Ruta B: Map para búsqueda directa por chip

Úsala cuando el requisito más importante sea obtener un `Animal` a partir de su identificador. Si mantienes la ruta A, trabaja esta etapa como contraste.

## Sintaxis focalizada
```java
Map<String, Animal> porChip = new HashMap<>();
porChip.put(animal.getIdentificador(), animal);
Animal encontrado = porChip.get("DOG-01"); // null si no existe
boolean existe = porChip.containsKey("DOG-01");
porChip.remove("DOG-01");
for (Map.Entry<String, Animal> entrada : porChip.entrySet()) {
    System.out.println(entrada.getKey());
}
```

## Precaución obligatoria: sobrescritura silenciosa
`put` con una clave existente reemplaza el valor anterior. **No** es válido para un registro que prohíbe identificadores duplicados.

```java
String chip = animal.getIdentificador();
if (porChip.containsKey(chip)) {
    throw new IllegalArgumentException("Chip ya registrado: " + chip);
}
porChip.put(chip, animal);
```

## Pasos de implementación
1. Decide si `Map` será la fuente principal o un índice auxiliar. Prefiere una sola estructura si resuelve tus operaciones.
2. Traslada/adapta registro, búsqueda y eliminación al gestor, no a `main`.
3. Para listar, recorre `values()` o `entrySet()`. `HashMap` **no garantiza orden**.
4. Prueba clave existente, clave inexistente y duplicado.
5. Si mantienes también una `List`, documenta cómo evitas inconsistencias en inserción/eliminación.

## Checkpoint
- [ ] Buscar `DOG-01` devuelve exactamente el animal esperado.
- [ ] Buscar `CAT-99` entrega ausencia/error controlado.
- [ ] No se sobrescribe un animal por duplicar chip.
- [ ] Eliminar no deja referencias huérfanas.

**Commit:** `feat: indexar pacientes por chip` (solo si implementaste esta ruta).
