window.CHALLENGE_HINTS={
  1:[
    "Antes de escribir código, separa qué datos son texto, enteros, decimales, booleanos o caracteres. Elegir bien el tipo evita trabajo extra después.",
    "Escribe primero en papel qué cálculo o transformación debe ocurrir. Luego traduce cada paso a una asignación u operador de Java.",
    "Si el resultado no te cuadra, imprime valores intermedios. Ver el estado de las variables ayuda a descubrir en qué paso te equivocaste.",
    "Prueba el mismo programa cambiando únicamente los valores iniciales. Si funciona con varios casos, probablemente tu lógica está bien generalizada."
  ],
  2:[
    "Identifica primero las condiciones del problema en lenguaje natural. Después decide cuáles se traducen con comparaciones y cuáles necesitan &&, || o !.",
    "Si hay varios caminos posibles, dibuja mentalmente el orden de decisión. Pregúntate qué condición conviene evaluar primero para descartar casos.",
    "En un ciclo distingue tres cosas: valor inicial, condición de término y cambio por iteración. Si una falta, probablemente el ciclo no hará lo esperado.",
    "Prueba casos de borde: exactamente en el límite, justo debajo y justo encima. Esos valores suelen revelar errores en <, <=, > y >=."
  ],
  3:[
    "Antes de leer datos, anota cuántos valores necesitas y qué tipo tiene cada uno. Eso te ayudará a elegir nextInt(), nextDouble(), nextLine(), etc.",
    "Si mezclas lectura numérica con texto y algo parece saltarse una entrada, revisa qué quedó pendiente en el buffer antes de cambiar toda la lógica.",
    "Valida primero la entrada y recién después procesa el dato. Separar validación de cálculo hace el programa más fácil de razonar.",
    "Para menús, piensa en un ciclo que mantenga el programa vivo y en una opción concreta que lo termine de forma controlada."
  ],
  4:[
    "Usa break solo cuando exista una razón clara para abandonar el ciclo antes de su condición normal de término.",
    "Usa continue cuando quieras descartar una iteración concreta pero seguir procesando las siguientes.",
    "Antes de ocupar break o continue, pregúntate si un if bien organizado resolvería lo mismo con mayor claridad.",
    "Prueba escenarios donde la salida anticipada ocurre al principio, a la mitad y al final. Así verificas que no queden tareas pendientes dentro del ciclo."
  ],
  5:[
    "Pregúntate qué parte del algoritmo podría tener nombre propio. Si puedes describirla con un verbo, probablemente es buena candidata a método.",
    "Decide primero si el método necesita información externa. Si no la necesita, cero parámetros; si la necesita, pasa solo los datos indispensables.",
    "Distingue entre hacer algo y calcular algo: los métodos que solo ejecutan una acción pueden ser void; los que producen un dato deberían retornarlo.",
    "Una variable local pertenece al bloque donde fue declarada. Si necesitas su valor fuera, piensa si corresponde retornarlo en vez de volverla global."
  ],
  6:[
    "Recuerda que el primer índice es 0 y el último es length - 1. Antes de acceder directamente, verifica mentalmente que el índice esté dentro del rango.",
    "Si debes recorrer todas las posiciones y además necesitas saber en cuál estás, un for clásico suele darte más control que un for-each.",
    "Si solo necesitas leer todos los valores sin modificar posiciones, prueba pensar el ejercicio con for-each.",
    "Antes de recorrer el arreglo, define qué estado necesitas conservar: suma, contador, mayor, menor, posición encontrada, etc."
  ],
  7:[
    "En un filtrado, define claramente qué condición hace que un elemento pertenezca al resultado. Primero decide, después acumula o transforma.",
    "Si transformas un arreglo, decide si debes modificar el original o construir uno nuevo. No son equivalentes y el enunciado suele dar la pista.",
    "Para frecuencias o búsquedas repetidas, piensa qué información debes acumular durante un recorrido y qué puedes decidir recién al final.",
    "En problemas con mayor/menor o segundo mayor, evita valores mágicos si puedes inicializar tu referencia usando datos reales del propio arreglo."
  ],
  8:[
    "Piensa una matriz como fila y columna. Para recorrerla completa necesitas un ciclo para las filas y otro para las columnas.",
    "Antes de usar i y j, decide cuál representará fila y cuál columna y mantén esa convención en todo el ejercicio.",
    "Cuando calcules algo por fila o por columna, fíjate en qué nivel del ciclo debes reiniciar el acumulador.",
    "Para diagonales y transformaciones, observa la relación entre fila y columna. Muchas reglas matriciales aparecen al comparar i con j."
  ],
  9:[
    "No intentes resolver todo dentro de main. Divide el problema en responsabilidades pequeñas y nómbralas antes de escribir sus métodos.",
    "Identifica qué datos representan el estado del mini sistema y qué operaciones cambian o consultan ese estado.",
    "Separa el flujo del menú de la lógica de cálculo. Un menú debería decidir qué hacer; los métodos deberían hacer el trabajo específico.",
    "Prueba el sistema como usuario: caso normal, dato inválido, búsqueda sin resultado, límites y salida. Un integrador falla más por casos olvidados que por sintaxis."
  ]
};
