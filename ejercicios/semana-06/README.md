# Ejercicios · Semana 06

Práctica **breve, individual y focalizada**. Cada ejercicio debe poder resolverse sin convertirlo en un mini-proyecto. La idea es practicar una operación o decisión concreta antes del laboratorio integrador.

Tiempo objetivo por ejercicio: **5–15 minutos**.

## A · Arrays

### 1. Crear y mostrar
Crea un `int[]` con cinco números y muéstralos usando `for-each`.

### 2. Acceder por índice
Crea un `String[]` con cuatro nombres. Muestra el primero y el último usando sus índices.

### 3. Sumar elementos
Dado un array de enteros, calcula y muestra la suma de todos sus valores.

### 4. Buscar el mayor
Recorre un array de números e identifica el valor mayor.

### 5. Contar según condición
Dado un array de notas, cuenta cuántas son mayores o iguales a `4.0`.

### 6. Array de objetos
Crea tres objetos `Producto`, guárdalos en `Producto[]` y recórrelos mostrando su información.

## B · List / ArrayList

### 7. Crear una lista
Crea un `List<String>` respaldado por `ArrayList`, agrega tres ciudades y muéstralas.

### 8. Tamaño dinámico
Agrega cinco elementos uno a uno y muestra `size()` después de cada incorporación.

### 9. Obtener por posición
Crea una lista de colores y muestra el elemento de índice `2` usando `get`.

### 10. Buscar
Comprueba con `contains` si una lista contiene un valor solicitado.

### 11. Eliminar
Elimina un elemento existente y muestra la lista antes y después.

### 12. Lista de objetos
Crea una `List<Producto>`, agrega tres productos y recórrela mostrando nombre y precio.

### 13. Buscar un objeto
Busca en la lista el primer producto cuyo nombre coincida con un texto conocido.

## C · Excepciones

### 14. Conversión inválida
Intenta convertir `"hola"` a `int` con `Integer.parseInt` y controla `NumberFormatException`.

### 15. Conversión válida e inválida
Prueba el mismo código con `"25"` y con `"veinticinco"`. Compara qué camino se ejecuta.

### 16. Validar con `throw`
Crea un método `validarEdad(int edad)` que lance `IllegalArgumentException` si la edad es negativa.

### 17. Detectar y capturar en lugares distintos
Haz que un método lance la excepción y que `main` la capture. Explica quién detecta el problema y quién decide cómo informarlo.

### 18. Excepción propia mínima
Crea `ProductoNoEncontradoException` y lánzala desde un método cuando no se encuentra un nombre en una lista pequeña.

## D · Puente hacia el laboratorio

Estos ejercicios sí conectan los conceptos, pero siguen siendo breves.

### 19. Array polimórfico
Crea un `Animal[]` con al menos dos subtipos ya conocidos y recórrelo invocando un método sobrescrito.

### 20. Migración a List
Repite el ejercicio anterior usando `List<Animal>` y `ArrayList<Animal>`.

### 21. Búsqueda y error controlado
Busca un animal por identificador. Si no existe, lanza una excepción específica o `IllegalArgumentException` como primera aproximación.

## Regla de trabajo

Para los ejercicios 1–18 no agregues arquitectura innecesaria. El foco es **practicar el concepto indicado**. Para 19–21 reutiliza lo aprendido en Semana 05 sólo como puente hacia Veterinaria II.

Cuando una solución empieza a necesitar múltiples responsabilidades, documentación de diseño, varios pasos y evidencia Git, deja de ser un ejercicio y pasa a ser materia de [`../../labs/semana-06/`](../../labs/semana-06/).
