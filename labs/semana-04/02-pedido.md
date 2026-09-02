# Checkpoint 2 · Pedido y colaboración

Crear una clase `Pedido` con:

- `codigo`;
- `Cliente cliente`;
- `double total`;
- constructor;
- método `agregarMonto(double monto)`;
- método `aplicarDescuento(double porcentaje)`;
- método `resumen()`.

## Reglas

- `total` no puede quedar negativo;
- el porcentaje debe estar entre 0 y 100;
- `Pedido` recibe un `Cliente` ya construido;
- `main` no debe alterar directamente el total;
- `resumen()` debe incluir el nombre del cliente.

## Checkpoint

Desde `main`:

1. crear un `Cliente`;
2. crear un `Pedido` asociado a ese cliente;
3. agregar montos;
4. aplicar un descuento válido;
5. intentar un descuento inválido;
6. mostrar el resumen final.

## Pregunta final

¿Por qué `Pedido` contiene un `Cliente` en vez de copiar `rut`, `nombre` y `correo` como atributos propios?
