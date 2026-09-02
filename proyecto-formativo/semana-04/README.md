# PetCare · Semana 04

## Punto de entrada real

La sección llegó a constructores el martes 1 de septiembre. Por lo tanto PetCare no debe saltar todavía a herencia, polimorfismo, colecciones ni excepciones.

## Objetivo

Convertir el modelo inicial de mascota en un objeto correctamente construido, encapsulado y responsable de su propio estado.

## Modelo mínimo

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

    public void cumplirAnio() {
        edad++;
    }

    public void registrarPeso(double nuevoPeso) {
        if (nuevoPeso > 0) {
            peso = nuevoPeso;
        }
    }
}
```

El código anterior es una referencia conceptual, no una solución que deba copiarse literalmente.

## Trabajo esperado

1. revisar la versión de `Mascota` realizada hasta ahora;
2. incorporar un constructor con los datos necesarios;
3. eliminar inicializaciones incoherentes mediante setters desde `main`;
4. mantener atributos privados;
5. identificar getters realmente necesarios;
6. mover reglas simples al objeto;
7. crear varias mascotas desde `App`;
8. demostrar que cada objeto mantiene estado independiente.

## Extensión: composición simple

Solo después del checkpoint anterior, introducir una segunda clase sencilla, por ejemplo `Tutor`:

```text
Mascota ───> Tutor
```

La intención es aprender colaboración entre objetos, no crear todavía una jerarquía de herencia.

## Checkpoint de salida

```text
cli.App
    ↓
core.model.Mascota ───> core.model.Tutor (opcional al consolidar)
```

`App` crea objetos y coordina la demostración. `Mascota` protege sus reglas y mantiene su estado.

## Evidencia

- constructor funcional;
- al menos tres instancias;
- operaciones que modifican estado con validación;
- ausencia de modificación directa de atributos desde `App`;
- DevLog explicando qué responsabilidad quedó dentro de `Mascota` y por qué.

## Fuera de alcance

- `Perro extends Mascota` / `Gato extends Mascota`;
- interfaces;
- listas;
- excepciones personalizadas;
- persistencia.
