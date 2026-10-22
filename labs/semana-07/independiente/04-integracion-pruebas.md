# 04 · Polimorfismo y pruebas finales

[← 03 · Interfaz](03-interfaz.md) · [Índice](README.md)

## Paso 1 · Integrar ambas clases en Main
Abre `src/Main.java`, reemplaza:

```java
public class Main {
    public static void main(String[] args) {
        Equipo[] equipos = {
            new Impresora("IMP01", "Láser"),
            new Computador("PC01", 16),
            new Impresora("IMP02", "Inyección")
        };

        for (Equipo equipo : equipos) {
            System.out.println(equipo.descripcion());
            if (equipo instanceof Actualizable actualizable) {
                System.out.println("  " + actualizable.actualizarSoftware());
            } else {
                System.out.println("  No requiere actualización de software");
            }
        }
    }
}
```

Pulsa **Run**.

**Checkpoint A:** se imprimen tres descripciones y una sola actualización, asociada al computador.

## Paso 2 · Comprobar casos
| Prueba | Acción | Esperado |
|---|---|---|
| T01 | Instanciar Impresora | Descripción con tecnología |
| T02 | Instanciar Computador | Descripción con RAM |
| T03 | Recorrer `Equipo[]` | Ambos tipos actúan como Equipo |
| T04 | Verificar `instanceof Actualizable` | Solo Computador responde |
| T05 | Agregar segunda Impresora | No exige `actualizarSoftware()` |

## Paso 3 · Explicar y entregar
Guarda cinco archivos Java, captura de consola y respuestas breves: diferencia entre clase abstracta e interfaz; uso de `super()`; por qué `Equipo` no debe implementar `Actualizable` en este caso.

**Checkpoint final:** compila desde cero, sin reutilizar MediaHub, Veterinaria o PetCare. Esta práctica no añade requisitos de persistencia ni JavaFX.
