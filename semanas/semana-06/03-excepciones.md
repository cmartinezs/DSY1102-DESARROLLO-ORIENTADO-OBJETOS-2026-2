# Excepciones · concepto y ejemplos mínimos

Esta página introduce errores controlados con ejemplos pequeños antes de llevarlos a un dominio.

## Capturar una conversión inválida

```java
try {
    int numero = Integer.parseInt("abc");
    System.out.println(numero);
} catch (NumberFormatException e) {
    System.out.println("El valor no es un número entero válido.");
}
```

## Lanzar una excepción por una condición inválida

```java
int edad = -2;

if (edad < 0) {
    throw new IllegalArgumentException("La edad no puede ser negativa");
}
```

## Separar quién detecta y quién decide qué hacer

```java
static void validarEdad(int edad) {
    if (edad < 0) {
        throw new IllegalArgumentException("Edad inválida");
    }
}

public static void main(String[] args) {
    try {
        validarEdad(-1);
    } catch (IllegalArgumentException e) {
        System.out.println(e.getMessage());
    }
}
```

## Excepción propia: sólo después de entender lo anterior

```java
class ProductoNoEncontradoException extends RuntimeException {
    public ProductoNoEncontradoException(String mensaje) {
        super(mensaje);
    }
}
```

Los ejemplos completos están en [`../../ejemplos/semana-06/`](../../ejemplos/semana-06/).

## Qué debes poder explicar

- diferencia entre detectar una condición y capturar una excepción;
- para qué sirven `throw`, `try` y `catch`;
- por qué no corresponde usar `catch (Exception)` indiscriminadamente;
- en qué nivel existe suficiente contexto para informar o recuperarse.

## Después de aprenderlo

Practica casos mínimos en ejercicios y luego aplica una excepción de dominio en Veterinaria II.
