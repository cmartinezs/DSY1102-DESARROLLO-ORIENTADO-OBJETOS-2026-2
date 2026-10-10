# Etapa 03 · Ruta A: Set para identificadores únicos

Esta ruta es adecuada cuando debes consultar/asegurar **unicidad de chips**. Si elegiste la ruta B (Map) como implementación, completa este paso como *comparación*, sin duplicar colecciones.

## Sintaxis focalizada
```java
Set<String> chips = new HashSet<>();
boolean nuevo = chips.add("DOG-01"); // true la primera vez
boolean repetido = chips.add("DOG-01"); // false
boolean existe = chips.contains("DOG-01");
chips.remove("DOG-01");
```

## Implementación si la necesidad es real
1. Conserva `List<Animal>` como fuente principal **si tiene sentido mantener el orden/recorrido**.
2. Agrega un `Set<String>` auxiliar solo si la verificación de repetidos lo justifica.
3. Al registrar, verifica si el chip ya existe antes de cambiar nada.
4. Valida el objeto completo; recién después agrega a las estructuras correspondientes.
5. Al eliminar, retira el animal y su chip coherentemente.
6. Para datos ya existentes, reconstruye una sola vez el índice de chips; no lo inicialices vacío si la lista tiene pacientes.

## Patrón de validación
```java
if (chips.contains(animal.getIdentificador())) {
    throw new IllegalArgumentException("Chip duplicado");
}
// Luego registrar de manera consistente en tu gestor.
```
Este fragmento no reemplaza el registro completo ni maneja automáticamente toda la sincronización.

## Checkpoint
- [ ] Registrar `DOG-01` y `CAT-01` funciona.
- [ ] Registrar otro `DOG-01` falla sin afectar lo ya registrado.
- [ ] Eliminar `DOG-01` permite registrarlo nuevamente si así lo exige el negocio.
- [ ] No quedan chips huérfanos después de eliminar.

**Commit:** `feat: asegurar unicidad de identificadores` (solo si implementaste esta ruta).
