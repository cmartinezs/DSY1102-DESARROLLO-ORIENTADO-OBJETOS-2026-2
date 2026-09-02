# Ejemplos · Semana 04

Ejemplos construidos a partir del avance real de la clase del **1 de septiembre de 2026** y de la preparación para la siguiente sesión.

## Corte real de aula

En esta etapa se ha trabajado en:

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
4. [`04-Cuadrilatero.java`](04-Cuadrilatero.java) — cuadrilátero definido por cuatro objetos `Punto`, dejando preparado el dominio para introducir herencia.
5. [`05-CuentaScanner.java`](05-CuentaScanner.java) — introducción directa a `java.util.Scanner` dentro de `main`, leyendo datos para construir y utilizar objetos existentes.
6. [`06-LectorConsola.java`](06-LectorConsola.java) — siguiente nivel: clase propia que encapsula `Scanner` y centraliza validación de formato mediante `leerEntero`, `leerDecimal`, rangos y mensajes de error.
7. [`07-CuentaConLectorConsola.java`](07-CuentaConLectorConsola.java) — integración del lector encapsulado con `Cliente` y `Cuenta`, manteniendo las reglas de negocio dentro de la clase de dominio.

## Scanner como evolución de diseño

La introducción se realiza en dos pasos intencionales:

```text
Main + Scanner directo
        ↓
se observa repetición de lectura y validación
        ↓
LectorConsola
        ↓
Main más simple y expresivo
```

`LectorConsola` es un **wrapper** sobre `java.util.Scanner`. No se llama simplemente `Scanner` para evitar confundir nuestra clase con la clase estándar de Java.

Ejemplo de responsabilidad del lector:

```java
int edad = lector.leerEntero("Edad: ", 0, 120);
```

La clase se encarga de repetir la pregunta cuando el usuario escribe una letra u otra entrada no válida.

Sin embargo, una distinción es fundamental:

- **validación de entrada/formato** → `LectorConsola`;
- **regla de negocio** → objeto de dominio.

Por ejemplo, `LectorConsola` puede asegurar que un monto sea numérico, pero decidir si existe saldo suficiente para un giro sigue correspondiendo a `Cuenta.girar(monto)`.

Esto permite volver a aplicar una idea central de POO: **cada clase debe tener una responsabilidad clara**.

## Alcance técnico

Para no adelantar excepciones antes de trabajarlas formalmente, las validaciones iniciales utilizan:

- `hasNextInt()`;
- `hasNextDouble()`;
- ciclos `while`;
- descarte de entradas inválidas mediante `nextLine()`.

Más adelante esta misma clase puede ser refactorizada cuando se estudie manejo de excepciones.

## Precisión conceptual

La existencia de varios constructores con distinta firma corresponde a **sobrecarga de constructores**. Puede utilizarse como primera aproximación al polimorfismo estático, pero todavía no se ha desarrollado el polimorfismo por subtipado/sobrescritura.

Del mismo modo, en esta etapa se utiliza "composición" de forma introductoria para expresar que una clase puede construirse utilizando otros objetos. Más adelante se distinguirán con mayor precisión asociación, agregación y composición según la relación de dominio y ciclo de vida.

## Ruta de la próxima clase

```text
package · introducción breve
→ import
→ Scanner directo
→ validación básica
→ LectorConsola
→ encapsular repetición y validación
→ integrar con Cuenta / Cliente
→ práctica autónoma
→ Cuadrilatero
→ herencia
```

La idea es que herencia aparezca después de haber consolidado objetos, responsabilidades, colaboración y una primera extracción real de una responsabilidad repetitiva.

## No adelantar todavía

Antes del bloque de herencia no incorporar:

- clases abstractas;
- interfaces;
- colecciones;
- persistencia.

El manejo formal de excepciones tampoco es requisito para `LectorConsola`; se reutilizará este ejemplo posteriormente para mostrar cómo mejorar su implementación con `try/catch` cuando corresponda.
