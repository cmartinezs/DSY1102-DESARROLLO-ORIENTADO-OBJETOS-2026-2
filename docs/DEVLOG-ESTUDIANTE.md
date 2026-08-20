# DevLog del estudiante · manual de uso

El **DevLog** es una bitácora técnica breve que vive en el repositorio personal del estudiante y registra cómo avanza su trabajo durante el semestre.

No es un diario personal, no mide horas y no busca que escribas páginas. Su objetivo es dejar una traza útil de tu proceso: qué querías lograr, qué hiciste, dónde te bloqueaste, qué aprendiste y qué harás después.

## 1. Dónde vive

En tu repositorio personal:

```text
docs/
└── devlog/
    ├── README.md
    ├── semana-02.md
    ├── semana-03.md
    └── ...
```

El repositorio del curso contiene **este manual y ejemplos**. Tu DevLog real nunca se escribe en el repositorio docente.

## 2. Formato mínimo semanal

```markdown
# DevLog · Semana XX

## Objetivo
¿Qué quería avanzar esta semana?

## Avance
¿Qué hice realmente?

## Bloqueo
¿Qué me costó, falló o quedó sin resolver?

## Aprendizaje
¿Qué entendí, corregí o descubrí?

## Siguiente
¿Cuál es el próximo paso concreto?
```

Cinco secciones son suficientes. Se valora precisión, no extensión.

## 3. Ejemplo útil

```markdown
# DevLog · Semana 03

## Objetivo
Entender cómo una clase agrupa estado y comportamiento y avanzar PetCare.

## Avance
- modelé una primera clase;
- moví una validación desde `main` al objeto;
- actualicé el README del proyecto.

## Bloqueo
No entendía por qué un atributo `private` seguía necesitando métodos públicos.

## Aprendizaje
Entendí que encapsular no significa ocultar todo, sino controlar cómo cambia el estado.

## Siguiente
Revisar qué operaciones realmente necesita exponer el objeto y eliminar setters innecesarios.
```

## 4. Ejemplo que NO aporta

```markdown
## Objetivo
Hacer la tarea.

## Avance
Avancé.

## Bloqueo
Ninguno.

## Aprendizaje
Aprendí Java.

## Siguiente
Seguir.
```

Cumple el formato, pero no deja evidencia útil.

## 5. No registrar horas

No se pide escribir `trabajé 2 horas`. El tiempo por sí solo no demuestra avance ni aprendizaje.

Es mejor registrar un resultado observable:

```text
mal: trabajé 90 minutos
bien: corregí el ciclo, entendí por qué terminaba una iteración antes y dejé el ejercicio funcionando
```

## 6. Si no hubo avance

También es información válida.

```markdown
## Avance
No alcancé a modificar código esta semana.

## Bloqueo
Todavía no entiendo la diferencia entre clase y objeto y preferí no copiar una solución.

## Siguiente
Revisar el ejemplo de clase y llevar una pregunta concreta a la próxima sesión.
```

No inventes actividad para llenar el archivo.

## 7. Relación con Git

El DevLog debe evolucionar junto con el trabajo real. Una actualización razonable puede formar parte del commit de cierre de una sesión o semana:

```text
week 03: advance PetCare and update devlog
```

El historial de Git, el código, los README y el DevLog deben contar una historia compatible entre sí.

## 8. Relación con Issues

Cuando más adelante utilicemos GitHub Issues, la relación será sencilla:

```text
Issue      → qué quiero hacer
Commits    → qué cambié
DevLog     → qué ocurrió y qué aprendí
README     → cómo funciona el resultado actual
```

No dupliques todo el contenido de un Issue dentro del DevLog. Enlázalo si aporta contexto.

## 9. Cómo se utilizará pedagógicamente

El docente puede revisar DevLogs públicos para detectar:

- bloqueos repetidos en el curso;
- preguntas interesantes;
- evolución del razonamiento;
- continuidad del trabajo;
- decisiones técnicas;
- necesidades de refuerzo para la clase siguiente.

El objetivo principal es **feedback y evidencia formativa**, no vigilancia de horas ni producción artificial de texto.

## 10. Pregunta pendiente

Siempre que exista, deja una pregunta concreta. Por ejemplo:

> ¿Por qué `private` sirve si después puedo crear getters y setters?

Las preguntas reales pueden convertirse en material de la siguiente clase.

## 11. Reglas

- breve y específico;
- escrito con tus propias palabras;
- coherente con el trabajo del repo;
- puede declarar que algo no se logró;
- no inventar dificultades ni aprendizajes;
- no incluir datos sensibles, contraseñas o información personal innecesaria;
- no convertirlo en una transcripción de la clase.

## 12. Checklist semanal

Antes de cerrar la semana:

- [ ] existe `docs/devlog/semana-XX.md`;
- [ ] tiene objetivo, avance, bloqueo, aprendizaje y siguiente;
- [ ] describe resultados reales;
- [ ] deja una pregunta pendiente si existe;
- [ ] es coherente con commits/código/documentación;
- [ ] está enviado a GitHub.
