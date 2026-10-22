# 01 · Crear BateriaDronS03 desde cero

[← Índice](README.md) · [02 · Batería →](02-modelar-bateria.md)

## Paso 1 · Nuevo proyecto
1. Abre IntelliJ IDEA y presiona **New Project** o **File → New → Project**.
2. Selecciona **Java**, nombre `BateriaDronS03`, **JDK 21** y **Build system: IntelliJ**.
3. Pulsa **Create**; espera que finalice la indexación.
4. En el panel **Project**, ubica `src`. Si no existe, créala como carpeta y márcala **Sources Root**.
5. Clic derecho en `src` → **New → Java Class** → `Main`.
6. Pega el contenido completo:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Control de baterías iniciado");
    }
}
```

Ejecuta con el triángulo verde junto a `main`.

**Checkpoint A:** aparece `Control de baterías iniciado`. Si no ejecuta, comprueba JDK en **File → Project Structure → Project** y que el archivo esté dentro de `src`.

## Paso 2 · Preparar el archivo de dominio
Clic derecho sobre `src` → **New → Java Class** → `Bateria`. La siguiente etapa indica su contenido.

**Checkpoint B:** tienes dos archivos Java en un proyecto nuevo; no has abierto el proyecto Cuenta simple de semana 02.

[Continuar →](02-modelar-bateria.md)
