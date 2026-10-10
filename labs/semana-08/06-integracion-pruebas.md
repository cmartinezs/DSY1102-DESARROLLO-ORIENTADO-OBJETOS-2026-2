# Etapa 06 · Integrar, probar y comprobar consistencia

## Matriz mínima de pruebas
| ID | Entrada/operación | Resultado esperado |
| --- | --- | --- |
| T1 | registrar DOG-01 y CAT-01 | 2 pacientes distintos |
| T2 | registrar nuevamente DOG-01 | rechazo, total permanece en 2 |
| T3 | buscar DOG-01 | paciente correcto |
| T4 | buscar CAT-99 | ausencia/error controlado |
| T5 | eliminar DOG-01 | deja de aparecer en todas las vistas/estructuras |
| T6 | registrar DOG-01 otra vez | funciona, si negocio permite reutilizar chip |
| T7 | listar tras operaciones | sin duplicados ni entradas fantasma |

## Inspección de integridad
1. Confirma que el mismo gestor conserva responsabilidades de la semana 6.
2. Si elegiste `Set` auxiliar, compara cantidad de chips vs. animales con chip válido.
3. Si elegiste `Map` principal, prueba inserción y eliminación sin necesidad de `List` extra.
4. Si mantienes `List + Map`, simula un alta y baja y comprueba ambos: no basta con que `get` funcione.
5. Mantén las excepciones que ya existían y demuestra que un error no deja cambio parcial.
6. Documenta en `evidencias/veterinaria-iv/pruebas.txt` esperado, observado, PASS/FAIL y corrección.

## Checkpoint
- [ ] Compila y ejecuta sin librerías nuevas.
- [ ] Todas las operaciones del requisito elegido se prueban.
- [ ] No hay inconsistencias entre estructuras.
- [ ] Puedes explicar el costo conceptual de usar un índice auxiliar.

**Commit:** `test: validar colecciones e integridad veterinaria IV`.
