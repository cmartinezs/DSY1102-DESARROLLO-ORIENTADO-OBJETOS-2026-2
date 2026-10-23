# Ejercicios · Semana 02 · Métodos, clases y encapsulamiento
**Objetivo:** aplicar una operación con parámetros/retorno y dar a un objeto responsabilidad sobre su propio estado. Recuperar sintaxis de Java cuando haga falta; sin `Scanner`, herencia, colecciones ni excepciones como eje.

## E01 · Tarifa de estacionamiento reutilizable
**Foco:** método con parámetros y retorno. Un estacionamiento cobra $800 por hora iniciada. Crea `static int calcularCobro(int minutos)` que devuelva el total sin imprimir desde el método.
- **Pruebas:** 1 → $800; 60 → $800; 61 → $1.600; 0 → $0.
- **Pista:** división entera y resto, o `(minutos + 59) / 60` para minutos no negativos.
- **Pregunta:** ¿qué gana `main` al recibir el resultado en vez de que el método solo imprima?
- **No hacer:** clases de negocio ni menús.

## E02 · Encapsular un contador
**Foco:** atributo privado y comportamiento. Crea una clase `ContadorAsistencia` con campo `private int presentes` inicializado en 0 y métodos `registrarEntrada()`, `registrarSalida()` y `getPresentes()`.
- **Regla:** nunca permitir que presentes baje de cero; `registrarSalida()` retorna `false` cuando no hay personas.
- **Prueba:** entrada, entrada, salida → 1; salida, salida → segunda salida rechazada, total = 0.
- **Pregunta:** ¿por qué un setter público de `presentes` permitiría un estado imposible?
- **No hacer:** `Scanner` ni lista de personas.

## E03 · Dos instancias, dos estados
**Foco:** clase vs objeto. Usando tu clase anterior **o una copia autónoma de esa clase**, crea dos contadores: `SalaA` y `SalaB`. Registra tres entradas en A y una en B.
- **Prueba:** A = 3, B = 1; retirar una persona de A deja A = 2 y B = 1.
- **Punto de partida autónomo:** también puedes comenzar directamente desde la clase especificada en E02; no necesitas entregar E02.
- **Pregunta:** ¿qué se comparte por pertenecer a una clase y qué permanece independiente en cada objeto?
- **No hacer:** atributos estáticos compartidos para los contadores.

## E04 · Elegir la responsabilidad correcta
**Foco:** abstracción y separación de lógica. Una lámpara puede estar encendida o apagada. Decide si la acción `encender()` debe ir en `main` o en la clase `Lampara`; implementa solo `boolean encendida`, `encender()`, `apagar()` y `estaEncendida()`.
- **Prueba:** recién creada → apagada; encender → encendida; apagar → apagada.
- **Pregunta:** ¿qué comportamiento pertenece a la lámpara y qué hace `main`?
- **No hacer:** herencia ni interfaz gráfica.

## Cobertura
Parámetros/retorno (E01), clase y estado encapsulado (E02), instancias (E03), abstracción/responsabilidades (E04). Los ejercicios son autocontenidos; los ejemplos mínimos de sintaxis están en `ejemplos/semana-02/`.

[Banco original conservado](BANCO-ORIGINAL-2026.md) · [Índice](../README.md)
