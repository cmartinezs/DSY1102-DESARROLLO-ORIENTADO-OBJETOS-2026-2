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
5. [`05-CuentaScanner.java`](05-CuentaScanner.java) — **versión deliberadamente extensa** con `java.util.Scanner` directamente dentro de `main`: cada dato solicitado implementa su propia lectura y validación para hacer visible la repetición.
6. [`06-LectorConsola.java`](06-LectorConsola.java) — refactor posterior: clase propia que encapsula `Scanner`, centraliza validaciones y ofrece métodos sobrecargados como `leerEntero()` / `leerEntero(String)` / `leerEntero(String, min, max)`.
7. [`07-CuentaConLectorConsola.java`](07-CuentaConLectorConsola.java) — misma funcionalidad de Cuenta/Cliente consumiendo `LectorConsola`; permite comparar visualmente cuánto desaparece del `main`.

## Secuencia didáctica: primero sentir el problema

**No presentar `LectorConsola` inmediatamente.**

La intención es construir primero un programa completamente normal con `Scanner` dentro de `main` y pedir los datos uno a uno:

```text
nombre
→ rut
→ pin
→ saldo inicial
→ depósito
→ giro
```

Cuando aparece un número, incorporar validación. Por ejemplo, el PIN debe:

- ser realmente un `int`;
- rechazar letras;
- estar dentro de un rango válido;
- volver a preguntar cuando la entrada es incorrecta.

Luego hacer lo mismo con saldo, depósito y giro.

El resultado buscado es que el estudiante observe por sí mismo algo como:

```text
Main
├─ pedir nombre
├─ pedir RUT
├─ validar PIN
│  ├─ while
│  ├─ hasNextInt
│  ├─ mensaje de error
│  └─ nextLine
├─ validar saldo
│  ├─ while
│  ├─ hasNextDouble
│  ├─ mensaje de error
│  └─ nextLine
├─ validar depósito
│  └─ casi lo mismo otra vez
├─ validar giro
│  └─ casi lo mismo otra vez
├─ crear objetos
└─ ejecutar negocio
```

Aquí conviene **no anticipar la solución**. Preguntar a los estudiantes:

- ¿Qué código estamos repitiendo?
- ¿Qué pasaría si tuviéramos 20 datos que leer?
- ¿Dónde corregiríamos un error de validación que aparece en cinco lugares?
- ¿Es realmente responsabilidad del algoritmo principal saber cómo se valida cada tipo de entrada?

Recién después se introduce `LectorConsola`.

## El cambio: extraer una responsabilidad

La misma lectura anterior pasa a expresarse así:

```java
LectorConsola lector = new LectorConsola();

String nombre = lector.leerTexto("Nombre del cliente: ");
String rut = lector.leerTexto("RUT: ");
int pin = lector.leerEntero("PIN de 4 dígitos: ", 1000, 9999);
double saldoInicial = lector.leerDecimalPositivo("Saldo inicial: ");
double deposito = lector.leerDecimalPositivo("Monto a depositar: ");
double giro = lector.leerDecimalPositivo("Monto a girar: ");
```

La funcionalidad no cambió. Cambió el **diseño**.

```text
ANTES
Main sabe leer + validar + construir + coordinar

DESPUÉS
LectorConsola sabe leer y validar entrada
Main coordina
Cuenta mantiene reglas de negocio
Cliente mantiene datos del cliente
```

Este contraste es el objetivo central del ejemplo: que el estudiante vea que crear una clase no consiste solamente en "separar código en archivos", sino en **identificar una responsabilidad repetitiva y encapsularla**.

## Momento para introducir sobrecarga / polimorfismo estático

Una vez entendido `LectorConsola`, mostrar que una misma operación conceptual puede ofrecer distintas formas de uso:

```java
leerEntero()
leerEntero(String texto)
leerEntero(int minimo, int maximo)
leerEntero(String texto, int minimo, int maximo)
```

Esto permite conectar con la sobrecarga ya vista en constructores y presentarlo como **polimorfismo estático / sobrecarga**, antes de llegar posteriormente al polimorfismo dinámico asociado a herencia y sobrescritura.

## Separación de responsabilidades

Una distinción debe mantenerse explícita:

- **validación de entrada/formato** → `LectorConsola`;
- **regla de negocio** → objeto de dominio.

Por ejemplo, `LectorConsola` puede garantizar que el monto ingresado sea numérico y no negativo, pero decidir si existe saldo suficiente para un giro sigue correspondiendo a `Cuenta.girar(monto)`.

## Alcance técnico

Para no adelantar excepciones antes de trabajarlas formalmente, las validaciones iniciales utilizan:

- `hasNextInt()`;
- `hasNextDouble()`;
- ciclos `while`;
- descarte de entradas inválidas mediante `nextLine()`.

Más adelante esta misma clase puede ser refactorizada cuando se estudie manejo de excepciones.

## Ruta de la próxima clase

```text
package · introducción breve
→ import
→ Scanner directo
→ pedir datos uno a uno
→ incorporar validaciones dentro de Main
→ dejar que aparezca repetición
→ analizar el problema con los estudiantes
→ extraer LectorConsola
→ comparar ANTES / DESPUÉS
→ sobrecarga de métodos
→ polimorfismo estático
→ integrar Cuenta / Cliente
→ práctica autónoma
→ Cuadrilatero
→ herencia
```

El cambio a `LectorConsola` no debe mostrarse como punto de partida: debe aparecer como **respuesta a un problema que los estudiantes ya experimentaron**.

## No adelantar todavía

Antes del bloque de herencia no incorporar:

- clases abstractas;
- interfaces;
- colecciones;
- persistencia.

El manejo formal de excepciones tampoco es requisito para `LectorConsola`; se reutilizará este ejemplo posteriormente para mostrar cómo mejorar su implementación con `try/catch` cuando corresponda.
