# Paradigma, enfoque y forma de pensar

Un paradigma de programación es más que una lista de reglas sintácticas. Es una manera de **organizar la solución**.

Dos programas pueden resolver el mismo problema y, sin embargo, estructurarlo de formas muy distintas según el paradigma utilizado.

## Una analogía simple

Imagina que queremos explicar cómo funciona un restaurante.

Podríamos describirlo como una secuencia:

```text
1. recibir pedido
2. cocinar
3. cobrar
4. entregar
```

O podríamos identificar participantes con responsabilidades:

```text
Cliente
Mesero
Pedido
Cocina
Caja
```

Ambas miradas pueden describir el mismo sistema, pero organizan el problema de manera diferente.

## En programación

Un paradigma influye en preguntas como:

- ¿qué unidad utilizamos para dividir el programa?;
- ¿dónde viven los datos?;
- ¿dónde viven las operaciones?;
- ¿cómo se comunican distintas partes de la solución?;
- ¿quién es responsable de mantener válido un dato?

## Qué cambia al entrar a POO

En programación orientada a objetos comenzaremos progresivamente a pensar en:

```text
conceptos
↓
estado
↓
comportamientos
↓
responsabilidades
↓
colaboración
```

No significa que desaparezcan variables, `if`, ciclos o funciones. Esas herramientas continúan existiendo, pero pasan a vivir dentro de una estructura más rica.

## Pregunta útil

Cuando veas un problema nuevo, intenta no empezar inmediatamente escribiendo código.

Primero pregunta:

> ¿Qué cosas o conceptos participan en este problema y qué responsabilidad podría tener cada uno?
