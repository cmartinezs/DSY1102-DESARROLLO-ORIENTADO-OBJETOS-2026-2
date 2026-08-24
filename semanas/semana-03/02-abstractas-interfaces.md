# 2 · Clases abstractas e interfaces

## Clase abstracta

Una clase abstracta representa un concepto general que tiene sentido como base del modelo, pero que no queremos instanciar directamente.

```java
abstract class Figura {
    private String nombre;

    public Figura(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public abstract double calcularArea();
}

class Rectangulo extends Figura {
    private double ancho;
    private double alto;

    public Rectangulo(double ancho, double alto) {
        super("Rectángulo");
        this.ancho = ancho;
        this.alto = alto;
    }

    @Override
    public double calcularArea() {
        return ancho * alto;
    }
}
```

Una abstracta puede tener estado, constructor, métodos implementados y métodos abstractos.

## Interfaz

Una interfaz expresa un **contrato de comportamiento** que distintas clases pueden cumplir.

```java
interface Exportable {
    void exportar();
}

class Informe implements Exportable {
    @Override
    public void exportar() {
        System.out.println("Exportando informe");
    }
}

class Imagen implements Exportable {
    @Override
    public void exportar() {
        System.out.println("Exportando imagen");
    }
}
```

No necesitamos afirmar que `Informe` e `Imagen` pertenecen a una misma familia concreta: ambos **pueden ser exportados**.

## ¿Cuál elegir?

Usa una clase base/abstracta cuando existe una especialización coherente y quieres compartir identidad, estado o comportamiento común. Usa una interfaz cuando quieres expresar una capacidad/contrato que pueden cumplir clases potencialmente no relacionadas.

No existe una regla automática «abstracta = mala, interfaz = buena» ni lo contrario: la elección depende del modelo.

## Ejercicio de diseño

Para cada caso decide: herencia concreta, clase abstracta, interfaz o composición. Justifica en una frase.

- medios de pago que pueden procesar un cobro;
- animales con comportamiento común y sonidos diferentes;
- impresora que contiene cartuchos;
- archivos de distintos tipos que pueden comprimirse;
- empleados con distintos cálculos de bono.

## Checkpoint

Explica con tus palabras: ¿por qué no puedo instanciar una clase abstracta?, ¿qué obliga a implementar una interfaz?, ¿puede una clase implementar más de una interfaz?, ¿qué decisión de dominio comunica cada mecanismo?