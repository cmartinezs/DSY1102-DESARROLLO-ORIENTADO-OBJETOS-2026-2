# 02 · Crear una clase abstracta y sus subtipos

[← 01 · Preparación](01-preparacion.md) · [Índice](README.md) · [03 · Interfaz →](03-interfaz.md)

## Paso 1 · Material.java
En `src`, clic derecho → **New → Java Class** → `Material`. Reemplaza todo:

```java
public abstract class Material {
    private final String titulo;

    public Material(String titulo) {
        this.titulo = titulo;
    }

    public String getTitulo() { return titulo; }

    public abstract String descripcion();
}
```

**Checkpoint A:** `abstract class` marca una clase base que **no puede instanciarse directamente**. El método `descripcion()` obliga a las clases concretas a decidir cómo describirse.

## Paso 2 · Libro.java
Clic derecho en `src` → **New → Java Class** → `Libro`. Pega:

```java
public class Libro extends Material {
    private final String autor;

    public Libro(String titulo, String autor) {
        super(titulo);
        this.autor = autor;
    }

    @Override public String descripcion() {
        return getTitulo() + " (libro de " + autor + ")";
    }
}
```

**Checkpoint B:** identifica `extends`, `super(titulo)` y `@Override`.

## Paso 3 · Primera comprobación
Reemplaza `Main.java`:

```java
public class Main {
    public static void main(String[] args) {
        Material ejemplo = new Libro("Introducción a Java", "Equipo docente");
        System.out.println(ejemplo.descripcion());
    }
}
```

Ejecuta. Debe imprimir `Introducción a Java (libro de Equipo docente)`.

**Comprobación conceptual sin cambiar el archivo:** intentar `new Material("Algo")` daría error de compilación, porque `Material` es abstracta. No es necesario introducir una línea inválida.

[Continuar →](03-interfaz.md)
