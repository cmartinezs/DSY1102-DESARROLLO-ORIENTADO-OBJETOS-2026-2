# 03 · Evolucionar a List / ArrayList

Reemplaza el array temporal por una colección dinámica.

```java
private final List<Mascota> mascotas = new ArrayList<>();
```

Agrega operaciones básicas:

- registrar;
- listar;
- buscar;
- eliminar.

Si estas operaciones comienzan a sobrecargar `App`, extráelas a una clase de coordinación como `PetCareService`.

## Checkpoint

- [ ] uso `List<Mascota>`;
- [ ] puedo agregar una cantidad variable de elementos;
- [ ] el recorrido mantiene polimorfismo;
- [ ] `main` no concentra toda la gestión de la colección.
