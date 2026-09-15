# Etapa 4 · Evolucionar a `List<Animal>`

## Propósito

Reemplazar el almacenamiento fijo por una colección dinámica manteniendo la abstracción `Animal` y el comportamiento polimórfico.

## Antes de implementar

Recuerda la forma mínima:

```java
import java.util.ArrayList;
import java.util.List;

List<Animal> animales = new ArrayList<>();
animales.add(new Perro(/* datos */));
animales.add(new Gato(/* datos */));

for (Animal animal : animales) {
    animal.mostrarInformacion();
}
```

La intención no es copiar este código dentro de `main`, sino reconocer la sintaxis y llevar la responsabilidad de administrar la colección a la clase adecuada.

## Qué debes hacer

1. Cambia el almacenamiento interno de la veterinaria a `List<Animal>`.
2. Usa `ArrayList<Animal>` como implementación concreta.
3. Conserva una operación para registrar animales.
4. Conserva o mejora la operación para listar animales.
5. Evita que `main` administre directamente la colección.
6. Documenta en `docs/veterinaria-ii/02-colecciones.md` por qué la variable debería declararse como `List<Animal>` y no necesariamente como `ArrayList<Animal>`.
7. Compara explícitamente `length` del array con `size()` de la colección.

## Ejemplo de responsabilidad

Una forma posible de expresar la responsabilidad es:

```java
public class Veterinaria {
    private final List<Animal> animales = new ArrayList<>();

    public void registrar(Animal animal) {
        animales.add(animal);
    }
}
```

No copies automáticamente esta forma si tu diseño previo tiene otra clase responsable. Lo importante es que la colección no quede administrada desde `main`.

## Entregables

- `src/Veterinaria.java` o clase de servicio equivalente evolucionada;
- `docs/veterinaria-ii/02-colecciones.md`;
- ejecución que demuestre incorporación dinámica de objetos.

## Commits sugeridos

```text
LAB-VET2-04: migra almacenamiento a List de Animal
LAB-VET2-05: documenta decision de colecciones
```

## Checkpoint

Debes distinguir entre:

- la interfaz `List` y la implementación `ArrayList`;
- tamaño fijo y tamaño dinámico;
- la colección como estructura y los objetos polimórficos que contiene.
