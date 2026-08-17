# Guía · Recuperación Semana 01 y puente a POO con PetCare

Esta guía existe porque el feriado del sábado 15 de agosto dejó contenido pendiente. La prioridad es **no saltarse fundamentos de Java** para llegar artificialmente a clases y encapsulamiento.

Desde esta semana utilizaremos **PetCare** como actividad formativa transversal. La idea es que el mismo código evolucione clase a clase en vez de resolver ejercicios desconectados.

## A. Lo atrasado de Semana 01

### Tipos y variables

Comenzamos representando una mascota con variables simples:

```java
String nombre = "Michi";
int edad = 4;
double peso = 5.2;
boolean vacunado = true;
```

### Operadores

```java
int edadProximoAnio = edad + 1;
boolean pesoRegistrado = peso > 0;
boolean requiereRevision = !vacunado || peso <= 0;
```

### Condicionales

```java
if (peso <= 0) {
    System.out.println("Peso inválido");
} else {
    System.out.println("Peso registrado correctamente");
}
```

También podemos trabajar decisiones encadenadas:

```java
if (edad < 1) {
    System.out.println("Etapa inicial");
} else if (edad < 8) {
    System.out.println("Etapa adulta");
} else {
    System.out.println("Etapa senior");
}
```

### Ciclos

```java
for (int i = 1; i <= 3; i++) {
    System.out.println("En " + i + " año(s): " + (edad + i));
}
```

```java
int contador = 1;
while (contador <= 3) {
    System.out.println("Control " + contador);
    contador++;
}
```

> Por ahora se mantienen valores definidos directamente en código. **Todavía no usamos `Scanner`.**

## B. ¿Por qué aparecen los métodos?

A medida que PetCare crece, comienzan a aparecer bloques de código que queremos nombrar y reutilizar.

Por ejemplo, mostrar una ficha:

```java
System.out.println("Nombre: " + nombre);
System.out.println("Edad: " + edad);
System.out.println("Peso: " + peso);
System.out.println("Vacunado: " + vacunado);
```

Podemos extraer ese comportamiento:

```java
public static void mostrarFicha(String nombre, int edad, double peso, boolean vacunado) {
    System.out.println("Nombre: " + nombre);
    System.out.println("Edad: " + edad);
    System.out.println("Peso: " + peso);
    System.out.println("Vacunado: " + vacunado);
}
```

Un método permite dar nombre a una operación, reutilizarla y separar responsabilidades.

También podemos extraer una regla:

```java
public static boolean pesoValido(double peso) {
    return peso > 0;
}
```

## C. Función conocida vs método en Java

Los estudiantes vienen de Fundamentos de Programación. El puente conceptual es:

```text
función conocida → método Java
entrada          → parámetros
resultado        → return
tipo del resultado → tipo de retorno
```

## D. De datos sueltos a un objeto

Hasta ahora PetCare podría tener:

```java
String nombre = "Michi";
int edad = 4;
double peso = 5.2;
boolean vacunado = true;
```

Pregunta clave:

> **¿estos datos representan juntos un mismo concepto?**

Sí: todos describen una mascota.

Entonces comienza a aparecer una clase:

```java
public class Mascota {
    private String nombre;
    private int edad;
    private double peso;
    private boolean vacunado;
}
```

Una clase no es solo “un archivo con atributos”: representa un concepto y define qué estado y comportamientos le pertenecen.

## E. Encapsulamiento con propósito

Mal aprendizaje:

> “Los atributos son `private` porque el profesor dijo que deben ser `private`.”

Aprendizaje esperado:

> “El estado interno se protege para que el objeto controle qué cambios son válidos.”

Por ejemplo, permitir esto sería problemático:

```java
mascota.peso = -5;
```

En cambio, el objeto podría controlar la modificación:

```java
public void actualizarPeso(double nuevoPeso) {
    if (nuevoPeso > 0) {
        peso = nuevoPeso;
    }
}
```

Es mejor pedirle a la mascota que actualice su peso mediante una operación válida que permitir que cualquier parte del programa deje el objeto en un estado imposible.

## F. Evolución que queremos observar

Durante esta semana PetCare debería recorrer esta secuencia:

```text
variables sueltas
    ↓
condiciones y ciclos
    ↓
métodos
    ↓
clase Mascota
    ↓
objetos Mascota
    ↓
estado encapsulado
```

No agregamos todavía herencia, listas, interfaces ni excepciones. Esos conceptos aparecerán cuando exista una necesidad concreta en la evolución del mismo proyecto.

## Preguntas de comprobación

1. ¿Qué diferencia existe entre parámetro y argumento?
2. ¿Cuándo un método debería retornar un valor?
3. ¿Qué problema aparece si todo queda dentro de `main`?
4. ¿Por qué `nombre`, `edad`, `peso` y `vacunado` pueden pertenecer a `Mascota`?
5. ¿Qué estado inválido evita `actualizarPeso()`?
6. ¿Por qué un setter irrestricto puede romper el encapsulamiento?

## Continuidad

El código resultante no es desechable. Debe conservarse porque en la siguiente experiencia de aprendizaje PetCare evolucionará sobre esta misma clase `Mascota`.