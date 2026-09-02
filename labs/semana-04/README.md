# Lab 04 · Objetos que nacen bien y colaboran

## Propósito

Consolidar constructores, encapsulamiento y responsabilidad de clases mediante un problema integrado de dificultad controlada.

## Caso

Construir un sistema simple de pedidos con `Cliente` y `Pedido`.

## Objetivos

Al finalizar, el estudiante debe poder:

- crear clases con atributos privados;
- inicializar objetos mediante constructores;
- diferenciar constructor de método operacional;
- proteger estado válido;
- hacer que un objeto utilice otro objeto;
- mantener `main` como orquestador simple.

## Etapas

1. [Checkpoint 1 · Cliente](./01-cliente.md)
2. [Checkpoint 2 · Pedido y colaboración](./02-pedido.md)

## Restricciones

No usar herencia, interfaces, colecciones, excepciones ni persistencia.

## Resultado esperado

```text
App
 ├─ crea Cliente
 ├─ crea Pedido usando Cliente
 ├─ solicita operaciones a Pedido
 └─ imprime resultados

Pedido ───> Cliente
```
