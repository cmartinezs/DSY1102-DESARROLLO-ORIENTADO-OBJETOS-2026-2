# Semana 02 · Clase sábado 22 · Métodos, clases y primer checkpoint PetCare

**Sección:** DSY1102-012V  
**Horario:** 12:11–13:40  
**Objetivo de la sesión:** aprender métodos, parámetros, retorno, clase y objeto mediante ejemplos pequeños; luego iniciar formalmente PetCare y aplicar esos conceptos al primer checkpoint del proyecto transversal.

> **Decisión didáctica:** PetCare no será el ejemplo de todo. Primero se aprende el concepto en ejemplos aislados y después se integra al proyecto.

➡️ [Ejemplos aislados de Semana 02](../../examples/semana-02/README.md)  
➡️ [Inicio formal de PetCare](./00-inicio-petcare.md)

---

# Punto de partida real

El martes 18 se recuperó el contenido perdido por el feriado del sábado 15. Los estudiantes trabajaron:

- variables y tipos primitivos;
- `String`;
- `System.out.println(...)`;
- `if`, `else if`, `else`;
- `for`;
- `while`;
- `do-while`;
- estructura básica de un programa Java;
- ejecución desde IntelliJ IDEA.

No se alcanzaron métodos ni POO.

**PetCare tampoco se considera iniciado el martes.** Esa sesión entrega los prerrequisitos técnicos para poder comenzarlo hoy.

Seguimos sin `Scanner`.

---

# Estrategia de la clase

Hoy repetiremos esta estructura:

```text
EJEMPLO SUELTO
      ↓
CONCEPTO
      ↓
SEGUNDO CONTEXTO
      ↓
APLICACIÓN EN PETCARE
```

La meta es que el alumno no asocie:

```text
método = PetCare
clase = Mascota
objeto = mascota
```

sino que comprenda que son herramientas generales.

---

# Bloque 1 · 12:11–12:50 · Métodos y primera clase con ejemplos sueltos

## 12:11–12:15 · Reactivación

### Docente

Crear o abrir un proyecto Java sencillo en IntelliJ.

Código mínimo:

```java
public class App {
    public static void main(String[] args) {
        System.out.println("Inicio");
        System.out.println("Fin");
    }
}
```

Preguntar:

- ¿dónde empieza la ejecución?
- ¿qué hace `System.out.println`?
- ¿qué elementos del código ya conocen?

No volver a enseñar fundamentos.

---

## 12:15–12:20 · Ejemplo suelto 1: primer método

Usar:

➡️ [`01-MetodoSimple.java`](../../examples/semana-02/01-MetodoSimple.java)

Escribir primero sólo:

```java
public static void mostrarSaludo() {
    System.out.println("Hola desde un método");
}
```

Preguntar:

> ¿Se ejecuta porque existe?

Luego llamarlo:

```java
mostrarSaludo();
```

Idea central:

```text
método = bloque de comportamiento con un nombre
```

Explicar únicamente:

```text
mostrarSaludo → nombre
()            → no recibe datos
void          → no retorna un resultado
```

`public static` se usa, pero no se transforma todavía en una clase teórica de modificadores.

---

## 12:20–12:30 · Ejemplo suelto 2: parámetros, argumentos y retorno

Usar:

➡️ [`02-MetodosParametrosRetorno.java`](../../examples/semana-02/02-MetodosParametrosRetorno.java)

### A. Parámetro

```java
public static void mostrarNombre(String nombre) {
    System.out.println("Nombre: " + nombre);
}
```

Llamar:

```java
mostrarNombre("Ana");
```

Dejar escrito:

```text
String nombre → parámetro
"Ana"         → argumento
```

### B. Retorno

```java
public static int sumar(int a, int b) {
    return a + b;
}
```

Uso:

```java
int resultado = sumar(7, 5);
System.out.println(resultado);
```

Comparar:

```text
void → no entrega resultado
int  → debe retornar un int
```

Luego mostrar brevemente otro tipo:

```java
public static boolean esMayorDeEdad(int edad) {
    return edad >= 18;
}
```

La intención es demostrar que el patrón es general.

---

## 12:30–12:38 · Hazlo tú: métodos sin PetCare

Plantear dos ejercicios pequeños.

### Ejercicio A

Crear:

```java
public static int calcularDoble(int numero)
```

Debe retornar el doble.

### Ejercicio B

Crear:

```java
public static String clasificarTemperatura(int temperatura)
```

Regla deliberadamente sencilla:

```text
>= 25 → "ALTA"
< 25  → "BAJA"
```

### Qué revisar

- distingue parámetro de argumento;
- no confunde `return` con `System.out.println`;
- llama efectivamente al método;
- el tipo retornado coincide con la firma.

---

## 12:38–12:47 · Ejemplo suelto 3: clase y objetos

Usar:

➡️ [`03-ProductoBasico.java`](../../examples/semana-02/03-ProductoBasico.java)

Primero crear:

```java
class Producto {
    String nombre;
    double precio;
}
```

Preguntar:

> ¿Qué estamos representando?

Respuesta esperada: un producto como concepto del problema.

Crear:

```java
Producto producto1 = new Producto();
producto1.nombre = "Teclado";
producto1.precio = 19990;
```

Luego:

```java
Producto producto2 = new Producto();
producto2.nombre = "Mouse";
producto2.precio = 12990;
```

Explicar:

```text
Producto       → clase / tipo
producto1      → referencia a un objeto
new Producto() → creación de una instancia
```

Preguntar:

- ¿producto1 y producto2 tienen la misma estructura?
- ¿tienen los mismos datos?

Conclusión:

> Dos objetos de la misma clase pueden mantener estados distintos.

Todavía no introducir `private` ni constructor si eso distrae.

---

## 12:47–12:50 · Puente hacia PetCare

Preguntar:

> Si pudimos representar un `Producto` como una unidad, ¿qué otro concepto podríamos representar de esa forma?

Mostrar solamente:

```text
Mascota
- nombre
- edad
- peso
- vacunado
```

Explicar:

> Después del descanso vamos a iniciar el proyecto de semestre y aplicaremos lo que acabamos de aprender.

---

# 12:50–13:01 · Pausa

No agregar contenido.

---

# Bloque 2 · 13:01–13:40 · Inicio formal de PetCare

## 13:01–13:06 · Crear PetCare desde cero

Este es el **inicio formal del proyecto transversal**.

Cada estudiante crea un proyecto Java llamado:

```text
petcare
```

Usar el package definido por el estándar del curso, incorporando el usuario institucional cuando corresponda. Ejemplo conceptual:

```text
cl.duoc.<usuario>.petcare
```

Crear `App.java`.

Primera versión:

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

Importante:

> Aquí no se enseña nada nuevo. Estamos creando la versión 0 del proyecto sólo con herramientas que ya conocen.

### Primer commit sugerido

```text
feat: iniciar proyecto formativo petcare
```

---

## 13:06–13:12 · Aplicar métodos a PetCare

Ahora sí reutilizar lo aprendido.

Plantear:

> Quiero obtener un texto que represente el estado de vacunación.

Los estudiantes intentan construir:

```java
public static String obtenerEstadoVacunacion(boolean vacunado) {
    if (vacunado) {
        return "AL DÍA";
    }

    return "PENDIENTE";
}
```

Usarlo desde `main`:

```java
String estado = obtenerEstadoVacunacion(vacunado);
System.out.println("Vacunación: " + estado);
```

Hacer que identifiquen:

```text
boolean vacunado → parámetro
vacunado         → argumento
String           → tipo retornado
return           → valor entregado
```

---

## 13:12–13:18 · Detectar que los datos pertenecen al mismo concepto

Mostrar:

```java
String nombre = "Michi";
int edad = 4;
double peso = 5.2;
boolean vacunado = true;
```

Preguntar:

> ¿Estos cuatro datos están relacionados o son cuatro cosas independientes?

Respuesta esperada:

> Describen la misma mascota.

Recordar el ejemplo anterior:

```text
Producto
→ nombre + precio

Mascota
→ nombre + edad + peso + vacunado
```

Ahora la clase no aparece por magia: aparece porque ya reconocieron un concepto.

---

## 13:18–13:25 · Crear la primera clase `Mascota`

Crear inicialmente:

```java
public class Mascota {
    String nombre;
    int edad;
    double peso;
    boolean vacunado;
}
```

Crear un objeto:

```java
Mascota mascota1 = new Mascota();
mascota1.nombre = "Michi";
mascota1.edad = 4;
mascota1.peso = 5.2;
mascota1.vacunado = true;
```

Crear un segundo si el ritmo lo permite.

Preguntar:

> ¿Qué cambió respecto de tener cuatro variables sueltas?

Idea buscada:

> Ahora los datos relacionados pertenecen a una unidad conceptual.

### Abstracción

Preguntar:

> ¿Una mascota real sólo tiene cuatro características?

No.

Explicar:

> Para nuestro programa elegimos sólo las características que hoy son relevantes. Eso es parte de abstraer.

---

## 13:25–13:32 · Provocar la necesidad de encapsulamiento

Escribir intencionalmente:

```java
mascota1.peso = -50;
```

Preguntar:

> ¿Compila?

Sí.

> ¿Es un estado válido para nuestro programa?

No.

Entonces introducir:

```java
private double peso;
```

Y una operación:

```java
public boolean actualizarPeso(double nuevoPeso) {
    if (nuevoPeso <= 0) {
        return false;
    }

    peso = nuevoPeso;
    return true;
}
```

Concepto clave:

> Encapsular no es simplemente escribir `private`; es controlar cómo puede cambiar el estado del objeto.

No generar getters/setters de todo como receta.

---

## 13:32–13:37 · Hazlo tú en PetCare

Cada estudiante agrega **una** operación.

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

Antes de escribir deben responder:

> ¿Qué estado cambia y por qué tiene sentido que la operación pertenezca a `Mascota`?

---

## 13:37–13:39 · Checkpoint PetCare 0.1

Checkpoint mínimo, según avance real:

```text
petcare/
└── src/
    ├── App.java
    └── Mascota.java      // si se alcanzó clase/objeto
```

Si ya se trabajaron packages:

```text
src/
└── cl/
    └── duoc/
        └── <usuario>/
            └── petcare/
                ├── App.java
                └── Mascota.java
```

No introducir hoy una estructura arquitectónica más profunda si todavía no aporta al aprendizaje.

### Commit sugerido

```text
feat: modelar primera mascota
```

---

## 13:39–13:40 · Exit ticket

Preguntar rápidamente:

1. ¿Qué diferencia hay entre parámetro y argumento?
2. ¿Qué diferencia hay entre `void` y un método que retorna un valor?
3. ¿Qué diferencia hay entre clase y objeto?
4. ¿Por qué PetCare comenzó después de los ejemplos y no antes?
5. ¿Por qué `peso = -50` nos llevó a hablar de encapsulamiento?

---

# Checkpoint mínimo aceptable de la clase

La clase sigue siendo exitosa si se llega bien hasta:

```text
métodos
→ parámetros
→ retorno
→ clase Producto
→ objetos Producto
→ crear PetCare versión 0
```

Si `Mascota` o encapsulamiento no alcanzan, se continúan en la próxima sesión.

No sacrificar comprensión para completar la lista de contenidos.

---

# Checkpoint ideal

```text
ejemplos sueltos comprendidos
        ↓
PetCare creado
        ↓
método aplicado al proyecto
        ↓
clase Mascota
        ↓
al menos un objeto
        ↓
primera regla encapsulada
```

---

# Lo que deliberadamente NO enseñamos hoy

No adelantar:

- `Scanner`;
- arrays;
- `ArrayList`;
- colecciones;
- herencia;
- `Perro` / `Gato`;
- interfaces;
- excepciones;
- JavaFX;
- persistencia;
- JDBC;
- arquitectura avanzada;
- getters/setters automáticos como receta.

---

# Registro postclase

Después de la sesión registrar en la bitácora docente:

- último concepto realmente alcanzado;
- si PetCare quedó creado por la mayoría;
- checkpoint efectivo;
- dudas frecuentes;
- desviaciones respecto de esta guía;
- qué debe retomarse en la próxima sesión.

> La guía define la intención docente. La bitácora define lo que realmente ocurrió.
