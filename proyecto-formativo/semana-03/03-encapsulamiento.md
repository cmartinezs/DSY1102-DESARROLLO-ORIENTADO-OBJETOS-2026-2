# 03 · Proteger estado válido

Selecciona al menos un atributo cuyo valor no deba cambiar libremente desde fuera de `Mascota`.

Ejemplos razonables:

- peso mayor que cero;
- edad no negativa;
- vacunación modificada mediante una operación explícita.

Haz el atributo privado y controla su modificación mediante un método con una regla clara.

No uses excepciones propias todavía.

## Checkpoint

- [ ] el atributo elegido es privado;
- [ ] existe una operación controlada para modificarlo;
- [ ] un valor válido es aceptado;
- [ ] un valor inválido es rechazado sin corromper el objeto;
- [ ] `main` no modifica ese atributo directamente.
