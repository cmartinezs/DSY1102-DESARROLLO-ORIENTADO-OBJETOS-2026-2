# Guía · Recuperación Semana 01 y puente a POO

Esta guía pertenece exclusivamente al **contenido curricular de Semana 02**. No utiliza PetCare ni depende del proyecto transversal.

La semana parte recuperando lo que quedó pendiente por el feriado del sábado 15 de agosto y avanza hacia métodos, clases, objetos, abstracción y encapsulamiento.

La ruta de aprendizaje es:

```text
fundamentos Java
    ↓
métodos
    ↓
parámetros y retorno
    ↓
clases y objetos
    ↓
abstracción
    ↓
encapsulamiento
```

> PetCare se trabaja por separado en `proyecto-formativo/` como actividad individual transversal conectada con los contenidos de la semana.

---

## A. Recuperación de fundamentos Java

### Tipos y variables

```java
String nombreProducto = "Teclado";
double precio = 19990.0;
int stock = 5;
boolean disponible = true;
```

### Mini ejercicio

Define en código los datos básicos de un libro:

- título;
- año de publicación;
- precio;
- disponible.

Todavía no utilizamos `Scanner`.

---

### Operadores

```java
double precioConDescuento = precio * 0.9;
boolean hayStock = stock > 0;
boolean puedeVenderse = disponible && hayStock;
```

### Mini ejercicio

Con una variable `edad`, calcula:

- edad del próximo año;
- si es mayor o igual a 18;
- si está entre 18 y 65 años.

---

### Condicionales

```java
int temperatura = 28;

if (temperatura >= 30) {
    System.out.println("Temperatura alta");
} else if (temperatura >= 20) {
    System.out.println("Temperatura media");
} else {
    System.out.println("Temperatura baja");
}
```

### Mini ejercicio

Dada:

```java
double nota = 5.4;
```

muestra `Aprobado` si la nota es mayor o igual a `4.0`, y `Reprobado` en caso contrario.

---

### Ciclos

#### `for`

```java
for (int i = 1; i <= 5; i++) {
    System.out.println("Iteración: " + i);
}
```

#### `while`

```java
int contador = 1;

while (contador <= 3) {
    System.out.println("Contador: " + contador);
    contador++;
}
```

#### `do-while`

```java
int numero = 1;

do {
    System.out.println(numero);
    numero++;
} while (numero <= 3);
```

### Mini ejercicio

Imprime con un `for` los números del 2 al 10 de dos en dos.

---

# B. Métodos

Supongamos que repetimos varias veces:

```java
System.out.println("====================");
System.out.println("REPORTE");
System.out.println("====================");
```

Podemos darle nombre a esa operación:

```java
public static void mostrarEncabezado() {
    System.out.println("====================");
    System.out.println("REPORTE");
    System.out.println("====================");
}
```

Y ejecutarla mediante:

```java
mostrarEncabezado();
```

Un método permite nombrar una operación y reutilizarla.

---

## Parámetros y argumentos

```java
public static void saludar(String nombre) {
    System.out.println("Hola " + nombre);
}
```

```java
saludar("Ana");
```

```text
String nombre → parámetro
"Ana"         → argumento
```

### Mini ejercicio

Crea:

```java
public static void mostrarPrecio(double precio)
```

que muestre el valor recibido.

---

## Retorno

```java
public static int sumar(int a, int b) {
    return a + b;
}
```

```java
int resultado = sumar(4, 7);
System.out.println(resultado);
```

```text
void → no retorna un resultado
int  → debe retornar un int
```

### Mini ejercicio

Crea:

```java
public static double calcularIva(double neto)
```

que retorne el 19% del valor recibido.

---

# C. Puente desde funciones conocidas

```text
función conocida     → método Java
entrada              → parámetros
valor utilizado      → argumentos
resultado            → return
tipo del resultado   → tipo de retorno
```

La pregunta importante no es sólo cómo escribir la sintaxis:

> ¿Qué operación quiero representar, qué necesita recibir y qué debe entregar?

---

# D. Clases y objetos

Usamos un contexto nuevo:

```java
String nombre = "Teclado";
double precioProducto = 19990;
int stockProducto = 5;
```

Los datos describen un mismo concepto: un producto.

```java
public class Producto {
    String nombre;
    double precio;
    int stock;
}
```

Crear un objeto:

```java
Producto producto1 = new Producto();
producto1.nombre = "Teclado";
producto1.precio = 19990;
producto1.stock = 5;
```

Crear otro:

```java
Producto producto2 = new Producto();
producto2.nombre = "Mouse";
producto2.precio = 12990;
producto2.stock = 8;
```

```text
Producto       → clase / tipo
producto1      → variable que referencia un objeto
new Producto() → creación de una instancia
```

Dos objetos de la misma clase comparten estructura, pero pueden tener estados distintos.

### Mini ejercicio

Modela una clase `Libro` con:

- `titulo`;
- `autor`;
- `precio`.

Crea dos objetos con valores diferentes.

---

# E. Abstracción

Un producto real posee muchas más características que `nombre`, `precio` y `stock`.

En un programa seleccionamos las características relevantes para el problema que estamos resolviendo.

> Abstraer implica representar sólo aquello que resulta significativo para nuestro modelo.

---

# F. Encapsulamiento con propósito

Ahora usamos otro contexto: una cuenta simple.

Primera versión:

```java
public class Cuenta {
    double saldo;
}
```

Esto permitiría:

```java
cuenta.saldo = -500000;
```

Puede compilar, pero puede romper las reglas del programa.

Evolucionamos a:

```java
public class Cuenta {
    private double saldo;

    public boolean depositar(double monto) {
        if (monto <= 0) {
            return false;
        }

        saldo += monto;
        return true;
    }
}
```

La idea importante no es memorizar que todo debe ser `private`.

> Encapsular significa controlar cómo se consulta o modifica el estado cuando existen reglas que proteger.

### Mini ejercicio

Agrega:

```java
public boolean retirar(double monto)
```

Debe validar que:

- el monto sea mayor que cero;
- no se retire más que el saldo disponible.

---

# G. Checkpoint conceptual de Semana 02

Al terminar esta guía deberías poder explicar:

1. qué problema resuelve un método;
2. diferencia entre parámetro y argumento;
3. diferencia entre `void` y retorno;
4. diferencia entre clase y objeto;
5. qué significa abstraer;
6. por qué `private` puede ayudar a proteger el estado;
7. por qué encapsulamiento no equivale a generar getters y setters automáticamente.

## No corresponde todavía

- `Scanner` como eje de los ejercicios;
- arrays o colecciones;
- herencia;
- interfaces;
- excepciones;
- JavaFX;
- persistencia.

---

## Profundización

➡️ [Profundización · Recuperación y puente hacia POO](./01-guia-recuperacion-y-puente-poo/README.md)

La profundización sigue exactamente la misma regla: **contenido de Semana 02 sin contexto PetCare**.
