# 02 · Crear Pedido y su colaboración con Cliente

[← 01 · Cliente](01-cliente.md) · [Índice](README.md) · [03 · Integrar →](03-integracion.md)

## Paso 1 · Crear Pedido.java
1. Clic derecho en `src` → **New → Java Class** → `Pedido`.
2. Pega el archivo:

```java
public class Pedido {
    private final String codigo;
    private final Cliente cliente;
    private double total;

    public Pedido(String codigo, Cliente cliente) {
        this.codigo = codigo;
        this.cliente = cliente;
        this.total = 0;
    }

    public boolean agregarMonto(double monto) {
        if (monto <= 0) return false;
        total += monto;
        return true;
    }

    public boolean aplicarDescuento(double porcentaje) {
        if (porcentaje < 0 || porcentaje > 100) return false;
        total = total * (1 - porcentaje / 100);
        return true;
    }

    public double getTotal() { return total; }

    public String resumen() {
        return "Pedido " + codigo + " / " + cliente.getNombre()
                + " / total $" + total;
    }
}
```

**Checkpoint A:** la línea `private final Cliente cliente;` demuestra colaboración: `Pedido` conoce a un `Cliente` sin duplicar su rut, nombre y correo.

## Paso 2 · Entender las reglas
En la clase, identifica:
- El constructor inicializa `total` en cero.
- `agregarMonto` rechaza cero o negativos mediante `false`.
- `aplicarDescuento` admite porcentajes **0 a 100**.
- `resumen` utiliza el getter de `Cliente`, no accede directamente al atributo privado de esa clase.

**Checkpoint B:** la clase compila. Calcula a mano: añadir $8.000 y descontar 25% debe dejar $6.000.

[Continuar →](03-integracion.md)
