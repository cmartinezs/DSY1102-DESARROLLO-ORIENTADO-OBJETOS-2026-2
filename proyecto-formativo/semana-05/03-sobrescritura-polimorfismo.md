# 03 · Sobrescritura y polimorfismo

Agrega un comportamiento que tenga una implementación distinta en cada subtipo.

Ejemplo:

```java
@Override
public String emitirSonido() {
    return "Guau";
}
```

Luego usa referencias del tipo base:

```java
Mascota primera = new Perro(...);
Mascota segunda = new Gato(...);

System.out.println(primera.emitirSonido());
System.out.println(segunda.emitirSonido());
```

## La prueba importante

El código cliente no debería preguntar manualmente qué subtipo tiene para decidir qué método ejecutar.

## Checkpoint

- [ ] existe al menos un `@Override`;
- [ ] el método sobrescrito expresa una diferencia real;
- [ ] se usan referencias `Mascota`;
- [ ] no existe un `if/switch` gigante para simular polimorfismo.
