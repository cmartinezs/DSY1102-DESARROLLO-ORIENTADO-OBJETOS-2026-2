# Actividad formativa transversal · PetCare

## Propósito

**PetCare** será el hilo conductor formativo de DSY1102 durante el semestre 2026-2.

La idea central es que los estudiantes no resuelvan ejercicios aislados semana tras semana. En cambio, reutilizarán una misma aplicación que evolucionará con cada nuevo concepto de la asignatura.

Cada experiencia de aprendizaje debe responder dos preguntas:

1. ¿qué parte de PetCare ya existe gracias a lo trabajado anteriormente?;
2. ¿qué capacidad nueva permite incorporar el contenido de esta clase o semana?

## Separación respecto de evaluaciones

PetCare es un caso **formativo**.

- No reemplaza ni anticipa el dominio de las evaluaciones sumativas.
- No se utilizará como solución modelo del caso evaluado.
- En semanas de evaluación puede pausarse.
- Después de la evaluación se retoma desde el último checkpoint formativo.

## Dominio mínimo inicial

PetCare representa progresivamente la administración básica de mascotas y sus controles.

El sistema comienza intencionalmente pequeño. Conceptos posibles a medida que sean necesarios:

- `Mascota`
- nombre
- edad
- peso
- especie
- controles o atenciones
- propietarios

No deben agregarse clases antes de que exista una necesidad pedagógica para ellas.

## Evolución esperada durante el semestre

### Semana 1 · Fundamentos del lenguaje

Antes de existir objetos, PetCare se representa mediante variables simples dentro de `main`:

```java
String nombre = "Michi";
int edad = 4;
double peso = 5.2;
boolean vacunado = true;
```

Se utiliza el mismo contexto para practicar tipos, operadores, condiciones, ciclos y lógica básica. La intención es que los estudiantes experimenten las limitaciones de mantener información relacionada como variables sueltas.

### Semana 2 · Métodos, clases y encapsulamiento

El código anterior se reutiliza.

1. extraer comportamiento repetido a métodos;
2. reconocer que nombre, edad y peso describen un mismo concepto;
3. crear `Mascota`;
4. instanciar objetos;
5. encapsular estado;
6. modificar estado mediante comportamientos válidos.

Ejemplos de comportamiento:

```text
cumplirAnio()
actualizarPeso(nuevoPeso)
mostrarFicha()
```

No se enseña encapsulamiento como generación automática de getters/setters: el objeto debe proteger reglas válidas de su estado.

### Semana 3 · Herencia, interfaces y polimorfismo

PetCare crece solo cuando los conceptos lo justifican. Puede evolucionar con especializaciones como `Perro` y `Gato`, comportamiento polimórfico e interfaces cuando exista un comportamiento que realmente lo amerite. La jerarquía no se entrega resuelta desde el inicio: se construye a partir del problema.

### Semana 4 · Excepciones y colecciones

La aplicación comienza a manejar varias mascotas mediante `List<Mascota>`, búsquedas, recorridos, altas/bajas sencillas, validaciones y excepciones. Se reutilizan las clases anteriores en vez de crear entidades nuevas solo para practicar colecciones.

### Semana 5 · POO aplicada

Checkpoint de consolidación: modelo de objetos, encapsulamiento, herencia/polimorfismo cuando corresponda, colecciones y manejo de errores.

### Semana 6 · Evaluación

PetCare se pausa. La evaluación mantiene su propio dominio y reglas.

### Semana 7 · Maven, JavaFX y ciclo de vida

Se retoma el mismo proyecto y se transforma progresivamente en una aplicación de escritorio. El modelo PetCare existente pasa a ser la base del nuevo cliente gráfico.

### Semana 8 · FXML, componentes UI y eventos

La interfaz comienza a interactuar con el modelo: formulario de mascota, botones, eventos, FXML y Controller.

### Semana 9 · MVC, TableView y validación

PetCare evoluciona hacia MVC: tabla de mascotas, navegación, formularios, validaciones y separación de responsabilidades.

### Semana 10 · JSON, Repository/DAO y MVC completo

Las mascotas dejan de existir solo durante la ejecución: persistencia JSON, repositorio/DAO, recuperación al iniciar e integración con MVC.

### Semanas 11–12 · Evaluación

Se pausa PetCare y se conserva el último checkpoint formativo.

### Semana 13 · Base de datos y CRUD

La persistencia migra desde archivo hacia una base de datos relacional: conexión, consultas, `INSERT`, `UPDATE`, `DELETE`, sentencias parametrizadas y CRUD.

### Semana 14 · DAO + interfaz gráfica

Se reutiliza la aplicación JavaFX/MVC existente, reemplazando o refactorizando la persistencia para trabajar con BD. Esto permite mostrar que la interfaz y el dominio no deberían reescribirse por completo porque cambió el mecanismo de persistencia.

### Semanas 15–16 · Evaluación

PetCare vuelve a pausarse durante la evaluación formal.

## Regla de continuidad clase a clase

Cada clase práctica debe dejar un checkpoint reutilizable. El material semanal debe identificar:

- **Entrada:** qué código/conceptos se reutilizan de la sesión anterior.
- **Incremento:** qué nueva capacidad se agrega.
- **Salida:** qué debe quedar funcionando al terminar.
- **Continuidad:** qué parte se reutilizará en la próxima clase.

## Patrón pedagógico estándar

**explicación breve → ejemplo del docente sobre PetCare → modificación guiada → laboratorio incremental sobre PetCare → evidencia → explicación del estudiante → checkpoint**

El laboratorio no debe pedir reconstruir la aplicación desde cero. Debe comenzar desde el checkpoint anterior y agregar una capacidad nueva.

## Repositorio del estudiante

Cuando corresponda, el alumno puede mantener su propia copia/proyecto PetCare durante el semestre. El historial Git permitirá observar la evolución conceptual del software y recuperar checkpoints anteriores.

La prioridad no es terminar una aplicación comercial: PetCare existe para hacer visible cómo cada concepto nuevo mejora o transforma software que ya conocían.