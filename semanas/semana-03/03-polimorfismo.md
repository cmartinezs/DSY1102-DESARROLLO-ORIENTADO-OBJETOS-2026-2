# 3 · Polimorfismo

Polimorfismo permite tratar objetos concretos diferentes a través de un tipo común y obtener el comportamiento correspondiente al objeto real.

```java
abstract class Instrumento {
    public abstract void tocar();
}

class Guitarra extends Instrumento {
    @Override
    public void tocar() {
        System.out.println("Suena la guitarra");
    }
}

class Piano extends Instrumento {
    @Override
    public void tocar() {
        System.out.println("Suena el piano");
    }
}

public class Demo {
    public static void ejecutar(Instrumento instrumento) {
        instrumento.tocar();
    }

    public static void main(String[] args) {
        ejecutar(new Guitarra());
        ejecutar(new Piano());
    }
}
```

`ejecutar` no pregunta qué clase concreta recibió. Trabaja contra el tipo general `Instrumento`; Java resuelve en ejecución qué implementación de `tocar()` corresponde.

## Idea clave

```text
misma operación solicitada
+ objetos concretos diferentes
= comportamiento concreto diferente
```

Esto reduce condicionales del tipo «si es Guitarra haz X; si es Piano haz Y» cuando la diferencia pertenece al propio comportamiento de los objetos.

## Con interfaces

```java
interface Pagable {
    double calcularTotal();
}

static void mostrarTotal(Pagable item) {
    System.out.println(item.calcularTotal());
}
```

Cualquier clase que cumpla `Pagable` puede participar sin que `mostrarTotal` conozca su implementación.

## Errores frecuentes

- confundir sobrecarga con sobrescritura;
- creer que polimorfismo significa «tener muchas clases»;
- usar `instanceof` para recuperar continuamente el tipo concreto y perder el beneficio del contrato común;
- declarar todo con el tipo concreto y luego afirmar que existe diseño polimórfico.

## Prueba de comprensión

Predice la salida antes de ejecutar y explica **qué método se elige y por qué**. Luego modifica el ejemplo agregando una tercera implementación sin cambiar el método `ejecutar`.