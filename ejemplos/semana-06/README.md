# Ejemplos · Semana 06 · Arrays, List y excepciones

Siete ejemplos cortos y ejecutables. **Usa los archivos sin prefijos numéricos**: su nombre coincide con la clase Java `public`, y todos pueden compilarse dentro de un único proyecto Java 21.

## Arrays
1. [ArrayBasico.java](ArrayBasico.java) — inicializar `int[]` y recorrer con `for-each`; imprime cuatro notas.
2. [ArrayIndices.java](ArrayIndices.java) — índice 0, longitud 3 y recorrido con `for`.
3. [ArrayObjetos.java](ArrayObjetos.java) — array de dos objetos Producto.

## List / ArrayList
4. [ListaBasica.java](ListaBasica.java) — alta, recorrido y baja de «Pedro»; quedan «Ana» y «Luis».
5. [ListaObjetos.java](ListaObjetos.java) — lista y búsqueda simple; muestra «Encontrado: Teclado».

## Excepciones
6. [TryCatchBasico.java](TryCatchBasico.java) — al convertir `abc` a número, muestra «El valor no es un entero válido.».
7. [ThrowBasico.java](ThrowBasico.java) — edad negativa genera y captura `IllegalArgumentException`; muestra «La edad no puede ser negativa».

## Ejecutar y comprobar
En IntelliJ abre un proyecto Java 21, copia estos siete archivos a `src` y ejecuta individualmente cada método `main`. Cada uno ilustra una técnica; los [ejercicios](../../ejercicios/semana-06/) piden resolver problemas y el [laboratorio](../../labs/semana-06/) integra capacidades.

Las rutas antiguas `01-...` a `07-...` permanecen como **variantes históricas `Legacy`**, ahora con clases renombradas para que no colisionen al compilar. No son archivos canónicos de ejecución.
