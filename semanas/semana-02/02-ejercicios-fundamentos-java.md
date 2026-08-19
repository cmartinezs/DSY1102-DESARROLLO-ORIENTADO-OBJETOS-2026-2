# Ejercicios de práctica · Fundamentos Java

Estos ejercicios están pensados para practicar lo visto hasta ahora con situaciones sencillas y cercanas a problemas reales.

Trabaja cada ejercicio partiendo desde la clase `Main` entregada. Los comentarios funcionan como guía: completa la lógica sin borrar las variables base.

## Ejercicio 1 · Promedio de evaluaciones

Un estudiante obtuvo tres calificaciones durante la unidad. Se necesita calcular su promedio y mostrar si alcanza una nota de aprobación.

### Debes lograr

- calcular el promedio de las tres notas;
- mostrar el promedio en pantalla;
- usar una condición para indicar si el estudiante aprueba o reprueba;
- considerar nota **4.0** como mínimo de aprobación.

```java
public class Main {

    public static void main(String[] args) {
        double nota1 = 5.2;
        double nota2 = 3.8;
        double nota3 = 4.7;

        // Calcula el promedio de las tres notas.
        double promedio = 0;

        // Muestra el promedio obtenido.

        // Usa una condición para indicar si aprueba o reprueba.
        // Recuerda: desde 4.0 se considera aprobado.
    }
}
```

---

## Ejercicio 2 · Control de stock de una cafetería

Una cafetería comienza el día con 20 sándwiches preparados. Durante cinco recreos vende siempre 3 sándwiches por recreo.

Se necesita mostrar cómo va disminuyendo el stock después de cada recreo y, al finalizar, indicar si quedan pocas unidades.

### Debes lograr

- repetir el proceso exactamente 5 veces usando `for`;
- descontar 3 unidades en cada vuelta;
- mostrar el número de recreo y el stock restante;
- al terminar, indicar si el stock quedó bajo;
- considerar **5 unidades o menos** como stock bajo.

```java
public class Main {

    public static void main(String[] args) {
        int stock = 20;
        int ventaPorRecreo = 3;
        int cantidadRecreos = 5;

        // Repite el proceso una vez por cada recreo.
        for (int recreo = 1; recreo <= cantidadRecreos; recreo++) {

            // Descuenta del stock lo vendido durante este recreo.

            // Muestra el número de recreo y el stock que va quedando.
        }

        // Al finalizar, revisa si quedan 5 unidades o menos.
        // Muestra un mensaje apropiado según el resultado.
    }
}
```

---

## Ejercicio 3 · Meta de ahorro

Una persona quiere comprar unos audífonos que cuestan $80.000. Ya tiene $20.000 y cada semana puede ahorrar $12.000.

Se necesita calcular cuántas semanas deberá continuar ahorrando hasta alcanzar o superar la meta.

### Debes lograr

- utilizar `while` para continuar mientras no se alcance la meta;
- aumentar el ahorro en $12.000 por semana;
- contar cuántas semanas han pasado;
- mostrar el ahorro acumulado después de cada semana;
- mostrar al final cuántas semanas fueron necesarias.

```java
public class Main {

    public static void main(String[] args) {
        int meta = 80000;
        int ahorro = 20000;
        int ahorroSemanal = 12000;
        int semanas = 0;

        // Mientras el ahorro sea menor que la meta, sigue ahorrando.
        while (/* condición */) {

            // Aumenta el número de semana.

            // Suma el ahorro semanal al ahorro acumulado.

            // Muestra la semana y el dinero acumulado hasta ese momento.
        }

        // Muestra cuántas semanas fueron necesarias para alcanzar la meta.
    }
}
```

---

## Ejercicio 4 · Carga segura de una batería

Un dispositivo comienza con 35% de batería. En cada ciclo de carga aumenta 15 puntos porcentuales, pero la temperatura del equipo también aumenta 2 grados.

La carga debe ejecutarse al menos una vez y continuar mientras la batería sea menor a 80% **y** la temperatura no supere los 40 °C.

### Debes lograr

- utilizar `do while`;
- aumentar la batería en 15 en cada ciclo;
- aumentar la temperatura en 2 grados en cada ciclo;
- mostrar batería y temperatura después de cada ciclo;
- utilizar operadores comparativos y lógicos en la condición del ciclo;
- al finalizar, indicar si la carga terminó porque se alcanzó el nivel esperado o porque la temperatura fue demasiado alta.

```java
public class Main {

    public static void main(String[] args) {
        int bateria = 35;
        int temperatura = 32;
        int aumentoBateria = 15;
        int aumentoTemperatura = 2;

        do {
            // Aumenta el porcentaje de batería.

            // Aumenta la temperatura.

            // Muestra el estado actual de batería y temperatura.

        } while (/* batería bajo 80% Y temperatura dentro del límite */);

        // Usa una condición para explicar por qué terminó el proceso de carga.
    }
}
```

## Qué se practica en conjunto

- variables primitivas;
- operadores aritméticos;
- operadores comparativos;
- operadores lógicos;
- `if` / `else`;
- `for` simple;
- `while`;
- `do while`;
- impresión de resultados por consola.

La idea no es resolverlos todos copiando una estructura idéntica, sino identificar qué tipo de decisión o repetición representa mejor cada situación.