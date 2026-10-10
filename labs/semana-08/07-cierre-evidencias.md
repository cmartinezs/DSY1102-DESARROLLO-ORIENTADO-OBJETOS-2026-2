# Etapa 07 · Cierre y defensa técnica · Semana 08

## Checklist de entrega
- [ ] Mismo proyecto de Veterinaria desde semana 5; sin duplicar `src`.
- [ ] `docs/veterinaria-iv/01-necesidad.md` explica el problema.
- [ ] `docs/veterinaria-iv/02-decision-colecciones.md` elige estructura y descarta una alternativa.
- [ ] `docs/veterinaria-iv/03-integridad.md` trata identidad y consistencia.
- [ ] `evidencias/veterinaria-iv/pruebas.txt` registra casos válidos e inválidos.
- [ ] Ejecución verificable, commits progresivos y DevLog de Semana 8.
- [ ] Sin `Stream`, lambdas, JavaFX ni persistencia añadidas para resolver este lab.

## Preguntas para defender el diseño
1. ¿Por qué `List`, `Set` o `Map` en tu caso?
2. ¿Qué error genera usar `Map.put` sin revisar duplicados?
3. ¿Qué operación debe ejecutarse al eliminar un paciente?
4. ¿Cuándo necesitas `equals/hashCode` sobre tus clases y cuándo basta con `String`?
5. ¿Qué riesgo asumes manteniendo dos índices sobre los mismos animales?

## Checkpoint final
La funcionalidad previa sigue existiendo y la estructura elegida cumple una necesidad real con casos de prueba reproducibles. La salida no se mide por “usar la mayor cantidad de colecciones”.

**Commit:** `docs: cerrar laboratorio veterinaria IV`.

**Siguiente etapa:** en Semana 9 la interfaz JavaFX se conecta con un core ya confiable. Este lab no enseña UI ni JSON.
