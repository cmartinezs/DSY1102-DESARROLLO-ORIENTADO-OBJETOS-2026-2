# Semana 4 · Consolidación de objetos, constructores y colaboración entre clases

**Periodo:** 31 de agosto al 5 de septiembre de 2026  
**Sección:** DSY1102-012V  
**Checkpoint real:** sesión del martes **1 de septiembre de 2026**.

← [Volver al índice](../README.md)

## Objetivo

Consolidar la base de Programación Orientada a Objetos antes de desarrollar herencia y polimorfismo dinámico.

La semana parte desde:

```text
clase
→ atributos
→ métodos operacionales
→ accesores / mutadores
→ constructor
```

y avanza hacia:

```text
constructores sobrecargados
→ objetos bien inicializados
→ responsabilidades de clase
→ colaboración entre objetos
→ composición/asociación introductoria
→ preparación para herencia
```

## Corte real de aula · 01-09-2026

### 1. Constructores

Se continuó el ejercicio de `Cuenta` y se trabajó en:

- constructor por defecto implícito;
- qué ocurre al declarar un constructor propio: el constructor vacío deja de ser provisto automáticamente por Java;
- declaración explícita del constructor sin parámetros cuando se desea conservarlo;
- constructores con parámetros;
- sobrecarga de constructores con distintas firmas;
- diferencia entre constructor, accesor, mutador y método operacional;
- uso de `this` para distinguir atributos de parámetros cuando corresponde.

La sobrecarga de constructores se utilizó además como una **primera introducción al concepto de polimorfismo**, dejando para la siguiente clase el desarrollo formal de herencia, sobrescritura y polimorfismo dinámico.

### 2. Responsabilidad de clases y colaboración entre objetos

El ejercicio de `Cuenta` se refactorizó conceptualmente desde una clase que contenía `nombre` y `rut` hacia dos clases con responsabilidades más claras:

```text
Persona
 ├─ nombre
 └─ rut

Cuenta
 ├─ titular : Persona
 └─ saldo
```

El objetivo fue mostrar que una clase debe contener únicamente los atributos y comportamientos que corresponden a su responsabilidad de dominio, evitando clases con demasiados datos y funciones no relacionadas.

### 3. Punto y comunicación entre objetos

Se utilizó el plano cartesiano como dominio conocido:

```text
Punto
 ├─ x : int
 └─ y : int
```

`Punto` incorpora una operación:

```java
calcularDistancia(Punto otroPunto)
```

permitiendo observar que un objeto puede recibir otro objeto como parámetro y colaborar con él para resolver una operación.

### 4. Reutilización de objetos

`Punto` se reutilizó como parte de otros objetos:

```text
Circulo
 ├─ centro : Punto
 └─ radio : int
```

Luego se definió:

```text
Cuadrilatero
 ├─ vertice1 : Punto
 ├─ vertice2 : Punto
 ├─ vertice3 : Punto
 └─ vertice4 : Punto
```

`Cuadrilatero` queda como **puente pedagógico para la próxima clase**, donde se podrán derivar figuras más específicas e introducir herencia y polimorfismo con continuidad de dominio.

## Ejemplos de referencia

Los ejemplos de esta sesión se encuentran en [`../../ejemplos/semana-04/`](../../ejemplos/semana-04/):

1. `Cuenta` con constructores sobrecargados;
2. `Cuenta` colaborando con `Persona`;
3. `Punto` y `Circulo`;
4. `Cuadrilatero` compuesto por cuatro puntos.

## Precisión conceptual

En esta etapa se utiliza composición en sentido introductorio para mostrar que **los objetos pueden estar construidos a partir de otros objetos**. Más adelante se distinguirán formalmente asociación, agregación y composición según la relación de dominio y ciclo de vida.

Asimismo, varios constructores con distinta firma corresponden a **sobrecarga**. El polimorfismo por subtipado y sobrescritura todavía no ha sido desarrollado.

## Contenidos consolidados hasta este punto

- clases e instancias;
- atributos y estado;
- encapsulamiento;
- accesores y mutadores;
- métodos operacionales;
- responsabilidad de clase;
- constructor por defecto y constructor explícito;
- sobrecarga de constructores;
- objetos como atributos;
- objetos como parámetros;
- colaboración entre objetos;
- composición/asociación introductoria.

## No adelantar todavía

- implementación de jerarquías con `extends`;
- sobrescritura con `@Override`;
- polimorfismo dinámico como contenido formal;
- clases abstractas;
- interfaces;
- colecciones;
- excepciones;
- persistencia.

## Próxima clase · sábado

Continuar desde `Cuadrilatero` para introducir progresivamente:

```text
Cuadrilatero
→ especialización de figuras
→ herencia
→ sobrescritura
→ polimorfismo dinámico
```

La prioridad es que la herencia aparezca como respuesta a una necesidad del modelo y no como sintaxis aislada.

## Proyecto formativo

PetCare se mantiene esta semana hasta una versión con objetos correctamente construidos, encapsulados y capaces de colaborar. La herencia todavía no se exige.

## Evidencia mínima

- dos ejercicios independientes;
- Lab 04 completo;
- avance PetCare Semana 04;
- código ejecutable;
- DevLog con al menos un error real y su corrección.
