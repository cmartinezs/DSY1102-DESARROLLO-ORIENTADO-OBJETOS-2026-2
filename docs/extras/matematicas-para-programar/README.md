# ➕ Matemáticas para programar

> **Objetivo:** repasar las operaciones matemáticas que aparecen con frecuencia en ejercicios de programación y expresarlas correctamente en Java.

No necesitas matemáticas avanzadas para comenzar. Sí necesitas comprender con precisión qué operación estás programando.

## Operadores básicos

```java
int suma = 10 + 5;
int resta = 10 - 5;
int producto = 10 * 5;
double division = 10.0 / 4.0;
int resto = 10 % 4;
```

El operador `%` obtiene el resto de una división y resulta útil para preguntas como "¿es par?" o "¿es múltiplo de...?".

```java
boolean esPar = numero % 2 == 0;
```

## División entera

```java
int resultado = 5 / 2; // 2
```

Si ambos operandos son enteros, Java produce división entera. Si necesitas decimales:

```java
double resultado = 5.0 / 2.0; // 2.5
```

## Contadores

Un contador registra cuántas veces ocurre algo:

```java
int aprobados = 0;

if (nota >= 4.0) {
    aprobados++;
}
```

## Acumuladores

Un acumulador reúne valores sucesivos:

```java
double sumaNotas = 0;
sumaNotas += nota;
```

Luego puede utilizarse para calcular un promedio:

```java
double promedio = sumaNotas / cantidadNotas;
```

## Porcentajes

Para obtener el 20% de un precio:

```java
double descuento = precio * 20 / 100.0;
```

Precio final:

```java
double precioFinal = precio - descuento;
```

También puede expresarse:

```java
double precioFinal = precio * 0.80;
```

Lo importante es comprender por qué ambas expresiones representan la misma operación.

## Casos límite

Antes de programar una fórmula pregunta:

- ¿puede el divisor ser cero?
- ¿puede el valor ser negativo?
- ¿qué ocurre exactamente en los límites del rango?
- ¿necesito enteros o decimales?
- ¿el resultado debe redondearse o sólo mostrarse con cierto formato?

## Ejemplo aplicado a un objeto

```java
public class Producto {
    private double precio;

    public Producto(double precio) {
        this.precio = precio;
    }

    public double calcularPrecioConDescuento(double porcentaje) {
        return precio - (precio * porcentaje / 100.0);
    }
}
```

Aquí la matemática se integra a POO: el cálculo representa un comportamiento asociado al concepto `Producto`.

## Qué se simplificó del material Fullstack

El original vinculaba algunos ejemplos a backend, APIs y tipos de precisión usados en sistemas financieros. Para este curso se mantiene el razonamiento matemático y Java básico. Temas como `BigDecimal` pueden incorporarse más adelante si una actividad realmente necesita precisión monetaria profesional; no son un requisito para comprender porcentajes, contadores o acumuladores.