# 2 · Clases, atributos, constructores y objetos

## De datos sueltos a una entidad

En lugar de mantener variables desconectadas:

```java
String nombre = "Luna";
int edad = 3;
boolean vacunada = true;
```

podemos describir qué significa una mascota mediante una clase:

```java
class Mascota {
    String nombre;
    int edad;
    boolean vacunada;
}
```

La clase define una estructura. Un objeto es una instancia concreta de esa estructura.

```java
Mascota mascota = new Mascota();
mascota.nombre = "Luna";
mascota.edad = 3;
mascota.vacunada = true;
```

## Constructor

Un constructor permite crear el objeto con un estado inicial coherente.

```java
class Producto {
    String nombre;
    double precio;

    public Producto(String nombre, double precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
```

```java
Producto teclado = new Producto("Teclado", 29990);
Producto mouse = new Producto("Mouse", 14990);
```

`this.nombre` corresponde al atributo del objeto; `nombre` corresponde al parámetro recibido.

## Métodos de instancia

Una clase también puede contener comportamiento.

```java
class Producto {
    String nombre;
    double precio;

    public Producto(String nombre, double precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    public double precioConDescuento(double porcentaje) {
        return precio - (precio * porcentaje / 100);
    }
}
```

```java
System.out.println(teclado.precioConDescuento(10));
```

El método opera sobre el estado del objeto.

## Ejercicios breves

1. Crea `Libro` con `titulo`, `autor` y `paginas`.
2. Agrega un constructor.
3. Crea dos libros distintos desde `main`.
4. Agrega un método `esLargo()` que devuelva `true` si supera 300 páginas.
5. Crea una clase distinta a `Libro` por cuenta propia y repite el patrón.

## Checkpoint

Explica:

- clase vs objeto;
- atributo vs variable local;
- constructor vs método normal;
- qué hace `new`;
- por qué dos objetos de la misma clase pueden tener estados distintos.