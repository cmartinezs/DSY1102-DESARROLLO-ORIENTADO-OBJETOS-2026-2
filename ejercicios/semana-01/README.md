# Ejercicios · Semana 01 · Fundamentos de Java
**Objetivo:** aplicar tipos, operadores y control de flujo a pequeños problemas; sin `Scanner`, clases de dominio ni entrada por teclado. Los datos se cambian **en el código**, se ejecuta y se compara el resultado.

Cada ejercicio es independiente: puedes resolverlo en su propio `main`. Un ejercicio no es un proyecto nuevo obligatorio.

## E01 · Precio final de una compra
**Foco:** expresiones, tipos y precisión. Una tienda vende tres artículos de $2.990 y aplica un descuento del 10% **sobre el subtotal** antes del IVA del 19%. Calcula subtotal, descuento, base e importe final usando variables.
- **Prueba:** subtotal = 8.970; descuento = 897; base = 8.073; total con IVA = 9.606,87.
- **Caso límite:** cantidad = 0 → total 0.
- **Pregunta:** ¿por qué un precio con IVA puede necesitar `double` en una práctica introductoria? ¿Qué alternativa monetaria usarías en producción?
- **No hacer:** clases, `Scanner`, formateadores complejos ni persistencia.

## E02 · Control de una compra según stock
**Foco:** `if/else` y operadores relacionales/lógicos. Hay 7 unidades disponibles. Se solicitan 5; mostrar «Venta permitida» solo si la cantidad es positiva y no supera el stock.
- **Prueba:** 5 → permitida; 8 → rechazada; 0 → rechazada.
- **Pregunta:** ¿qué error introduciría comprobar solo que la cantidad no supera el stock?
- **Pista:** combina dos condiciones con `&&`. No necesitas objetos ni menús.

## E03 · Detectar el primer día de agotamiento
**Foco:** bucle y condición de parada. Hay 13 colaciones; cada día se venden como máximo 4. Recorre los días y muestra cuántas quedan, sin permitir valores negativos.
- **Prueba:** fin día 1 = 9; día 2 = 5; día 3 = 1; día 4 = 0.
- **Caso límite:** stock inicial 0 → informar que ya está agotado.
- **Pregunta:** ¿por qué una venta del día 4 no puede descontar cuatro unidades completas?
- **No hacer:** arrays, listas, métodos auxiliares obligatorios.

## E04 · Traducir una regla antes de programarla
**Foco:** reconocer el paradigma y descomponer responsabilidades. Una tarjeta mantiene saldo y permite validar un viaje si cuesta $850. Escribe primero **dos reglas en lenguaje cotidiano** y luego un `main` con variables, decisión y actualización de saldo.
- **Prueba:** saldo inicial 1.700 → dos viajes autorizados y tercero rechazado; saldo final = 0.
- **Pregunta:** ¿qué dato conservaría un futuro objeto `Tarjeta` y qué acción debería controlar? Solo explica: **no crees todavía esa clase**.

## Cierre y cobertura
`E01` tipos/operadores, `E02` decisiones, `E03` ciclos, `E04` transición conceptual a POO. Evidencia mínima: salida de consola y una explicación corta por ejercicio. **No se exige carpeta de proyecto por cada actividad**.

[Banco original conservado](BANCO-ORIGINAL-2026.md) · [Índice de ejercicios](../README.md)
