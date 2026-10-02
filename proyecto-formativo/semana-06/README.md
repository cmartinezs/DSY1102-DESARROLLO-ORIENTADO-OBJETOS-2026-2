# PetCare · Semana 06 · Colecciones y excepciones

**Periodo:** 14 al 19 de septiembre de 2026  
**Sección:** DSY1102-012V

## Punto de entrada

PetCare posee una jerarquía de mascotas y puede tratar distintos subtipos mediante referencias de `Mascota`.

## Problema que aparece

Una aplicación real no administra una única mascota. Necesitamos registrar varias, recorrerlas, buscarlas y retirar elementos sin conocer de antemano cuántas existirán.

También aparecen situaciones inválidas que no deberían resolverse silenciosamente.

## Objetivo

Incorporar manejo de múltiples objetos mediante arrays y luego `List / ArrayList`, junto con manejo explícito de excepciones.

## Progresión

```text
Mascota individual
→ Mascota[]
→ observar límite de tamaño fijo
→ List<Mascota>
→ ArrayList<Mascota>
→ registrar / listar / buscar / eliminar
→ condición inválida
→ throw
→ try/catch
```

## Trabajo esperado

### 1. Observar el problema con arrays

Crear temporalmente un array de mascotas y comprobar:

- tamaño fijo;
- acceso por índice;
- recorrido;
- dificultad de crecer o eliminar elementos.

El array es parte del aprendizaje; no tiene que mantenerse como solución final.

### 2. Evolucionar a `List<Mascota>`

La colección principal puede quedar encapsulada en una clase de coordinación:

```text
cli.App
    ↓
PetCareService
    ↓
List<Mascota>
```

Operaciones mínimas sugeridas:

- registrar mascota;
- listar mascotas;
- buscar por algún criterio;
- eliminar o retirar una mascota.

No se exige una firma exacta.

### 3. Manejar situaciones inválidas

Elegir al menos una operación donde el error sea significativo.

Ejemplos:

- buscar una mascota inexistente;
- intentar registrar un identificador inválido;
- eliminar una mascota que no existe.

La lógica que detecta el problema puede lanzar una excepción. La CLI decide cómo comunicarla al usuario.

## Separación de responsabilidades

Evitar que `main` haga todo:

```text
leer datos
+ validar negocio
+ recorrer colección
+ decidir búsqueda
+ eliminar
+ imprimir
```

Preferir:

```text
CLI
→ solicita / muestra

Servicio
→ coordina colección y reglas

Modelo
→ protege estado propio
```

## Checkpoint de salida

```text
cli.App
    ↓
PetCareService
    ↓
List<Mascota>
    ↓
Perro / Gato / ...
```

y manejo explícito de al menos una situación inválida.

## Evidencia esperada

- comparación demostrable entre array y colección dinámica;
- `List<Mascota>` funcional;
- operaciones de alta, recorrido y búsqueda;
- eliminación o modificación justificada;
- `throw` en una condición inválida;
- `try/catch` en una capa capaz de responder al error;
- ausencia de duplicación artificial de lógica por subtipo;
- DevLog explicando quién detecta, quién lanza y quién captura el error.

## Fuera de alcance

- `Set` y `Map`;
- Streams;
- lambdas;
- JavaFX;
- persistencia.
