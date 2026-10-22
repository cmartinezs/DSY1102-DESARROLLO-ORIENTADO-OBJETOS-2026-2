# 03 · Registro de asistentes con Map y validaciones

[← 02 · Comparación](02-comparacion.md) · [Índice](README.md) · [04 · Pruebas →](04-pruebas.md)

## Paso 1 · Crear RegistroFeria
1. En `src`, clic derecho → **New → Java Class** → `RegistroFeria`.
2. Reemplaza el archivo completo:

```java
import java.util.HashMap;
import java.util.Map;

public class RegistroFeria {
    private final Map<String, Asistente> asistentes = new HashMap<>();

    public boolean registrar(String codigo, String nombre) {
        if (codigo == null || codigo.isBlank()
                || nombre == null || nombre.isBlank()) {
            throw new IllegalArgumentException("Código y nombre obligatorios");
        }

        String clave = codigo.trim().toUpperCase();
        Asistente nuevo = new Asistente(clave, nombre.trim());

        // Nunca reemplaza un registro previo.
        return asistentes.putIfAbsent(clave, nuevo) == null;
    }

    public Asistente buscar(String codigo) {
        if (codigo == null) return null;
        return asistentes.get(codigo.trim().toUpperCase());
    }

    public boolean eliminar(String codigo) {
        if (codigo == null) return false;
        return asistentes.remove(codigo.trim().toUpperCase()) != null;
    }

    public int cantidad() { return asistentes.size(); }
}
```

**Checkpoint A:** el atributo `asistentes` es privado y utiliza `Map<String, Asistente>`. La clave siempre se normaliza con `trim().toUpperCase()`, así que `f001` y `F001` representan la misma acreditación.

## Paso 2 · Prueba integrada desde Main
1. Abre `src/Main.java`. Reemplaza el ejercicio exploratorio por:

```java
public class Main {
    public static void main(String[] args) {
        RegistroFeria feria = new RegistroFeria();
        System.out.println(feria.registrar("F001", "Ana"));
        System.out.println(feria.registrar("F002", "Pedro"));
        System.out.println(feria.registrar("f001", "Otra persona"));
        System.out.println("Total: " + feria.cantidad());
        System.out.println(feria.buscar("f001").resumen());
        System.out.println("Eliminó F002: " + feria.eliminar("F002"));
        System.out.println("Final: " + feria.cantidad());
    }
}
```

2. Ejecuta.

**Checkpoint B:** la consola debe mostrar `true`, `true`, `false`, `Total: 2`, `F001 - Ana`, `Eliminó F002: true`, `Final: 1`.

## Paso 3 · Entender igualdad
No necesitas redefinir `equals()` ni `hashCode()` para este diseño porque las **claves String** determinan unicidad y búsqueda. Sí podría ser necesario si usaras un `HashSet<Asistente>`: entonces la clase necesitaría una definición coherente de igualdad basada en el código.

**Checkpoint C:** justifica por qué un `Map` es suficiente sin mantener un Set paralelo.

[Continuar →](04-pruebas.md)
