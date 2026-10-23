# Ejercicios · Semana 06 · Arrays, List y excepciones
**Objetivo:** resolver operaciones mínimas sobre conjuntos de datos y situaciones inválidas, sin construir un sistema de ventas. La complejidad crece solo si aporta al aprendizaje.

## E01 · Asientos numerados
**Foco:** array, índice y longitud fija. Un minibús tiene un `boolean[] ocupados` de 5 posiciones. Implementa `ocupar(int asiento)` o una lógica equivalente que acepte asientos 1–5 y no permita ocupar dos veces el mismo.
- **Prueba:** ocupar 2 → aceptado; ocupar 2 nuevamente → rechazado; asiento 6 → rechazado; quedan 4 libres.
- **Pregunta:** ¿por qué el número de asiento no coincide directamente con el índice del array?
- **No hacer:** clase Bus, pasajeros, menú ni persistencia.

## E02 · Lista variable de recados
**Foco:** `List<String>` / `ArrayList`, añadir/buscar/eliminar. Una persona lleva pendientes al supermercado. Agrega «pan», «té» y «arroz»; evita repetir «té» y permite marcar «pan» como resuelto eliminándolo.
- **Prueba:** tres pendientes iniciales; intento duplicado no aumenta tamaño; luego quedan dos.
- **Pregunta:** ¿qué comportamiento sería distinto con `String[]` de tamaño fijo?
- **No hacer:** varias clases ni `Scanner` obligatorio.

## E03 · Buscar el primer producto económico
**Foco:** recorrido de una lista de objetos. Define un `Producto` mínimo con nombre y precio y una `List<Producto>`. Devuelve el primer producto cuyo precio no supere $2.000, o `null` cuando ninguno cumpla.
- **Pruebas:** leche 2.300, té 1.800, pan 1.500 → «té»; lista con todos los precios sobre 2.000 → `null`.
- **Pregunta:** ¿por qué no hay que llamar métodos sobre el resultado sin comprobar antes si es `null`?
- **No hacer:** stock, ventas, caja, menú.

## E04 · Fallo de conversión controlado
**Foco:** `try/catch` y responsabilidad. Implementa un método mínimo que convierta un texto a entero con `Integer.parseInt`. `main` debe controlar `NumberFormatException` y mostrar un mensaje sin terminar abruptamente.
- **Pruebas:** «25» → 25; «veinticinco» → «Entrada no numérica»; después del error se imprime «Programa continúa».
- **Pregunta:** ¿quién detecta la entrada inválida y quién comunica el problema?
- **No hacer:** menú, clase lectora reutilizable ni sistema completo.

## Actividades históricas y extensión
El [banco anterior de 22 actividades](BANCO-ORIGINAL-2026.md) se mantiene como **refuerzo**, no como 22 obligaciones para una semana. [MarketApp](22-market-app/) es una **actividad integradora opcional**, no un ejercicio mínimo: exige Producto, Venta, menú, stock y resumen. La ruta oficial de integración guiada sigue siendo el [laboratorio Inscripciones a talleres](../../labs/semana-06/).

## Cobertura
Array/límite (E01), List/ArrayList (E02), lista de objetos (E03), excepción y control (E04). No dependen de Veterinaria I/II.

[Índice de ejercicios](../README.md)
