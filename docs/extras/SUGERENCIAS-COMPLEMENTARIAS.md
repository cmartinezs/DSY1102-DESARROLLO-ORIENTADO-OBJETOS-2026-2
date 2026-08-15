# 💡 Sugerencias de futuros temas complementarios

Este documento funciona como **backlog editorial** para ampliar los extras de DSY1102. La prioridad es reforzar dificultades reales de estudiantes que aprenden Java y POO por primera vez, sin adelantar contenidos de backend.

## Prioridad alta — recomendaría incorporarlos

### 1. Leer errores y stack traces

**Por qué:** muchos estudiantes interpretan cualquier texto rojo como un único tipo de error.

Contenido sugerido:

- error de compilación vs error de ejecución vs error lógico;
- cómo ubicar clase y línea relevantes;
- leer un `NullPointerException` sencillo;
- buscar la primera causa útil antes de copiar el error completo a una IA o buscador;
- mini ejercicios de diagnóstico.

### 2. Debugger de IntelliJ paso a paso

**Por qué:** evita que `System.out.println` sea la única estrategia de depuración.

Contenido sugerido:

- breakpoint;
- Step Over, Step Into y Resume;
- inspección de variables;
- observar cómo cambia el estado de un objeto;
- depurar un ciclo y una llamada entre métodos.

### 3. De enunciado a modelo de objetos

**Por qué:** es probablemente el puente más importante entre "sé escribir Java" y "sé hacer POO".

Contenido sugerido:

```text
sustantivos candidatos → conceptos
responsabilidades → métodos
información necesaria → atributos
reglas → comportamiento del objeto
colaboraciones → relaciones
```

Debe incluir también contraejemplos para evitar convertir cada sustantivo del enunciado automáticamente en una clase.

### 4. Referencias, objetos y `null`

**Por qué:** explica una gran cantidad de errores que parecen misteriosos al venir de Python.

Contenido sugerido:

- variable primitiva vs variable que referencia un objeto;
- dos variables referenciando el mismo objeto;
- qué significa `null`;
- identidad vs contenido;
- introducción contextual a `==` y `.equals()` cuando corresponda.

### 5. Convenciones de código Java

**Por qué:** forma buenos hábitos antes de que los proyectos crezcan.

Contenido sugerido:

- `PascalCase` para clases;
- `camelCase` para variables y métodos;
- constantes;
- nombres orientados al dominio;
- indentación y formateo;
- una clase pública por archivo;
- paquetes y organización básica.

## Prioridad media — incorporar cuando la planificación llegue al tema

### 6. UML de clases mínimo y útil

No convertirlo en un curso de UML. Sólo:

- clase;
- atributos;
- métodos;
- visibilidad;
- asociación;
- multiplicidad;
- herencia;
- composición cuando ya se haya explicado conceptualmente.

Idealmente siempre conectado con código Java equivalente.

### 7. Encapsulamiento con propósito

Evitar enseñar "todos los atributos private + getters/setters" como ritual.

Trabajar preguntas como:

- ¿quién puede modificar este estado?;
- ¿qué reglas debe proteger el objeto?;
- ¿cuándo un setter permite romper una invariantes?;
- comportamiento (`retirar()`) frente a modificación cruda (`setSaldo()`).

### 8. Composición antes que herencia

Material corto para evitar que la herencia se use sólo porque dos clases comparten atributos.

Ejemplos cotidianos:

- `Auto` **tiene un** `Motor`;
- `Pedido` **tiene** productos;
- diferenciar "es un" de "tiene un".

### 9. Casos de prueba pensados por el estudiante

Antes de introducir frameworks de testing:

- caso feliz;
- límites;
- entradas inválidas;
- resultado esperado;
- tabla entrada → proceso → salida.

Esto permite desarrollar pensamiento de testing sin exigir JUnit todavía.

### 10. Javadoc básico

Sólo cuando ya escriben métodos propios:

- cuándo documentar;
- `@param`;
- `@return`;
- evitar comentarios que repitan exactamente el código.

## Prioridad baja / opcional

### 11. JUnit introductorio

Útil si la planificación deja espacio, pero **después** de que puedan escribir y probar métodos manualmente. Podría introducirse como herramienta para automatizar ejemplos que ya comprenden.

### 12. Colecciones como mapa conceptual

Cuando el curso llegue a arreglos o colecciones:

- arreglo;
- `ArrayList`;
- diferencia conceptual entre posición y objeto;
- cuándo una colección pertenece al estado de otro objeto.

Evitar anticipar Streams.

### 13. Excepciones desde el punto de vista del alumno

Primero:

- qué significa que un método falle;
- leer excepciones estándar;
- `try/catch` sólo cuando exista una necesidad concreta.

Dejar excepciones de negocio y jerarquías elaboradas para un momento posterior.

### 14. IA como tutor, no como reemplazo

Guía breve sobre cómo pedir ayuda sin perder el aprendizaje:

- pedir explicación antes de código;
- solicitar pistas progresivas;
- pedir que revise un intento propio;
- exigir que cualquier solución pueda ser explicada por el estudiante;
- detectar respuestas que usan conceptos todavía no vistos en clase;
- nunca entregar secretos, credenciales ni datos personales.

## Temas que NO recomendaría agregar a DSY1102 como extras de entrada

Aunque son valiosos profesionalmente, desvían el foco de esta asignatura:

- Spring / Spring Boot;
- REST, HTTP y Postman;
- JPA, Hibernate y bases de datos;
- Docker y contenedores;
- cloud y despliegue;
- programación reactiva;
- concurrencia e hilos;
- Streams como mecanismo principal de resolución;
- patrones GoF completos;
- SOLID como lista para memorizar;
- arquitecturas Clean/Hexagonal/DDD;
- CI/CD.

Pueden aparecer después, cuando el estudiante tenga suficiente dominio de objetos para entender **qué problema resuelven**.

## Orden sugerido de implementación

```text
1. Errores y stack traces
2. Debugger IntelliJ
3. Enunciado → modelo de objetos
4. Referencias, objetos y null
5. Convenciones Java
6. UML mínimo
7. Encapsulamiento con propósito
8. Composición vs herencia
9. Diseño de casos de prueba
10. Javadoc
11+. Extras opcionales según avance real de la sección
```

La regla editorial debería ser simple: **un extra se incorpora porque elimina una dificultad recurrente del aprendizaje actual, no porque sea un tema interesante de ingeniería de software**.