# Laboratorio · PetCare · De variables a objeto

**Duración sugerida:** 20–25 minutos.  
**Modalidad:** individual.  
**Objetivo:** reutilizar el código de fundamentos Java y evolucionarlo hacia métodos, clase y encapsulamiento.

> Este laboratorio forma parte de la **actividad formativa transversal PetCare**. No se empieza desde cero: se reutiliza lo trabajado previamente y se deja un checkpoint para la siguiente semana.

## Punto de partida

PetCare necesita representar una mascota. Comienza con valores definidos directamente en código:

```java
String nombre = "Luna";
int edad = 3;
double peso = 4.8;
boolean vacunado = false;
```

Todavía **no uses `Scanner`**.

## Parte 1 · Fundamentos que vienen de Semana 01

Dentro de `main`:

1. muestra la ficha de la mascota;
2. indica si la mascota es menor de 1 año, adulta o senior usando una decisión simple que tú definas y puedas explicar;
3. valida que el peso sea mayor que cero;
4. utiliza un ciclo para mostrar cómo cambiaría la edad durante los próximos 3 años.

El objetivo es reforzar:

- variables;
- tipos;
- operadores;
- `if` / `else`;
- `for`.

## Parte 2 · Extraer comportamiento a métodos

El programa funciona, pero `main` comienza a acumular responsabilidades.

Refactoriza al menos dos comportamientos a métodos. Por ejemplo:

```java
static void mostrarFicha(...)
static boolean pesoValido(double peso)
```

No copies los nombres obligatoriamente. Decide qué lógica tiene sentido nombrar y reutilizar.

### Pregunta

¿Qué problema concreto resolviste al extraer esos métodos?

## Parte 3 · Descubrir el objeto

Observa que `nombre`, `edad`, `peso` y `vacunado` describen **una misma cosa**.

Crea una clase:

```java
class Mascota
```

con los atributos que consideres necesarios.

Luego crea al menos dos objetos `Mascota` desde `main`.

## Parte 4 · Encapsular estado

Ahora protege el estado de la mascota.

Requisitos:

- los atributos deben ser privados;
- no debe ser posible establecer un peso igual o menor que cero;
- evita un `setPeso()` que acepte cualquier cosa sin validación;
- agrega un comportamiento que permita actualizar correctamente el peso;
- agrega `mostrarFicha()` como comportamiento del objeto.

La pregunta importante no es “¿tiene getters y setters?”, sino:

> **¿qué estado inválido evita la clase y mediante qué comportamiento lo evita?**

## Parte 5 · Checkpoint

Antes de terminar, deja el proyecto en un estado que pueda retomarse la próxima semana.

Debe existir al menos:

```text
PetCare
└── Mascota
```

con dos instancias funcionando.

No agregues todavía herencia, `Perro`, `Gato`, listas ni excepciones. Esos conceptos aparecerán cuando la asignatura los necesite.

## Evidencia

Entrega o conserva en tu repositorio:

- código ejecutable;
- salida de consola;
- al menos dos mascotas;
- un caso de actualización de peso válido;
- un intento de peso inválido correctamente rechazado;
- respuesta breve: “¿qué mejoró al pasar de variables sueltas a un objeto?”.

## Continuidad

**No elimines este código.** La próxima experiencia de aprendizaje reutilizará `Mascota` para estudiar abstracción, herencia, interfaces y polimorfismo.