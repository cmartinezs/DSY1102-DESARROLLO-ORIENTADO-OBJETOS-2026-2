# Clase especial · Proyecto integrador EA1

**Duración objetivo:** 2 horas  
**Modalidad:** análisis + live coding + checkpoints  
**Proyecto:** Veterinaria Console

## 1. Requerimiento

Una veterinaria necesita una aplicación de consola para registrar distintos tipos de animales.

Todos los animales poseen nombre y edad. Cada tipo emite un sonido diferente. Algunos animales pueden ser vacunados y otros no.

La aplicación debe permitir:

1. registrar animales;
2. listar los registrados;
3. hacer que todos emitan su sonido;
4. buscar por nombre;
5. vacunar cuando corresponda;
6. controlar entradas inválidas;
7. continuar funcionando hasta que el usuario decida salir.

Antes de programar:

- ¿qué entidades existen?
- ¿qué comparten?
- ¿qué cambia según el subtipo?
- ¿qué capacidad no representa una relación de herencia?
- ¿quién administra la lista?
- ¿qué responsabilidad debería quedar en `Main`?

## 2. Estructura objetivo

```text
proyecto-integracion-ea1/
└── src/
    └── cl/duoc/dsy1102/integracion/
        ├── Animal.java
        ├── Vacunable.java
        ├── Perro.java
        ├── Gato.java
        ├── Ave.java
        ├── Veterinaria.java
        └── Main.java
```

Todos los archivos utilizan:

```java
package cl.duoc.dsy1102.integracion;
```

## Checkpoint 1 · Jerarquía

**Debes aprender:** generalización, atributos comunes, constructor de la clase padre y por qué una clase puede ser correcta conceptualmente pero no tener sentido instanciarla.

```text
Animal
├── Perro
├── Gato
└── Ave
```

Pregunta guía: **¿tiene sentido hacer `new Animal(...)`?**

En este dominio, no. Por eso `Animal` será abstracta.

## Checkpoint 2 · Método abstracto

**Debes aprender:** distinguir comportamiento común de comportamiento obligatorio cuya implementación depende del subtipo.

Todos los animales deben emitir un sonido, pero `Animal` no puede definir uno válido para todos:

```java
public abstract void emitirSonido();
```

Cada subtipo implementa el comportamiento con `@Override`.

## Checkpoint 3 · Interfaz

Nuevo requisito: algunos animales pueden vacunarse.

**Debes aprender:** diferenciar familia de tipos de capacidad.

```java
public interface Vacunable {
    void vacunar();
}
```

```text
Perro es un Animal.
Perro puede ser Vacunable.

extends     → generalización / especialización
implements  → capacidad / contrato
```

## Checkpoint 4 · Administrar múltiples objetos

Creamos una clase responsable de administrar los animales:

```text
Veterinaria
└── List<Animal>
```

**Debes aprender:**

- por qué la lista usa el tipo padre;
- cómo contiene distintos subtipos;
- por qué la búsqueda pertenece a `Veterinaria`;
- cómo funciona el recorrido polimórfico.

```java
for (Animal animal : animales) {
    animal.emitirSonido();
}
```

No necesitamos preguntar si cada objeto es Perro, Gato o Ave para decidir qué sonido ejecutar.

## Checkpoint 5 · Main como interacción

`Main` se encarga de:

- mostrar el menú;
- leer datos;
- convertir entradas;
- capturar errores;
- invocar operaciones de `Veterinaria`.

No administra directamente las reglas internas del dominio.

```text
=== VETERINARIA CONSOLE ===
1. Registrar perro
2. Registrar gato
3. Registrar ave
4. Listar animales
5. Emitir sonidos
6. Buscar animal
7. Vacunar animal
0. Salir
```

## Checkpoint 6 · Excepciones y flujo controlado

**Debes aprender:**

```text
entrada
→ conversión
→ validación
→ ejecución
```

Debemos controlar, entre otros:

- texto cuando se espera un número;
- edad negativa;
- animal inexistente;
- intento de vacunar un animal que no cumple `Vacunable`.

El programa debe informar el error y continuar.

## Precisión importante · polimorfismo vs instanceof

No hacemos esto para decidir el comportamiento:

```java
if (animal instanceof Perro) {
    // decidir manualmente el sonido
}
```

Usamos:

```java
animal.emitirSonido();
```

Pero sí puede tener sentido preguntar si un objeto cumple una **capacidad opcional**:

```java
if (animal instanceof Vacunable) {
    // cumple ese contrato
}
```

## Checkpoint final · prueba

- [ ] compila;
- [ ] el menú vuelve a aparecer;
- [ ] registra distintos subtipos;
- [ ] todos caben en `List<Animal>`;
- [ ] `emitirSonido()` funciona polimórficamente;
- [ ] búsqueda funciona;
- [ ] vacunación solo ocurre cuando corresponde;
- [ ] una entrada inválida no termina la aplicación;
- [ ] cada clase conserva una responsabilidad clara.

## Proyecto completo

➡️ [`ejemplos/semana-07/proyecto-integracion-ea1/`](../../ejemplos/semana-07/proyecto-integracion-ea1/)

La guía define **cómo construirlo**; la carpeta de ejemplos contiene **cómo queda terminado**.

```text
leer requerimiento
→ identificar entidades
→ decidir responsabilidades
→ modelar relaciones
→ implementar
→ integrar
→ probar
```

La POO no comienza con `class`. Comienza entendiendo el problema.
