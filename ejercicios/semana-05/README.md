# Ejercicios · Semana 05 · Herencia y polimorfismo
**Objetivo:** distinguir cuándo usar herencia, reutilizar el constructor de la clase padre, sobrescribir métodos y observar despacho dinámico. Cada ejercicio cabe en unas pocas clases Java y no depende del laboratorio Despachos urbanos ni de Veterinaria.

## E01 · Generalizar la notificación
**Foco:** `extends` y `super(...)`. Una notificación tiene `destinatario` y método `destino()`. Crea `Notificacion` y `NotificacionCorreo`, que añade `asunto`. Reutiliza el constructor padre en la subclase.
- **Prueba:** correo dirigido a «lina@ejemplo.cl» con asunto «Bienvenida»; `destino()` retorna la dirección. El objeto subclase conserva el asunto.
- **Pregunta:** ¿qué atributo NO deberías duplicar en `NotificacionCorreo`?
- **No hacer:** SMTP, mensajes reales, interfaces ni colecciones.

## E02 · Comportamiento especializado
**Foco:** `@Override` con regla observable. `Entrada` declara `int precioFinal()` que retorna precio base; `EntradaEstudiante` redefine el costo descontando el 20% (montos enteros divisibles por 5).
- **Pruebas:** entrada general $5.000 → $5.000; estudiante $5.000 → $4.000.
- **Caso límite:** precio base $0 → $0 (no negativos para esta práctica).
- **Pregunta:** ¿por qué definir otro método `precioEstudiante()` no demuestra sobrescritura?
- **No hacer:** venta, stock, cajas registradoras.

## E03 · Una referencia, dos comportamientos
**Foco:** polimorfismo dinámico. Crea un método `mostrarCobro(Entrada entrada)` que imprima `precioFinal()`, usando las dos clases de E02. Si comienzas directamente aquí, utiliza este punto de partida: `Entrada` almacena un entero y retorna el precio base; `EntradaEstudiante` extiende y sobrescribe con 20% de descuento.
- **Pruebas:** dos objetos declarados como `Entrada`, uno de cada tipo → salidas distintas de $5.000 y $4.000.
- **Pregunta:** ¿cómo sabe Java qué implementación ejecutar sin un `if` que pregunte por el tipo?
- **No hacer:** listas, `instanceof` obligatorio ni interfaces.

## Cobertura
E01 herencia/constructor, E02 sobrescritura, E03 despacho dinámico. E02 y E03 pueden compartir el mismo proyecto **local de práctica**, pero ninguno exige un laboratorio de otra semana.

[Índice de ejercicios](../README.md)
