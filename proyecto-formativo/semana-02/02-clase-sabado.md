# PetCare · Semana 02 · Clase sábado 22

**Sección:** DSY1102-012V  
**Horario:** 12:11–13:40  
**Objetivo de la sesión:** pasar desde código Java básico ya conocido hacia métodos y la primera representación orientada a objetos con `Mascota`.

> Esta guía describe cómo ejecutar la clase. El avance real debe registrarse después en la bitácora docente; no se asume que todos los pasos se alcanzarán.

---

# Punto de partida real

El martes 18 se recuperó el contenido perdido por el feriado del sábado 15. Los estudiantes ya trabajaron:

- variables y tipos primitivos;
- `String`;
- `System.out.println(...)`;
- `if`, `else if`, `else`;
- `for`;
- `while`;
- `do-while`;
- estructura básica de un programa Java;
- ejecución de programas desde IntelliJ IDEA.

No se alcanzaron métodos ni POO.

Seguimos sin usar `Scanner`: los valores permanecen definidos directamente en código.

---

# Resultado esperado de hoy

Al cerrar la sesión, idealmente el estudiante debería poder explicar esta secuencia:

```text
código dentro de main
        ↓
método
        ↓
parámetros y retorno
        ↓
datos que pertenecen al mismo concepto
        ↓
clase Mascota
        ↓
objetos Mascota
        ↓
estado protegido con private
        ↓
comportamiento que controla ese estado
```

La prioridad es comprender la transición. Si el tiempo se acorta, es preferible llegar bien hasta objetos que apresurar encapsulamiento.

---

# Bloque 1 · 12:11–12:50 · Métodos

## 12:11–12:15 · Reactivar lo visto el martes

### Docente

Abrir un programa muy parecido al trabajado el martes:

```java
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

Preguntar rápidamente:

- ¿qué tipos reconocen?
- ¿dónde comienza la ejecución?
- ¿qué hace `System.out.println`?
- ¿qué pasaría si copiamos estas cuatro líneas varias veces?

No volver a enseñar variables, ciclos ni condicionales.

### Estudiantes

Responder oralmente y reconocer elementos del código.

### Checkpoint

Todos deben poder ejecutar nuevamente el programa desde IntelliJ.

---

## 12:15–12:20 · Crear una necesidad para un método

### Docente

Duplicar deliberadamente la salida:

```java
System.out.println("Mascota: " + nombre);
System.out.println("Edad: " + edad);
System.out.println("Peso: " + peso);
System.out.println("Vacunado: " + vacunado);

System.out.println("--- segunda impresión ---");

System.out.println("Mascota: " + nombre);
System.out.println("Edad: " + edad);
System.out.println("Peso: " + peso);
System.out.println("Vacunado: " + vacunado);
```

Pregunta central:

> Si necesito hacer esto muchas veces, ¿tiene sentido copiar y pegar siempre el mismo bloque?

Introducir la idea:

> Un método permite darle nombre a una operación y reutilizarla.

Todavía no explicar toda la firma.

---

## 12:20–12:27 · Primer método `void`

Extraer el comportamiento:

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

Llamarlo desde `main`:

```java
mostrarFicha(nombre, edad, peso, vacunado);
```

### Explicar solamente

```text
mostrarFicha  → nombre del método
(...)         → datos que necesita recibir
void          → no entrega un resultado
```

Mencionar que `public static` se entenderá progresivamente; hoy no convertirlo en una clase teórica de modificadores.

### Pregunta de comprobación

> ¿El método se ejecuta por existir o porque alguien lo llama?

Respuesta esperada: porque es invocado.

---

## 12:27–12:33 · Parámetro vs argumento

Usar la llamada:

```java
mostrarFicha(nombre, edad, peso, vacunado);
```

Y compararla con la declaración:

```java
public static void mostrarFicha(
        String nombre,
        int edad,
        double peso,
        boolean vacunado
)
```

Explicar:

```text
parámetro → variable declarada por el método para recibir información
argumento → valor que entregamos cuando llamamos al método
```

Ejemplo muy explícito:

```java
mostrarFicha("Michi", 4, 5.2, true);
```

- `String nombre` es parámetro.
- `"Michi"` es argumento.

### Mini comprobación oral

Preguntar por `int edad` y `4`.

---

## 12:33–12:40 · Método que retorna un valor

Plantear una necesidad diferente:

> Ahora no quiero que el método imprima. Quiero que calcule algo y me entregue el resultado.

Crear:

```java
public static int calcularEdadFutura(int edadActual, int anios) {
    return edadActual + anios;
}
```

Usar:

```java
int edadEnTresAnios = calcularEdadFutura(edad, 3);
System.out.println("Edad futura: " + edadEnTresAnios);
```

Explicar:

```text
int     → tipo de dato que devuelve
return  → valor que sale del método
```

Comparar:

```text
void → hace algo pero no entrega un resultado
int  → debe entregar un int
```

No profundizar todavía en todos los tipos posibles.

---

## 12:40–12:47 · Hazlo tú

Los estudiantes crean:

```java
public static String obtenerEstadoVacunacion(boolean vacunado) {
    if (vacunado) {
        return "AL DÍA";
    }

    return "PENDIENTE";
}
```

O deben construirlo a partir del enunciado antes de mostrar la solución completa:

> Crear un método que reciba si una mascota está vacunada y retorne `"AL DÍA"` o `"PENDIENTE"`.

### Docente

Circular, revisar errores típicos:

- olvidar el tipo de retorno;
- olvidar `return`;
- intentar imprimir en vez de retornar;
- llamar al método con un tipo incompatible.

---

## 12:47–12:50 · Cierre del bloque

En la pizarra dejar:

```text
método
├── nombre
├── parámetros
├── argumentos al llamarlo
├── tipo de retorno
└── return si corresponde
```

Pregunta puente para después del descanso:

```java
mostrarFicha(nombre, edad, peso, vacunado);
```

> ¿Qué tienen en común esos cuatro parámetros?

Respuesta buscada:

> Todos describen la misma mascota.

---

# 12:50–13:01 · Pausa

No introducir contenido nuevo.

Dejar visible la pregunta:

> ¿Cómo podríamos representar una mascota como una sola unidad dentro del programa?

---

# Bloque 2 · 13:01–13:40 · Primera clase y objetos

## 13:01–13:05 · Volver desde el problema, no desde la definición

Mostrar nuevamente:

```java
mostrarFicha(nombre, edad, peso, vacunado);
```

Agregar hipotéticamente:

```text
especie
color
fechaNacimiento
nombrePropietario
```

Preguntar:

> ¿Vamos a seguir pasando ocho, diez o quince variables cada vez que queramos trabajar con una mascota?

Introducir:

> Esos datos pertenecen a un mismo concepto: una mascota. Java permite modelar ese concepto mediante una clase.

---

## 13:05–13:12 · Crear `Mascota`

Crear package:

```text
cl.duoc.petcare.core.model
```

Crear:

```text
Mascota.java
```

Primera versión deliberadamente simple:

```java
package cl.duoc.petcare.core.model;

public class Mascota {
    String nombre;
    int edad;
    double peso;
    boolean vacunado;
}
```

### Explicar con peras y manzanas

```text
class Mascota
→ estamos definiendo qué significa una mascota para nuestro programa

nombre, edad, peso, vacunado
→ información que tendrá cada mascota
```

No usar todavía frases como “plantilla” como única definición. Reforzar que la clase **representa un concepto del problema**.

---

## 13:12–13:18 · Crear el primer objeto

Desde `App`:

```java
Mascota mascota1 = new Mascota();
```

Explicar por partes:

```text
Mascota       → tipo
mascota1      → variable que referencia al objeto
new Mascota() → creación de una nueva instancia
```

Asignar valores:

```java
mascota1.nombre = "Michi";
mascota1.edad = 4;
mascota1.peso = 5.2;
mascota1.vacunado = true;
```

Luego mostrar algunos datos.

### Concepto clave

> La clase es `Mascota`; `mascota1` es un objeto concreto creado a partir de esa clase.

---

## 13:18–13:22 · Crear un segundo objeto

```java
Mascota mascota2 = new Mascota();
mascota2.nombre = "Luna";
mascota2.edad = 2;
mascota2.peso = 4.8;
mascota2.vacunado = false;
```

Preguntar:

- ¿tienen la misma estructura?
- ¿tienen los mismos valores?

Conclusión:

> Dos objetos pueden ser del mismo tipo y mantener estados diferentes.

---

## 13:22–13:27 · Abstracción sin definición memorizada

Preguntar:

> ¿Una mascota real tiene solamente nombre, edad, peso y estado de vacunación?

Obviamente no.

Entonces explicar:

> Para PetCare estamos seleccionando sólo las características relevantes para el problema que estamos resolviendo. Eso es parte de abstraer.

No convertirlo en una definición académica larga.

---

## 13:27–13:32 · Provocar el problema del estado expuesto

Escribir:

```java
mascota1.peso = -50;
```

Ejecutar.

Preguntar:

> ¿Java lo permite?

Sí.

> ¿Tiene sentido para nuestro dominio?

No.

Esta contradicción introduce encapsulamiento.

Cambiar progresivamente los atributos:

```java
private String nombre;
private int edad;
private double peso;
private boolean vacunado;
```

Explicar:

> `private` impide que cualquier parte del programa manipule directamente el estado interno. Pero encapsular no consiste solamente en escribir `private`.

---

## 13:32–13:36 · Proteger una regla mediante comportamiento

Crear dentro de `Mascota`:

```java
public boolean actualizarPeso(double nuevoPeso) {
    if (nuevoPeso <= 0) {
        return false;
    }

    peso = nuevoPeso;
    return true;
}
```

Desde `App`:

```java
boolean actualizado = mascota1.actualizarPeso(5.4);
System.out.println("Peso actualizado: " + actualizado);
```

Luego probar:

```java
mascota1.actualizarPeso(-50);
```

Pregunta:

> ¿Quién decide ahora si el peso puede cambiar?

Respuesta buscada:

> El propio objeto, mediante su comportamiento.

---

## 13:36–13:39 · Mini actividad de cierre

Cada estudiante agrega **una** operación sencilla:

### Opción A

```java
public void cumplirAnio() {
    edad++;
}
```

### Opción B

```java
public void marcarComoVacunada() {
    vacunado = true;
}
```

Antes de escribir, deben explicar qué estado cambia y por qué tiene sentido que esa operación pertenezca a `Mascota`.

Si el curso va más lento, esta actividad puede quedar como continuidad para casa.

---

## 13:39–13:40 · Exit ticket oral

Hacer cuatro preguntas rápidas:

1. ¿Qué diferencia hay entre parámetro y argumento?
2. ¿Qué diferencia hay entre clase y objeto?
3. ¿Por qué `peso` no debería poder modificarse libremente?
4. ¿Qué ventaja tiene `actualizarPeso()` frente a escribir directamente `mascota.peso = ...`?

No abrir un tema nuevo.

---

# Checkpoint mínimo aceptable

Si el ritmo fue más lento, la clase sigue siendo exitosa si al menos se alcanzó:

```text
métodos
→ parámetros
→ retorno
→ clase Mascota
→ crear al menos un objeto
```

Encapsulamiento puede continuarse en la siguiente sesión si fuera necesario.

---

# Checkpoint ideal de Semana 02

```text
src/
└── cl/
    └── duoc/
        └── petcare/
            ├── cli/
            │   └── App.java
            └── core/
                └── model/
                    └── Mascota.java
```

Con:

- al menos dos objetos `Mascota`;
- atributos que representan el estado;
- atributos encapsulados si se alcanzó esa etapa;
- una operación que protege una regla;
- código ejecutable desde IntelliJ;
- capacidad de explicar qué hace cada parte.

## Commit sugerido

```text
feat: introducir metodos y modelar mascota
```

---

# Lo que deliberadamente NO enseñamos hoy

No adelantar:

- `Scanner`;
- arrays o colecciones;
- herencia;
- `Perro` / `Gato` como subclases;
- interfaces;
- excepciones;
- JavaFX;
- persistencia;
- arquitectura avanzada;
- generación automática de getters/setters como receta.

---

# Registro postclase

Después de la sesión registrar en la bitácora docente:

- último paso realmente alcanzado;
- conceptos que necesitaron más tiempo;
- errores frecuentes observados;
- evidencia producida por los estudiantes;
- contenido que debe arrastrarse a la siguiente clase.

La planificación futura debe ajustarse desde ese avance real y no desde este guion ideal.