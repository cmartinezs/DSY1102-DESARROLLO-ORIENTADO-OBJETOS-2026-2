# Etapa 01 · Identificar el problema antes del código

## Diagnóstico de la Veterinaria heredada
1. Abre `labs/lab-veterinaria-herencia-polimorfismo/`, ejecuta los casos de semana 7 y fija el último commit estable.
2. Encuentra la colección existente: típicamente `List<Animal>`.
3. Identifica el método que registra animales; explica cómo evita duplicados hoy.
4. Ubica las operaciones para buscar y retirar un animal por un identificador.
5. Crea `docs/veterinaria-iv/01-necesidad.md` describiendo **un** requerimiento concreto:
   - **U1:** el sistema no debe aceptar dos animales con el mismo chip.
   - **B1:** dado un chip, localizar un animal sin recorrer manualmente la lista cada vez.
6. Selecciona la necesidad prioritaria. La otra sirve para comparar estrategias, no obliga a implementarla.

## Prueba de línea base
Registra `DOG-01` y luego intenta registrar otro distinto con `DOG-01`; busca `CAT-99` cuando no existe. Anota cómo se comporta *tu código actual*.

## Checkpoint
- [ ] Proyecto compila antes de modificar.
- [ ] Hay requisito y comportamiento observable, no solo una API nueva.
- [ ] Se conocen las operaciones afectadas.

**Commit:** `docs: registrar necesidad de colecciones`.
