# Inicio formal de PetCare · Semana 02

PetCare se inicia formalmente durante la Semana 02 como **trabajo individual paralelo a las clases**.

El martes 18 se recuperaron fundamentos de Java afectados por el feriado del sábado 15. El sábado 22 se trabajan métodos, clases, objetos y encapsulamiento mediante material, ejemplos y mini ejercicios independientes.

PetCare **no se construye paso a paso con el profesor**. El estudiante lo inicia y evoluciona por cuenta propia usando lo que ya haya aprendido.

---

# Cuándo comenzar

El proyecto puede iniciarse una vez que el estudiante ya sea capaz de:

- crear un proyecto Java en IntelliJ;
- ejecutar un `main`;
- declarar variables;
- utilizar condicionales y ciclos básicos;
- imprimir resultados por consola.

Ese punto ya fue alcanzado en la recuperación del martes 18.

Por eso Semana 02 es un buen momento para iniciar el proyecto, aunque su desarrollo no forme parte del paso a paso de la clase.

---

# Regla fundamental

```text
primero aprendo con ejemplos pequeños
             ↓
luego practico
             ↓
después aplico por mi cuenta en PetCare
```

Si una parte de PetCare exige utilizar un concepto que todavía no ha sido trabajado, esa parte se deja pendiente.

No se espera que el estudiante investigue por adelantado herencia, colecciones, JavaFX, JDBC u otras tecnologías sólo para completar el proyecto antes de tiempo.

---

# Crear el proyecto

Cada estudiante debe trabajar dentro de su propio repositorio de la asignatura.

Crear un proyecto Java llamado:

```text
petcare
```

La estructura inicial puede ser sencilla. No es necesario diseñar una arquitectura compleja desde el primer commit.

Una estructura mínima válida al comenzar puede ser:

```text
petcare/
└── src/
    └── App.java
```

Si ya se está aplicando el estándar de packages del curso, utilizar el package correspondiente al usuario del estudiante y mantener PetCare dentro de esa convención.

---

# Checkpoint 0 · Arranque

Crear una versión ejecutable que represente al menos una mascota mediante datos simples.

Por ejemplo, el programa necesita información equivalente a:

```text
nombre
edad
peso
estado de vacunación
```

No se entrega una implementación completa porque el estudiante ya conoce las herramientas necesarias para resolver este checkpoint.

Debe poder:

1. ejecutar el programa;
2. mostrar la información de la mascota;
3. modificar los valores en código y comprobar el resultado;
4. explicar cada variable utilizada.

Primer commit sugerido:

```text
feat: iniciar petcare
```

---

# Incremento Semana 02

Después de trabajar los contenidos correspondientes, evolucionar PetCare utilizando **sólo conceptos ya enseñados**.

## Métodos

Incorporar al menos una operación mediante un método.

El estudiante debe decidir qué operación tiene sentido extraer y justificar:

- nombre del método;
- parámetros;
- argumentos;
- retorno, si corresponde.

## Clase y objetos

Si clases y objetos ya fueron abordados, representar `Mascota` como una clase y crear al menos dos objetos con estados diferentes.

No hay una única solución correcta mientras el diseño sea coherente con lo aprendido y pueda explicarse.

## Encapsulamiento

Si encapsulamiento ya fue abordado, proteger al menos una regla del objeto.

La evidencia debe mostrar:

- un cambio permitido;
- un cambio inválido rechazado;
- una explicación de por qué esa regla pertenece al objeto.

---

# Qué entrega el profesor y qué resuelve el estudiante

## El profesor entrega

- contenidos de la semana;
- ejemplos aislados;
- mini ejercicios;
- explicaciones conceptuales;
- requisitos del incremento semanal;
- apoyo para dudas concretas.

## El estudiante resuelve

- cómo iniciar su versión;
- qué método extraer;
- cómo modelar `Mascota`;
- qué regla proteger;
- cómo organizar sus commits;
- cómo demostrar que su solución funciona.

---

# Checkpoint Semana 02

El resultado esperado depende del avance curricular real.

Mínimo razonable:

```text
PetCare ejecutable
+ aplicación de métodos
```

Si clases y objetos fueron alcanzados:

```text
PetCare ejecutable
+ Mascota
+ al menos dos objetos
```

Si encapsulamiento también fue alcanzado:

```text
PetCare ejecutable
+ Mascota
+ objetos
+ una regla protegida
```

La prioridad es que el estudiante pueda explicar el código. No se premia agregar contenido aún no enseñado.
