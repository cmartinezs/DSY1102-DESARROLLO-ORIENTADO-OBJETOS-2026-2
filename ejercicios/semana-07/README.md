# Ejercicios · Semana 07 · Abstracción, interfaces y polimorfismo
**Objetivo:** distinguir clases abstractas de capacidades, aplicándolo a decisiones pequeñas y comprobables; sin construir MediaHub ni Centro de soporte técnico del laboratorio.

## E01 · Área de una figura
**Foco:** contrato abstracto. Modela `Figura` como clase abstracta con `double area()` y una implementación `Cuadrado` con lado. Usa una variable `Figura` para consultar el área.
- **Pruebas:** lado 4 → 16; lado 0 → 0.
- **Pregunta:** ¿por qué no debe instanciarse una `Figura` genérica en este diseño?
- **No hacer:** interfaz gráfica, dibujos, listas de figuras.

## E02 · Capacidad de recarga
**Foco:** interfaz. Modela `Recargable` con `void recargar(int unidades)`. Una `Linterna` implementa la capacidad; una `Vela` no. Mantén las reglas de la batería de la linterna en un método sencillo.
- **Prueba:** linterna inicia con 2 unidades, recarga 3 → 5; vela no tiene método `recargar`.
- **Pregunta:** ¿por qué `Recargable` representa una capacidad y no una clase padre común para toda fuente de luz?
- **No hacer:** heredar Linterna de Vela ni sensores.

## E03 · Despacho polimórfico de una instrucción
**Foco:** referencias a interfaz y comportamientos distintos. Define `Saludable` con `String saludar()`; dos implementaciones `SaludoFormal` y `SaludoCercano`, cada una devuelve un texto distinto. Crea `imprimir(Saludable saludo)`.
- **Pruebas:** usando el mismo método `imprimir`, una implementación devuelve «Buenos días» y otra «Hola».
- **Pregunta:** ¿qué diferencia existe entre decidir con `if` en `imprimir` y dejar que cada implementación resuelva `saludar()`?
- **No hacer:** jerarquías largas ni colecciones.

## Cobertura
Clase/método abstracto (E01), interfaz/capacidad (E02), polimorfismo (E03). Cuando sea necesario, el docente puede demostrar una sola declaración de interfaz antes de que el alumno realice el ejercicio; no regalar la solución final.

[Índice de ejercicios](../README.md)
