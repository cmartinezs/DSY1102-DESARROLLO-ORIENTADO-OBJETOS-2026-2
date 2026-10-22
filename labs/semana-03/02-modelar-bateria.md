# 02 · Modelar una batería con constructor

[← 01 · Preparación](01-preparacion.md) · [Índice](README.md) · [03 · Validación →](03-proteger-estado.md)

## Paso 1 · Implementar Bateria.java
Abre `src/Bateria.java`. Reemplaza su contenido:

```java
public class Bateria {
    private final String dispositivo;
    private int porcentaje;

    public Bateria(String dispositivo) {
        this.dispositivo = dispositivo;
        this.porcentaje = 0; // Batería nueva: descargada
    }

    public String getDispositivo() { return dispositivo; }
    public int getPorcentaje() { return porcentaje; }
}
```

**Checkpoint A:** identifica dos atributos privados, un constructor y getters. No hay un setter que permita `porcentaje = 300`.

## Paso 2 · Crear dos objetos
En `Main.java`, reemplaza por:

```java
public class Main {
    public static void main(String[] args) {
        Bateria dron = new Bateria("Dron");
        Bateria camara = new Bateria("Cámara");

        System.out.println(dron.getDispositivo() + ": " + dron.getPorcentaje() + "%");
        System.out.println(camara.getDispositivo() + ": " + camara.getPorcentaje() + "%");
    }
}
```

Ejecuta. La consola muestra dos baterías distintas al **0%**.

**Checkpoint B:** cada objeto mantiene estado propio. El constructor establece un valor inicial válido sin recibir un porcentaje arbitrario.

## Paso 3 · ¿Dónde debería cambiar el porcentaje?
No cambies `dron.porcentaje` desde `Main`: es privado. La propia clase `Bateria` debe decidir si una operación es válida. La etapa siguiente añade métodos con esas reglas.

[Continuar →](03-proteger-estado.md)
