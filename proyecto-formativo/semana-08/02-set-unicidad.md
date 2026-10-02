# 02 · Aplicar Set cuando existe unicidad

Si la regla dice “no repetir”, modela esa intención con `Set`.

```java
Set<String> chipsRegistrados = new HashSet<>();
```

El resultado de `add` permite saber si el valor fue incorporado.

```java
boolean agregado = chipsRegistrados.add(chip);
```

## Checkpoint

- [ ] existe una regla de unicidad explícita;
- [ ] un duplicado no genera otro elemento;
- [ ] comprendo que `HashSet` no trabaja por índice;
- [ ] puedo explicar por qué una lista sería menos expresiva para esta regla.
