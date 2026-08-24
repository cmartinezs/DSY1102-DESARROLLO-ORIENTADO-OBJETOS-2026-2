# Dinámica viva · ¿Dato o responsabilidad?

**Duración sugerida:** 15–20 minutos  
**Objetivo:** distinguir qué pertenece al estado de un objeto y qué corresponde a su comportamiento.

## Instrucciones

Presenta un dominio simple, por ejemplo **Cuenta bancaria**.

Muestra una lista mezclada:

```text
saldo
numeroCuenta
depositar
retirar
titular
consultarSaldo
validarMonto
```

Cada estudiante clasifica individualmente cada elemento como:

- **dato/atributo**;
- **comportamiento/método**;
- **necesita discusión**.

Luego comparan respuestas en parejas y deben justificar dos decisiones.

## Segunda ronda

Pregunta:

> Si `saldo` fuera público, ¿qué cosas inválidas podría hacer otro código?

Después:

> ¿Qué operaciones debería exponer `Cuenta` para proteger ese estado?

## Cierre

Construyan entre todos una clase mínima en la pizarra, pero el docente no escribe el código completo de inmediato. Primero se acuerdan responsabilidades y reglas; después se traduce el diseño a Java.

## Evidencia rápida

Antes de terminar, cada estudiante escribe en una frase:

1. un atributo de un objeto;
2. un método del mismo objeto;
3. una regla que debería proteger la clase.