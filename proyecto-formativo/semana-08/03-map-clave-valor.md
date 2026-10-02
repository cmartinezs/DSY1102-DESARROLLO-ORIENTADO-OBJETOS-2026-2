# 03 · Aplicar Map cuando existe búsqueda por clave

Si una clave identifica directamente un valor, `Map` puede expresar la relación:

```java
Map<String, Mascota> mascotasPorId = new HashMap<>();
```

Prueba:

- `put`;
- `get`;
- `containsKey`;
- `remove`;
- recorrido mediante `entrySet` si corresponde.

## Checkpoint

- [ ] la clave elegida tiene sentido en el dominio;
- [ ] puedo recuperar una mascota mediante esa clave;
- [ ] sé qué ocurre si hago `put` dos veces con la misma clave;
- [ ] puedo manejar una clave inexistente.
