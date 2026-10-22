# 03 · Crear interfaz Reproducible

[← 02 · Abstracción](02-abstraccion.md) · [Índice](README.md) · [04 · Integración →](04-integracion-pruebas.md)

## Paso 1 · Contrato de capacidad
En `src`, clic derecho → **New → Java Class** → selecciona tipo **Interface** o escribe el archivo `Reproducible.java`:

```java
public interface Reproducible {
    String reproducir();
}
```

**Checkpoint A:** la interfaz define lo que puede hacerse, sin representar el tipo general de biblioteca.

## Paso 2 · Crear Audiolibro
Clic derecho en `src` → **New → Java Class** → `Audiolibro`. Pega:

```java
public class Audiolibro extends Material implements Reproducible {
    private final int minutos;

    public Audiolibro(String titulo, int minutos) {
        super(titulo);
        this.minutos = minutos;
    }

    @Override public String descripcion() {
        return getTitulo() + " (audiolibro, " + minutos + " min)";
    }

    @Override public String reproducir() {
        return "Reproduciendo " + getTitulo();
    }
}
```

**Checkpoint B:** `Audiolibro` **extiende** una clase e **implementa** una interfaz. `Libro` no implementa `Reproducible`, porque en este caso no emite audio.

## Paso 3 · Probar la capacidad
Reemplaza `Main.java` temporalmente:

```java
public class Main {
    public static void main(String[] args) {
        Audiolibro audio = new Audiolibro("Java para escuchar", 45);
        System.out.println(audio.descripcion());
        System.out.println(audio.reproducir());
    }
}
```

Ejecuta. Deben aparecer descripción y texto `Reproduciendo Java para escuchar`.

**Checkpoint C:** explica por qué `reproducir()` no pertenece obligatoriamente a `Material`.

[Continuar →](04-integracion-pruebas.md)
