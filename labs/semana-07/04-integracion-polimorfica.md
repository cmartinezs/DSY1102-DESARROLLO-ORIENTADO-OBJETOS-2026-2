# Etapa 04 · Lista, polimorfismo y capacidades

## Propósito
Integrar la abstracción e interfaz **sin volver a crear la colección**. `List<Animal>` continúa siendo la fuente de animales de tu Veterinaria II.

## Implementación progresiva
1. Usa una instancia de tu servicio/gestor existente.
2. Registra objetos de subtipos distintos.
3. Recorre la lista como `Animal`; invoca una operación sobrescrita para demostrar polimorfismo.
4. Al ofrecer un servicio de vacuna, consulta la capacidad **mediante la interfaz**, no comparando nombres de clases con Strings.
5. No repitas un bloque distinto de lógica para `Perro` y `Gato`.

## Referencia focalizada (adapta a tu clase)
```java
for (Animal animal : animales) {
    System.out.println(animal.describirAtencion()); // si definiste este método
    if (animal instanceof Vacunable) {
        Vacunable paciente = (Vacunable) animal;
        System.out.println(paciente.registrarVacuna("Antirrábica"));
    }
}
```
`animales` representa tu colección existente, obtenida donde realmente corresponde; el snippet no autoriza a hacer públicos los campos internos del gestor.

## Checkpoint
- [ ] Se imprimen al menos dos comportamientos concretos diferentes.
- [ ] No hay `if (animal.getClass() == ...)` ni comparación de especie por texto.
- [ ] Un subtipo sin capacidad no intenta registrar vacuna.
- [ ] No creaste una segunda lista para el mismo inventario.

**Commit sugerido:** `feat: integrar capacidades con polimorfismo`.
