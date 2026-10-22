# Semana 03 · Laboratorio autónomo: Batería de un dron

**DSY1102 · Clases, objetos, constructores y encapsulamiento · Java 21**

## Caso independiente
Una empresa utiliza dispositivos electrónicos. Cada dispositivo tiene una batería con porcentaje entre **0 y 100**. Se pueden **cargar** o **consumir** puntos de batería, pero no se permite superar 100 ni bajar de 0.

Crea desde cero `BateriaDronS03`. **No reutiliza la Cuenta simple de semana 02**: el dominio, las clases y la entrega son nuevos.

## Archivos esperados
```text
BateriaDronS03/src/
  Main.java
  Bateria.java
```

## Lo que aprenderás
Crear un objeto mediante constructor; mantener campos privados; ofrecer getters sin setters indiscriminados; implementar métodos con retorno `boolean` para aceptar/rechazar operaciones; probar estados independientes.

## Ruta guiada
1. [01 · Preparación y primera ejecución](01-preparacion.md)
2. [02 · Modelar una batería](02-modelar-cuenta.md)
3. [03 · Proteger el porcentaje](03-proteger-estado.md)
4. [04 · Pruebas y evidencias](04-pruebas-checkpoints.md)

**Checkpoint final:** una batería nunca sale del rango 0–100; dos dispositivos conservan estados propios; un dato inválido no modifica el porcentaje. No necesitas colecciones, JavaFX, excepciones ni laboratorios anteriores.
