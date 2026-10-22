# Semana 03 · Laboratorio autónomo: Cuenta segura

**DSY1102 · clases, constructores, objetos y encapsulamiento · Java 21**

## Regla de independencia
Crea un proyecto **nuevo** llamado `CuentaSeguraS03`. Aunque el dominio es una cuenta, **NO debes copiar ni completar CuentaSimpleS02**. Esta vez hay reglas de validación del saldo, depósitos y retiros.

## Aprenderás
- a crear objetos válidos mediante constructor;
- a proteger `saldo` con `private`;
- a modelar depósitos y retiros con retorno `boolean` sin adelantar manejo de excepciones;
- a ejecutar pruebas de situaciones válidas e inválidas.

## Archivos de entrega
```text
CuentaSeguraS03/src/
  Main.java
  Cuenta.java
```

## Ruta guiada
1. [01 · Preparar el entorno](01-preparacion.md)
2. [02 · Modelar Cuenta con constructor](02-modelar-cuenta.md)
3. [03 · Proteger el saldo](03-proteger-estado.md)
4. [04 · Casos de prueba y evidencias](04-pruebas-checkpoints.md)

## Checkpoint final
- [ ] Dos instancias independientes.
- [ ] Saldo no puede modificarse directamente desde Main.
- [ ] Depósitos/retiros incorrectos se rechazan sin dañar saldo.
- [ ] Se observan resultados en consola y se explica cada responsabilidad.
