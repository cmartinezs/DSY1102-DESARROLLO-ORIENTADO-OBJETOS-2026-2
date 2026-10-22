# 04 · Casos reproducibles y evidencia

[← 03 · Estado protegido](03-proteger-estado.md) · [Índice](README.md)

## Paso 1 · Ejecuta sin cambiar la lógica
Usa `Main` de la etapa 03 y comprueba sus salidas. Luego inserta pruebas adicionales antes del cierre de `main`:

```java
System.out.println("Depósito cero: " + cuentaAna.depositar(0));
System.out.println("Retiro válido Pedro: " + cuentaPedro.retirar(1000));
System.out.println("Saldo final Pedro: " + cuentaPedro.getSaldo());
```

La consola debería indicar `false`, `true` y `4000.0`.

## Paso 2 · Matriz de aceptación
| ID | Operación | Esperado |
|---|---|---|
| T01 | Ana saldo 10000, deposita 2000 | 12000; true |
| T02 | Pedro saldo 5000, retira 9000 | 5000; false |
| T03 | Ana intenta depositar 0 | No cambia; false |
| T04 | Pedro retira 1000 | 4000; true |
| T05 | Dos objetos con distintos titulares | Saldos independientes |
| T06 | Código externo intenta cambiar `saldo` | No permitido por `private` |

**Checkpoint final:** no hay errores de compilación y puedes explicar cómo las reglas mantienen el saldo válido.

## Paso 3 · Evidencia
Entrega `Cuenta.java`, `Main.java`, captura de la consola y respuestas: ¿por qué `private`? ¿Por qué el retorno boolean? ¿Por qué el constructor rechaza un saldo negativo? Para evitar mezclar laboratorios, **no uses archivos de semana 02**.
