# 05 · Main, menú y manejo de excepciones

## Responsabilidad de Main

Main se encarga de la interacción con el usuario:

- mostrar el menú;
- leer datos;
- convertir entradas;
- capturar errores;
- invocar operaciones de Veterinaria.

No debería contener las reglas internas de cada animal ni administrar directamente la lista.

## Menú objetivo

~~~text
=== VETERINARIA CONSOLE ===
1. Registrar perro
2. Registrar gato
3. Registrar ave
4. Listar animales
5. Emitir sonidos
6. Buscar animal
7. Vacunar animal
0. Salir
~~~

## Entradas inválidas

El flujo esperado es:

~~~text
entrada
→ conversión
→ validación
→ ejecución
~~~

Debemos controlar situaciones como:

- texto cuando se espera un número;
- edad negativa;
- animal inexistente;
- intento de vacunar un animal que no cumple Vacunable.

El programa debe informar el problema y continuar ejecutándose.

## Polimorfismo vs instanceof

No usamos instanceof Perro para decidir el sonido. Para eso usamos:

~~~java
animal.emitirSonido();
~~~

Pero sí puede ser válido preguntar si un objeto cumple una capacidad opcional:

~~~java
if (animal instanceof Vacunable) {
    // cumple el contrato
}
~~~

## Conocimiento que debes adquirir

Debes poder distinguir:

- lógica de interacción;
- lógica de dominio;
- error de conversión;
- validación de negocio;
- comportamiento polimórfico;
- comprobación de una capacidad opcional.

## Avance consolidado esperado

Al finalizar esta etapa:

- existe Main.java;
- el menú funciona;
- las opciones invocan métodos de Veterinaria;
- una entrada inválida no termina abruptamente la aplicación;
- el flujo vuelve al menú después de cada operación.

➡️ [Siguiente: integración y prueba final](./06-integracion-y-prueba-final.md)
