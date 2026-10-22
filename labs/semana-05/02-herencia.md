# 02 · Crear la clase padre y la subclase

[← 01 · Preparación](01-preparacion.md) · [Índice](README.md) · [03 · Polimorfismo →](03-polimorfismo.md)

## Paso 1 · Crear la clase padre
1. Clic derecho sobre `src` → **New → Java Class** → `Envio`.
2. Pega el archivo completo:

```java
public class Envio {
    private final String codigo;
    private final int distanciaKm;

    public Envio(String codigo, int distanciaKm) {
        this.codigo = codigo;
        this.distanciaKm = distanciaKm;
    }

    public String getCodigo() { return codigo; }
    public int getDistanciaKm() { return distanciaKm; }

    public int calcularCosto() {
        return 1000 + (500 * distanciaKm);
    }
}
```

**Checkpoint A:** no hay errores de sintaxis. Señala cuál método devuelve el costo base para todo envío.

## Paso 2 · Crear la subclase
1. Clic derecho en `src` → **New → Java Class** → `EnvioExpress`.
2. Copia el archivo entero:

```java
public class EnvioExpress extends Envio {
    public EnvioExpress(String codigo, int distanciaKm) {
        super(codigo, distanciaKm);
    }

    @Override
    public int calcularCosto() {
        return super.calcularCosto() + 2000;
    }
}
```

**¿Qué acaba de pasar?** `extends Envio` evita duplicar los atributos. `super(codigo, distanciaKm)` ejecuta el constructor del padre. `super.calcularCosto()` reutiliza la tarifa base; `@Override` confirma que estamos redefiniendo un método existente.

## Paso 3 · Comprobar el cálculo
En `Main.java`, reemplaza el contenido con:

```java
public class Main {
    public static void main(String[] args) {
        Envio normal = new Envio("N01", 3);
        EnvioExpress rapido = new EnvioExpress("E01", 3);

        System.out.println("Normal: " + normal.calcularCosto());
        System.out.println("Expreso: " + rapido.calcularCosto());
    }
}
```

Ejecuta `Main.main()` otra vez.

**Checkpoint B:** consola: `Normal: 2500` y `Expreso: 4500`. Si ambos salen iguales, revisa la firma del método y que `EnvioExpress` tenga `@Override`. Si faltan clases, comprueba que los tres archivos están en la misma carpeta de código.

[Continuar →](03-polimorfismo.md)
