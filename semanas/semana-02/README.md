# Semana 2 · Métodos, clases y encapsulamiento

**Periodo:** 17 al 22 de agosto de 2026  
**Sección:** DSY1102-012V  
**Actividad institucional:** 1.2 Métodos, clases y encapsulamiento

← [Volver al índice](../README.md)

## Actividad formativa transversal

Desde esta semana se formaliza **PetCare** como hilo conductor de la asignatura.

Los ejemplos, ejercicios y laboratorios formativos reutilizarán el mismo dominio siempre que corresponda. Cada clase debe partir desde un checkpoint anterior y agregar una capacidad nueva.

→ [Ver estrategia transversal PetCare](../../docs/ACTIVIDAD-FORMATIVA-TRANSVERSAL.md)

PetCare es formativo y se mantiene separado de los dominios utilizados en evaluaciones sumativas.

## Qué corresponde oficialmente esta semana

- **1.2.1** PPT Métodos.
- **1.2.2** PPT Clases y Abstracción.
- **1.2.3** PPT Encapsulamiento.
- **1.2.4** Guía Actividad Clases y Abstracción.
- **1.2.5** Ejercicios generales.

## Qué debemos recuperar de Semana 01

El feriado del sábado 15 eliminó 2 horas pedagógicas. Antes de exigir métodos/clases, todavía debemos reforzar explícitamente:

- tipos primitivos y `String`;
- variables y operadores;
- `if`/`else` y operadores lógicos;
- `switch` cuando sea pertinente;
- `for`, `while`, `do-while`;
- estructura mínima de un programa Java;
- ejercicios con datos definidos directamente en código.

**No se elimina ni se da por sabido este contenido.** Se recupera y, en vez de practicarlo con ejercicios desconectados, se utiliza como primera versión de PetCare.

## Material creado

### Material principal longitudinal

- [Ejemplo ejecutable · PetCare básico](./ejemplos/PetCareBasico.java)
- [Laboratorio incremental · PetCare: de variables a objeto](./laboratorio-petcare/README.md)

### Apoyo complementario

- [Guía · recuperación + puente a POO](./01-guia-recuperacion-y-puente-poo.md)
- [Ejemplo complementario · Producto](./ejemplos/ProductoDemo.java)
- [Laboratorio complementario · Cuenta simple](./laboratorio-cuenta/README.md)

Producto/Cuenta pueden utilizarse como ejemplos adicionales, pero **PetCare es el caso que se conserva y evoluciona entre clases y experiencias de aprendizaje**.

## Hoy lunes 17

**No hay clase DSY1102 hoy.** La siguiente sesión es **martes 18, 20:31–22:30**.

Por tanto, hoy corresponde preparación docente/material. La sesión que debe quedar lista es la de mañana.

## Martes 18 · qué ver específicamente

La clase de mañana debe reforzar de forma explícita **lo atrasado + lo oficial**, utilizando PetCare como contexto común.

### Bloque 1 · 20:31–21:10 · PetCare v0: Java básico pendiente

Partir con una mascota representada mediante variables sueltas:

```java
String nombre = "Michi";
int edad = 4;
double peso = 5.2;
boolean vacunado = true;
```

Reforzar:

- estructura `class` + `main`;
- tipos primitivos y `String`;
- variables;
- operadores aritméticos, relacionales y lógicos;
- comparación rápida con Python.

**Práctica:** cambiar valores, calcular edad futura/peso y provocar/corregir errores simples. Sin `Scanner`.

### Bloque 2 · 21:11–21:50 · PetCare v0.1: decisiones

Sobre la misma mascota:

- validar peso;
- clasificar algún estado mediante `if`/`else`;
- condiciones compuestas;
- `switch` solo cuando ayude a expresar una alternativa discreta;
- errores frecuentes.

**Práctica:** modificar el mismo código, no comenzar otro ejercicio.

### Bloque 3 · 21:51–22:30 · PetCare v0.2: ciclos + primer método

- `for`;
- `while`;
- `do-while`;
- repetir operaciones sobre datos de la mascota;
- detectar código repetido;
- extraer `mostrarFicha(...)` u otro comportamiento a un método.

**Salida mínima del martes:** un checkpoint PetCare que combine tipos + condición + ciclo y, si el ritmo lo permite, un primer método.

> No se sacrifica comprensión de lo atrasado solo para marcar 1.2.1 como “visto”. El contenido oficial se introduce sobre código que los alumnos ya conocen.

## Sábado 22 · PetCare v1: contenido oficial Semana 02

### Bloque 4 · Métodos

Retomar exactamente el checkpoint del martes:

- firma;
- parámetros;
- argumentos;
- retorno;
- reutilización;
- sobrecarga simple cuando aporte valor;
- pasar de lógica dentro de `main` a comportamiento nombrado.

### Bloque 5 · Clases, abstracción y encapsulamiento

Convertir progresivamente las variables relacionadas en:

```java
class Mascota
```

Trabajar:

- entidad → atributos → comportamientos → clase → objeto;
- instanciación;
- responsabilidad de una clase;
- `private` con propósito;
- invariantes y validación;
- actualización controlada del peso/estado;
- getters/setters solo cuando correspondan.

Después se realiza el [laboratorio PetCare](./laboratorio-petcare/README.md).

La evolución que debe resultar visible es:

**variables sueltas → decisiones/ciclos → métodos → estado + comportamiento → `Mascota` encapsulada.**

## Checkpoint semanal

Al cerrar la semana debe quedar una versión recuperable de PetCare con:

- clase `Mascota`;
- al menos dos instancias;
- atributos encapsulados;
- comportamiento para mostrar ficha;
- modificación de peso protegida por una regla válida.

**No agregar todavía** herencia, `Perro`, `Gato`, listas ni excepciones. La próxima experiencia de aprendizaje debe descubrir esos conceptos partiendo de la necesidad de evolucionar este mismo código.

## Regla pedagógica

Todavía **no usamos `Scanner`**. El objetivo es reducir variables simultáneas mientras consolidan Java y POO.

Encapsulamiento tampoco significa “private + generar getters/setters”. El alumno debe explicar **qué estado protege**, **qué operaciones permite** y **qué estados inválidos evita**.

## Evidencia mínima semanal

El estudiante debe poder:

1. escribir Java básico con decisiones y ciclos;
2. explicar por qué extraería una lógica a método;
3. implementar parámetros y retorno;
4. reconocer `Mascota` como entidad con atributos y comportamientos;
5. instanciar objetos;
6. proteger estado mediante comportamiento;
7. explicar la evolución de PetCare desde variables sueltas hasta objeto.

## Material institucional

- [Biblioteca pública](https://drive.google.com/drive/folders/1FmQqQQ6nslfG1OZ8FFhkqgxpnEOkpHZk?usp=sharing)
- [Semana 02 en Drive](https://drive.google.com/drive/folders/1bDNTBmba5F--fULggNtShZucD9zTnE4F)
