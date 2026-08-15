# ☕ Java y Programación Orientada a Objetos

> **Nivel:** primera experiencia con Java.  
> **Regla de este material:** Java puro. No se utiliza Spring Boot ni ningún framework.

## 1. Java no es POO, y POO no es Java

**Java** es un lenguaje de programación. **POO** es una forma de organizar una solución. Java permite aplicar orientación a objetos mediante clases, objetos, atributos y métodos.

En este curso aprenderás ambas cosas en paralelo: la sintaxis necesaria de Java y, sobre ella, la forma de pensar un problema como colaboración entre objetos.

## 2. Programa mínimo

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola, Java");
    }
}
```

Por ahora basta entender que `main` es el punto desde donde comienza la ejecución del ejemplo.

## 3. Variables y tipos básicos

```java
int edad = 20;
double promedio = 5.6;
boolean aprobado = true;
char seccion = 'A';
String nombre = "Ana";
```

Java exige declarar el tipo de cada variable. Esto permite que el compilador detecte muchos errores antes de ejecutar el programa.

## 4. Condiciones

```java
int nota = 65;

if (nota >= 40) {
    System.out.println("Aprobado");
} else {
    System.out.println("Reprobado");
}
```

## 5. Repeticiones

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

No memorices un ciclo aislado: pregúntate siempre **qué se repite, cuántas veces y qué cambia en cada repetición**.

## 6. Métodos

```java
public static int sumar(int a, int b) {
    return a + b;
}
```

Un método permite dar nombre a una acción. Tiene una responsabilidad, puede recibir parámetros y puede devolver un resultado.

## 7. Clase y objeto

```java
public class Auto {
    String marca;
    int velocidad;

    void acelerar() {
        velocidad = velocidad + 10;
    }
}
```

La clase describe qué conocen y qué pueden hacer los objetos de ese tipo.

```java
Auto auto = new Auto();
auto.marca = "Toyota";
auto.acelerar();
```

`auto` referencia un objeto concreto creado a partir de `Auto`.

## 8. Estado y comportamiento

Un objeto no es sólo una bolsa de datos.

- **Estado:** información que el objeto conoce mediante sus atributos.
- **Comportamiento:** acciones que puede realizar mediante sus métodos.

Una pregunta útil de modelado es: **¿esta acción corresponde realmente a la responsabilidad de este objeto?**

## 9. Constructor

```java
public class Persona {
    String nombre;
    int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
```

```java
Persona persona = new Persona("Camila", 22);
```

El constructor permite crear objetos en un estado inicial coherente.

## 10. Encapsulamiento

A medida que avancemos, evitaremos que cualquier parte del programa modifique libremente el estado interno de un objeto.

```java
public class Cuenta {
    private int saldo;

    public void depositar(int monto) {
        if (monto > 0) {
            saldo += monto;
        }
    }

    public int getSaldo() {
        return saldo;
    }
}
```

La idea importante no es memorizar `private`: es que **el objeto proteja sus propias reglas**.

## 11. Relaciones entre objetos

Los problemas interesantes requieren colaboración.

```text
Pedido
├── Cliente
└── Producto
```

Más adelante podrás distinguir relaciones como asociación, agregación, composición y herencia cuando la planificación de la asignatura las introduzca.

## 12. Los pilares de POO

Se estudiarán progresivamente:

1. **Abstracción:** quedarse con las características relevantes del problema.
2. **Encapsulamiento:** proteger estado y reglas internas.
3. **Herencia:** especializar una clase a partir de otra cuando exista una relación conceptual válida.
4. **Polimorfismo:** permitir distintas implementaciones detrás de un contrato común.

No es necesario dominar los cuatro el primer día. Cada uno debe aparecer cuando exista un problema que justifique utilizarlo.

## Qué NO necesitas todavía

No son prerrequisitos de DSY1102: Spring Boot, controladores REST, JPA, `Optional`, Streams, programación funcional avanzada, Records, patrones de diseño, inyección de dependencias ni arquitectura de backend.

Aprender primero las bases hace que esas herramientas tengan sentido cuando aparezcan en cursos posteriores.