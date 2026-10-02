# PetCare · Implementación de referencia · Semana 06

> La referencia muestra la transición desde objetos individuales hacia una colección dinámica y una operación que puede fallar.

## Estructura sugerida

```text
petcare/
└── src/
    ├── App.java
    ├── model/
    │   ├── Mascota.java
    │   ├── Perro.java
    │   └── Gato.java
    ├── service/
    │   └── PetCareService.java
    └── exception/
        └── MascotaNoEncontradaException.java
```

Los packages pueden simplificarse si el curso aún no los exige formalmente. La separación conceptual es lo importante.

## 1. Array para observar la limitación

```java
Mascota[] mascotas = new Mascota[2];
mascotas[0] = new Perro("Max", 4);
mascotas[1] = new Gato("Luna", 3);
```

El problema aparece cuando no sabemos cuántos registros necesitaremos.

## 2. List / ArrayList

```java
public class PetCareService {
    private final List<Mascota> mascotas = new ArrayList<>();

    public void registrar(Mascota mascota) {
        mascotas.add(mascota);
    }

    public List<Mascota> listar() {
        return new ArrayList<>(mascotas);
    }
}
```

Devolver una copia evita entregar directamente la lista interna para que cualquier código externo la modifique sin control.

## 3. Búsqueda que puede fallar

```java
public Mascota buscarPorNombre(String nombre) {
    for (Mascota mascota : mascotas) {
        if (mascota.getNombre().equalsIgnoreCase(nombre)) {
            return mascota;
        }
    }

    throw new MascotaNoEncontradaException(nombre);
}
```

Una excepción simple:

```java
public class MascotaNoEncontradaException extends RuntimeException {
    public MascotaNoEncontradaException(String nombre) {
        super("No existe una mascota con nombre: " + nombre);
    }
}
```

## 4. La CLI decide cómo comunicar

```java
try {
    Mascota mascota = service.buscarPorNombre("Luna");
    System.out.println(mascota);
} catch (MascotaNoEncontradaException e) {
    System.out.println(e.getMessage());
}
```

## Qué debe adaptar el estudiante

- criterio real de búsqueda;
- regla que merece una excepción;
- operaciones necesarias sobre la colección;
- separación entre interacción y lógica.

## Error frecuente

Capturar una excepción inmediatamente donde se lanza sin resolver nada. Si una capa no sabe qué hacer con el error, normalmente debe dejar que otra capa lo maneje.
