# Ejercicios · Semana 04 · Constructores y colaboración
**Objetivo:** aplicar inicialización válida, sobrecarga, relación simple entre objetos y entrada `Scanner` con responsabilidad separada. **No** convertir un ejercicio en un proyecto de varias etapas ni repetir Pedidos de cafetería del laboratorio.

## E01 · Rango válido al construir un producto
**Foco:** constructor y estado inicial. Modela un `Marcador` con `nombreEquipo` y `puntos`. Implementa un constructor con nombre obligatorio y puntos iniciales en 0. Agrega `sumarPuntos(int cantidad)` rechazando negativos.
- **Pruebas:** equipo local 0; sumar 3 → 3; sumar -2 → rechazado y sigue en 3.
- **Pregunta:** ¿qué defecto habría en crear `Marcador` con nombre vacío y recordar completar ese dato después?

## E02 · Dos formas de crear el mismo objeto
**Foco:** sobrecarga de constructores y `this(...)`. Crea `Reloj` con hora y minuto; permite `Reloj()` (00:00) y `Reloj(int hora, int minuto)`. No es necesario controlar segundos.
- **Pruebas:** constructor vacío → «00:00»; `Reloj(9,5)` → «09:05».
- **Caso límite:** muestra también `Reloj(0,0)` → «00:00». Por ahora se asume que las horas/minutos entregados al constructor son válidos; el rechazo mediante excepciones se practica en semana 06.
- **Pregunta:** ¿qué duplicación evita un constructor al usar `this(...)` para delegar los valores por defecto?

## E03 · Cliente y credencial (dos objetos que colaboran)
**Foco:** una clase recibe otra como dato. `Persona` tiene nombre; `Credencial` recibe `Persona` y código en constructor; `Credencial.resumen()` debe mostrar ambos sin duplicar el nombre en un segundo atributo.
- **Prueba:** persona «Lina», credencial «C-07» → «C-07 / Lina».
- **Pregunta:** ¿por qué se pasa una `Persona` y no se copia su nombre como otro campo de `Credencial`?
- **No hacer:** listas, menús, autenticación, persistencia.

## E04 · Leer una decisión, no mezclar reglas
**Foco:** `Scanner` para entrada y `main` como coordinador. Lee el nombre de un participante y un número entero de intentos; instancia un objeto mínimo `Participante` con esos datos y muestra su resumen.
- **Pruebas:** «Ana», 3 → «Ana: 3 intentos»; 0 intentos → «Cantidad inválida» antes de construir el objeto.
- **Pista:** `nextLine()` permite leer el nombre y `nextInt()` el número. Trabaja con entrada numérica bien formada; semana 06 abordará conversión inválida y excepciones. Rechaza explícitamente cero o negativos antes de crear el objeto.
- **Pregunta:** ¿qué parte corresponde a interacción y cuál al modelo?
- **No hacer:** crear una clase `LectorConsola`, lectores sobrecargados o un menú de aplicación.

## Separación importante
Las antiguas guías **[Evolución de Cuenta](evolucion-cuenta/)** y **[Scanner → LectorConsola](evolucion-scanner/)** son **talleres guiados de profundización**, no ejercicios mínimos. Se conservan sin deshacer su secuencia histórica. El banco previo también se conserva en [archivo](BANCO-ORIGINAL-2026.md).

## Cobertura
Inicialización válida (E01), sobrecarga (E02), colaboración simple (E03), Scanner/entrada separada (E04). Sin obligación de resolver los talleres históricos como parte del banco mínimo.

[Índice](../README.md)
