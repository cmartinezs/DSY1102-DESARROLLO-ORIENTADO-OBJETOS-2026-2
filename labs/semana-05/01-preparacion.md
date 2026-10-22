# 01 · Crear un proyecto Java desde cero

[← Índice](README.md) · [02 · Herencia →](02-herencia.md)

## Punto de partida
Necesitas IntelliJ IDEA y JDK 21 configurado. No abras ningún laboratorio anterior.

### Paso 1 · Crear el proyecto
1. Abre **IntelliJ IDEA**.
2. En la pantalla inicial elige **New Project** (si ya estás dentro, **File → New → Project**).
3. En la columna izquierda selecciona **Java**, no JavaFX.
4. Escribe `DespachosUrbanos` en **Name**, selecciona **JDK 21** y **Build system: IntelliJ**. Si tu IDE propone código de muestra, puedes desmarcarlo.
5. Pulsa **Create**; espera hasta que termine de indexar.
6. Abre el panel **Project** y localiza `src`. Si no existe, clic derecho sobre la raíz → **New → Directory** → `src`; clic derecho en `src` → **Mark Directory as → Sources Root**.

**Checkpoint A:** existe una carpeta de código `src` donde crearás las clases.

### Paso 2 · Crear Main.java
1. Clic derecho en `src` → **New → Java Class** → escribe `Main`.
2. Reemplaza el código con:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Despachos urbanos: listo para comenzar");
    }
}
```

3. Guarda (Ctrl+S) y pulsa el triángulo verde junto a `main` → **Run 'Main.main()'**.

**Checkpoint B:** la consola muestra exactamente `Despachos urbanos: listo para comenzar` y termina sin errores. Si no ves el triángulo, verifica que `Main.java` está dentro de `src` y que el SDK del proyecto es 21.

### Paso 3 · Dibujar responsabilidades
En tu cuaderno identifica lo común a ambos despachos: **código y distancia**. ¿Qué cambia? El **cálculo de costo**. Este será el motivo para usar herencia, no para repetir todo el código.

[Continuar →](02-herencia.md)
