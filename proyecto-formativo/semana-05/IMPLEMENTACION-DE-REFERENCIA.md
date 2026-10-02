# PetCare · Implementación de referencia · Semana 05

> Esta referencia muestra el cambio mínimo desde una única clase `Mascota` hacia especializaciones polimórficas.

## Estructura sugerida

```text
petcare/
└── src/
    ├── App.java
    ├── Mascota.java
    ├── Perro.java
    └── Gato.java
```

## 1. Clase base

```java
public class Mascota {
    private String nombre;
    private int edad;

    public Mascota(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String emitirSonido() {
        return "Sonido genérico";
    }
}
```

## 2. Especialización

```java
public class Perro extends Mascota {
    public Perro(String nombre, int edad) {
        super(nombre, edad);
    }

    @Override
    public String emitirSonido() {
        return "Guau";
    }
}
```

```java
public class Gato extends Mascota {
    public Gato(String nombre, int edad) {
        super(nombre, edad);
    }

    @Override
    public String emitirSonido() {
        return "Miau";
    }
}
```

## 3. Polimorfismo

```java
Mascota primera = new Perro("Max", 4);
Mascota segunda = new Gato("Luna", 3);

System.out.println(primera.emitirSonido());
System.out.println(segunda.emitirSonido());
```

El código que usa `Mascota` no necesita preguntar el tipo concreto para ejecutar el comportamiento especializado.

## Qué debe adaptar el estudiante

- subtipos relevantes para su dominio;
- atributos comunes y especializados;
- al menos un comportamiento realmente distinto;
- nombres de métodos con sentido de negocio.

## Error frecuente

Reemplazar polimorfismo con:

```java
if (tipo.equals("perro")) {
    ...
} else if (tipo.equals("gato")) {
    ...
}
```

Si la diferencia pertenece al subtipo, la sobrescritura suele expresar mejor la intención.
