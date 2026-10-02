# PetCare · Implementación de referencia · Semana 04

> Semana 04 consolida construcción válida y colaboración simple entre objetos. El código es orientativo y debe adaptarse al PetCare real del estudiante.

## Estructura sugerida

```text
petcare/
└── src/
    ├── App.java
    ├── Mascota.java
    └── Tutor.java
```

## 1. Construcción completa

```java
public class Mascota {
    private String nombre;
    private String especie;
    private int edad;
    private double peso;

    public Mascota(String nombre, String especie, int edad, double peso) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = Math.max(0, edad);
        this.peso = Math.max(0, peso);
    }

    public void registrarPeso(double nuevoPeso) {
        if (nuevoPeso > 0) {
            peso = nuevoPeso;
        }
    }
}
```

El constructor evita crear una mascota “vacía” para luego completar su estado mediante una cadena de setters.

## 2. Colaboración con Tutor

```java
public class Tutor {
    private String nombre;
    private String telefono;

    public Tutor(String nombre, String telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}
```

Una mascota puede mantener una referencia a su tutor:

```java
private Tutor tutor;

public void asignarTutor(Tutor tutor) {
    this.tutor = tutor;
}
```

## 3. App coordina

```java
Tutor ana = new Tutor("Ana", "+56 9 1234 5678");
Mascota luna = new Mascota("Luna", "Gato", 3, 4.8);

luna.asignarTutor(ana);
```

## Qué debe decidir el estudiante

- qué datos son obligatorios al construir;
- qué relación tiene sentido modelar;
- qué reglas siguen perteneciendo a `Mascota`;
- qué getters son realmente necesarios.

## Error frecuente

Usar composición como excusa para crear muchas clases sin necesidad. Una segunda entidad sólo se agrega si representa una responsabilidad distinta y comprensible.
