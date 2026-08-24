# 1 · Herencia y relación `es-un`

## Antes de escribir `extends`

Herencia modela especialización. Si `Perro` hereda de `Animal`, afirmamos que **todo Perro es un Animal**. La prueba verbal ayuda: si «X es un Y» no tiene sentido estable en el dominio, probablemente no corresponde herencia.

No usar herencia solo para ahorrar líneas de código.

## Ejemplo base

```java
class Empleado {
    private String nombre;

    public Empleado(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void trabajar() {
        System.out.println(nombre + " está trabajando");
    }
}

class Desarrollador extends Empleado {
    private String lenguaje;

    public Desarrollador(String nombre, String lenguaje) {
        super(nombre);
        this.lenguaje = lenguaje;
    }

    public void programar() {
        System.out.println(getNombre() + " programa en " + lenguaje);
    }
}
```

`Desarrollador` recibe el comportamiento público accesible de `Empleado`, pero el atributo `nombre` sigue encapsulado. La subclase usa `getNombre()` en lugar de acceder directamente al estado privado.

## `super`

`super(...)` invoca el constructor de la superclase. No «copia» el padre: inicializa la parte heredada del objeto. También puede usarse `super.metodo()` cuando una sobrescritura necesita reutilizar comportamiento del padre.

## Sobrescritura

```java
class Desarrollador extends Empleado {
    public Desarrollador(String nombre) {
        super(nombre);
    }

    @Override
    public void trabajar() {
        System.out.println(getNombre() + " desarrolla software");
    }
}
```

`@Override` hace explícita la intención y permite al compilador detectar errores de firma.

## Herencia vs composición

- `Auto es un Vehiculo` → herencia puede ser razonable.
- `Auto tiene un Motor` → composición.
- `Pedido tiene un Cliente` → asociación/composición, no `Pedido extends Cliente`.
- `Profesor es una Persona` → herencia puede ser razonable según el modelo.

## Mini ejercicios

1. Modela `Vehiculo` → `Bicicleta` y `Automovil`; agrega un comportamiento sobrescrito.
2. Decide sin programar: `Casa/Direccion`, `Cuenta/CuentaAhorro`, `Computador/Procesador`, `Documento/Factura`.
3. Corrige un diseño `Motor extends Auto` y explica el error conceptual.

## Checkpoint

Debes poder responder: ¿qué afirmación de dominio introduce `extends`?, ¿qué conserva `private`?, ¿para qué sirve `super(...)`?, ¿qué diferencia hay entre heredar y sobrescribir?