# Ejercicios · Semana 03 · Objetos y estado válido
**Objetivo:** tomar pequeñas decisiones sobre atributos, constructores, métodos de instancia y encapsulamiento. Evitar ejercicios que se transformen en sistemas completos; no reutilizar `BateriaDronS03` del laboratorio.

## E01 · Entrada con edad mínima
**Foco:** constructor y método de consulta. Modela `Pelicula` con `titulo` y `edadMinima`. Crea constructor, getters necesarios y `boolean puedeIngresar(int edad)`.
- **Regla:** para este ejercicio, la edad mínima llega como dato válido (14). No necesitas implementar todavía excepciones ni controles de constructor; concéntrate en el comportamiento de `puedeIngresar`.
- **Pruebas:** clasificación 14 → edad 13 rechazada, 14 aceptada, 18 aceptada.
- **Pregunta:** ¿qué pertenece al objeto y qué llega como parámetro del método?
- **No hacer:** cartelera, colecciones, venta de entradas.

## E02 · Termostato protegido
**Foco:** atributos `private` y operaciones que mantienen invariantes. Crea `Termostato` con temperatura inicial de 20 °C. Ofrece `subir()`, `bajar()` y consulta, limitando entre 16 °C y 28 °C.
- **Pruebas:** subir ocho veces desde 20 → 28; subir una novena vez → no cambia; bajar trece veces desde 28 → 16.
- **Pregunta:** ¿por qué `setTemperatura(int)` sin reglas sería una mala interfaz pública?
- **No hacer:** sensores, timers, JavaFX.

## E03 · Una operación entre objetos
**Foco:** instancias distintas y colaboración mínima. Crea `Punto` con coordenadas enteras, constructor y `int distanciaManhattan(Punto otro)`. Fórmula: `|x1-x2| + |y1-y2|`.
- **Prueba:** (2,3) a (5,1) → 5; un punto consigo mismo → 0.
- **Pista:** `Math.abs` obtiene el valor absoluto.
- **Pregunta:** ¿por qué pasar un `Punto` como argumento es distinto de pasar cuatro enteros?
- **No hacer:** figuras, ventanas, jerarquías, distancias euclidianas.

## Cobertura
Constructor, instancia y retorno (E01); encapsulamiento e invariantes (E02); colaboración entre objetos (E03). Prueba válida + caso límite por actividad; el ejercicio no exige repositorio nuevo.

[Banco original conservado](BANCO-ORIGINAL-2026.md) · [Índice](../README.md)
