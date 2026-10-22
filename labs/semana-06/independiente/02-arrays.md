# 02 · Inscripciones mediante un array

[← 01 · Proyecto](01-entorno.md) · [Índice](README.md) · [03 · Listas →](03-listas.md)

## Paso 1 · Sustituir Main
Abre `src/Main.java`, presiona Ctrl+A y escribe:

```java
public class Main {
    public static void main(String[] args) {
        Inscripcion[] cupos = new Inscripcion[3];
        cupos[0] = new Inscripcion("Ana", "Pintura");
        cupos[1] = new Inscripcion("Pedro", "Música");
        cupos[2] = new Inscripcion("Rosa", "Pintura");

        for (int i = 0; i < cupos.length; i++) {
            System.out.println((i + 1) + ". " + cupos[i].resumen());
        }
    }
}
```

Pulsa Run y revisa que aparecen **tres líneas**.

**Checkpoint A:** sabes por qué el array reserva 3 posiciones y por qué su índice inicial es cero.

## Paso 2 · Descubrir un límite
1. Agrega temporalmente una cuarta línea: `cupos[3] = new Inscripcion("Luis", "Teatro");`.
2. Ejecuta otra vez y lee el mensaje de error.
3. Observa `ArrayIndexOutOfBoundsException`: la cuarta posición no existe porque el tamaño es fijo.
4. **Elimina la línea de prueba** para recuperar el programa funcional.

**Checkpoint B:** el programa vuelve a imprimir tres líneas. Escribe en tu evidencia: «un array tiene tamaño fijo; necesitaré otra estructura para altas variables».

## Paso 3 · Discutir responsabilidad
El código de `Main` crea y administra directamente las posiciones. En la siguiente etapa crearemos un `RegistroTaller` que concentre esa responsabilidad y utilice una `List`. Así evitamos que `Main` haga todo.

[Continuar →](03-listas.md)
