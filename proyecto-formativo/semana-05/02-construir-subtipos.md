# 02 · Construir subtipos y reutilizar estado común

Implementa la jerarquía evitando duplicar los atributos de la clase base.

Ejemplo conceptual:

```java
public class Perro extends Mascota {
    public Perro(String nombre, int edad) {
        super(nombre, edad);
    }
}
```

## Qué observar

`super(...)` no es una formalidad: permite que la clase base inicialice su propio estado.

No vuelvas a declarar en `Perro` o `Gato` atributos que ya pertenecen a `Mascota`.

## Checkpoint

- [ ] los subtipos usan `extends`;
- [ ] el constructor utiliza `super(...)`;
- [ ] el estado común no está duplicado;
- [ ] cada subtipo conserva sólo lo que realmente lo especializa.
