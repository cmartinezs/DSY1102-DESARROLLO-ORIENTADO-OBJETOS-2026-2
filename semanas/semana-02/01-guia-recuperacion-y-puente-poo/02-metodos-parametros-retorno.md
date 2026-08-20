# Métodos: parámetros, argumentos y retorno

Antes de llegar a objetos conviene entender bien qué problema resuelve un método.

## Dar nombre a una operación

Si repetimos:

```java
System.out.println("Nombre: " + nombre);
System.out.println("Edad: " + edad);
```

podemos extraer esa responsabilidad:

```java
public static void mostrarFicha(String nombre, int edad) {
    System.out.println("Nombre: " + nombre);
    System.out.println("Edad: " + edad);
}
```

Ahora la operación tiene nombre y puede reutilizarse.

## Parámetro vs argumento

En la declaración:

```java
public static boolean pesoValido(double peso)
```

`peso` es un **parámetro**.

En la llamada:

```java
pesoValido(5.2)
```

`5.2` es un **argumento**.

Una forma útil de recordarlo:

```text
parámetro → variable definida por el método
argumento → valor concreto enviado al llamarlo
```

## `void` vs retorno

Un método `void` realiza una acción y no entrega un resultado utilizable:

```java
public static void mostrarFicha(...) { ... }
```

Un método con tipo de retorno produce un valor:

```java
public static boolean pesoValido(double peso) {
    return peso > 0;
}
```

## Pregunta de diseño

Antes de decidir si un método retorna algo, pregunta:

> ¿El código que llama a este método necesita recibir un resultado para seguir tomando decisiones?

Si la respuesta es sí, probablemente el método deba retornar un valor.

## Puente hacia POO

Al comienzo estos métodos pueden ser `static` y recibir muchos datos por parámetros. Más adelante algunos de ellos podrán convertirse en comportamientos de un objeto que ya conoce su propio estado.
