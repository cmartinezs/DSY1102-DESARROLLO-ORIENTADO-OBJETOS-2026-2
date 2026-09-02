# Ejercicios · Semana 04

Foco: constructores, encapsulamiento, estado válido y primeras colaboraciones entre objetos.

## Ejercicio principal · Evolución de Cuenta

[Ver evolución completa de Cuenta bancaria](./evolucion-cuenta/)

Este ejercicio conserva varias versiones del código para evidenciar el cambio de diseño:

```text
atributos + getters/setters + operaciones
→ Main configura el objeto
→ detectar fragilidad por inicialización manual
→ constructor con datos obligatorios
→ Main crea un objeto válido desde el inicio
→ separación Cliente + Cuenta
```

Cada etapa utiliza un `package` diferente para evitar reemplazar el código anterior y permitir comparar las versiones. Por ahora `package` se presenta únicamente como una forma de organizar clases relacionadas; se profundizará en la siguiente clase.

## 1 · Refactor de Cuenta

Partir del ejercicio de Semana 03 y reemplazar la inicialización mediante setters por un constructor:

```java
Cuenta(String titular, double saldoInicial)
```

Mantener `depositar` y `girar` como operaciones de negocio.

## 2 · Producto válido

Crear `Producto(codigo, nombre, precio, stock)` y asegurar que precio y stock no queden negativos. Incorporar `vender(int cantidad)` y `reponer(int cantidad)`.

## 3 · Rectángulo

Constructor con ancho y alto. Métodos `calcularArea()` y `calcularPerimetro()`. No permitir dimensiones negativas.

## 4 · Libro

Constructor con ISBN, título y autor. Incorporar estado `prestado` y operaciones `prestar()` / `devolver()` en vez de un setter directo del estado.

## 5 · Pedido + Cliente

Crear dos clases. `Pedido` recibe un `Cliente` en su constructor y debe mostrar un resumen combinando sus propios datos con los del cliente.

## 6 · Cuenta + Titular

Refactorizar el titular desde `String` a una clase `Persona`. Analizar qué datos pertenecen a `Cuenta` y cuáles a `Persona`.

## Desafío de cierre

Diseñar un pequeño sistema de estacionamiento con:

- `Vehiculo`;
- `TicketEstacionamiento`;
- constructores;
- atributos privados;
- una relación entre ambos objetos;
- cálculo simple del monto a pagar mediante un método.

No usar herencia, listas ni excepciones.
