# 02 · Clases abstractas y comportamiento obligatorio

## Punto de partida

Tenemos una jerarquía:

~~~text
Animal
├── Perro
├── Gato
└── Ave
~~~

Los tipos concretos comparten nombre y edad.

## La pregunta importante

¿Tiene sentido crear directamente un Animal?

~~~java
new Animal(...)
~~~

En este dominio, no. Animal representa una categoría general, no un animal concreto.

Por eso:

~~~java
public abstract class Animal
~~~

## Qué puede tener una clase abstracta

Una clase abstracta puede contener:

- atributos;
- constructores;
- getters y setters;
- métodos implementados;
- métodos abstractos.

Lo que no puede hacerse es instanciarla directamente.

## Método abstracto

Todos los animales deben emitir un sonido, pero Animal no puede definir uno válido para todos.

~~~java
public abstract void emitirSonido();
~~~

Cada subtipo implementa su comportamiento mediante Override.

## Conocimiento que debes adquirir

Debes poder distinguir:

- comportamiento común que puede implementarse una sola vez;
- comportamiento obligatorio cuya implementación depende del subtipo;
- clase generalizable versus clase concreta.

## Avance consolidado esperado

Al finalizar esta etapa, el proyecto debería tener al menos:

~~~text
Animal.java
Perro.java
Gato.java
Ave.java
~~~

Y debe cumplirse:

- Animal es abstracta;
- contiene los atributos comunes;
- posee constructor;
- declara emitirSonido() como abstracto;
- cada subtipo usa extends Animal;
- cada subtipo sobrescribe emitirSonido();
- los constructores de los subtipos utilizan super(...).

➡️ [Siguiente: interfaces y capacidades](./03-interfaces.md)
