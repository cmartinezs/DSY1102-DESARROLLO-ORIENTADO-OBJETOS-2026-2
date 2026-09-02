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
→ Scanner y entrada desde consola
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

La sobrecarga de constructores se utilizó además como una **primera introducción al concepto de polimorfismo**, dejando para una clase posterior el desarrollo formal de herencia, sobrescritura y polimorfismo dinámico.

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

`Cuadrilatero` queda reservado como **puente pedagógico hacia herencia**, una vez completada la introducción práctica a entrada de datos mediante `Scanner`.

## Próxima clase · Scanner antes de herencia

Antes de continuar con `extends`, se incorporará `Scanner` como herramienta de entrada desde consola.

Ruta de la sesión:

```text
package · introducción breve
→ import java.util.Scanner
→ Scanner(System.in)
→ nextLine / nextInt / nextDouble
→ problema nextInt + nextLine
→ reutilizar Cliente + Cuenta
→ construir objetos con datos ingresados
→ ejecutar operaciones
→ mantener lógica de negocio dentro de Cuenta
→ cierre integrado
→ dejar preparada herencia
```

El objetivo es que el estudiante comprenda que `Scanner` cambia **cómo ingresan los datos**, pero no cambia la distribución de responsabilidades del modelo:

```text
Main / Scanner = interacción
Cuenta          = estado y reglas de negocio
```

Material: [Scanner · entrada de datos desde consola](./03-scanner-entrada-datos.md).

## Ejemplos de referencia

Los ejemplos de esta sesión se encuentran en [`../../ejemplos/semana-04/`](../../ejemplos/semana-04/):

1. `Cuenta` con constructores sobrecargados;
2. `Cuenta` colaborando con `Persona`;
3. `Punto` y `Circulo`;
4. `Cuadrilatero` compuesto por cuatro puntos;
5. `Cuenta` + `Cliente` recibiendo datos mediante `Scanner`.

## Precisión conceptual

En esta etapa se utiliza composición en sentido introductorio para mostrar que **los objetos pueden estar construidos a partir de otros objetos**. Más adelante se distinguirán formalmente asociación, agregación y composición según la relación de dominio y ciclo de vida.

Asimismo, varios constructores con distinta firma corresponden a **sobrecarga**. El polimorfismo por subtipado y sobrescritura todavía no ha sido desarrollado.

`Scanner` pertenece a la capa de interacción del programa. No se incorpora dentro de las clases de dominio para pedir datos al usuario.

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

## En incorporación

- `package` como organización básica del código;
- `import`;
- `Scanner`;
- entrada interactiva desde consola;
- separación entre interacción y lógica de negocio.

## No adelantar todavía

- implementación de jerarquías con `extends`;
- sobrescritura con `@Override`;
- polimorfismo dinámico como contenido formal;
- clases abstractas;
- interfaces;
- colecciones;
- excepciones;
- persistencia.

## Después de Scanner

Retomar `Cuadrilatero` para introducir progresivamente:

```text
Cuadrilatero
→ especialización de figuras
→ herencia
→ sobrescritura
→ polimorfismo dinámico
```

La prioridad es que la herencia aparezca como respuesta a una necesidad del modelo y no como sintaxis aislada.

## Proyecto formativo

PetCare se mantiene esta semana hasta una versión con objetos correctamente construidos, encapsulados y capaces de colaborar. `Scanner` puede utilizarse en la aplicación principal para ingresar los datos, pero la lógica del dominio permanece dentro de los objetos. La herencia todavía no se exige.

## Evidencia mínima

- dos ejercicios independientes;
- Lab 04 completo;
- avance PetCare Semana 04;
- ejercicio integrado con `Scanner`;
- código ejecutable;
- DevLog con al menos un error real y su corrección.
