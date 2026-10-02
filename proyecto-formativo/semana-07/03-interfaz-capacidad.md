# 03 · Modelar una capacidad mediante interfaz

Una interfaz sirve para expresar algo que ciertos objetos pueden hacer, independientemente de la jerarquía principal.

Ejemplo conceptual:

```java
public interface Vacunable {
    void registrarVacuna(String vacuna);
}
```

## Preguntas

- ¿la capacidad aplica a todos los subtipos?;
- ¿podría aplicarse también a clases fuera de la jerarquía?;
- ¿realmente existe una operación común que vale la pena expresar?

## Checkpoint

- [ ] la interfaz representa una capacidad;
- [ ] sólo la implementan clases para las cuales tiene sentido;
- [ ] no la uso como decoración;
- [ ] puedo explicar la diferencia entre `extends` e `implements`.
