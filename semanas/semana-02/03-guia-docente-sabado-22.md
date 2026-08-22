# Semana 02 · Guía docente sábado 22 · Métodos, clases y objetos

**Sección:** DSY1102-012V  
**Horario:** 12:11–13:40  
**Objetivo de la sesión:** aprender métodos, parámetros, retorno, clases, objetos y una primera motivación de encapsulamiento mediante ejemplos pequeños y mini ejercicios independientes.

➡️ [Ejemplos de Semana 02](../../examples/semana-02/README.md)  
➡️ [Práctica Semana 02](../../practica/semana-02/)

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
- ejecución desde IntelliJ IDEA.

No se alcanzaron métodos ni POO.

Seguimos sin `Scanner`.

---

# Modelo didáctico

```text
explicación breve
      ↓
ejemplo mínimo aislado
      ↓
mini ejercicio
      ↓
segundo contexto
      ↓
comprobación
```

---

# Bloque 1 · 12:11–12:50 · Métodos

## 12:11–12:15 · Reactivación

```java
public class App {
    public static void main(String[] args) {
        System.out.println("Inicio");
        System.out.println("Fin");
    }
}
```

Preguntar:

- ¿dónde comienza la ejecución?
- ¿qué hace `System.out.println`?
- ¿qué elementos del código ya conocen?

No volver a enseñar fundamentos.

## 12:15–12:21 · Primer método

Usar [`01-MetodoSimple.java`](../../examples/semana-02/01-MetodoSimple.java).

```java
public static void mostrarSaludo() {
    System.out.println("Hola desde un método");
}
```

Luego:

```java
mostrarSaludo();
```

Idea central:

```text
método = comportamiento con un nombre que debe ser invocado
```

Explicar sólo:

```text
mostrarSaludo → nombre
()            → no recibe datos
void          → no entrega resultado
```

## 12:21–12:29 · Parámetros y argumentos

Usar [`02-MetodosParametrosRetorno.java`](../../examples/semana-02/02-MetodosParametrosRetorno.java).

```java
public static void mostrarNombre(String nombre) {
    System.out.println("Nombre: " + nombre);
}
```

```java
mostrarNombre("Ana");
mostrarNombre("Pedro");
```

```text
String nombre → parámetro
"Ana"         → argumento
```

## 12:29–12:36 · Retorno

```java
public static int sumar(int a, int b) {
    return a + b;
}
```

```java
int resultado = sumar(7, 5);
System.out.println(resultado);
```

Comparar:

```text
void → no entrega un resultado
int  → debe entregar un int
```

Segundo ejemplo:

```java
public static boolean esMayorDeEdad(int edad) {
    return edad >= 18;
}
```

Reforzar que `return` y `System.out.println` no son equivalentes.

## 12:36–12:46 · Mini ejercicios

### Ejercicio A

```java
public static int calcularDoble(int numero)
```

Debe retornar el doble.

### Ejercicio B

```java
public static String clasificarTemperatura(int temperatura)
```

Regla:

```text
>= 25 → "ALTA"
< 25  → "BAJA"
```

### Si terminan antes

Crear un método propio que:

- reciba al menos un parámetro;
- retorne un valor;
- tenga un propósito explicable.

## 12:46–12:50 · Cierre del bloque

```text
método
├── nombre
├── parámetros
├── argumentos al llamar
├── tipo de retorno
└── return cuando corresponde
```

Preguntas rápidas:

1. ¿Un método se ejecuta por existir?
2. ¿Qué diferencia hay entre parámetro y argumento?
3. ¿Qué diferencia hay entre imprimir y retornar?

---

# 12:50–13:01 · Pausa

No introducir contenido nuevo.

---

# Bloque 2 · 13:01–13:40 · Clases, objetos y encapsulamiento

## 13:01–13:06 · Datos relacionados

```java
String nombre = "Teclado";
double precio = 19990;
int stock = 5;
```

Segundo producto:

```java
String nombre2 = "Mouse";
double precio2 = 12990;
int stock2 = 10;
```

Preguntar:

> ¿Qué problema aparece si seguimos agregando productos de esta forma?

## 13:06–13:14 · Crear una clase

Usar [`03-ProductoBasico.java`](../../examples/semana-02/03-ProductoBasico.java).

```java
class Producto {
    String nombre;
    double precio;
    int stock;
}
```

Explicar que la clase representa un concepto del problema y agrupa estado relacionado.

## 13:14–13:22 · Crear objetos

```java
Producto producto1 = new Producto();
producto1.nombre = "Teclado";
producto1.precio = 19990;
producto1.stock = 5;
```

```java
Producto producto2 = new Producto();
producto2.nombre = "Mouse";
producto2.precio = 12990;
producto2.stock = 10;
```

```text
Producto       → clase / tipo
producto1      → referencia
new Producto() → nueva instancia
```

## 13:22–13:27 · Abstracción

Preguntar:

> ¿Un producto real tiene sólo nombre, precio y stock?

Explicar que modelar implica seleccionar las características relevantes para el problema.

Mini ejercicio oral:

> Si modeláramos una canción, ¿qué tres o cuatro datos podrían ser relevantes?

## 13:27–13:33 · Estado inválido y encapsulamiento

Provocar:

```java
producto1.stock = -100;
```

Luego introducir:

```java
private int stock;
```

Y una operación:

```java
public boolean vender(int cantidad) {
    if (cantidad <= 0 || cantidad > stock) {
        return false;
    }

    stock -= cantidad;
    return true;
}
```

Idea central:

> Encapsular no consiste solamente en escribir `private`; el objeto controla cómo puede cambiar su estado.

## 13:33–13:38 · Mini ejercicio de transferencia

Contexto: cuenta bancaria.

Estado:

```text
saldo
```

Pregunta:

> ¿Qué operación sería mejor que permitir `cuenta.saldo = -500000` directamente?

Los estudiantes deben proponer una operación como `retirar(monto)` y describir al menos una regla que debería validar.

## 13:38–13:40 · Exit ticket

1. ¿Qué diferencia hay entre clase y objeto?
2. ¿Por qué dos objetos de `Producto` pueden tener datos diferentes?
3. ¿Qué significa abstraer?
4. ¿Por qué `private` por sí solo no explica todo el encapsulamiento?
5. ¿Qué operación protege el stock del producto?

---

# Checkpoint mínimo aceptable

La clase es exitosa si los estudiantes alcanzan a comprender y practicar:

```text
método
→ parámetros/argumentos
→ retorno
→ clase
→ objeto
```

Encapsulamiento puede quedar parcialmente abierto si el ritmo requiere más tiempo.

---

# Lo que deliberadamente NO enseñamos hoy

- `Scanner`;
- arrays;
- colecciones;
- herencia;
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
- mini ejercicios realizados;
- dudas frecuentes;
- si encapsulamiento alcanzó a trabajarse;
- qué debe retomarse la siguiente sesión.
