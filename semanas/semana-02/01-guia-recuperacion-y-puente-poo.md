# Guía · Recuperación Semana 01 y puente a POO

Esta guía existe porque el feriado del sábado 15 de agosto dejó contenido pendiente. La prioridad es **no saltarse fundamentos de Java** para llegar artificialmente a clases y encapsulamiento.

## A. Lo atrasado de Semana 01

### Tipos y variables

```java
int edad = 20;
double promedio = 5.6;
boolean activo = true;
String nombre = "Camila";
```

### Operadores

```java
int total = 10 + 5;
boolean mayorDeEdad = edad >= 18;
boolean cumple = mayorDeEdad && activo;
```

### Condicionales

```java
if (promedio >= 4.0) {
    System.out.println("Aprobado");
} else {
    System.out.println("Reprobado");
}
```

### Ciclos

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

```java
int contador = 1;
while (contador <= 3) {
    System.out.println(contador);
    contador++;
}
```

> Por ahora se mantienen valores definidos directamente en código. **Todavía no usamos `Scanner`.**

## B. ¿Por qué aparecen los métodos?

Supongamos que repetimos varias veces:

```java
int subtotal = 10000;
double descuento = subtotal * 0.10;
double total = subtotal - descuento;
System.out.println(total);
```

Podemos encapsular ese comportamiento:

```java
public static double calcularTotalConDescuento(double subtotal, double porcentaje) {
    double descuento = subtotal * porcentaje;
    return subtotal - descuento;
}
```

Un método permite dar nombre a una operación, reutilizarla y separar responsabilidades.

## C. Función conocida vs método en Java

Los estudiantes vienen de Fundamentos de Programación. El puente conceptual es:

```text
función conocida → método Java
entrada          → parámetros
resultado        → return
tipo del resultado → tipo de retorno
```

## D. De datos sueltos a un objeto

Programa estructurado:

```java
String nombre = "Teclado";
int stock = 5;
double precio = 19990;
```

Pregunta clave: **¿estos datos representan juntos un mismo concepto?**

Si la respuesta es sí, comienza a aparecer una clase:

```java
public class Producto {
    private String nombre;
    private int stock;
    private double precio;
}
```

Una clase no es solo “un archivo con atributos”: representa un concepto y define qué estado y comportamientos le pertenecen.

## E. Encapsulamiento con propósito

Mal aprendizaje:

> “Los atributos son private porque el profesor dijo que deben ser private.”

Aprendizaje esperado:

> “El estado interno se protege para que el objeto controle qué cambios son válidos.”

Ejemplo:

```java
public void vender(int cantidad) {
    if (cantidad > 0 && cantidad <= stock) {
        stock -= cantidad;
    }
}
```

Es mejor pedirle al objeto `vender(2)` que permitir que cualquier código haga `stock = -100`.

## Preguntas de comprobación

1. ¿Qué diferencia existe entre parámetro y argumento?
2. ¿Cuándo un método debería retornar un valor?
3. ¿Qué problema aparece si todo queda dentro de `main`?
4. ¿Qué datos pertenecen naturalmente a un `Producto`?
5. ¿Por qué un setter irrestricto puede romper el encapsulamiento?
