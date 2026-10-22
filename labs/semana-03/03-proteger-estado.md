# 03 · Proteger el estado: cargar y consumir

[← 02 · Modelo](02-modelar-bateria.md) · [Índice](README.md) · [04 · Pruebas →](04-pruebas-checkpoints.md)

## Paso 1 · Agregar métodos dentro de Bateria
Abre `src/Bateria.java`. **No borres el constructor ni los getters**. Inserta estos dos métodos **antes** de la última llave `}` de la clase:

```java
public boolean cargar(int puntos) {
    if (puntos <= 0 || porcentaje + puntos > 100) {
        return false;
    }
    porcentaje += puntos;
    return true;
}

public boolean consumir(int puntos) {
    if (puntos <= 0 || puntos > porcentaje) {
        return false;
    }
    porcentaje -= puntos;
    return true;
}
```

**Checkpoint A:** ambos métodos compilan. Si agregas las llaves fuera de la clase, IntelliJ marcará error rojo: verifica que estén **dentro** de `Bateria`.

## Paso 2 · Ejecutar acciones desde Main
En `Main.java`, **después de crear ambos objetos y antes de la llave final de `main`**, agrega:

```java
System.out.println("Carga dron: " + dron.cargar(60));
System.out.println("Carga cámara: " + camara.cargar(30));
System.out.println("Consumo dron: " + dron.consumir(20));
System.out.println("Consumo imposible cámara: " + camara.consumir(40));
System.out.println("Dron final: " + dron.getPorcentaje() + "%");
System.out.println("Cámara final: " + camara.getPorcentaje() + "%");
```

Ejecuta. Los retornos son `true`, `true`, `true`, `false`. El dron queda en **40%** y la cámara en **30%**.

**Checkpoint B:** la cámara no baja de 0 aunque intentes consumir más de lo disponible.

## Paso 3 · Entender responsabilidades
`Main` solicita acciones; `Bateria` protege sus propias reglas. El retorno `false` expresa operación rechazada sin introducir todavía excepciones.

[Continuar →](04-pruebas-checkpoints.md)
