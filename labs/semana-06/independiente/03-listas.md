# 03 · Sustituir el array por ArrayList

[← 02 · Arrays](02-arrays.md) · [Índice](README.md) · [04 · Excepciones →](04-excepciones-pruebas.md)

## Paso 1 · Crear la clase administradora
1. En `src`, clic derecho → **New → Java Class** → `RegistroTaller`.
2. Pega el código:

```java
import java.util.ArrayList;
import java.util.List;

public class RegistroTaller {
    private final List<Inscripcion> inscripciones = new ArrayList<>();

    public void agregar(Inscripcion nueva) {
        inscripciones.add(nueva);
    }

    public Inscripcion buscar(String persona) {
        for (Inscripcion i : inscripciones) {
            if (i.getPersona().equalsIgnoreCase(persona)) return i;
        }
        return null;
    }

    public boolean eliminar(String persona) {
        return inscripciones.removeIf(
                i -> i.getPersona().equalsIgnoreCase(persona));
    }

    public void mostrar() {
        for (Inscripcion i : inscripciones) {
            System.out.println(i.resumen());
        }
    }

    public int cantidad() { return inscripciones.size(); }
}
```

**Checkpoint A:** identifica la declaración `List<Inscripcion>` y la creación `new ArrayList<>()`. La lista puede crecer sin definir cupos máximos de antemano.

## Paso 2 · Reemplazar Main
Abre `Main.java` y reemplaza el contenido por:

```java
public class Main {
    public static void main(String[] args) {
        RegistroTaller registro = new RegistroTaller();

        registro.agregar(new Inscripcion("Ana", "Pintura"));
        registro.agregar(new Inscripcion("Pedro", "Música"));
        registro.agregar(new Inscripcion("Rosa", "Pintura"));
        registro.agregar(new Inscripcion("Luis", "Teatro"));

        registro.mostrar();
        System.out.println("Total: " + registro.cantidad());
        System.out.println("Buscar Pedro: " + registro.buscar("Pedro").resumen());

        registro.eliminar("Rosa");
        System.out.println("Total tras eliminar: " + registro.cantidad());
    }
}
```

Pulsa Run: el total inicial debe ser **4** y el posterior **3**.

**Checkpoint B:** la cuarta inscripción funciona sin cambiar una constante de tamaño. El método `buscar` devuelve `null` cuando no encuentra; no llames `.resumen()` sobre un `null` (causaría `NullPointerException`).

## Paso 3 · Preguntas
¿Por qué `Main` dejó de manipular índices? ¿Qué responsabilidad tiene `RegistroTaller`? Explica la diferencia entre tipo `List` e implementación `ArrayList`.

[Continuar →](04-excepciones-pruebas.md)
