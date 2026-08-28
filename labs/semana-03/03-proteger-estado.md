# 03 · Proteger el estado

Convierte `saldo` en estado protegido: no debe poder modificarse libremente desde fuera de `Cuenta`.

Implementa operaciones con reglas explícitas:

```text
depositar(monto)
- aceptar sólo montos > 0

retirar(monto)
- aceptar sólo montos > 0
- rechazar si monto > saldo
```

Cada operación debe dejar el objeto en un estado válido incluso cuando reciba datos incorrectos.

No necesitas excepciones todavía. Puedes devolver `boolean` para informar si la operación fue aceptada o rechazada.

## Checkpoint

Prueba desde `Main`:

- [ ] depósito válido;
- [ ] depósito con monto 0 o negativo;
- [ ] retiro válido;
- [ ] retiro mayor al saldo;
- [ ] el saldo nunca queda negativo;
- [ ] `Main` no modifica `saldo` directamente.
