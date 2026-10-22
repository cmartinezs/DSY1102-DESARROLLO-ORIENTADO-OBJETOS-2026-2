# 04 · Verificar y presentar evidencia

[← 03 · Objetos](03-clases-objetos.md) · [Índice](README.md)

## Pruebas paso a paso
1. Ejecuta `Main` y observa el saldo de Ana: `12500.0`.
2. Observa el de Pedro: `4500.0`.
3. Agrega después de `ana.depositar(2500)` una segunda llamada `ana.depositar(1000)`.
4. Ejecuta: Ana ahora debe mostrar `13500.0` y Pedro permanece en `4500.0`.
5. Restituye el código de la etapa 03 para dejar la entrega comparable.

| Caso | Acción | Esperado |
|---|---|---|
| T01 | Depósito Ana 2500 | 12500 |
| T02 | Depósito Pedro 500 | 4500 |
| T03 | Segundo depósito Ana 1000 | 13500 sin alterar Pedro |

**Checkpoint final:** sabes explicar `new Cuenta(...)`, constructor, encapsulación introductoria y diferencia entre variable local y atributo de objeto.

## Evidencias
Adjunta `Main.java`, `Cuenta.java`, captura de la consola y tres líneas explicando el cambio de `main` → método → objeto.

**Importante:** en esta semana aún no diseñamos un sistema financiero real ni exigimos excepciones. Semana 03 presenta su propio laboratorio autónomo para reglas más estrictas.
