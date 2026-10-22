# 02 · Crear una clase abstracta y subtipos concretos

[← 01 · Preparación](01-preparacion.md) · [Índice](README.md) · [03 · Interfaz →](03-interfaz.md)

## Paso 1 · Crear Equipo.java
En `src`, clic derecho → **New → Java Class** → `Equipo`. Reemplaza el contenido:

```java
public abstract class Equipo {
    private final String codigo;

    public Equipo(String codigo) {
        this.codigo = codigo;
    }

    public String getCodigo() { return codigo; }

    public abstract String descripcion();
}
```

**Checkpoint A:** `Equipo` es abstracta y declara un método sin implementación. Por ello, `new Equipo("E01")` no está permitido. No agregues esa línea inválida al programa final.

## Paso 2 · Crear Impresora.java
Clic derecho en `src` → **New → Java Class** → `Impresora`. Copia:

```java
public class Impresora extends Equipo {
    private final String tecnologia;

    public Impresora(String codigo, String tecnologia) {
        super(codigo);
        this.tecnologia = tecnologia;
    }

    @Override public String descripcion() {
        return "Impresora " + getCodigo() + " / " + tecnologia;
    }
}
```

**Checkpoint B:** identifica `extends`, `super(codigo)` y `@Override`.

## Paso 3 · Probar el primer subtipo
Reemplaza temporalmente `Main.java`:

```java
public class Main {
    public static void main(String[] args) {
        Equipo equipo = new Impresora("IMP01", "Láser");
        System.out.println(equipo.descripcion());
    }
}
```

Ejecuta. Debe mostrar `Impresora IMP01 / Láser`.

**Checkpoint C:** una variable de tipo `Equipo` puede apuntar a una `Impresora` concreta.

[Continuar →](03-interfaz.md)
