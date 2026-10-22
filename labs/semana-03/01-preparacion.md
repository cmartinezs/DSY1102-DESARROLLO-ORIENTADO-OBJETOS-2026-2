# 01 · Crear CuentaSeguraS03 desde cero

[← Índice](README.md) · [02 · Clase Cuenta →](02-modelar-cuenta.md)

## Paso 1 · Nuevo proyecto
1. Abre IntelliJ IDEA → **New Project**.
2. Selecciona **Java**, nombre **CuentaSeguraS03**, **JDK 21**, Build system **IntelliJ**.
3. Pulsa **Create** y abre el panel **Project**.
4. Localiza `src`; si no existe, créala y márcala como **Sources Root**.
5. Clic derecho en `src` → **New → Java Class** → `Main`.

Pega:
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Cuenta segura: proyecto iniciado");
    }
}
```
Ejecuta con el triángulo verde junto a `main`.

**Checkpoint A:** aparece el texto en consola. Si falla, revisa que exista JDK en **File → Project Structure → Project** y que `Main.java` esté en `src`.

## Paso 2 · Preparar el segundo archivo
Sobre `src`, clic derecho → **New → Java Class** → `Cuenta`. Todavía no implementes su contenido: en la próxima etapa reemplazarás su clase vacía.

**Checkpoint B:** existen `Main.java` y `Cuenta.java`, ambos en el mismo proyecto **nuevo**.

[Continuar →](02-modelar-cuenta.md)
