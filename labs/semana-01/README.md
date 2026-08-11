# Ejercicios · Semana 01

Los siguientes ejercicios complementan los contenidos oficiales de la actividad **1.1 Paradigma OO: fundamentos del lenguaje**. Están ordenados desde práctica básica hasta integración de contenidos.

> **Regla de esta etapa:** durante la Semana 01 todos los datos deben quedar **preconfigurados directamente en el código**. No se utiliza `Scanner`, `System.in` ni ninguna otra forma de entrada por teclado. La interacción con el usuario se incorporará más adelante, una vez trabajado el concepto de clases.

## Ejercicio 1 · Conversión de temperatura

Defina directamente en el código una temperatura en grados Celsius y conviértala a Fahrenheit.

**Requisitos:**

- utilizar `double`;
- aplicar operadores aritméticos;
- mostrar ambos valores.

Fórmula:

```text
F = C * 9 / 5 + 32
```

## Ejercicio 2 · Mayor de dos números

Defina dos números enteros directamente en el código e indique cuál es mayor o si ambos son iguales.

**Requisitos:**

- variables `int` preconfiguradas;
- operadores relacionales;
- `if / else if / else`.

## Ejercicio 3 · Clasificación de nota

Defina una nota entre 1.0 y 7.0 directamente en el código y muestre:

- `Insuficiente` si es menor a 4.0;
- `Suficiente` entre 4.0 y 4.9;
- `Bueno` entre 5.0 y 5.9;
- `Muy bueno` desde 6.0.

## Ejercicio 4 · Opción con `switch`

Defina en el código una variable `opcion` con un valor entre 1 y 4:

1. Saludar.
2. Mostrar una fecha simulada.
3. Mostrar un mensaje de despedida.
4. Finalizar.

Utilice `switch` para procesar el valor preconfigurado. Pruebe el programa modificando manualmente el valor de `opcion` entre ejecuciones.

## Ejercicio 5 · Tabla de multiplicar

Defina un número entero directamente en el código e imprima su tabla de multiplicar desde 1 hasta 10 utilizando `for`.

Ejemplo para `numero = 5`:

```text
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

## Ejercicio 6 · Cuenta regresiva con `while`

Defina un valor inicial, por ejemplo `contador = 10`, y utilice un ciclo `while` para imprimir una cuenta regresiva hasta llegar a `0`.

**Requisitos:**

- valor inicial preconfigurado;
- ciclo `while`;
- actualización correcta del contador.

## Ejercicio 7 · Acumulador con `do-while`

Defina un límite `n`, por ejemplo `n = 5`, y utilice `do-while` para sumar todos los números desde `1` hasta `n`.

Al finalizar, muestre la suma obtenida.

## Ejercicio 8 · Cajero simplificado sin interacción

Defina directamente en el código:

- un saldo inicial, por ejemplo `$100000`;
- una operación, por ejemplo `2` para depositar o `3` para retirar;
- un monto fijo para la operación.

Utilice `switch` y condicionales para simular una única operación.

### Reglas

- un depósito debe ser mayor que cero;
- no se puede retirar más dinero que el saldo disponible;
- debe mostrarse el saldo final;
- para probar otros casos, cambie manualmente los valores preconfigurados antes de ejecutar nuevamente.

Este ejercicio integra tipos, operadores, condicionales y `switch` sin utilizar entrada por teclado.

## Ejercicio 9 · Comparación Python → Java

Implemente en Java un ejercicio que ya haya resuelto anteriormente en Python utilizando únicamente valores preconfigurados en ambas versiones y documente al menos **cinco diferencias** encontradas.

Considere:

- declaración de variables;
- tipos;
- estructura del programa;
- sintaxis de salida;
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
