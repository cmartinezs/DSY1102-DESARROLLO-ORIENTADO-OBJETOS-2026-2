# Ejemplos · Semana 04

Ejemplos construidos a partir del avance real de la clase del **1 de septiembre de 2026**.

## Corte real de aula

En esta sesión se continuó el ejercicio de `Cuenta` y se trabajó en:

- constructor por defecto implícito;
- qué ocurre cuando se declara un constructor propio: Java deja de proporcionar automáticamente el constructor sin parámetros;
- declaración explícita del constructor vacío cuando se desea conservarlo;
- sobrecarga de constructores con distintas listas de parámetros;
- diferencia entre constructor, accesor, mutador y método operacional;
- introducción inicial al concepto de polimorfismo a partir de la sobrecarga;
- separación de responsabilidades entre clases;
- colaboración entre objetos y composición en sentido introductorio;
- uso de objetos como atributos y como parámetros de métodos.

## Ejemplos

1. [`01-CuentaConstructores.java`](01-CuentaConstructores.java) — continuidad directa de `CuentaBasica`: constructor vacío explícito y constructores sobrecargados.
2. [`02-CuentaPersona.java`](02-CuentaPersona.java) — separación de `nombre` y `rut` hacia `Persona`; `Cuenta` mantiene un atributo de tipo `Persona`.
3. [`03-PuntoYCirculo.java`](03-PuntoYCirculo.java) — `Punto`, comunicación entre objetos mediante `calcularDistancia(Punto otro)` y reutilización de `Punto` como centro de un `Circulo`.
4. [`04-Cuadrilatero.java`](04-Cuadrilatero.java) — cuadrilátero definido por cuatro objetos `Punto`, dejando preparado el dominio para introducir herencia en la siguiente clase.

## Precisión conceptual

La existencia de varios constructores con distinta firma corresponde a **sobrecarga de constructores**. Puede utilizarse como primera aproximación al polimorfismo estático, pero todavía no se ha desarrollado el polimorfismo por subtipado/sobrescritura.

Del mismo modo, en esta etapa se utiliza "composición" de forma introductoria para expresar que una clase puede construirse utilizando otros objetos. Más adelante se distinguirán con mayor precisión asociación, agregación y composición según la relación de dominio y ciclo de vida.

## No adelantar todavía

La solución de esta semana no debe incorporar aún:

- `extends`;
- `@Override`;
- clases abstractas;
- interfaces;
- jerarquías de herencia;
- polimorfismo dinámico.

La próxima clase continuará desde `Cuadrilatero` para introducir herencia y profundizar en polimorfismo.
