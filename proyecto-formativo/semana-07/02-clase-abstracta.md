# 02 · Decidir si Mascota debe ser abstracta

Si toda mascota real pertenece a un subtipo concreto, `Mascota` puede convertirse en una abstracción.

```java
public abstract class Mascota {
    public abstract String obtenerDescripcionCuidados();
}
```

Eso impide:

```java
new Mascota(...);
```

y obliga a que los subtipos definan el comportamiento abstracto.

## Checkpoint

- [ ] puedo justificar por qué la clase base es o no abstracta;
- [ ] si es abstracta, no se instancia;
- [ ] existe al menos un comportamiento que los subtipos deben completar;
- [ ] la jerarquía anterior continúa funcionando.
