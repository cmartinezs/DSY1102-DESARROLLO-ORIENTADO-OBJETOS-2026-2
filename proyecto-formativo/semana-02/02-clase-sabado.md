# Semana 02 · Clase sábado 22 · Métodos, clases y objetos

**Sección:** DSY1102-012V  
**Horario:** 12:11–13:40  
**Objetivo de la sesión:** aprender métodos, parámetros, retorno, clases, objetos y una primera motivación de encapsulamiento mediante ejemplos pequeños y mini ejercicios independientes.

> **Regla de esta clase:** PetCare no se desarrolla paso a paso aquí. La sesión enseña herramientas generales; PetCare corre por una pista individual paralela y utiliza después lo aprendido.

➡️ [Ejemplos aislados de Semana 02](../../examples/semana-02/README.md)  
➡️ [Práctica Semana 02](../../practica/semana-02/)  
➡️ [Consigna individual PetCare · Semana 02](./README.md)

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

Para los conceptos nuevos se utiliza esta secuencia:

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

Después de la clase, PetCare plantea otra pregunta:

> ¿Puedes aplicar por tu cuenta estos conceptos a un proyecto que debe continuar evolucionando?

---

# Bloque 1 · 12:11–12:50 · Métodos

## 12:11–12:15 · Reactivación

Abrir un programa mínimo:

```java
public class App {
    public static void main(String[] args) {
        System.out.println("Inicio");
        System.out.println("Fin");
    }
}
```

Preguntar rápidamente:

- ¿dónde comienza la ejecución?
- ¿qué hace `System.out.println`?
- ¿qué elementos del código ya conocen?

No volver a enseñar fundamentos.

---

## 12:15–12:21 · Ejemplo 1 · Primer método

Usar:

➡️ [`01-MetodoSimple.java`](../../examples/semana-02/01-MetodoSimple.java)

```java
public static void mostrarSaludo() {
    System.out.println("Hola desde un método");
}
```

Primero ejecutarlo sin llamar al método y preguntar:

> ¿Por qué no ocurre nada?

Luego agregar:

```java
mostrarSaludo();
```

Idea central:

```text
método = comportamiento con un nombre que alguien debe invocar
```

Explicar sólo lo necesario:

```text
mostrarSaludo → nombre
()            → no recibe datos
void          → no entrega resultado
```

`public static` se utiliza, pero no se profundiza todavía en modificadores.

---

## 12:21–12:29 · Ejemplo 2 · Parámetros y argumentos

Usar:

➡️ [`02-MetodosParametrosRetorno.java`](../../examples/semana-02/02-MetodosParametrosRetorno.java)

```java
public static void mostrarNombre(String nombre) {
    System.out.println("Nombre: " + nombre);
}
```

Llamar:

```java
mostrarNombre("Ana");
mostrarNombre("Pedro");
```

Dejar visible:

```text
String nombre → parámetro
"Ana"         → argumento
```

Pregunta de comprobación:

> ¿Por qué el mismo método puede mostrar dos nombres diferentes?

---

## 12:29–12:36 · Ejemplo 3 · Retorno

```java
public static int sumar(int a, int b) {
    return a + b;
}
```

Usar:

```java
int resultado = sumar(7, 5);
System.out.println(resultado);
```

Comparar:

```text
void → no entrega un resultado
int  → debe entregar un int
```

Mostrar un segundo tipo brevemente:

```java
public static boolean esMayorDeEdad(int edad) {
    return edad >= 18;
}
```

Reforzar que `return` y `System.out.println` no significan lo mismo.

---

## 12:36–12:46 · Mini ejercicios

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

### Docente revisa

- parámetro vs argumento;
- firma;
- llamada del método;
- tipo retornado;
- uso de `return`.

---

## 12:46–12:50 · Cierre del bloque

En la pizarra:

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

## 13:01–13:06 · Problema inicial · datos relacionados

No usar PetCare.

Plantear un producto mediante variables:

```java
String nombre = "Teclado";
double precio = 19990;
int stock = 5;
```

Luego un segundo producto:

```java
String nombre2 = "Mouse";
double precio2 = 12990;
int stock2 = 10;
```

Preguntar:

> ¿Qué problema empieza a aparecer si seguimos agregando productos de esta forma?

Idea buscada:

> Hay datos que pertenecen al mismo concepto y empiezan a dispersarse.

---

## 13:06–13:14 · Crear una clase

Usar:

➡️ [`03-ProductoBasico.java`](../../examples/semana-02/03-ProductoBasico.java)

Crear:

```java
class Producto {
    String nombre;
    double precio;
    int stock;
}
```

Explicar:

```text
Producto
→ concepto que el programa necesita representar

nombre, precio, stock
→ estado que hoy nos interesa de ese concepto
```

Evitar que la única definición sea “una clase es una plantilla”. La clase representa un concepto del problema.

---

## 13:14–13:22 · Crear objetos

```java
Producto producto1 = new Producto();
producto1.nombre = "Teclado";
producto1.precio = 19990;
producto1.stock = 5;
```

Segundo objeto:

```java
Producto producto2 = new Producto();
producto2.nombre = "Mouse";
producto2.precio = 12990;
producto2.stock = 10;
```

Dejar explícito:

```text
Producto       → clase / tipo
producto1      → referencia
new Producto() → nueva instancia
```

Preguntar:

- ¿ambos objetos tienen la misma estructura?
- ¿mantienen el mismo estado?

Conclusión:

> Objetos del mismo tipo pueden tener estados diferentes.

---

## 13:22–13:27 · Abstracción

Preguntar:

> ¿Un producto real tiene sólo nombre, precio y stock?

No.

Explicar:

> Para este problema seleccionamos las características que hoy son relevantes. Modelar implica decidir qué nos importa representar.

Mini ejercicio oral:

> Si estuviéramos modelando una canción, ¿qué tres o cuatro datos podrían ser relevantes?

No implementar la clase; sólo comprobar transferencia conceptual.

---

## 13:27–13:33 · Provocar un estado inválido

Con `Producto`:

```java
producto1.stock = -100;
```

Preguntar:

> ¿Compila?

Sí.

> ¿Tiene sentido para nuestro problema?

No.

Introducir progresivamente:

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

No convertir getters/setters automáticos en receta.

---

## 13:33–13:38 · Mini ejercicio de transferencia

Proponer otro contexto sin programarlo completo en conjunto.

### Cuenta bancaria conceptual

Estado:

```text
saldo
```

Pregunta:

> ¿Qué operación sería mejor que permitir `cuenta.saldo = -500000` directamente?

Los estudiantes proponen una operación, por ejemplo:

```text
retirar(monto)
```

Deben describir al menos una regla que esa operación debería validar.

Si el grupo avanza rápido, pueden codificar una versión mínima.

---

## 13:38–13:40 · Cierre / exit ticket

Preguntar:

1. ¿Qué diferencia hay entre clase y objeto?
2. ¿Por qué dos objetos de `Producto` pueden tener datos diferentes?
3. ¿Qué significa abstraer en este ejemplo?
4. ¿Por qué `private` por sí solo no explica todo el encapsulamiento?
5. ¿Qué operación protege el stock del producto?

No abrir un tema nuevo.

---

# Después de la clase · PetCare

PetCare corre por separado como proyecto individual.

La consigna de esta semana está aquí:

➡️ [`proyecto-formativo/semana-02/README.md`](./README.md)

El estudiante debe tomar **sólo los contenidos realmente trabajados** y aplicarlos a su propia versión.

El docente puede responder dudas y revisar avances, pero **no existe una solución PetCare que se construya completa en vivo durante esta clase**.

La conexión curricular es:

```text
HOY APRENDÍ
métodos
clases
objetos
encapsulamiento

        ↓ transferencia individual

PETCARE SEMANA 02
¿cómo utilizo estas herramientas
para mejorar mi propio proyecto?
```

---

# Checkpoint mínimo aceptable de la clase

La clase es exitosa si los estudiantes alcanzan a comprender y practicar:

```text
método
→ parámetros/argumentos
→ retorno
→ clase
→ objeto
```

Encapsulamiento puede quedar parcialmente abierto si el ritmo requiere más tiempo.

La meta no es “terminar PetCare”. PetCare no forma parte del checkpoint de ejecución de esta sesión.

---

# Lo que deliberadamente NO enseñamos hoy

No adelantar:

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

El avance de PetCare se registra por separado a través de los repositorios y checkpoints individuales de los estudiantes.
