# 01 · Crear ControlFeria desde cero

[← Índice](README.md) · [02 · Elegir colección →](02-comparacion.md)

## Paso 1 · Nuevo proyecto Java
1. Abre IntelliJ IDEA → **File → New → Project**.
2. Elige **Java**, nombre `ControlFeria`, **JDK 21**, **Build system: IntelliJ** y pulsa **Create**.
3. En el panel Project busca `src`; si faltase, créala y márcala como Sources Root.
4. Clic derecho en `src` → **New → Java Class** → `Main`.
5. Escribe:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Control de feria iniciado");
    }
}
```

Pulsa Run en el triángulo verde junto al método principal.

**Checkpoint A:** aparece `Control de feria iniciado`.

## Paso 2 · Crear Asistente
1. Clic derecho en `src` → **New → Java Class** → `Asistente`.
2. Copia:

```java
public class Asistente {
    private final String codigo;
    private final String nombre;

    public Asistente(String codigo, String nombre) {
        this.codigo = codigo;
        this.nombre = nombre;
    }

    public String getCodigo() { return codigo; }
    public String getNombre() { return nombre; }

    public String resumen() {
        return codigo + " - " + nombre;
    }
}
```

**Checkpoint B:** `Asistente` compila y contiene solo datos/consulta. Antes de elegir colección, responde: «¿Qué identifica de manera única a un asistente?» En este sistema, **el código de acreditación normalizado**.

[Continuar →](02-comparacion.md)
