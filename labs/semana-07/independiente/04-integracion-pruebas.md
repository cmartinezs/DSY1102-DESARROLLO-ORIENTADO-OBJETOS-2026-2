# 04 · Integrar y verificar polimorfismo

[← 03 · Interfaz](03-interfaz.md) · [Índice](README.md)

## Paso 1 · Reemplazar Main para una prueba conjunta
Abre `src/Main.java`, Ctrl+A, pega:

```java
public class Main {
    public static void main(String[] args) {
        Material[] materiales = {
            new Libro("Introducción a Java", "Equipo docente"),
            new Audiolibro("Java para escuchar", 45),
            new Libro("Historias del cine", "L. Soto")
        };

        for (Material material : materiales) {
            System.out.println(material.descripcion());

            if (material instanceof Reproducible reproducible) {
                System.out.println("  " + reproducible.reproducir());
            } else {
                System.out.println("  Sin reproducción de audio");
            }
        }
    }
}
```

Presiona Run.

**Checkpoint A:** se imprimen tres descripciones; solo el objeto `Audiolibro` produce el mensaje de reproducción. El `instanceof` comprueba **capacidad** sin pedir que `Material` implemente la interfaz.

## Paso 2 · Matriz de prueba
| Prueba | Qué haces | Resultado esperado |
|---|---|---|
| T01 | Crear `Libro` | Se muestra autor |
| T02 | Crear `Audiolibro` | Se muestra duración |
| T03 | Recorrer `Material[]` | Ambos tipos responden con descripción |
| T04 | Comprobar `Reproducible` | Solo Audiolibro reproduce |
| T05 | Añadir segundo Libro | Se describe sin invocar reproducir |

## Paso 3 · Evidencia
Guarda una captura de la consola, los cinco archivos Java y dos párrafos cortos: qué exige una clase abstracta y qué permite una interfaz. Responde: «¿Por qué sería incorrecto poner `reproducir()` en todos los `Material`?».

**Checkpoint final:** todo compila desde el nuevo proyecto; no existe importación ni referencia a Veterinaria o PetCare.
