# Evolución guiada · Cuenta bancaria

Este ejercicio conserva cada etapa del diseño para que se pueda observar **por qué cambia el código**. Las versiones anteriores no se reemplazan: cada una vive en un package distinto.

> Nota sobre `package`: por ahora basta entenderlo como una forma de **organizar clases relacionadas y evitar mezclar versiones del mismo ejercicio**. En la próxima clase se profundizará qué es un package, cómo se declara, cómo se importa y cómo influye en la organización del proyecto.

## Objetivo pedagógico

Recorrer esta evolución:

```text
Cuenta con atributos + getters/setters + operaciones
        ↓
Main configura el objeto y lo usa
        ↓
Problema: el estado inicial obligatorio puede omitirse
        ↓
Constructor con datos requeridos
        ↓
Main crea objetos válidos desde el inicio
        ↓
Separación de responsabilidades: Cliente + Cuenta
```

La idea central no es memorizar sintaxis, sino entender **qué responsabilidad pertenece a cada objeto y por qué**.

## Etapa 1 · Cuenta con atributos, accesores, mutadores y operaciones

Package: `clase04.cuenta.etapa1`

La clase `Cuenta` contiene inicialmente:

- nombre del titular;
- RUT;
- PIN;
- saldo;
- getters y setters;
- `depositar`;
- `girar`;
- `mostrarDatos`.

### Funciones operacionales

`depositar` y `girar` son **funciones operacionales** porque representan acciones propias del objeto y contienen reglas asociadas a su estado.

Por ejemplo, para girar dinero no basta con hacer esto en `main`:

```java
saldo = saldo - monto;
```

La cuenta debe decidir si la operación es válida:

- el monto debe ser mayor que cero;
- no debería permitir girar más dinero del disponible;
- el saldo cambia únicamente si la operación cumple las reglas.

Por eso esa lógica pertenece a `Cuenta` y no al algoritmo principal. El `main` debe **pedirle a la cuenta que realice la operación**, no manipular directamente su estado interno.

Esta separación permite que la regla se aplique siempre, independientemente de qué parte del programa utilice la clase.

## Etapa 2 · Main configura y utiliza una Cuenta

Package: `clase04.cuenta.etapa1`

El `main`:

1. crea una cuenta;
2. asigna nombre, RUT, PIN y saldo inicial mediante setters;
3. muestra los datos;
4. deposita dinero;
5. realiza un giro;
6. vuelve a mostrar los datos.

Esta versión funciona, pero deja visible un problema de diseño.

## Problema detectado

Nada obliga al programador a ejecutar:

```java
cuenta.setSaldo(100000);
```

Tampoco obliga a configurar el nombre, RUT o PIN antes de utilizar el objeto.

Es perfectamente posible escribir:

```java
Cuenta cuenta = new Cuenta();
cuenta.girar(20000);
```

El objeto existe, pero quedó incompleto porque dependemos de recordar una secuencia correcta de setters en `main`.

Eso hace que el programa sea más frágil.

## Etapa 3 · Constructor y estado inicial obligatorio

Package: `clase04.cuenta.etapa2`

Se incorpora un constructor que exige los valores necesarios para que una cuenta pueda utilizarse:

```java
public Cuenta(String nombre, String rut, int pin, double saldoInicial)
```

Ahora el objeto debe nacer con:

- nombre;
- RUT;
- PIN;
- saldo inicial.

Esto expresa una idea importante:

> Si un dato es necesario para que el objeto tenga sentido desde el momento en que se crea, es un buen candidato para formar parte del constructor.

El constructor evita depender de que `main` recuerde inicializar manualmente cada dato obligatorio.

Los setters siguen siendo útiles para datos que realmente puedan cambiar durante la vida del objeto, pero **crear primero un objeto incompleto para completarlo después no debería ser la estrategia por defecto**.

## Etapa 4 · Main usando la nueva estructura

Package: `clase04.cuenta.etapa2`

El nuevo `main` crea la cuenta directamente:

```java
Cuenta cuenta = new Cuenta(
        "Ana Pérez",
        "12.345.678-9",
        1234,
        100000
);
```

Luego sólo ejecuta las acciones que necesita:

```java
cuenta.depositar(50000);
cuenta.girar(30000);
cuenta.mostrarDatos();
```

La diferencia conceptual es importante:

```text
ANTES
new Cuenta()
→ recordar setters
→ completar objeto
→ usar objeto

AHORA
new Cuenta(datos obligatorios)
→ objeto utilizable
→ usar objeto
```

## Etapa 5 · Separar Cuenta y Cliente

Package: `clase04.cuenta.etapa3`

Hasta ahora `Cuenta` contiene datos que realmente describen dos conceptos distintos:

```text
Cuenta
├── nombre
├── rut
├── pin
└── saldo
```

Pero `nombre` y `rut` describen a una **persona**, mientras que saldo y PIN corresponden a la cuenta bancaria.

Se introduce entonces una clase `Cliente`:

```text
Cliente
├── nombre
└── rut

Cuenta
├── cliente
├── pin
└── saldo
```

Ahora una `Cuenta` tiene un `Cliente`.

Esto es una primera aproximación a **composición/colaboración entre objetos**: un objeto puede contener o utilizar otro objeto para representar mejor el problema.

No se profundiza todavía formalmente en composición. El objetivo de esta etapa es reconocer que **no todos los datos relacionados con una cuenta pertenecen necesariamente a la clase Cuenta**.

## Preguntas de análisis para estudiantes

Antes de mirar la etapa siguiente, responder:

1. ¿Qué problema existe si `saldo` es público?
2. ¿Por qué `girar` debería validar el saldo dentro de `Cuenta`?
3. ¿Qué ocurre si olvidamos ejecutar uno de los setters antes de usar el objeto?
4. ¿Qué datos deberían ser obligatorios al crear una cuenta?
5. ¿Todos los atributos originales representan realmente una cuenta bancaria?
6. ¿Por qué nombre y RUT podrían pertenecer a otra clase?
7. ¿Qué responsabilidad debería conservar `main` después de estos cambios?

## Regla de lectura

No avanzar directamente a `etapa3`.

La secuencia recomendada es:

```text
leer etapa1
→ ejecutar
→ detectar problemas
→ revisar etapa2
→ comparar
→ ejecutar
→ detectar nueva responsabilidad
→ revisar etapa3
```

El valor del ejercicio está precisamente en observar la evolución del diseño.
