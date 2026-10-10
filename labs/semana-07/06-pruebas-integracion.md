# Etapa 06 · Prueba de integración completa

## Secuencia reproducible
1. Arranca el proyecto usando la ruta original de Veterinaria I/II.
2. Registra al menos dos animales de subtipos diferentes y uno no elegible para vacuna.
3. Lista animales y observa polimorfismo.
4. Invoca un servicio sobre un `Vacunable` válido y conserva su respuesta.
5. Prueba uno no elegible sin `ClassCastException`.
6. Busca y elimina un animal existente con la lógica de Semana 6.
7. Prueba búsqueda de inexistente y el dato inválido de vacuna.
8. Lista de nuevo: el inventario debe ser coherente.

## Registro de pruebas
```text
Caso | Datos | Esperado | Observado | PASS/FAIL
T1 | Perro + Gato | ambos registrados | ... | ...
T2 | subtipos diferentes | comportamiento polimórfico | ... | ...
T3 | vacuna vacía | error controlado | ... | ...
T4 | salvaje no elegible | no se vacuna | ... | ...
T5 | eliminar inexistente | error controlado | ... | ...
```

## Checkpoint
- [ ] Todo el flujo ejecuta sin fallos no controlados.
- [ ] La salida evidencia una capacidad independiente de la jerarquía.
- [ ] Ningún contenido de Semana 8 o posterior fue necesario.
- [ ] Guardaste `evidencias/veterinaria-iii/03-integracion.txt`.

**Commit sugerido:** `test: integrar veterinaria III`.
