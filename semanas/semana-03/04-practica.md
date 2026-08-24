# 4 · Práctica incremental

## Nivel 0 · checkpoint

Sin copiar código anterior, crea `Producto` con estado privado, constructor, getters y un método de comportamiento. Instancia dos objetos y explica estado vs comportamiento.

## Nivel 1 · herencia

Crea `Producto` y `ProductoDigital`. El digital agrega `tamanoMb`. Sobrescribe `mostrarDetalle()`. Explica por qué `ProductoDigital es un Producto`.

## Nivel 2 · abstracta

Modela `Empleado` como abstracta con `nombre` y método abstracto `calcularBono()`. Implementa `EmpleadoVentas` y `EmpleadoSoporte` con reglas diferentes.

## Nivel 3 · interfaz

Crea `Notificable` con `notificar()`. Implementa el contrato en dos clases de dominios distintos. Demuestra que ambas pueden recibirse en un método `enviar(Notificable n)`.

## Nivel 4 · polimorfismo

Crea una jerarquía `Transporte` con al menos `Bicicleta` y `Bus`. Implementa `mover()`. Escribe un método que reciba `Transporte` y ejecute `mover()` sin condicionales de tipo.

## Nivel 5 · diseño

Analiza este modelo incorrecto:

```text
Motor extends Auto
Cliente extends Pedido
PDF extends Exportable
```

Corrígelo y justifica cada decisión. No basta con entregar código.

## Desafío de transferencia

Diseña un mini dominio distinto de los ejemplos anteriores con:

- una abstracción común;
- dos implementaciones concretas;
- al menos un atributo encapsulado;
- una sobrescritura;
- una interfaz útil;
- una llamada polimórfica.

Entrega un README corto con: problema, decisiones, diagrama textual y evidencia de ejecución.

## Checklist

- [ ] Puedo defender cada `extends` con una relación `es-un`.
- [ ] No hice atributos públicos para facilitar la herencia.
- [ ] Utilicé `@Override` correctamente.
- [ ] Distingo clase abstracta de interfaz.
- [ ] Mi demostración polimórfica trabaja contra un tipo general.
- [ ] Puedo explicar el código sin leerlo línea por línea.