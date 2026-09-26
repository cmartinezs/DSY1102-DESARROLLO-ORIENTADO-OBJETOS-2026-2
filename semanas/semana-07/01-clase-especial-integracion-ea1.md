# Clase especial · Abstractas, interfaces e integración EA1

**Duración objetivo:** 2 horas  
**Modalidad:** explicación breve + live coding + análisis dirigido  
**Meta:** cerrar clases abstractas e interfaces y conectar toda EA1 sin volver a explicar el semestre desde cero.

---

# 0. Punto de partida · 0–10 min

Recordemos lo que ya sabemos.

Tenemos una clase padre y subclases:

```text
Animal
├── Perro
└── Gato
```

Preguntas al curso:

- ¿qué atributos deberían estar en `Animal`?
- ¿qué atributos son exclusivos de `Perro` o `Gato`?
- si una variable es de tipo `Animal` pero contiene un `Perro`, ¿qué versión de un método sobrescrito se ejecuta?
- ¿para qué usamos `super(...)`?

Idea central:

> Herencia modela una relación de generalización/especialización: un Perro **es un** Animal.

---

# 1. El problema de una clase padre demasiado genérica · 10–30 min

Partimos con algo conocido:

```java
class Animal {
    private String nombre;

    public Animal(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void emitirSonido() {
        System.out.println("Sonido de animal");
    }
}
```

## Pregunta de diseño

¿Tiene sentido esto?

```java
Animal animal = new Animal("¿?");
```

Si en nuestro dominio **todo Animal real debe ser un tipo concreto**, crear un `Animal` genérico no representa correctamente el problema.

Ahí aparece `abstract`.

```java
abstract class Animal {
    private String nombre;

    public Animal(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }
}
```

Ahora:

```java
// Animal animal = new Animal("¿?"); // ERROR: no se puede instanciar
Animal perro = new Perro("Firulais");
```

### Idea clave

Una clase abstracta:

- puede tener atributos;
- puede tener constructor;
- puede tener métodos normales;
- puede tener métodos abstractos;
- **no puede instanciarse directamente**.

---

# 2. Método abstracto · 30–45 min

Todos los animales deben emitir un sonido, pero el sonido depende del tipo concreto.

No queremos una implementación falsa en la clase padre.

```java
abstract class Animal {
    private String nombre;

    public Animal(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public abstract void emitirSonido();
}
```

Cada subclase queda obligada a implementar el comportamiento:

```java
class Perro extends Animal {

    public Perro(String nombre) {
        super(nombre);
    }

    @Override
    public void emitirSonido() {
        System.out.println(getNombre() + " dice: guau");
    }
}
```

```java
class Gato extends Animal {

    public Gato(String nombre) {
        super(nombre);
    }

    @Override
    public void emitirSonido() {
        System.out.println(getNombre() + " dice: miau");
    }
}
```

## Pregunta importante

¿Por qué `emitirSonido()` es abstracto pero `getNombre()` no?

Porque:

- obtener el nombre funciona igual para cualquier animal;
- emitir sonido **depende del subtipo concreto**.

> No hacemos abstracto un método «porque sí». Lo hacemos cuando la clase base puede declarar que el comportamiento debe existir, pero no puede definir una implementación válida para todos.

---

# 3. Interfaz · una capacidad, no una familia · 45–65 min

Ahora aparece un requisito:

> Algunos animales pueden recibir vacunación y el sistema debe registrar esa acción.

Pregunta:

¿`Vacunable` es un tipo de Animal?

No.

`Vacunable` representa una **capacidad/contrato**.

```java
interface Vacunable {
    void vacunar();
}
```

Una clase concreta puede cumplir ese contrato:

```java
class Perro extends Animal implements Vacunable {

    public Perro(String nombre) {
        super(nombre);
    }

    @Override
    public void emitirSonido() {
        System.out.println(getNombre() + " dice: guau");
    }

    @Override
    public void vacunar() {
        System.out.println(getNombre() + " fue vacunado");
    }
}
```

## Diferencia que debemos recordar

```text
extends     → relación "es un"
implements  → relación "puede hacer / cumple un contrato"
```

Ejemplo conceptual:

```text
Perro ES UN Animal.
Perro PUEDE SER Vacunable.
```

### Regla práctica

Antes de crear una interfaz, preguntar:

> ¿Estoy modelando una familia de objetos o una capacidad que distintos objetos podrían cumplir?

---

# 4. Integración con polimorfismo y List · 65–85 min

No necesitamos una lista distinta para perros y gatos.

```java
List<Animal> animales = new ArrayList<>();

animales.add(new Perro("Firulais"));
animales.add(new Gato("Michi"));
```

Recorremos usando el tipo padre:

```java
for (Animal animal : animales) {
    animal.emitirSonido();
}
```

No necesitamos:

```java
if (animal instanceof Perro) {
    // ...
}

if (animal instanceof Gato) {
    // ...
}
```

para decidir qué sonido ejecutar.

Cada objeto conoce su propio comportamiento.

Eso es **polimorfismo**.

## Pregunta de análisis

¿Qué permite que una sola `List<Animal>` pueda contener `Perro` y `Gato`?

Porque ambos son subtipos de `Animal`.

---

# 5. ¿Y la interfaz dentro de una colección? · 85–95 min

Si necesitamos ejecutar una capacidad específica, podemos trabajar con el contrato.

Ejemplo conceptual:

```java
Vacunable paciente = new Perro("Firulais");
paciente.vacunar();
```

La variable no necesita conocer todos los detalles del perro. Solo necesita saber que el objeto cumple el contrato `Vacunable`.

Importante para esta etapa:

> No convertir esto en una fiesta de interfaces. Una interfaz aparece cuando el dominio realmente necesita expresar una capacidad o contrato.

---

# 6. Manejo de errores · 95–110 min

El modelo puede estar perfecto y aun así el usuario escribir texto cuando esperamos un número.

```java
Scanner scanner = new Scanner(System.in);

boolean datoValido = false;

while (!datoValido) {
    try {
        System.out.print("Ingrese edad: ");
        int edad = Integer.parseInt(scanner.nextLine());

        if (edad < 0) {
            throw new IllegalArgumentException("La edad no puede ser negativa");
        }

        System.out.println("Edad registrada: " + edad);
        datoValido = true;

    } catch (NumberFormatException e) {
        System.out.println("Debe ingresar un número entero.");

    } catch (IllegalArgumentException e) {
        System.out.println(e.getMessage());
    }
}
```

Preguntas:

- ¿qué parte detecta que el texto no es un entero?
- ¿qué parte detecta la regla de negocio de edad negativa?
- ¿qué parte evita que el programa termine abruptamente?

Idea clave:

```text
detectar condición inválida
→ lanzar / producir excepción
→ capturar
→ informar
→ continuar flujo
```

---

# 7. El mapa completo · 110–120 min

Antes de cerrar, reconstruimos la solución solo con conceptos:

```text
REQUERIMIENTO
    ↓
identificar entidades
    ↓
clases + atributos + responsabilidades
    ↓
encapsulamiento
    ↓
colaboración entre objetos
    ↓
¿hay generalización?
    ↓
herencia
    ↓
¿la clase padre debería poder instanciarse?
    ↓
abstract class
    ↓
¿existe comportamiento obligatorio que depende del subtipo?
    ↓
abstract method + override
    ↓
¿existe una capacidad transversal?
    ↓
interface
    ↓
varios objetos
    ↓
List<TipoPadre>
    ↓
recorrido polimórfico
    ↓
entradas inválidas
    ↓
try / catch + validación
    ↓
probar y ejecutar
```

# Checklist para enfrentar un caso nuevo

Antes de escribir código:

- [ ] Entendí el requerimiento.
- [ ] Identifiqué entidades.
- [ ] Asigné atributos y responsabilidades.
- [ ] Separé interacción de lógica de negocio.
- [ ] Identifiqué relaciones entre objetos.
- [ ] Decidí si existe herencia y puedo justificarla.
- [ ] Decidí si la clase padre debe ser abstracta.
- [ ] Identifiqué comportamiento que debe variar por subtipo.
- [ ] Evalué si alguna capacidad corresponde a una interfaz.
- [ ] Elegí cómo almacenar varios objetos.
- [ ] Identifiqué entradas o situaciones inválidas.
- [ ] Probé que el programa compile y ejecute.

# Última idea de la clase

La sintaxis es la última parte.

```text
leer
→ comprender
→ modelar
→ decidir responsabilidades
→ implementar
→ probar
```

Ese es el flujo que debemos aprender a repetir.
