# Ejercicio evolutivo · De Scanner directo a LectorConsola

## Objetivo

Comprender por experiencia por qué conviene encapsular la lectura y validación de datos de consola en una clase especializada, manteniendo separadas las responsabilidades de interacción, coordinación y negocio.

Este ejercicio **no reemplaza las versiones anteriores**. Cada etapa debe conservarse para comparar cómo evoluciona el diseño.

## Etapa 0 · Punto de partida

Usar la versión existente de `Cliente + Cuenta` con constructores y reglas de negocio dentro de `Cuenta`.

Los datos todavía pueden estar escritos directamente en `main`.

## Etapa 1 · Scanner directo

Crear una nueva versión/package.

Incorporar:

```java
import java.util.Scanner;
```

Solicitar uno a uno:

1. nombre;
2. RUT;
3. PIN;
4. saldo inicial;
5. depósito;
6. giro.

Construir `Cliente` y `Cuenta` con los datos ingresados y ejecutar las operaciones.

En esta etapa no buscar todavía una solución elegante: el objetivo es aprender el uso básico de `Scanner`.

## Etapa 2 · Validación dentro de Main

Crear otra versión/package.

Agregar validación para que:

- una letra no sea aceptada al solicitar un entero;
- una entrada no numérica no sea aceptada al solicitar un decimal;
- el PIN esté dentro de un rango válido;
- montos que deban ser positivos no acepten negativos.

Usar inicialmente:

```java
hasNextInt()
hasNextDouble()
while
nextLine()
```

La solución deberá funcionar correctamente, aunque `main` quede extenso.

## Punto de análisis

Antes de continuar, responder:

1. ¿qué bloques de código se repiten?
2. ¿cuántas responsabilidades tiene ahora `main`?
3. si cambia la forma de validar enteros, ¿en cuántos lugares habría que modificar código?
4. ¿qué ocurriría si mañana el sistema solicita veinte datos?
5. ¿la validación de entrada es una responsabilidad de `Cuenta`? ¿Por qué?

## Etapa 3 · Extraer LectorConsola

Crear una clase nueva:

```java
LectorConsola
```

Debe encapsular un `Scanner` y ofrecer inicialmente:

```java
leerTexto()
leerTexto(String texto)

leerEntero()
leerEntero(String texto)

leerDecimal()
leerDecimal(String texto)
```

Las versiones sin `String` utilizarán un mensaje por defecto.

Cuando el primer parámetro sea un texto válido, ese mensaje reemplazará al mensaje por defecto.

Si el texto es `null`, vacío o contiene solamente espacios, mantener el mensaje por defecto.

## Etapa 4 · Incorporar restricciones reutilizables

Agregar mediante sobrecarga:

```java
leerEntero(int minimo, int maximo)
leerEntero(String texto, int minimo, int maximo)

leerDecimalPositivo()
leerDecimalPositivo(String texto)
```

Ejemplos de uso:

```java
int edad = lector.leerEntero();
int pin = lector.leerEntero("PIN: ", 1000, 9999);
double saldo = lector.leerDecimalPositivo("Saldo inicial: ");
```

## Etapa 5 · Refactor del Main

Reemplazar las validaciones repetidas por llamadas a `LectorConsola`.

El resultado debe acercarse a:

```java
LectorConsola lector = new LectorConsola();

String nombre = lector.leerTexto("Nombre: ");
String rut = lector.leerTexto("RUT: ");
int pin = lector.leerEntero("PIN: ", 1000, 9999);
double saldoInicial = lector.leerDecimalPositivo("Saldo inicial: ");

Cliente cliente = new Cliente(nombre, rut);
Cuenta cuenta = new Cuenta(cliente, pin, saldoInicial);
```

Luego leer depósito y giro con `LectorConsola`, pero mantener las operaciones de negocio en `Cuenta`.

## Comparación obligatoria

Comparar ambas versiones:

```text
Scanner + validaciones dentro de Main
vs.
LectorConsola + Main coordinador
```

Identificar qué responsabilidad quedó en cada clase.

## Etapa 6 · Descubrir la sobrecarga

Observar:

```java
leerEntero()
leerEntero(String texto)
leerEntero(int minimo, int maximo)
leerEntero(String texto, int minimo, int maximo)
```

Responder:

- ¿por qué pueden existir todos estos métodos con el mismo nombre?
- ¿qué cambia entre ellos?
- ¿cómo sabe Java cuál debe ejecutar?
- ¿qué relación existe con los constructores sobrecargados vistos anteriormente?

Conclusión esperada: estamos utilizando **sobrecarga de métodos**, una forma de polimorfismo estático o de compilación.

## Regla de responsabilidades

La solución final debe respetar:

```text
LectorConsola = lectura y validación de formato
Main          = coordinación
Cuenta        = reglas del negocio
Cliente       = modelo del cliente
```

`LectorConsola` no debe decidir si existe saldo suficiente para girar. Esa regla continúa perteneciendo a `Cuenta`.

## Restricciones

Todavía no utilizar:

- excepciones con `try/catch` como solución principal;
- herencia;
- interfaces;
- colecciones.

Este mismo ejemplo podrá refactorizarse nuevamente cuando se estudien excepciones.
