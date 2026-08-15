# 🧠 Conceptos de Programación — vocabulario para comenzar con Java

> **Nivel:** inicial.  
> **Objetivo:** reconocer el vocabulario que se utilizará durante DSY1102 y relacionarlo con lo que ya conoces de programación estructurada.

## Antes de escribir Java

Cambiar de lenguaje no significa comenzar desde cero. Conceptos como variable, condición, ciclo o algoritmo siguen existiendo; lo que cambia es la forma de escribirlos. En esta asignatura, además, aprenderemos a representar un problema mediante **objetos que tienen estado y comportamiento**.

## Vocabulario esencial

| Concepto | Idea simple |
|---|---|
| Algoritmo | Secuencia finita de pasos para resolver un problema |
| Variable | Nombre asociado a un valor que puede cambiar |
| Constante | Valor que no debería cambiar durante la ejecución |
| Tipo de dato | Define qué clase de valor puede almacenarse y qué operaciones admite |
| Expresión | Combinación de valores y operadores que produce un resultado |
| Sentencia | Instrucción que ejecuta una acción |
| Bloque | Conjunto de sentencias delimitadas por llaves `{ }` en Java |
| Condición | Expresión cuyo resultado es `true` o `false` |
| Iteración | Repetición controlada de instrucciones |
| Método | Comportamiento con nombre que puede recibir datos y devolver un resultado |
| Parámetro | Dato definido por un método para recibir información |
| Argumento | Valor concreto que se entrega al invocar un método |
| Clase | Descripción de qué datos y comportamientos tendrán ciertos objetos |
| Objeto | Instancia concreta creada a partir de una clase |
| Atributo | Dato que representa parte del estado de un objeto |
| Referencia | Valor mediante el cual una variable permite acceder a un objeto |

## Del paradigma estructurado a objetos

En programación estructurada solemos pensar principalmente en una secuencia de instrucciones y funciones que transforman datos.

En orientación a objetos empezamos a preguntar:

1. ¿Qué conceptos existen en el problema?
2. ¿Qué datos necesita conocer cada concepto?
3. ¿Qué acciones puede realizar?
4. ¿Qué responsabilidades debería tener?
5. ¿Con qué otros objetos necesita colaborar?

Ejemplo conceptual:

```text
Auto
├── estado
│   ├── marca
│   ├── velocidad
│   └── encendido
└── comportamiento
    ├── encender()
    ├── acelerar()
    └── frenar()
```

Todavía no importa memorizar la sintaxis: primero hay que comprender **qué estamos modelando**.

## Tipos de errores que debes reconocer

### Error de compilación

Java no puede construir el programa porque existe un problema de sintaxis o tipos.

### Error en ejecución

El programa compila, pero falla mientras se ejecuta.

### Error lógico

El programa compila y se ejecuta, pero entrega un resultado incorrecto. Este suele ser el más difícil porque el computador hizo exactamente lo que escribimos, no necesariamente lo que queríamos hacer.

## Debugging básico

Cuando algo falle:

1. Lee el mensaje de error completo.
2. Identifica archivo y línea.
3. Revisa qué valores tienen las variables en ese punto.
4. Divide el problema en pasos más pequeños.
5. Usa el debugger de IntelliJ y breakpoints cuando corresponda.
6. Cambia una cosa a la vez y vuelve a probar.

## Principios de buen código apropiados para este curso

- Usa nombres que expliquen la intención: `promedioNotas` es mejor que `x`.
- Evita repetir el mismo bloque si puedes expresarlo una sola vez mediante un método.
- Mantén cada método enfocado en una tarea comprensible.
- Prefiere soluciones simples antes que soluciones ingeniosas difíciles de leer.
- Indenta y formatea consistentemente.
- Primero consigue una solución correcta; después mejora su diseño.

## Conceptos que deliberadamente NO forman parte de este extra inicial

El material original de Fullstack incluía concurrencia e hilos, complejidad Big O, entrada/salida de red, patrones de diseño GoF y aplicaciones en Spring Boot. Son temas válidos, pero **no se requieren para aprender Java y POO por primera vez**, por lo que fueron omitidos de esta versión.

Algunos podrán aparecer en asignaturas posteriores cuando exista el contexto necesario.