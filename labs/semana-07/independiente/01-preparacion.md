# 01 · Nuevo proyecto SoporteTecnicoS07

[← Índice](README.md) · [02 · Abstracción →](02-abstraccion.md)

## Paso 1 · Crear el entorno desde cero
1. Abre **IntelliJ IDEA → File → New → Project**.
2. Selecciona **Java**, nombre `SoporteTecnicoS07`, JDK **21** y Build system **IntelliJ**.
3. Pulsa **Create**, espera el indexado y abre el panel **Project**.
4. Sobre la carpeta `src`, clic derecho → **New → Java Class** → `Main`.
5. Pega:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Centro de soporte iniciado");
    }
}
```

6. Pulsa el triángulo verde junto a `main`.

**Checkpoint A:** consola muestra `Centro de soporte iniciado`. Si falla, comprueba el JDK del proyecto y marca `src` como Sources Root.

## Paso 2 · Pensar antes de programar
Anota los objetos del caso: **Computador** e **Impresora**. Ambos comparten el **código** y la necesidad de describirse; solo el computador puede recibir una actualización de software.

- «ES UN Equipo» se modela por herencia.
- «PUEDE actualizar software» se modela mediante una interfaz.

**Checkpoint B:** puedes explicar por qué no obligaremos a la impresora a implementar la actualización de software del computador.

[Continuar →](02-abstraccion.md)
