# PetCare · Semana 02 · Clase sábado 22

## Partimos con

El checkpoint del martes contiene una mascota representada con variables simples y lógica dentro de `App`.

Ejemplo conceptual:

```java
String nombre = "Michi";
int edad = 4;
double peso = 5.2;
boolean vacunado = true;
```

Y posiblemente un método como:

```java
mostrarFicha(nombre, edad, peso, vacunado);
```

Hoy aparece una incomodidad evidente:

> Todos esos datos pertenecen a una misma mascota, pero Java todavía los está recibiendo como elementos separados.

---

# Hoy aprendemos

- métodos;
- firma;
- parámetros y argumentos;
- retorno;
- clases;
- objetos;
- abstracción;
- encapsulamiento;
- `private`;
- comportamiento que protege estado.

---

# Paso 1 · Consolidar métodos

Antes de crear clases, revisar un método completo.

```java
public static String obtenerEstadoVacunacion(boolean vacunado) {
    if (vacunado) {
        return "AL DÍA";
    }

    return "PENDIENTE";
}
```

Identificar:

```text
public static
String
obtenerEstadoVacunacion
(boolean vacunado)
return
```

### Hazlo tú

Crear un método:

```java
calcularEdadFutura(int edadActual, int anios)
```

que retorne la edad proyectada.

---

# Paso 2 · El problema de los parámetros relacionados

Observar:

```java
mostrarFicha(nombre, edad, peso, vacunado);
```

Los cuatro valores describen el mismo concepto.

Si agregamos más atributos, la firma crece.

Pregunta:

> ¿Podríamos representar una mascota como una sola unidad dentro del programa?

---

# Paso 3 · Crear la primera clase del dominio

Crear el package:

```text
cl.duoc.petcare.core.model
```

Crear:

```text
Mascota.java
```

Primera versión explícita:

```java
package cl.duoc.petcare.core.model;

public class Mascota {
    String nombre;
    int edad;
    double peso;
    boolean vacunado;
}
```

No aplicar `private` automáticamente todavía. Primero comprender que la clase agrupa estado relacionado.

---

# Paso 4 · Crear objetos

Desde `App`:

```java
Mascota mascota1 = new Mascota();
```

Explicar:

```text
Mascota      → tipo/clase
mascota1     → variable de referencia
new Mascota()→ creación del objeto
```

Asignar datos según la etapa de la explicación.

Luego crear una segunda instancia y observar que ambas comparten estructura, pero no necesariamente estado.

---

# Paso 5 · Constructor si corresponde al contenido

Cuando tenga sentido en la explicación, evolucionar hacia un constructor:

```java
public Mascota(String nombre, int edad, double peso, boolean vacunado) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.vacunado = vacunado;
}
```

Comparar:

```text
crear objeto vacío + asignar después
vs
crear objeto con estado inicial coherente
```

---

# Paso 6 · El problema del estado expuesto

Si cualquiera puede escribir:

```java
mascota1.peso = -50;
```

el objeto puede quedar en un estado absurdo.

Ahí aparece el motivo de encapsular.

Cambiar progresivamente:

```java
private String nombre;
private int edad;
private double peso;
private boolean vacunado;
```

La palabra `private` no es el objetivo. El objetivo es impedir cambios que rompan reglas del objeto.

---

# Paso 7 · Proteger una regla mediante comportamiento

Crear un método:

```java
public boolean actualizarPeso(double nuevoPeso) {
    if (nuevoPeso <= 0) {
        return false;
    }

    peso = nuevoPeso;
    return true;
}
```

Ahora `App` no modifica directamente el atributo.

```java
boolean actualizado = mascota1.actualizarPeso(5.4);
```

### Comparar

```text
setter automático
vs
operación con una regla válida
```

Un setter puede ser apropiado en algunos casos, pero no reemplaza pensar qué estados son válidos.

---

# Paso 8 · Obtener información sin acoplar el dominio a consola

Podríamos crear:

```java
public void mostrarFicha() {
    System.out.println(...);
}
```

Eso funciona hoy, pero deja a `Mascota` dependiendo de la consola.

Como más adelante PetCare tendrá JavaFX, preferiremos cuando sea razonable que el dominio **entregue información** y que la interfaz decida cómo mostrarla.

Una primera opción sencilla:

```java
public String obtenerFicha() {
    return "Mascota: " + nombre
            + " | Edad: " + edad
            + " | Peso: " + peso
            + " | Vacunado: " + vacunado;
}
```

Y desde la CLI:

```java
System.out.println(mascota1.obtenerFicha());
```

No hace falta hablar todavía de arquitectura avanzada. Solo observar:

```text
Mascota construye/entrega información
App decide mostrarla por consola
```

---

# Paso 9 · Separación mínima de packages

Al cierre de la clase buscamos una estructura como:

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

Interpretación sencilla:

```text
cli
→ cómo interactuamos hoy con el usuario

core/model
→ qué conceptos existen en PetCare
```

Esta separación se conservará durante el semestre.

---

# Hazlo tú · 15–20 minutos

Agregar una operación de dominio que tenga una regla real del programa.

Opciones:

### A

```text
cumplirAnio()
```

incrementa la edad de forma controlada.

### B

```text
marcarComoVacunada()
```

cambia el estado solo en la dirección necesaria.

### C

Crear una regla sencilla propia y justificarla.

No agregar herencia ni listas todavía.

---

# Comprueba

Desde `App`:

1. crear al menos dos mascotas;
2. mostrar su información;
3. intentar actualizar un peso válido;
4. intentar actualizar un peso inválido;
5. comprobar que el objeto no queda con peso negativo;
6. ejecutar la operación agregada por el alumno.

---

# Checkpoint Semana 02

Debe quedar:

```text
PetCare
├── cli/App.java
└── core/model/Mascota.java
```

Con:

- al menos dos objetos;
- atributos encapsulados;
- constructor si fue abordado;
- una regla de actualización protegida;
- información recuperable desde la CLI;
- código ejecutable.

## Commit sugerido

```text
feat: modelar mascota y separar core de cli
```

---

# Qué dejamos abierto

Tenemos más de una mascota, pero todavía debemos crear variables distintas para cada una.

Además, distintos tipos de mascota podrían compartir cosas y diferir en otras.

Esos problemas serán útiles cuando el contenido de las siguientes semanas introduzca nuevas herramientas.
