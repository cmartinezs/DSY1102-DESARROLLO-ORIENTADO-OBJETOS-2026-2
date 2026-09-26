# 03 · Interfaces y capacidades

## Nuevo requisito

Algunos animales pueden vacunarse.

La primera pregunta no es sintáctica:

> ¿Vacunable es un tipo de Animal?

No.

Vacunable representa una **capacidad** que ciertos tipos pueden cumplir.

## Declarar el contrato

~~~java
public interface Vacunable {
    void vacunar();
}
~~~

Una clase concreta puede implementar ese contrato:

~~~java
public class Perro extends Animal implements Vacunable
~~~

## Diferencia conceptual

~~~text
Perro es un Animal.
Perro puede ser Vacunable.

extends     → generalización / especialización
implements  → capacidad / contrato
~~~

## Conocimiento que debes adquirir

Debes poder decidir cuándo:

- una relación corresponde a herencia;
- una característica corresponde a una capacidad;
- una interfaz expresa mejor el requerimiento que una nueva clase padre.

## Avance consolidado esperado

Al finalizar esta etapa:

- existe Vacunable.java;
- al menos un subtipo implementa la interfaz;
- vacunar() está implementado en los tipos correspondientes;
- puedes explicar por qué no todos los animales están obligados a ser Vacunable.

La estructura debería verse aproximadamente así:

~~~text
Animal
├── Perro implements Vacunable
├── Gato implements Vacunable
└── Ave
~~~

➡️ [Siguiente: List y polimorfismo](./04-listas-y-polimorfismo.md)
