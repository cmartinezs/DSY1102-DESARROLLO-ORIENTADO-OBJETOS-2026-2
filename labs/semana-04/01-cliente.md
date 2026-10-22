# 01 · Nuevo proyecto y clase Cliente

[← Índice](README.md) · [02 · Pedido →](02-pedido.md)

## Paso 1 · Crear el proyecto
1. Abre IntelliJ IDEA → **File → New → Project**.
2. Elige **Java**, Name: `PedidosCafeteriaS04`, **JDK 21**, Build system **IntelliJ**.
3. Presiona **Create** y espera a que se prepare.
4. En Project, clic derecho sobre `src` → **New → Java Class** → `Main`.
5. Pega:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Pedidos de cafetería");
    }
}
```

Ejecuta con Run. Si `src` no está, créala y márcala como Sources Root.

**Checkpoint A:** se imprime `Pedidos de cafetería`. Detente si no puedes ejecutar.

## Paso 2 · Crear Cliente.java
1. Clic derecho sobre `src` → **New → Java Class** → `Cliente`.
2. Reemplaza el archivo por:

```java
public class Cliente {
    private final String rut;
    private final String nombre;
    private final String correo;

    public Cliente(String rut, String nombre, String correo) {
        this.rut = rut;
        this.nombre = nombre;
        this.correo = correo;
    }

    public String getRut() { return rut; }
    public String getNombre() { return nombre; }
    public String getCorreo() { return correo; }

    public String descripcion() {
        return nombre + " (" + rut + "), " + correo;
    }
}
```

**Checkpoint B:** IntelliJ reconoce los getters y no señala errores. Los atributos son privados y el constructor entrega los tres valores.

## Paso 3 · Verificar dos objetos
Reemplaza temporalmente `Main.java` por:

```java
public class Main {
    public static void main(String[] args) {
        Cliente ana = new Cliente("11111111-1", "Ana", "ana@ejemplo.cl");
        Cliente pedro = new Cliente("22222222-2", "Pedro", "pedro@ejemplo.cl");
        System.out.println(ana.descripcion());
        System.out.println(pedro.descripcion());
    }
}
```

Ejecuta y verifica que se imprimen **dos líneas distintas**. Los RUT son datos didácticos ficticios y **no se validan** en este laboratorio.

**Checkpoint C:** puedes explicar constructor, encapsulación y objetos distintos. En la siguiente etapa añadirás un Pedido que **contiene una referencia a Cliente**.

[Continuar →](02-pedido.md)
