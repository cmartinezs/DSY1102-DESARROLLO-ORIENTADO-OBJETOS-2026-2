# 03 · Integrar Cliente y Pedido en Main

[← 02 · Pedido](02-pedido.md) · [Índice](README.md) · [04 · Pruebas →](04-pruebas.md)

## Paso 1 · Reemplazar Main.java
Abre `src/Main.java`, Ctrl+A y pega:

```java
public class Main {
    public static void main(String[] args) {
        Cliente ana = new Cliente("11111111-1", "Ana", "ana@ejemplo.cl");
        Pedido pedido = new Pedido("P001", ana);

        System.out.println(pedido.resumen());
        System.out.println("Agregar $8000: " + pedido.agregarMonto(8000));
        System.out.println("Descuento 25%: " + pedido.aplicarDescuento(25));
        System.out.println("Resultado: " + pedido.resumen());

        System.out.println("Descuento 150%: " + pedido.aplicarDescuento(150));
        System.out.println("Total final: " + pedido.getTotal());
    }
}
```

Pulsa Run.

**Checkpoint A:** aparece un pedido inicial de total `0.0`; las operaciones válidas devuelven `true`; el total pasa a `6000.0`; el descuento 150% devuelve `false` y no lo modifica.

## Paso 2 · Comparar responsabilidades
1. `Main` decide el orden de operaciones.
2. `Cliente` representa los datos del comprador.
3. `Pedido` controla el monto, los descuentos y la referencia al cliente.

**Pregunta:** ¿qué ocurriría si `Main` modificara directamente `pedido.total`? No compila: el atributo es privado.

**Checkpoint B:** ejecutaste un caso válido y uno inválido sin errores. Explica por qué el objeto `Pedido` recibe `Cliente` en el constructor y no tres `String` duplicados.

[Continuar →](04-pruebas.md)
