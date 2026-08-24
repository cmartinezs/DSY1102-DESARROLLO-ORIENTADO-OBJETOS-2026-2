# 1 · Métodos · salir de `main`

Hasta ahora gran parte del código puede vivir dentro de `main`. Eso funciona para ejemplos pequeños, pero rápidamente se vuelve difícil de leer, reutilizar y probar.

## Primer método

```java
public static void saludar() {
    System.out.println("Hola");
}
```

```java
public static void main(String[] args) {
    saludar();
}
```

Un método representa una acción con nombre.

## Parámetros

```java
public static void saludar(String nombre) {
    System.out.println("Hola " + nombre);
}
```

```java
saludar("Ana");
saludar("Luis");
```

`nombre` es un **parámetro**. `"Ana"` y `"Luis"` son **argumentos** enviados al invocar el método.

## Retorno

```java
public static int sumar(int a, int b) {
    return a + b;
}
```

```java
int resultado = sumar(4, 6);
System.out.println(resultado);
```

Un método con retorno produce un valor que puede ser usado por otra parte del programa.

## Separar cálculo de impresión

Evita que todos los métodos impriman directamente.

Mejor:

```java
public static double calcularTotal(double precio, int cantidad) {
    return precio * cantidad;
}
```

```java
double total = calcularTotal(2490, 3);
System.out.println("Total: " + total);
```

Así el método calcula y `main` decide qué hacer con el resultado.

## Ejercicios breves

1. `esMayorDeEdad(int edad)` devuelve `boolean`.
2. `calcularDescuento(double precio, double porcentaje)` devuelve el precio final.
3. `esPar(int numero)` devuelve `boolean`.
4. `obtenerMayor(int a, int b)` devuelve el mayor.
5. Reescribe un ejercicio previo de `if` o `for` dividiendo al menos una responsabilidad en un método.

## Checkpoint

Debes poder distinguir:

- declarar un método vs invocarlo;
- parámetro vs argumento;
- `void` vs método con retorno;
- imprimir un resultado vs devolverlo.