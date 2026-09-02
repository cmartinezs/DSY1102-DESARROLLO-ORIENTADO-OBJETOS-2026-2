# Scanner · Entrada de datos desde consola antes de Herencia

## Propósito

Antes de introducir herencia, incorporaremos una herramienta que permita que los programas dejen de trabajar únicamente con datos escritos directamente en el código: `Scanner`.

El objetivo **no es cambiar el modelo orientado a objetos**, sino mejorar la interacción del programa con el usuario.

Hasta ahora hemos hecho cosas como:

```java
Cliente cliente = new Cliente("Carlos", "12.345.678-9");
Cuenta cuenta = new Cuenta(cliente, 1234, 100000);
```

Esto sirve para aprender clases, objetos, constructores y colaboración, pero los datos están fijos en el programa.

Con `Scanner` podremos obtenerlos desde consola:

```text
Usuario ingresa datos
        ↓
      Main
        ↓
crea objetos usando constructores
        ↓
objetos ejecutan sus propias operaciones
```

## Importación

```java
import java.util.Scanner;
```

Por ahora basta comprender que `Scanner` es una clase que Java provee y que debemos importar para utilizarla.

## Crear el Scanner

```java
Scanner scanner = new Scanner(System.in);
```

`System.in` representa la entrada estándar del programa, normalmente el teclado.

## Lecturas básicas

### Texto

```java
String nombre = scanner.nextLine();
```

### Entero

```java
int pin = scanner.nextInt();
```

### Decimal

```java
double saldoInicial = scanner.nextDouble();
```

## Cuidado con `nextInt()` / `nextDouble()` y `nextLine()`

Después de leer un número queda pendiente el salto de línea producido al presionar Enter.

Por ejemplo:

```java
int edad = scanner.nextInt();
scanner.nextLine(); // consume el Enter pendiente
String nombre = scanner.nextLine();
```

Este comportamiento debe mostrarse en clase porque es uno de los errores más comunes al comenzar a utilizar `Scanner`.

## Scanner pertenece al flujo de entrada, no al dominio

Una regla importante:

```java
class Cuenta {
    private Scanner scanner; // evitar este enfoque
}
```

`Cuenta` no debería necesitar conocer el teclado para poder existir o realizar un giro.

La responsabilidad debe mantenerse separada:

```text
Main
- pregunta datos
- lee con Scanner
- crea objetos
- solicita operaciones
- muestra resultados

Cuenta
- mantiene su estado
- valida depósitos y giros
- protege sus reglas
```

Por ejemplo, el `Main` puede leer el monto:

```java
System.out.print("Monto a girar: ");
double monto = scanner.nextDouble();
cuenta.girar(monto);
```

pero **la validación de si el giro es posible sigue perteneciendo a `Cuenta`**.

No debemos hacer esto en `main`:

```java
if (monto <= cuenta.getSaldo()) {
    cuenta.setSaldo(cuenta.getSaldo() - monto);
}
```

porque volveríamos a sacar la lógica de negocio desde el objeto que debe protegerla.

## Ejercicio puente

Reutilizar la última versión de `Cliente` + `Cuenta`.

El programa debe solicitar:

1. nombre del cliente;
2. RUT;
3. PIN;
4. saldo inicial;
5. monto a depositar;
6. monto a girar.

Luego debe:

- construir `Cliente`;
- construir `Cuenta`;
- ejecutar las operaciones mediante métodos de `Cuenta`;
- mostrar el resultado final.

## Cierre

`Scanner` modifica **cómo obtenemos los datos**, no quién es responsable de las reglas.

```text
Scanner / Main = interacción con usuario
Objetos        = estado + comportamiento de dominio
```

Una vez consolidado esto, retomaremos `Cuadrilatero` como puente hacia especialización, herencia y polimorfismo.
