# 22. MarketApp · Gestión de productos y ventas con `List` / `ArrayList`

## Contexto

Una pequeña tienda necesita una aplicación de consola que permita administrar sus productos y registrar ventas durante la jornada.

La aplicación se llamará **MarketApp** y debe utilizar colecciones dinámicas de Java, específicamente la interfaz `List` y la implementación `ArrayList`.

El objetivo principal del ejercicio es practicar el trabajo con **listas de objetos**: agregar, buscar, recorrer y eliminar elementos. No se espera una arquitectura compleja ni persistencia en archivos o base de datos.

## Objetivo de aprendizaje

Al finalizar el ejercicio deberías ser capaz de:

- declarar una colección utilizando `List<T>`;
- crearla utilizando `ArrayList<T>`;
- agregar objetos con `add`;
- recorrer una lista;
- buscar objetos utilizando una condición;
- eliminar objetos de una lista;
- consultar `size()` y otras operaciones básicas;
- utilizar objetos almacenados en una colección para resolver una operación de negocio sencilla.

## Modelo mínimo

### Clase `Producto`

Cada producto debe contener, al menos:

| Atributo | Tipo sugerido | Descripción |
| --- | --- | --- |
| `codigo` | `String` | Identificador único del producto |
| `nombre` | `String` | Nombre descriptivo |
| `precio` | `double` | Precio unitario |
| `stock` | `int` | Unidades disponibles |

La clase debe tener constructor, getters necesarios y un método que permita mostrar la información del producto de manera legible.

Puedes agregar métodos sencillos como `aumentarStock` o `descontarStock` si te ayudan a mantener el código claro.

### Clase `Venta`

Cada venta representa una operación realizada durante la jornada.

Debe contener, al menos:

| Atributo | Tipo sugerido | Descripción |
| --- | --- | --- |
| `producto` | `Producto` | Producto vendido |
| `cantidad` | `int` | Cantidad vendida |
| `total` | `double` | Total de la operación |

El total puede calcularse como:

```text
total = precio del producto × cantidad
```

## Colecciones

En `Main` deberás trabajar con dos listas:

```java
List<Producto> productos = new ArrayList<>();
List<Venta> ventas = new ArrayList<>();
```

La primera representa el catálogo disponible y la segunda conserva las ventas realizadas para poder generar el resumen de caja.

## Menú requerido

La aplicación debe mantenerse ejecutándose hasta que el usuario elija salir.

```text
========================
        MARKET APP
========================
1. Ingresar producto
2. Eliminar producto
3. Vender producto
4. Resumen de caja
5. Salir
========================
Seleccione una opción:
```

> Durante esta clase **no es necesario utilizar `switch`**. La detección de las opciones debe realizarse con `if` / `else if`.

## Requerimientos funcionales

### 1. Ingresar producto

Solicita al usuario:

- código;
- nombre;
- precio;
- stock inicial.

Crea un objeto `Producto` y agrégalo a `productos` utilizando `add`.

Antes de agregarlo, busca si ya existe un producto con el mismo código.

Si existe, informa al usuario y evita duplicarlo.

Al finalizar, muestra cuántos productos existen actualmente en la lista.

### 2. Eliminar producto

Solicita el código del producto a eliminar.

Busca el producto dentro de `productos`.

- Si existe, elimínalo de la lista.
- Si no existe, informa que no fue encontrado.

Después de la operación muestra nuevamente la cantidad de productos registrados.

> El foco aquí es practicar búsqueda y eliminación sobre una `List<Producto>`.

### 3. Vender producto

Solicita:

- código del producto;
- cantidad a vender.

Busca el producto en la lista.

La venta solamente puede realizarse si:

- el producto existe;
- la cantidad solicitada es mayor que cero;
- existe stock suficiente.

Si la venta es válida:

1. descuenta la cantidad vendida del stock;
2. crea un objeto `Venta`;
3. agrega la venta a `ventas`;
4. muestra el total de la operación.

Ejemplo:

```text
Producto: Café
Cantidad: 2
Precio unitario: $3.500
Total venta: $7.000
Venta registrada correctamente.
```

### 4. Resumen de caja

Recorre la lista `ventas` y muestra:

- cantidad de ventas realizadas;
- cantidad total de unidades vendidas;
- monto total recaudado;
- detalle de cada venta.

Ejemplo:

```text
========= RESUMEN DE CAJA =========
Ventas realizadas: 3
Unidades vendidas: 7
Total recaudado: $24.500

Detalle:
- Café x2 -> $7.000
- Bebida x1 -> $2.500
- Pan x4 -> $15.000
===================================
```

Si todavía no existen ventas, muestra un mensaje apropiado.

### 5. Salir

Finaliza el ciclo del menú y muestra un mensaje de despedida.

## Restricciones del ejercicio

Para mantener el foco de la actividad:

- utiliza `List` y `ArrayList`;
- utiliza `if` / `else if` para detectar las opciones del menú;
- no utilices `switch`;
- no utilices base de datos;
- no utilices archivos;
- no agregues frameworks;
- no es necesario crear repositorios, servicios ni otras capas;
- evita resolver las operaciones con estructuras que todavía no hemos revisado si una búsqueda mediante recorrido de la lista es suficiente.

## Código inicial

Se entrega un `Main.java` que ya contiene:

- el ciclo principal;
- el menú;
- lectura de la opción;
- detección de cada opción mediante `if`;
- puntos marcados con `TODO`.

El código inicial está disponible en [`Main.java`](Main.java).

Tu trabajo comienza implementando las clases `Producto` y `Venta`, declarando las listas y completando cada operación.

## Secuencia sugerida

1. Crea `Producto`.
2. Declara `List<Producto>`.
3. Implementa **Ingresar producto**.
4. Implementa **Eliminar producto**.
5. Implementa la búsqueda de un producto por código.
6. Crea `Venta`.
7. Declara `List<Venta>`.
8. Implementa **Vender producto**.
9. Implementa **Resumen de caja**.
10. Prueba el programa completo ejecutando varias operaciones antes de salir.

## Criterios de aceptación

El ejercicio se considera terminado cuando se puede ejecutar esta secuencia sin reiniciar el programa:

```text
Ingresar Producto A
Ingresar Producto B
Ingresar Producto C
Eliminar Producto B
Vender 2 unidades de Producto A
Vender 1 unidad de Producto C
Mostrar resumen de caja
Salir
```

Al finalizar:

- Producto B ya no debe existir en el catálogo;
- el stock de A y C debe haber disminuido;
- deben existir dos objetos en la lista de ventas;
- el resumen debe coincidir con las ventas realizadas;
- una opción inexistente del menú debe mostrar un mensaje de error sin cerrar la aplicación.

## Desafíos opcionales

Sólo después de completar los requisitos principales:

1. Mostrar el catálogo completo después de ingresar o eliminar un producto.
2. Permitir aumentar el stock de un producto existente.
3. Mostrar cuál fue la venta de mayor monto.
4. Impedir la eliminación de un producto que ya no tiene sentido eliminar según una regla propuesta por ti.
5. Formatear los montos de salida para que sean más fáciles de leer.

> Primero haz funcionar correctamente el flujo básico. Los desafíos son adicionales y no reemplazan los requisitos principales.
