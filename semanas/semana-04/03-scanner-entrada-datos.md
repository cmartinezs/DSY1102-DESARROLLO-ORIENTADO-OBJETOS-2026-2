# Scanner · Entrada de datos desde consola antes de Herencia

## Propósito

Antes de introducir herencia, incorporaremos una herramienta que permita que los programas dejen de trabajar únicamente con datos escritos directamente en el código: `Scanner`.

El objetivo **no es cambiar el modelo orientado a objetos**, sino mejorar la interacción del programa con el usuario y utilizar un problema real para seguir profundizando encapsulamiento, responsabilidades y sobrecarga.

La secuencia debe desarrollarse **en este orden**. No mostrar `LectorConsola` al comienzo: primero los estudiantes deben construir y experimentar la versión extensa con `Scanner` directamente en `main`.

```text
datos fijos en código
→ Scanner directo en Main
→ lectura dato a dato
→ validaciones repetidas
→ Main crece y mezcla responsabilidades
→ detectar el problema
→ extraer LectorConsola
→ Main pequeño y expresivo
→ sobrecarga de métodos
→ conexión con polimorfismo estático
```

---

## Etapa 1 · Datos escritos directamente en el código

Hasta ahora hemos hecho cosas como:

```java
Cliente cliente = new Cliente("Carlos", "12.345.678-9");
Cuenta cuenta = new Cuenta(cliente, 1234, 100000);
```

Esto sirve para aprender clases, objetos, constructores y colaboración, pero los datos están fijos en el programa.

Queremos llegar a:

```text
Usuario ingresa datos
        ↓
      Main
        ↓
crea objetos usando constructores
        ↓
objetos ejecutan sus propias operaciones
```

---

## Etapa 2 · Scanner directo dentro de Main

### Importación

```java
import java.util.Scanner;
```

Por ahora basta comprender que `Scanner` es una clase que Java provee y que debemos importar para utilizarla.

### Crear el Scanner

```java
Scanner scanner = new Scanner(System.in);
```

`System.in` representa la entrada estándar del programa, normalmente el teclado.

### Lecturas básicas

#### Texto

```java
System.out.print("Nombre: ");
String nombre = scanner.nextLine();
```

#### Entero

```java
System.out.print("PIN: ");
int pin = scanner.nextInt();
```

#### Decimal

```java
System.out.print("Saldo inicial: ");
double saldoInicial = scanner.nextDouble();
```

### Cuidado con `nextInt()` / `nextDouble()` y `nextLine()`

Después de leer un número queda pendiente el salto de línea producido al presionar Enter.

```java
int edad = scanner.nextInt();
scanner.nextLine(); // consume el Enter pendiente
String nombre = scanner.nextLine();
```

Este comportamiento debe mostrarse en clase porque es uno de los errores más comunes al comenzar a utilizar `Scanner`.

---

## Etapa 3 · Hacerlo correctamente... pero todavía dentro de Main

Ahora agregamos validación. El objetivo pedagógico es que el código funcione, pero que los estudiantes empiecen a notar cuánto crece `main`.

Ejemplo para un entero:

```java
int pin;

while (true) {
    System.out.print("PIN de 4 dígitos: ");

    if (scanner.hasNextInt()) {
        pin = scanner.nextInt();
        scanner.nextLine();

        if (pin >= 1000 && pin <= 9999) {
            break;
        }

        System.out.println("El PIN debe tener 4 dígitos.");
    } else {
        System.out.println("Entrada inválida. Debe ingresar un número entero.");
        scanner.nextLine();
    }
}
```

Luego hacemos algo equivalente para:

- saldo inicial;
- depósito;
- giro;
- cualquier otro entero o decimal necesario.

La versión completa está en [`../../ejemplos/semana-04/05-CuentaScanner.java`](../../ejemplos/semana-04/05-CuentaScanner.java).

### Detenerse aquí antes de mostrar la solución

Preguntar a los estudiantes:

- ¿qué código estamos repitiendo?
- ¿qué pasaría si el programa solicita 20 datos?
- ¿qué ocurre si encontramos un error en la validación de enteros?
- ¿tendríamos que corregirlo en varios lugares?
- ¿cuánto de este `main` corresponde realmente a coordinar el programa?
- ¿podemos encapsular esta responsabilidad igual que hemos hecho con otras responsabilidades?

El objetivo es que **ellos identifiquen el problema antes de conocer la nueva clase**.

---

# Etapa 4 · El cambio: `LectorConsola`

Creamos una clase propia que envuelve a `java.util.Scanner`:

```java
class LectorConsola {
    private Scanner scanner;

    public LectorConsola() {
        scanner = new Scanner(System.in);
    }
}
```

No la llamamos `Scanner`, porque `Scanner` ya es el nombre de la clase estándar de Java. `LectorConsola` expresa además mejor su responsabilidad.

La nueva clase centraliza operaciones como:

```java
leerTexto()
leerTexto(String texto)

leerEntero()
leerEntero(String texto)
leerEntero(int minimo, int maximo)
leerEntero(String texto, int minimo, int maximo)

leerDecimal()
leerDecimal(String texto)
leerDecimalPositivo()
leerDecimalPositivo(String texto)
```

La implementación completa está en [`../../ejemplos/semana-04/06-LectorConsola.java`](../../ejemplos/semana-04/06-LectorConsola.java).

## Mensajes por defecto y personalizados

La versión sin texto utiliza un mensaje por defecto:

```java
int edad = lector.leerEntero();
```

Por ejemplo:

```text
Ingrese un número entero:
```

La versión cuyo **primer parámetro es un texto** permite reemplazarlo:

```java
int edad = lector.leerEntero("Edad del cliente: ");
```

Para métodos con restricciones:

```java
int opcion = lector.leerEntero(1, 5);
int pin = lector.leerEntero("PIN de 4 dígitos: ", 1000, 9999);
```

Si el texto recibido es `null`, vacío o contiene solamente espacios, `LectorConsola` conserva el mensaje por defecto.

---

## Etapa 5 · El mismo programa después del refactor

Antes teníamos muchas líneas de `while`, `hasNextInt`, `hasNextDouble`, mensajes de error y descarte de entradas.

Ahora el flujo principal puede expresarse así:

```java
LectorConsola lector = new LectorConsola();

String nombre = lector.leerTexto("Nombre del cliente: ");
String rut = lector.leerTexto("RUT: ");
int pin = lector.leerEntero("PIN de 4 dígitos: ", 1000, 9999);
double saldoInicial = lector.leerDecimalPositivo("Saldo inicial: ");

Cliente cliente = new Cliente(nombre, rut);
Cuenta cuenta = new Cuenta(cliente, pin, saldoInicial);

double deposito = lector.leerDecimalPositivo("Monto a depositar: ");
cuenta.depositar(deposito);

double giro = lector.leerDecimalPositivo("Monto a girar: ");
cuenta.girar(giro);
```

Comparar explícitamente:

```text
ANTES
Main
├─ pregunta
├─ lee
├─ valida formato
├─ repite preguntas
├─ descarta entradas inválidas
├─ construye objetos
├─ coordina operaciones
└─ muestra resultados

DESPUÉS
LectorConsola
└─ lectura y validación de entrada

Main
└─ coordinación del caso de uso

Cuenta
└─ estado y reglas de negocio

Cliente
└─ datos y comportamiento del cliente
```

Aquí aparece nuevamente una de las ideas fundamentales de POO: **identificar una responsabilidad y entregársela a un objeto adecuado**.

---

## Scanner pertenece al flujo de entrada, no al dominio

Evitar:

```java
class Cuenta {
    private Scanner scanner;
}
```

`Cuenta` no debería necesitar conocer el teclado para poder existir o realizar un giro.

La responsabilidad debe mantenerse separada:

```text
LectorConsola = valida que el dato pueda ser leído correctamente
Main          = coordina
Cuenta        = valida las reglas del negocio
```

Por ejemplo:

```java
double monto = lector.leerDecimalPositivo("Monto a girar: ");
cuenta.girar(monto);
```

`LectorConsola` puede garantizar que `monto` sea un número no negativo, pero **decidir si existe saldo suficiente continúa siendo responsabilidad de `Cuenta`**.

No debemos hacer esto en `main`:

```java
if (monto <= cuenta.getSaldo()) {
    cuenta.setSaldo(cuenta.getSaldo() - monto);
}
```

porque volveríamos a sacar la lógica de negocio desde el objeto que debe protegerla.

---

# Etapa 6 · Sobrecarga y polimorfismo estático

Una vez comprendido el refactor, observar estas firmas:

```java
leerEntero()
leerEntero(String texto)
leerEntero(int minimo, int maximo)
leerEntero(String texto, int minimo, int maximo)
```

Todas representan conceptualmente **leer un entero**, pero permiten distintas formas de invocar la operación.

Esto es **sobrecarga de métodos**.

Los estudiantes ya observaron una idea equivalente con constructores:

```text
sobrecarga de constructores
        ↓
sobrecarga de métodos
        ↓
misma operación conceptual
con distintas firmas
        ↓
polimorfismo estático / de compilación
```

Es una excelente preparación para contrastar posteriormente con:

```text
herencia
+ @Override
+ referencia de tipo padre
        ↓
polimorfismo dinámico
```

No confundir ambos mecanismos: en esta etapa todavía no se ha desarrollado polimorfismo dinámico.

---

## Ejercicio evolutivo de la clase

Este contenido debe trabajarse como evolución, no reemplazando archivos anteriores:

```text
Cuenta/Cliente con datos fijos
→ Cuenta/Cliente + Scanner directo
→ Cuenta/Cliente + Scanner con validaciones en Main
→ detectar repetición
→ LectorConsola
→ Cuenta/Cliente + LectorConsola
→ observar sobrecarga
```

Cada versión debe mantenerse para que el estudiante pueda comparar el código antes y después.

La actividad correspondiente se encuentra también en [`../../ejercicios/semana-04/`](../../ejercicios/semana-04/).

---

## Alcance técnico

Para no adelantar excepciones antes de trabajarlas formalmente, las validaciones iniciales utilizan:

- `hasNextInt()`;
- `hasNextDouble()`;
- ciclos `while`;
- descarte de entradas inválidas mediante `nextLine()`.

Más adelante esta misma clase puede ser refactorizada cuando se estudie manejo de excepciones.

## Cierre

La secuencia conceptual completa es:

```text
Scanner
→ funciona
→ aparecen problemas de validación
→ solucionamos en Main
→ Main crece
→ detectamos repetición y mezcla de responsabilidades
→ encapsulamos en LectorConsola
→ reutilizamos
→ sobrecargamos métodos
→ reconocemos polimorfismo estático
```

Una vez consolidado esto, retomaremos `Cuadrilatero` como puente hacia especialización, herencia, sobrescritura y polimorfismo dinámico.
