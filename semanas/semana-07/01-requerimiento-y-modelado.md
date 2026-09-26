# 01 · Requerimiento y modelado inicial

**Proyecto:** Veterinaria Console  
**Objetivo:** comprender el problema antes de programar.

## Requerimiento

Una veterinaria necesita una aplicación de consola para registrar distintos tipos de animales.

Todos los animales poseen nombre y edad. Cada tipo emite un sonido diferente. Algunos animales pueden ser vacunados y otros no.

La aplicación debe permitir:

1. registrar animales;
2. listar los registrados;
3. hacer que todos emitan su sonido;
4. buscar por nombre;
5. vacunar cuando corresponda;
6. controlar entradas inválidas;
7. continuar funcionando hasta que el usuario decida salir.

## Antes de escribir código

Responder:

- ¿qué entidades existen?
- ¿qué información comparten?
- ¿qué comportamiento cambia según el subtipo?
- ¿qué capacidad no representa una relación de herencia?
- ¿quién debería administrar la lista?
- ¿qué responsabilidad debería quedar en Main?

## Estructura objetivo

~~~text
proyecto-integracion-ea1/
└── src/
    └── cl/duoc/dsy1102/integracion/
        ├── Animal.java
        ├── Vacunable.java
        ├── Perro.java
        ├── Gato.java
        ├── Ave.java
        ├── Veterinaria.java
        └── Main.java
~~~

Todos los archivos utilizan el package:

~~~java
package cl.duoc.dsy1102.integracion;
~~~

## Avance consolidado esperado

Al cerrar esta etapa debes tener claro el diseño general, sin necesidad de implementar todavía el menú completo.

Debes poder justificar:

- qué clases existirán;
- qué responsabilidad tendrá cada una;
- qué información pertenece a Animal;
- por qué Veterinaria administrará múltiples animales;
- por qué Main será la capa de interacción.

➡️ [Siguiente: clases abstractas y comportamiento obligatorio](./02-clases-abstractas.md)
