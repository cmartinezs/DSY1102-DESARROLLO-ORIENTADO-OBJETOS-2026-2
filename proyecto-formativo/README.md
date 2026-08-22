# PetCare · Proyecto formativo transversal de semestre

> **Página para estudiantes / fuente canónica del checkpoint vigente:**  
> https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/proyecto-formativo.html

PetCare es el proyecto formativo longitudinal e individual de **DSY1102 Desarrollo Orientado a Objetos**.

No es el ejemplo principal de las clases ni un laboratorio que el profesor construye paso a paso con el curso. Es **un software propio que cada estudiante hace evolucionar durante el semestre**, aplicando de manera autónoma los conceptos que ya fueron trabajados mediante material, ejemplos y ejercicios independientes.

## Dos pistas que corren en paralelo

```text
PISTA A · APRENDIZAJE DE LA ASIGNATURA
material
→ explicación docente
→ ejemplo mínimo aislado
→ mini ejercicio
→ otro contexto
→ comprobación

                │
                │ lo aprendido habilita
                ▼

PISTA B · PETCARE
consigna semanal
→ decisión individual
→ implementación
→ prueba
→ commit
→ checkpoint acumulativo
```

La pista A enseña.  
La pista B integra y evidencia aprendizaje.

PetCare **no debe ser necesario para comprender un contenido nuevo**. Un estudiante debería poder aprender métodos, clases, encapsulamiento, herencia o colecciones aunque todavía no haya avanzado esa semana en PetCare.

---

# Propósito

Al finalizar el curso, el alumno debería poder mirar el historial del proyecto y reconocer una evolución real:

```text
Java básico
→ objetos
→ herencia/polimorfismo
→ colecciones/excepciones
→ core reutilizable + CLI
→ JavaFX
→ MVC
→ persistencia JSON
→ JDBC
→ aplicación integrada
```

El objetivo no es construir un producto veterinario comercial. PetCare existe para que el estudiante demuestre que puede **transferir** lo aprendido a un sistema que evoluciona durante todo el semestre.

---

# Cómo se trabajará cada semana

Cada semana curricular publica dos cosas distintas:

## 1. Material y práctica de aprendizaje

Vive en las áreas normales del curso:

- `semanas/`;
- `examples/`;
- `practica/`;
- `labs/` cuando corresponda.

Aquí se enseña y practica el contenido nuevo mediante problemas pequeños y dominios variados.

## 2. Incremento PetCare de la semana

Vive en:

```text
proyecto-formativo/semana-XX/
```

La consigna indica **qué capacidades debería incorporar PetCare usando contenidos ya abordados**, pero no entrega una receta completa ni obliga a replicar exactamente el código del profesor.

El estudiante puede consultar el material de la semana, revisar ejemplos, preguntar dudas y desarrollar su propia solución.

---

# Rol del profesor durante PetCare

El docente puede:

- presentar la consigna semanal;
- aclarar requisitos;
- revisar decisiones;
- responder dudas puntuales;
- mirar avances o repositorios;
- realizar pequeñas defensas técnicas;
- reservar ocasionalmente tiempo de clase para trabajo individual.

El docente **no desarrolla PetCare completo en vivo como solución oficial**.

Si se necesita demostrar un concepto durante la clase, se utiliza preferentemente un ejemplo pequeño y separado del proyecto.

---

# Trabajo individual y continuidad

PetCare pertenece al repositorio de cada estudiante y debe evolucionar mediante commits pequeños y explicables.

Una semana puede requerir uno o varios commits según el trabajo realizado. No existe la obligación artificial de hacer un commit por cada clase.

Regla:

```text
contenido enseñado
        ↓
consigna PetCare de la semana
        ↓
trabajo individual
        ↓
checkpoint funcional
        ↓
la siguiente semana parte desde ese checkpoint
```

Si una semana el estudiante no termina el incremento durante horario presencial, continúa fuera de clase.

---

# Evidencia individual y posible compensación

PetCare es una actividad formativa individual y acumulativa.

El trabajo sostenido podrá ser considerado por el docente como **evidencia adicional para compensar una calificación baja del semestre**, cuando corresponda y según el desempeño real demostrado.

Esto **no significa reemplazo automático de una evaluación** ni garantiza una nota determinada.

Para ser considerado debe existir evidencia consistente:

- repositorio propio;
- historial Git progresivo;
- checkpoints de las semanas trabajadas;
- código ejecutable;
- decisiones explicables;
- pequeñas defensas orales/técnicas cuando se soliciten;
- ausencia de una entrega completa aparecida de una sola vez al final del semestre.

La calidad del proceso importa tanto como el resultado final.

---

# Dominio inicial

PetCare permite registrar y administrar información básica relacionada con mascotas y sus controles.

El dominio comienza deliberadamente pequeño.

En las primeras semanas puede existir solo:

```text
Mascota
- nombre
- edad
- peso
- vacunado
```

Más adelante, **solo cuando el contenido lo justifique**, podrán aparecer conceptos como:

- tipos/especializaciones de mascota;
- controles o atenciones;
- propietario;
- colección de mascotas;
- persistencia;
- interfaz gráfica.

No se crean veinte clases el primer día para “preparar la arquitectura”.

---

# Separación progresiva

Durante la Unidad 1 trabajaremos principalmente con consola, pero la consola no debe convertirse en el negocio del sistema.

La dirección del proyecto será construida progresivamente:

```text
interfaz actual
      ↓
reglas y conceptos reutilizables
```

No se exige comprender una arquitectura completa antes de haber aprendido las herramientas necesarias.

Cuando aparezca JavaFX, la intención será poder reutilizar lo ya construido. Cuando aparezca JDBC, se cambiará principalmente la forma de persistir datos sin desechar las reglas anteriores.

---

# Regla de evaluaciones

PetCare es formativo y se mantiene separado de los dominios de las evaluaciones institucionales.

Durante EP1, EP2 y EP3 puede pausarse para no entregar indirectamente una solución del instrumento sumativo.

Después de la evaluación se retoma desde el último checkpoint estable.

---

# Ruta del semestre

➡️ [Ver ROADMAP-SEMANAL.md](./ROADMAP-SEMANAL.md)

➡️ [Ver arquitectura y reglas de continuidad](./ARQUITECTURA-Y-CONTINUIDAD.md)

➡️ [PetCare · Semana 02](./semana-02/README.md)
