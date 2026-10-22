# 01 · Crear RegistroTalleres desde cero

[← Índice](README.md) · [02 · Arrays →](02-arrays.md)

## Paso 1 · Iniciar el proyecto
1. Abre IntelliJ IDEA → **New Project** o **File → New → Project**.
2. Selecciona **Java** en el panel izquierdo.
3. Escribe **RegistroTalleres** como nombre, selecciona **JDK 21** y **Build system: IntelliJ**.
4. Pulsa **Create**, espera que termine la indexación y localiza `src` en el panel Project.
5. Clic derecho sobre `src` → **New → Java Class** → `Main`.

Pega en `Main.java`:
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Registro de talleres iniciado");
    }
}
```

Presiona el triángulo verde junto al método `main`.

**Checkpoint A:** la consola muestra `Registro de talleres iniciado`. Si no existe `src`, crea esa carpeta y márcala como **Sources Root**; si no corre, revisa JDK en **File → Project Structure → Project**.

## Paso 2 · Crear el dato Inscripcion
1. Clic derecho en `src` → **New → Java Class** → `Inscripcion`.
2. Reemplaza todo por:

```java
public class Inscripcion {
    private final String persona;
    private final String taller;

    public Inscripcion(String persona, String taller) {
        this.persona = persona;
        this.taller = taller;
    }

    public String getPersona() { return persona; }
    public String getTaller() { return taller; }

    public String resumen() { return persona + " → " + taller; }
}
```

**Checkpoint B:** existen `src/Main.java` y `src/Inscripcion.java`. `Inscripcion` representa una inscripción, no un conjunto de inscripciones. ¿Quién debería almacenar muchas? La etapa siguiente responderá eso.

[Continuar →](02-arrays.md)
