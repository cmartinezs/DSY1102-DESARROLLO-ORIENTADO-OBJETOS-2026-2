# De variables sueltas a un concepto

Al comenzar PetCare podemos representar una mascota con variables independientes:

```java
String nombre = "Michi";
int edad = 4;
double peso = 5.2;
boolean vacunado = true;
```

Esto funciona, pero aparece una pregunta de diseño:

> ¿Estos datos son realmente independientes?

No. Todos describen a la misma mascota.

## Señal de agrupación

Cuando varias variables:

- viajan juntas;
- se imprimen juntas;
- se validan juntas;
- se pasan repetidamente a los mismos métodos;
- representan un mismo concepto del problema;

es razonable preguntarse si pertenecen a una clase.

Antes:

```text
nombre
edad
peso
vacunado
```

Después:

```text
Mascota
├── nombre
├── edad
├── peso
└── vacunado
```

## El beneficio no es solo escribir menos

Agrupar datos permite expresar significado.

```java
Mascota mascota;
```

transmite más intención que mantener cuatro valores desconectados.

La clase comienza a representar una idea del dominio.

## Pregunta útil

Cuando veas muchas variables relacionadas, pregunta:

> ¿Qué concepto del problema describen en conjunto?

Esa pregunta suele ser una buena puerta de entrada a POO.
