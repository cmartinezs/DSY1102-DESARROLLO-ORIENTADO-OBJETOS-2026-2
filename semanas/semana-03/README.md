# Semana 3 · De métodos a objetos y encapsulamiento

**Periodo:** 24 al 29 de agosto de 2026  
**Sección:** DSY1102-012V  
**Foco:** transición desde fundamentos de Java hacia Programación Orientada a Objetos

← [Volver al índice](../README.md)

## Punto de entrada real

La sección cerró la semana anterior trabajando:

- variables primitivas y `String`;
- `if`, `else if`, `else`;
- `for`;
- `while`;
- `do-while`;
- `System.out.println`;
- ejecución básica de programas Java.

Por lo tanto, **no corresponde iniciar esta semana directamente con herencia, clases abstractas o polimorfismo**. Antes debemos construir la base que esos conceptos requieren.

La disponibilidad curricular nunca debe confundirse con avance real de aula.

## Ruta de aprendizaje

```text
repaso de flujo
→ métodos
→ parámetros y retorno
→ clase
→ atributos
→ constructor
→ objeto / instancia
→ métodos de instancia
→ encapsulamiento
→ estado válido
→ práctica integrada
```

## Objetivo de la semana

Que el estudiante deje de resolver todo dentro de `main` y comience a distribuir responsabilidades en métodos y objetos simples.

Al finalizar debería poder explicar y aplicar:

- qué problema resuelve un método;
- diferencia entre parámetro, argumento y retorno;
- diferencia entre clase y objeto;
- qué representa un atributo;
- para qué sirve un constructor;
- cómo un método modifica o consulta el estado de un objeto;
- por qué `private` protege el estado interno;
- por qué encapsular no significa simplemente «poner todo private».

## Material

1. [Métodos: salir de `main`](./01-metodos.md)
2. [Clases, atributos, constructores y objetos](./02-clases-objetos.md)
3. [Encapsulamiento y estado válido](./03-encapsulamiento.md)
4. [Práctica incremental](./04-practica.md)
5. [Dinámica viva · ¿Dato o responsabilidad?](./dinamica-viva-dato-o-responsabilidad.md)

## Regla pedagógica

Se mantienen dos verticales separadas:

1. **Contenido semanal:** ejemplos pequeños y neutrales, ejercicios breves y práctica guiada.
2. **PetCare:** proyecto transversal individual que aplica lo aprendido después de comprenderlo; no se usa como explicación principal de cada concepto.

No se mezclan ambos flujos en los mismos ejemplos ni se fuerza PetCare a avanzar por delante del contenido alcanzado.

## Relación con DSY1105 · Desarrollo de Aplicaciones Móviles

La coordinación de DSY1105 considera POO como conocimiento previo y durante su Semana 3 reutiliza conceptos como clase, atributos, métodos, objetos y encapsulamiento para enseñar **cómo se expresan en Kotlin**.

Eso refuerza la importancia de que aquí esos conceptos se aprendan correctamente en Java. Sin embargo, **DSY1102 no debe acelerarse artificialmente para sincronizarse con otra cohorte o asignatura**: se respeta el avance real de esta sección.

## Fuera de alcance central esta semana

- herencia;
- clases abstractas;
- interfaces;
- polimorfismo;
- colecciones;
- excepciones;
- persistencia.

Herencia será el siguiente paso natural una vez que clase, objeto y encapsulamiento estén efectivamente consolidados.

## Evidencia semanal

Cada estudiante debe conservar:

- código ejecutable con métodos;
- al menos dos clases propias sencillas;
- varias instancias creadas desde `main`;
- atributos privados cuando corresponda;
- métodos que consulten o modifiquen estado;
- un ejercicio integrado resuelto por cuenta propia;
- DevLog con aprendizaje, dificultad, error real y siguiente paso.

## Checkpoint mínimo

Antes de cerrar la semana, el estudiante debe poder explicar este código sin memorizarlo:

```java
class Cuenta {
    private double saldo;

    public Cuenta(double saldoInicial) {
        saldo = saldoInicial;
    }

    public void depositar(double monto) {
        if (monto > 0) {
            saldo += monto;
        }
    }

    public double consultarSaldo() {
        return saldo;
    }
}
```

Debe identificar clase, atributo, constructor, parámetro, método, objeto y encapsulamiento, y justificar por qué `saldo` no se modifica directamente desde cualquier parte del programa.

## Cierre docente obligatorio

Registrar al finalizar: último concepto efectivamente alcanzado, práctica realizada, errores frecuentes, conceptos pendientes, estado real de PetCare y punto exacto de inicio de Semana 4.