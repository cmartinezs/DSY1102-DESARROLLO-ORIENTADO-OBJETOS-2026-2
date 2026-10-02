# 05 · Modelar situaciones inválidas con excepciones

Una operación puede detectar que no puede cumplir el contrato esperado.

Ejemplo conceptual:

```java
throw new MascotaNoEncontradaException(nombre);
```

La CLI puede capturar el error para presentarlo:

```java
try {
    Mascota mascota = service.buscarPorNombre(nombre);
    System.out.println(mascota);
} catch (MascotaNoEncontradaException e) {
    System.out.println(e.getMessage());
}
```

## Regla de responsabilidad

Quien detecta el problema puede lanzar la excepción. Quien sabe cómo responder puede capturarla.

## Checkpoint

- [ ] existe una condición inválida concreta;
- [ ] se usa `throw`;
- [ ] existe `try/catch` en una capa apropiada;
- [ ] la excepción no se usa como reemplazo de cualquier `if`.
