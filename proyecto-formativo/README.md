# PetCare · Proyecto formativo transversal de semestre

> **Página para estudiantes / fuente canónica del checkpoint vigente:**  
> https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/proyecto-formativo.html

PetCare es el proyecto formativo longitudinal de **DSY1102 Desarrollo Orientado a Objetos**.

No es un laboratorio que se realiza una vez. Es **el mismo software que cada estudiante hará evolucionar durante el semestre**, aplicando lo aprendido clase a clase.

La idea es sencilla:

```text
aprendo un concepto
        ↓
veo un ejemplo
        ↓
lo aplico inmediatamente a PetCare
        ↓
guardo un checkpoint
        ↓
la próxima clase continúo desde ahí
```

## Propósito

Al finalizar el curso, el alumno debería poder mirar el historial del proyecto y reconocer la evolución:

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

El objetivo no es construir un producto veterinario comercial. PetCare existe para hacer visible **por qué el software cambia cuando aprendemos nuevas herramientas**.

---

# Cómo se trabajará

Cada semana tendrá material separado por las **clases reales** de la sección.

Estructura de referencia:

```text
proyecto-formativo/
├── README.md
├── ROADMAP-SEMANAL.md
├── ARQUITECTURA-Y-CONTINUIDAD.md
├── semana-02/
│   ├── README.md
│   ├── 01-clase-martes.md
│   └── 02-clase-sabado.md
├── semana-03/
│   └── ...
└── checkpoints/
    ├── semana-02/
    ├── semana-03/
    └── ...
```

La cantidad de guías depende de las clases efectivamente realizadas y del avance real.

## Anatomía de cada clase

Cada guía debe dejar claro:

1. **Partimos con:** qué versión debe funcionar antes de comenzar.
2. **Hoy aprendemos:** contenido institucional de la sesión.
3. **Problema en PetCare:** por qué ese contenido sirve para mejorar el programa.
4. **Paso a paso:** implementación guiada.
5. **Decisión:** comparación de alternativas cuando corresponda.
6. **Hazlo tú:** parte breve que el alumno debe resolver.
7. **Comprueba:** ejecución y casos de prueba.
8. **Checkpoint:** qué debe quedar funcionando.
9. **Continuidad:** desde dónde partirá la clase siguiente.

---

# Trabajo en clase y en casa

Dependiendo de la sesión:

- algunas veces se reservarán aproximadamente los **últimos 20–30 minutos** para avanzar;
- otras veces la guía quedará como trabajo de continuidad en casa;
- nunca se parte de cero si ya existe un checkpoint anterior.

La prioridad es que el alumno pueda **explicar** lo que desarrolló.

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

# Una decisión importante desde el principio

Durante la Unidad 1 trabajaremos principalmente con consola, pero **la consola no debe convertirse en el negocio del sistema**.

La dirección del proyecto es:

```text
CLI / consola
     ↓
core / dominio / reglas
```

Esto significa que, a medida que aprendamos clases y métodos, intentaremos que las reglas reutilizables puedan ejecutarse sin depender directamente de:

```java
System.out.println(...)
Scanner
JavaFX
JDBC
```

No aplicaremos esta separación completa en la primera clase. Se construirá progresivamente con los conceptos que los estudiantes vayan aprendiendo.

Cuando aparezca JavaFX en la Unidad 2, la meta será poder decir:

> “La aplicación ya sabe administrar mascotas. Ahora cambiaremos la forma en que el usuario conversa con ella.”

Y cuando aparezca JDBC:

> “La aplicación ya sabe qué hacer. Ahora cambiaremos cómo guarda y recupera sus datos.”

---

# Regla de evaluaciones

PetCare es formativo y se mantiene separado de los dominios de las evaluaciones institucionales.

Durante EP1, EP2 y EP3 puede pausarse para no entregar indirectamente una solución del instrumento sumativo.

Después de la evaluación se retoma desde el último checkpoint estable.

---

# Ruta del semestre

➡️ [Ver ROADMAP-SEMANAL.md](./ROADMAP-SEMANAL.md)

➡️ [Ver arquitectura y reglas de continuidad](./ARQUITECTURA-Y-CONTINUIDAD.md)

➡️ [Comenzar Semana 02](./semana-02/README.md)
