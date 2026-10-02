# PetCare · Implementación de referencia · Semana 08

> El foco no es “usar todas las colecciones”, sino elegir una estructura porque expresa mejor una regla del dominio.

## Opción A · Set para unicidad

Si el número de chip no puede repetirse:

```java
private final Set<String> chipsRegistrados = new HashSet<>();

public boolean registrarChip(String chip) {
    return chipsRegistrados.add(chip);
}
```

Uso:

```java
boolean registrado = service.registrarChip("CHIP-100");

if (!registrado) {
    System.out.println("El chip ya estaba registrado.");
}
```

## Opción B · Map para búsqueda por clave

Si el identificador es la forma principal de recuperar una mascota:

```java
private final Map<String, Mascota> mascotasPorId = new HashMap<>();

public void registrar(Mascota mascota) {
    mascotasPorId.put(mascota.getId(), mascota);
}

public Mascota buscarPorId(String id) {
    Mascota mascota = mascotasPorId.get(id);

    if (mascota == null) {
        throw new MascotaNoEncontradaException(id);
    }

    return mascota;
}
```

## Opción C · List + índice adicional

También puede existir:

```java
private final List<Mascota> mascotas = new ArrayList<>();
private final Map<String, Mascota> mascotasPorId = new HashMap<>();
```

pero entonces cada alta, eliminación o cambio debe mantener ambas estructuras sincronizadas.

Para un proyecto formativo pequeño, esa complejidad sólo vale la pena si existe una necesidad explícita.

## Objetos en HashSet

Si se decide usar:

```java
Set<Mascota> mascotas;
```

la clase necesita una definición coherente de identidad lógica:

```java
@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof Mascota otra)) return false;
    return Objects.equals(id, otra.id);
}

@Override
public int hashCode() {
    return Objects.hash(id);
}
```

El atributo usado como identidad debe ser estable mientras el objeto pertenezca al conjunto.

## Qué debe adaptar el estudiante

- regla real de unicidad;
- clave real de búsqueda;
- estructura principal elegida;
- estrategia para evitar inconsistencias.

## Error frecuente

Agregar `List`, `Set` y `Map` simultáneamente sólo porque aparecen en la materia. Más estructuras no significan mejor diseño.
