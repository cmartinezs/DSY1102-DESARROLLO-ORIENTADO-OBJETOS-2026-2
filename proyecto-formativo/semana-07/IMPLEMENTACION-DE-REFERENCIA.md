# PetCare · Implementación de referencia · Semana 07

> Semana 07 integra EA1. La referencia muestra cómo expresar abstracción y capacidades sin destruir el diseño anterior.

## 1. Mascota como abstracción

Si no tiene sentido registrar una mascota genérica:

```java
public abstract class Mascota {
    private final String id;
    private final String nombre;

    protected Mascota(String id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public abstract String obtenerDescripcionCuidados();
}
```

Cada subtipo completa el comportamiento:

```java
public class Perro extends Mascota {
    public Perro(String id, String nombre) {
        super(id, nombre);
    }

    @Override
    public String obtenerDescripcionCuidados() {
        return "Paseo diario y control de vacunas.";
    }
}
```

## 2. Interfaz como capacidad

Una interfaz no significa “otro tipo de mascota”; expresa algo que ciertos objetos pueden hacer.

```java
public interface Vacunable {
    void registrarVacuna(String vacuna);
}
```

Sólo los tipos para los cuales la capacidad tenga sentido deberían implementarla.

## 3. Servicio continúa usando el tipo base

```java
private final List<Mascota> mascotas = new ArrayList<>();
```

Esto conserva el polimorfismo y evita acoplar el servicio a cada subtipo.

## 4. Flujo integrado

```java
PetCareService service = new PetCareService();

service.registrar(new Perro("P-001", "Max"));
service.registrar(new Gato("G-001", "Luna"));

for (Mascota mascota : service.listar()) {
    System.out.println(mascota.obtenerDescripcionCuidados());
}
```

## Qué debe adaptar el estudiante

- decidir si la clase base realmente debe ser abstracta;
- definir una capacidad que tenga sentido como interfaz;
- mantener las operaciones de Semana 06;
- asegurar que el flujo de consola siga ejecutando de principio a fin.

## Error frecuente

Crear una interfaz sólo para cumplir la rúbrica conceptual. Una interfaz sin una capacidad diferenciada agrega ruido en vez de diseño.
