# PetCare · Implementación de referencia · Semana 03

> El objetivo es mover responsabilidad desde `main` hacia `Mascota`, no construir todavía una jerarquía ni una arquitectura compleja.

## Estructura sugerida

```text
petcare/
└── src/
    ├── App.java
    └── Mascota.java
```

## 1. Constructor y estado

```java
public class Mascota {
    private String nombre;
    private int edad;
    private double peso;

    public Mascota(String nombre, int edad, double peso) {
        this.nombre = nombre;
        this.edad = Math.max(0, edad);
        this.peso = Math.max(0, peso);
    }
}
```

## 2. Comportamiento propio

```java
public void cumplirAnio() {
    edad++;
}

public void registrarPeso(double nuevoPeso) {
    if (nuevoPeso > 0) {
        peso = nuevoPeso;
    }
}
```

La pregunta clave es: **¿esta operación pertenece naturalmente a Mascota o sólo imprime algo para la consola?**

## 3. Uso desde App

```java
public class App {
    public static void main(String[] args) {
        Mascota luna = new Mascota("Luna", 3, 4.8);
        Mascota max = new Mascota("Max", 5, 12.2);

        luna.cumplirAnio();
        max.registrarPeso(12.5);
    }
}
```

`App` crea objetos y coordina una demostración. No modifica atributos privados directamente.

## Decisión que debe explicar el estudiante

Elegir al menos una regla de estado y justificar:

- qué valor sería inválido;
- dónde se controla;
- qué ocurre si el intento no cumple la regla.

## Error frecuente

Crear getters y setters para todos los atributos automáticamente. Encapsular no significa exponer nuevamente todo el estado sin criterio.
