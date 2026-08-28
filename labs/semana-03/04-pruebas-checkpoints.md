# 04 · Pruebas y cierre

Crea una secuencia de ejecución clara en `Main` que permita observar cómo cambia el estado de cada cuenta.

Ejemplo de orden de prueba:

1. mostrar saldo inicial;
2. depositar un monto válido;
3. intentar depósito inválido;
4. retirar un monto válido;
5. intentar retiro imposible;
6. mostrar saldo final.

Repite al menos una operación sobre una segunda cuenta para demostrar que cada objeto conserva su propio estado.

## Checkpoint funcional

El laboratorio está terminado cuando:

- [ ] compila desde cero;
- [ ] las reglas válidas modifican el saldo;
- [ ] las reglas inválidas no modifican el saldo;
- [ ] dos objetos mantienen estados independientes;
- [ ] puedes explicar por qué `saldo` es privado;
- [ ] puedes explicar qué responsabilidad tiene `Cuenta` y qué responsabilidad tiene `Main`.

## Evidencia sugerida

Realiza un commit final, por ejemplo:

```text
feat: completar lab cuenta segura semana 03
```
