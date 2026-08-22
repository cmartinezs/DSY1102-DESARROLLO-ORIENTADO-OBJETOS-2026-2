# PetCare · Semana 02 · Clase martes 18

## Registro real de la sesión

La sesión se utilizó principalmente para **recuperar el contenido que debía trabajarse el sábado 15 de agosto**, suspendido por feriado.

### Contenidos efectivamente trabajados

- variables y tipos primitivos;
- `String`;
- salida por consola con `System.out.println(...)`;
- estructuras condicionales `if`, `else if` y `else`;
- ciclos `for`, `while` y `do-while`;
- estructura básica de un programa Java;
- ejecución de ejemplos desde IntelliJ IDEA;
- ejemplos básicos para comprender cómo ejecutar un programa y observar su salida.

### Decisiones de avance

- todavía no se utilizó `Scanner`;
- no se alcanzó a introducir métodos como contenido formal;
- no se introdujeron todavía clases ni encapsulamiento;
- la recuperación de fundamentos pendiente por el feriado se considera realizada;
- el sábado 22 se puede comenzar directamente con métodos y avanzar hacia clases, objetos y encapsulamiento.

---

## Partimos con

Todavía no existe una clase `Mascota` propia.

Vamos a representar una mascota con variables simples dentro de `main`.

```java
String nombre = "Michi";
int edad = 4;
double peso = 5.2;
boolean vacunado = true;
```

El objetivo de hoy no es adelantarnos a POO, sino usar PetCare para recuperar Java básico y preparar una necesidad real de métodos/clases.

---

# Hoy aprendemos / reforzamos

- estructura básica `class` + `main`;
- tipos y variables;
- operadores aritméticos;
- operadores relacionales;
- operadores lógicos;
- `if` / `else`;
- ciclos;
- primer método si el ritmo permite.

No usamos `Scanner` todavía.

---

# Ruta de la clase

## Paso 1 · Crear el proyecto

En IntelliJ crear un proyecto Java llamado, por ejemplo:

```text
petcare-carlos-perez
```

Crear inicialmente el paquete:

```text
cl.duoc.petcare.cli
```

Y dentro:

```text
App.java
```

> Hoy `App` contendrá casi todo porque todavía estamos consolidando Java básico. Más adelante iremos moviendo responsabilidades cuando sepamos cómo hacerlo.

Código inicial:

```java
package cl.duoc.petcare.cli;

public class App {
    public static void main(String[] args) {
        String nombre = "Michi";
        int edad = 4;
        double peso = 5.2;
        boolean vacunado = true;

        System.out.println("Mascota: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Peso: " + peso);
        System.out.println("Vacunado: " + vacunado);
    }
}
```

## Comprueba

Cambia cada valor y predice la salida antes de ejecutar.

---

# Paso 2 · Operadores

Agregar cálculos simples.

```java
int edadProximoAnio = edad + 1;
double pesoDespuesControl = peso - 0.2;
```

Mostrar los resultados.

### Hazlo tú

Calcula cuánto pesaría la mascota si aumenta un 10%.

Primero intenta escribir la expresión sin buscar una solución completa.

---

# Paso 3 · Comparaciones

Queremos saber si el peso supera un valor de referencia.

```java
boolean pesoAlto = peso > 8.0;
```

Prueba también:

```java
peso >= 5.0
edad == 4
vacunado == true
```

Discute por qué normalmente basta escribir:

```java
if (vacunado) {
    ...
}
```

en vez de:

```java
if (vacunado == true) {
    ...
}
```

---

# Paso 4 · Operadores lógicos

Ejemplo:

```java
boolean requiereAtencion = peso > 8.0 || !vacunado;
```

Analizar:

- `&&`;
- `||`;
- `!`.

### Hazlo tú

Crear una condición que sea verdadera solo si:

```text
la mascota tiene más de 7 años
Y
no está vacunada
```

---

# Paso 5 · Primera decisión

Forma explícita:

```java
if (requiereAtencion) {
    System.out.println("Requiere revisión");
} else {
    System.out.println("Sin alerta básica");
}
```

### Prueba

Modifica los valores para provocar ambas ramas.

No basta con que compile: debes demostrar que ambos caminos pueden ejecutarse.

---

# Paso 6 · Clasificación sencilla

Podemos utilizar varias condiciones:

```java
if (edad < 2) {
    System.out.println("Etapa: joven");
} else if (edad < 8) {
    System.out.println("Etapa: adulta");
} else {
    System.out.println("Etapa: senior");
}
```

### Discusión

Estas reglas son deliberadamente simples para practicar flujo de control. No representan una recomendación veterinaria real.

---

# Paso 7 · Repetición

Supongamos que queremos simular tres años:

```java
for (int anio = 1; anio <= 3; anio++) {
    System.out.println("Año simulado: " + anio);
}
```

Luego incorporar la edad proyectada:

```java
for (int anio = 1; anio <= 3; anio++) {
    System.out.println("En " + anio + " año(s) tendrá " + (edad + anio));
}
```

### Comparar

Preguntar cuándo tendría sentido `while` en vez de `for`.

No es necesario inventar un menú interactivo todavía.

---

# Paso 8 · Aparece repetición de código

Si varias veces necesitamos mostrar la ficha completa, copiar todos los `println` empieza a ser incómodo.

Primero observar el problema.

Luego, **solo si el ritmo de la clase permite introducir métodos hoy**, extraer:

```java
public static void mostrarFicha(
        String nombre,
        int edad,
        double peso,
        boolean vacunado
) {
    System.out.println("Mascota: " + nombre);
    System.out.println("Edad: " + edad);
    System.out.println("Peso: " + peso);
    System.out.println("Vacunado: " + vacunado);
}
```

Llamar desde `main`:

```java
mostrarFicha(nombre, edad, peso, vacunado);
```

## Pregunta para dejar abierta

La llamada tiene cuatro parámetros que siempre pertenecen a la misma mascota:

```java
mostrarFicha(nombre, edad, peso, vacunado);
```

¿Qué ocurriría si mañana agregamos:

```text
especie
color
fecha de nacimiento
propietario
```

No resolvemos todavía esa pregunta.

---

# Hazlo tú · 10–15 minutos

Agrega una regla simple que clasifique el estado de vacunación:

```text
vacunado → "al día"
no vacunado → "pendiente"
```

Luego agrega una proyección de edad usando un ciclo.

Si ya alcanzamos métodos, integra esa información en `mostrarFicha(...)`.

Debes poder explicar cada línea que agregaste.

---

# Checkpoint de salida de hoy

El programa debe tener, según el avance real:

- datos simples de una mascota;
- operadores;
- al menos una condición;
- al menos un ciclo;
- salida legible;
- opcionalmente primer método si se alcanzó a enseñar.

## Commit sugerido

```text
feat: iniciar petcare con fundamentos java
```

---

# Próxima clase

El sábado retomaremos **exactamente este código**.

El problema de entrada será:

> Tenemos varios datos y comportamientos que describen una misma cosa. ¿Cómo puede Java representar ese concepto como una unidad?

Ahí comenzaremos métodos, clases, objetos, abstracción y encapsulamiento según el avance real.
