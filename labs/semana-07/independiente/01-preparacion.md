# 01 · Crear BibliotecaMultimedia desde cero

[← Índice](README.md) · [02 · Abstracción →](02-abstraccion.md)

## Paso 1 · Nuevo proyecto
1. Abre IntelliJ IDEA → **File → New → Project**.
2. Selecciona **Java**, escribe `BibliotecaMultimedia`, marca **JDK 21** y **Build system: IntelliJ**.
3. Pulsa **Create** y espera la preparación.
4. Abre el panel **Project**, ubica `src`, clic derecho → **New → Java Class** → `Main`.
5. Pega:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Biblioteca multimedia: proyecto listo");
    }
}
```

6. Ejecuta con el triángulo verde junto a `main`.

**Checkpoint A:** aparece el texto en Run. Si no puedes ejecutar, revisa que `src` sea Sources Root y que Project SDK sea 21.

## Paso 2 · Distinguir identidad y capacidad
En el cuaderno dibuja estas ideas antes de escribir clases:

- **Material:** tiene título; cada subclase explica de qué trata.
- **Libro:** contiene nombre del autor.
- **Audiolibro:** contiene duración; además **se puede reproducir**.
- **Reproducible:** expresa una capacidad, no una clase padre de todos los materiales.

**Checkpoint B:** reconoce por qué no todos los materiales deben implementar el método reproducir.

[Continuar →](02-abstraccion.md)
