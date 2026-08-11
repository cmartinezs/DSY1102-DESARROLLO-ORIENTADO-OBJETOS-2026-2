# Ejercicios · Semana 01

Los siguientes ejercicios complementan los contenidos oficiales de la actividad **1.1 Paradigma OO: fundamentos del lenguaje**. Están ordenados desde práctica básica hasta integración de contenidos.

## Ejercicio 1 · Conversión de temperatura

Solicite una temperatura en grados Celsius y conviértala a Fahrenheit.

**Requisitos:**

- utilizar `double`;
- aplicar operadores aritméticos;
- mostrar ambos valores.

Fórmula:

```text
F = C * 9 / 5 + 32
```

## Ejercicio 2 · Mayor de dos números

Solicite dos números enteros e indique cuál es mayor o si ambos son iguales.

**Requisitos:**

- `Scanner`;
- operadores relacionales;
- `if / else if / else`.

## Ejercicio 3 · Clasificación de nota

Solicite una nota entre 1.0 y 7.0 y muestre:

- `Insuficiente` si es menor a 4.0;
- `Suficiente` entre 4.0 y 4.9;
- `Bueno` entre 5.0 y 5.9;
- `Muy bueno` desde 6.0.

## Ejercicio 4 · Menú simple

Construya un menú con las opciones:

1. Saludar.
2. Mostrar fecha simulada.
3. Mostrar un mensaje de despedida.
4. Salir.

Utilice `switch` para procesar la opción elegida.

## Ejercicio 5 · Tabla de multiplicar

Solicite un número entero e imprima su tabla de multiplicar desde 1 hasta 10 utilizando `for`.

Ejemplo:

```text
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

## Ejercicio 6 · Suma hasta cero

Solicite números al usuario y acumule su suma. El proceso termina cuando se ingresa `0`.

**Requisitos:**

- ciclo `while` o `do-while`;
- acumulador;
- mostrar la suma al finalizar.

## Ejercicio 7 · Promedio de notas

Solicite primero la cantidad de notas. Luego ingrese cada nota, calcule el promedio e indique si el estudiante aprueba con promedio mayor o igual a 4.0.

**Desafío adicional:** validar que cada nota esté entre 1.0 y 7.0.

## Ejercicio 8 · Cajero simplificado

Defina un saldo inicial de `$100000`. Muestre repetidamente este menú:

1. Consultar saldo.
2. Depositar.
3. Retirar.
4. Salir.

### Reglas

- un depósito debe ser mayor que cero;
- no se puede retirar más dinero que el saldo disponible;
- el menú debe repetirse hasta seleccionar `Salir`.

Este ejercicio integra tipos, operadores, condicionales, `switch` y ciclos.

## Ejercicio 9 · Comparación Python → Java

Implemente en Java un ejercicio que ya haya resuelto anteriormente en Python y documente al menos **cinco diferencias** encontradas entre ambas soluciones.

Considere:

- declaración de variables;
- tipos;
- estructura del programa;
- entrada/salida;
- sintaxis de condicionales y ciclos;
- compilación y ejecución.

## Ejercicio 10 · Preparación conceptual para POO

Sin programar todavía clases propias, analice el problema del **cajero simplificado** e identifique posibles elementos que en una solución orientada a objetos podrían convertirse posteriormente en:

- objetos;
- datos o estado;
- comportamientos.

No es necesario escribir código orientado a objetos. El objetivo es comenzar a distinguir entre una solución basada únicamente en instrucciones y una solución que modela entidades con responsabilidades.

---

## Sugerencia de uso

Para la clase del martes se recomiendan principalmente los ejercicios **1 a 3**. Para el sábado pueden utilizarse los ejercicios **4 a 10**, reservando el cajero simplificado como actividad integradora.
