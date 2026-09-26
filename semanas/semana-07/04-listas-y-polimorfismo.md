# 04 · List y polimorfismo

Hasta ahora podemos crear animales individuales. Ahora necesitamos administrar varios.

## Nueva responsabilidad

Creamos:

~~~text
Veterinaria
└── List<Animal>
~~~

Veterinaria administra los animales registrados.

## ¿Por qué List<Animal>?

Porque todos los tipos concretos son subtipos de Animal.

~~~java
List<Animal> animales = new ArrayList<>();
~~~

La misma lista puede contener Perro, Gato y Ave.

## Recorrido polimórfico

~~~java
for (Animal animal : animales) {
    animal.emitirSonido();
}
~~~

No necesitamos preguntar si el objeto es Perro, Gato o Ave para decidir qué sonido ejecutar.

El tipo real del objeto determina qué implementación se ejecuta.

## Operaciones esperadas

Veterinaria debe poder:

- agregar un animal;
- listar animales;
- buscar por nombre;
- hacer que todos emitan su sonido.

## Conocimiento que debes adquirir

Debes poder explicar:

- por qué la lista usa el tipo padre;
- cómo puede contener distintos subtipos;
- cómo funciona el polimorfismo al recorrerla;
- por qué la administración de animales pertenece a Veterinaria y no a Main.

## Avance consolidado esperado

Al finalizar esta etapa ya deberías tener Veterinaria.java con una List<Animal> y métodos para administrar el conjunto.

Todavía no necesitamos terminar el menú.

➡️ [Siguiente: Main, menú y excepciones](./05-main-menu-y-excepciones.md)
