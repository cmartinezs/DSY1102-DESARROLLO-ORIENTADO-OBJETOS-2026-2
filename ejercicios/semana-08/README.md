# Ejercicios · Semana 08 · Elegir entre List, Set y Map
**Objetivo:** decidir qué estructura resuelve una necesidad, no coleccionar APIs por obligación. Sin crear un sistema de acreditación como el del laboratorio.

## E01 · Unicidad de etiquetas
**Foco:** `Set` y `add`. Una publicación puede tener etiquetas sin repeticiones. Usa `Set<String>` para agregar «java», «poo», «java» y consultar si «poo» está presente.
- **Pruebas:** tamaño = 2; el tercer `add` devuelve `false`; `contains("poo")` devuelve `true`.
- **Pregunta:** ¿qué necesita cambiar si «Java» y «java» deben considerarse iguales?
- **No hacer:** modelo Publicacion, base de datos ni listas paralelas.

## E02 · Buscar un precio por código
**Foco:** `Map<K,V>` y `get`. Un local conoce el precio de productos por código. Declara `Map<String,Integer>` con P01→2500, P02→3900 y consulta la clave P02.
- **Pruebas:** P02 → 3900; P99 → no encontrada (comprobar `null` o `containsKey` antes de usar).
- **Caso de integridad:** al registrar de nuevo P01 con 1000, la regla del ejercicio **prohíbe** reemplazar el precio existente; usa `putIfAbsent` o comprobación previa.
- **Pregunta:** ¿por qué usar el código como clave resulta más directo que recorrer toda una lista?
- **No hacer:** carrito, stock, ventas.

## E03 · ¿Qué estructura elegirías?
**Foco:** criterio de diseño, sin obligar a codificar tres alternativas. Tres requisitos independientes: (a) conservar orden de inscripción con repetidos permitidos; (b) mantener códigos únicos; (c) consultar teléfono por RUT. Elige `List`, `Set` o `Map` para cada uno y escribe un **fragmento mínimo ejecutable** de uno de los tres.
- **Pruebas conceptuales:** (a) repetido aceptado, (b) segundo código repetido rechazado, (c) búsqueda por RUT devuelve teléfono asociado.
- **Pregunta:** ¿por qué exigir las tres colecciones en una única estructura sería sobreingeniería?

## E04 · Igualdad en un Set de objetos
**Foco:** `equals/hashCode`. Una clase `Etiqueta` almacena un código. Dos objetos diferentes con el mismo código deben considerarse una sola etiqueta dentro de `HashSet<Etiqueta>`.
- **Prueba:** después de agregar `new Etiqueta("T01")` dos veces, `size()` debe ser 1.
- **Pista:** IntelliJ **Code → Generate → equals() and hashCode()**; verificar que ambos métodos comparen el mismo campo inmutable.
- **Pregunta:** ¿por qué dos instancias con el mismo contenido no se consideran automáticamente iguales?
- **No hacer:** DAO, persistencia ni `Map` adicional.

## Cobertura
Unicidad de valores (E01), mapa e integridad de claves (E02), decisión List/Set/Map (E03), unicidad de objetos propios (E04). El laboratorio semanal integra solo las estructuras realmente necesarias.

[Índice de ejercicios](../README.md)
