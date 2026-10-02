# 05 · Integrar sin duplicar estructuras innecesariamente

Puedes mantener más de una colección si cada una responde a una necesidad distinta.

```text
List<Mascota>        → recorrer todas
Set<String>          → impedir chips duplicados
Map<String, Mascota> → buscar por ID
```

Pero cada estructura adicional introduce trabajo de sincronización.

## Pregunta de diseño

¿Realmente necesito mantener los mismos objetos en varias estructuras?

Si no, elige la solución mínima.

## Checkpoint

- [ ] cada colección responde a una pregunta distinta;
- [ ] altas y eliminaciones mantienen consistencia;
- [ ] puedo justificar por qué no basta una sola estructura;
- [ ] no agregué colecciones sólo para demostrar APIs.
