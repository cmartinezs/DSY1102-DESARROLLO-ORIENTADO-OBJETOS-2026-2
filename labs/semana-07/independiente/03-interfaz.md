# 03 · Una capacidad: interfaz Actualizable

[← 02 · Clase base](02-abstraccion.md) · [Índice](README.md) · [04 · Integración →](04-integracion-pruebas.md)

## Paso 1 · Crear la interfaz
En `src`, clic derecho → **New → Java Class** y selecciona el tipo **Interface**; nómbrala `Actualizable`. Pega:

```java
public interface Actualizable {
    String actualizarSoftware();
}
```

**Checkpoint A:** expresa una capacidad. No contiene atributos de equipo ni una jerarquía.

## Paso 2 · Crear Computador.java
Sobre `src`, clic derecho → **New → Java Class** → `Computador`. Pega:

```java
public class Computador extends Equipo implements Actualizable {
    private final int ramGb;

    public Computador(String codigo, int ramGb) {
        super(codigo);
        this.ramGb = ramGb;
    }

    @Override public String descripcion() {
        return "Computador " + getCodigo() + " / RAM " + ramGb + " GB";
    }

    @Override public String actualizarSoftware() {
        return "Actualización preparada para " + getCodigo();
    }
}
```

**Checkpoint B:** `Computador` usa `extends Equipo` e `implements Actualizable`. El `@Override` de `descripcion` responde al método abstracto; el de `actualizarSoftware` responde a la interfaz.

## Paso 3 · Ejecutar
En `Main.java`, escribe:

```java
public class Main {
    public static void main(String[] args) {
        Computador pc = new Computador("PC01", 16);
        System.out.println(pc.descripcion());
        System.out.println(pc.actualizarSoftware());
    }
}
```

Ejecuta. Aparecen `Computador PC01 / RAM 16 GB` y `Actualización preparada para PC01`.

**Checkpoint C:** `Impresora` sigue compilando sin implementar `Actualizable`: la interfaz **no** es una exigencia para todos los `Equipo`.

[Continuar →](04-integracion-pruebas.md)
