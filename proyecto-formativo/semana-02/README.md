# PetCare · Semana 02

**Periodo:** 17 al 22 de agosto de 2026  
**Sección:** DSY1102-012V

PetCare comienza esta semana como **proyecto individual acumulativo**, pero no forma parte del flujo guiado de la clase.

La Semana 02 tiene dos pistas paralelas:

```text
CLASE
métodos + clases + objetos + encapsulamiento
mediante ejemplos y mini ejercicios independientes

PETCARE
aplicar individualmente esos contenidos
al proyecto transversal
```

---

# Prerrequisito real

El martes 18 se recuperaron fundamentos de Java afectados por el feriado del sábado 15:

- variables y tipos primitivos;
- `String`;
- `System.out.println(...)`;
- `if`, `else if`, `else`;
- `for`, `while`, `do-while`;
- ejecución básica de un programa en IntelliJ IDEA.

Ese trabajo habilita PetCare, pero **no fue todavía PetCare**.

---

# Qué se aprende esta semana fuera de PetCare

Durante la clase del sábado 22 se trabajarán mediante ejemplos pequeños y contextos independientes:

- métodos;
- parámetros y argumentos;
- retorno;
- clases;
- objetos;
- abstracción;
- encapsulamiento;
- protección básica del estado.

➡️ La clase guiada vive fuera del proyecto formativo.

Los ejemplos de apoyo están en:

- [`../../examples/semana-02/`](../../examples/semana-02/)
- [`../../practica/semana-02/`](../../practica/semana-02/)

---

# Incremento individual PetCare · Semana 02

Una vez que los conceptos hayan sido trabajados en clase, cada estudiante debe iniciar y evolucionar su propio PetCare.

➡️ [00-inicio-petcare.md](./00-inicio-petcare.md)

La consigna no exige copiar un código oficial. Debe construir una solución propia que cumpla como mínimo con lo siguiente.

## Parte A · Crear PetCare

Crear un proyecto Java ejecutable llamado `petcare` dentro de su repositorio de la asignatura.

Primera versión mínima:

- una mascota representada inicialmente con datos simples;
- salida legible por consola;
- código que el estudiante pueda explicar.

## Parte B · Aplicar métodos

Incorporar al menos un método útil al programa.

Debe poder explicar:

- qué problema evita o qué operación representa;
- qué parámetros recibe;
- qué argumentos se utilizan al llamarlo;
- si retorna o no un valor y por qué.

## Parte C · Aplicar clase y objeto

Cuando ya haya trabajado clases y objetos en el material de la semana:

- crear una clase `Mascota`;
- crear al menos dos objetos con estados distintos;
- decidir qué datos corresponden a la mascota.

## Parte D · Aplicar encapsulamiento si fue alcanzado

Si encapsulamiento fue efectivamente trabajado esta semana:

- proteger al menos un dato cuyo valor pueda dejar al objeto en un estado inválido;
- crear una operación que controle una modificación válida;
- demostrar al menos un caso aceptado y uno rechazado.

Ejemplo de problema válido para pensar, no solución obligatoria:

> una mascota no debería terminar con un peso negativo.

---

# Libertad de implementación

Se evalúa transferencia, no copia.

El estudiante puede:

- elegir nombres razonables;
- organizar progresivamente su código;
- implementar una regla diferente si puede justificarla;
- hacer más de lo mínimo siempre que no adelante contenidos innecesariamente.

No debe:

- copiar una solución completa del repositorio docente;
- agregar tecnologías aún no enseñadas sólo para "hacerlo más profesional";
- generar una arquitectura que no pueda explicar.

---

# Evidencia de Semana 02

El checkpoint debe permitir verificar:

- proyecto PetCare propio y ejecutable;
- al menos un método aplicado con sentido;
- primera clase y objetos si ese contenido fue alcanzado;
- encapsulamiento sólo si fue efectivamente abordado;
- historial Git progresivo;
- capacidad de explicar las decisiones tomadas.

## Commits

No existe una cuota de commits por clase.

Se esperan commits pequeños y representativos del trabajo real, por ejemplo:

```text
feat: iniciar petcare
feat: extraer comportamiento de mascota
feat: modelar mascota como objeto
```

---

# Lo que NO corresponde todavía

No agregar por iniciativa propia:

- `ArrayList<Mascota>`;
- herencia `Perro` / `Gato`;
- interfaces;
- excepciones propias;
- JavaFX;
- JDBC;
- persistencia;
- frameworks.

Esos recursos aparecerán cuando el contenido de la asignatura genere la necesidad.

---

# Relación con la clase

La clase enseña el concepto usando ejemplos distintos. PetCare pregunta después:

> **¿Puedes tomar lo que aprendiste esta semana y aplicarlo por tu cuenta a un software que ya debe seguir evolucionando?**

Ese es el propósito del proyecto formativo.
