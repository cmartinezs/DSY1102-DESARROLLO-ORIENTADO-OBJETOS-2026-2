# 04 · Pruebas, evidencia y cierre

[← 03 · Integración](03-integracion.md) · [Índice](README.md)

## Paso 1 · Ejecutar casos reproducibles
| ID | Entrada / acción | Esperado |
|---|---|---|
| T01 | Pedido recién creado | Total 0 |
| T02 | Agregar 8000 | true; total 8000 |
| T03 | Descuento 25% | true; total 6000 |
| T04 | Descuento 150% | false; total sigue 6000 |
| T05 | Agregar monto -2000 | false; total sin cambios |
| T06 | Mostrar resumen | Incluye código y nombre del cliente |

Para probar T05 agrega al final de `main`:

```java
System.out.println("Monto negativo: " + pedido.agregarMonto(-2000));
System.out.println("Total protegido: " + pedido.getTotal());
```

Ejecuta y verifica `false` y `6000.0`.

**Checkpoint A:** el código compila y el total nunca se volvió negativo. Usa los mensajes de consola para verificar, no solo «parece funcionar».

## Paso 2 · Evidencia mínima
Entrega `Cliente.java`, `Pedido.java`, `Main.java`, captura de consola y explicación de 5 líneas sobre constructores y composición simple.

**Checkpoint final:** no creaste proyectos anteriores, no introdujiste herencia ni colecciones y puedes explicar por qué las reglas se implementan en Pedido.
