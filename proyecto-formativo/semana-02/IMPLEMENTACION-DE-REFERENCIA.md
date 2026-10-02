# PetCare · Implementación de referencia · Semana 02

> Esta referencia muestra una evolución posible. No es una solución oficial para copiar. Los nombres, datos y reglas deben poder ser explicados por el estudiante.

## Punto de partida

PetCare puede comenzar con una única clase ejecutable:

```text
petcare/
└── src/
    └── App.java
```

## 1. Datos simples

Una primera versión puede representar una mascota mediante variables:

```java
public class App {
    public static void main(String[] args) {
        String nombre = "Luna";
        int edad = 3;
        double peso = 4.8;

        mostrarResumen(nombre, edad, peso);
    }

    static void mostrarResumen(String nombre, int edad, double peso) {
        System.out.println(nombre + " · " + edad + " años · " + peso + " kg");
    }
}
```

Lo relevante no es este dominio exacto, sino que exista al menos un método con propósito y parámetros comprensibles.

## 2. Evolución opcional hacia objeto

Si clases y objetos ya fueron trabajados, el mismo problema puede comenzar a expresarse como:

```java
class Mascota {
    String nombre;
    int edad;
    double peso;
}
```

y desde `main`:

```java
Mascota luna = new Mascota();
luna.nombre = "Luna";
luna.edad = 3;
luna.peso = 4.8;
```

En esta semana todavía importa más comprender **qué es un objeto** que diseñar una clase perfecta.

## 3. Primera regla protegida

Si encapsulamiento ya fue alcanzado, una regla puede comenzar a moverse hacia el objeto:

```java
public void registrarPeso(double nuevoPeso) {
    if (nuevoPeso > 0) {
        peso = nuevoPeso;
    }
}
```

## Qué debe adaptar el estudiante

- atributos elegidos;
- nombre y propósito del método;
- regla protegida;
- datos usados para probar.

## Error frecuente

Convertir el ejercicio en una solución avanzada con herencia, listas o excepciones investigadas por adelantado.

El checkpoint correcto de Semana 02 es **pequeño, ejecutable y explicable**.
