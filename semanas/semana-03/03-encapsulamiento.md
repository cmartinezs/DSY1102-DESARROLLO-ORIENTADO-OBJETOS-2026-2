# 3 · Encapsulamiento y estado válido

## El problema

Si cualquier parte del programa puede modificar directamente el estado de un objeto, también puede dejarlo en una condición inválida.

```java
class Cuenta {
    double saldo;
}
```

```java
Cuenta cuenta = new Cuenta();
cuenta.saldo = -999999;
```

El programa lo permite aunque el modelo quizás no debería.

## Proteger el estado

```java
class Cuenta {
    private double saldo;

    public Cuenta(double saldoInicial) {
        if (saldoInicial >= 0) {
            saldo = saldoInicial;
        }
    }

    public void depositar(double monto) {
        if (monto > 0) {
            saldo += monto;
        }
    }

    public boolean retirar(double monto) {
        if (monto > 0 && monto <= saldo) {
            saldo -= monto;
            return true;
        }
        return false;
    }

    public double consultarSaldo() {
        return saldo;
    }
}
```

`private` impide modificar `saldo` directamente desde fuera de la clase. Los métodos públicos definen las operaciones permitidas.

## Encapsular no es solo usar `private`

Encapsular significa:

- ocultar detalles internos cuando corresponde;
- exponer operaciones con sentido;
- proteger reglas del objeto;
- impedir estados incoherentes.

Un getter y setter automático para todo puede volver a abrir exactamente el problema que `private` intentaba resolver.

## Ejercicio breve

Crea `Termometro` con una temperatura interna privada.

Requisitos:

- constructor con temperatura inicial;
- método `subir(double grados)`;
- método `bajar(double grados)`;
- método `consultar()`;
- no permitir valores inferiores a -273.15 °C.

Después explica dónde vive la regla y por qué no conviene que `temperatura` sea pública.

## Checkpoint

Debes poder explicar:

- qué protege `private`;
- por qué un atributo privado puede necesitar métodos públicos;
- diferencia entre ocultar datos y proteger reglas;
- qué significa mantener un objeto en estado válido.