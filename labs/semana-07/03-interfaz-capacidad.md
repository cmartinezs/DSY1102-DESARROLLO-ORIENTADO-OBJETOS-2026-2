# Etapa 03 · Modelar una capacidad independiente

## Requerimiento de laboratorio
Esta veterinaria ofrece **registro de vacunas para determinados animales domésticos** (en nuestro escenario, perros y gatos). No asumimos que todos los `Animal` tienen ese servicio. Separa “**ES UN Animal**” de “**PUEDE registrarse una vacuna**”.

## Pasos
1. Escribe en `docs/veterinaria-iii/03-capacidad.md` los tipos elegibles y la razón.
2. Define una interfaz `Vacunable` con una operación simple y clara.
3. Haz que los tipos elegibles implementen el contrato sin alterar su lugar en la jerarquía.
4. Implementa el comportamiento concreto en cada subtipo. Si ya hay una capacidad equivalente, **reutilízala** y explica por qué.
5. Evita interfaces vacías o interfaces que todos los animales implementan sin necesidad.

## Ejemplo mínimo de contrato
```java
public interface Vacunable {
    String registrarVacuna(String nombre);
}
```

```java
public class Perro extends Mascota implements Vacunable {
    // Mantén tu constructor y tus atributos existentes.
    @Override
    public String registrarVacuna(String nombre) {
        if (nombre == null || nombre.isBlank()) {
            throw new IllegalArgumentException("Vacuna obligatoria");
        }
        return "Vacuna registrada para perro: " + nombre.trim();
    }
}
```
El fragmento **no** es una clase completa compilable por sí sola: muestra el nuevo contrato y comportamiento. El retorno tipo `String` es un resultado didáctico en memoria, no persistencia clínica; ajusta el método a tu propio diseño.

## Checkpoint
- [ ] El proyecto compila con la interfaz integrada.
- [ ] `Perro` cumple el contrato; `Salvaje` no lo recibe automáticamente.
- [ ] Puedes explicar por qué **no** agregaste este método a `Animal`.

**Commit sugerido:** `feat: agregar capacidad de vacunacion`.
