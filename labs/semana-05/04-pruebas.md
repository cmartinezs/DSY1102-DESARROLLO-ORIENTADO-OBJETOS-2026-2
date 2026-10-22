# 04 · Pruebas, evidencia y cierre

[← 03 · Polimorfismo](03-polimorfismo.md) · [Índice](README.md)

## Ejecuta estas pruebas en orden
1. En `Main`, verifica que `new Envio("N01", 3)` devuelve **2500**.
2. Verifica que `new EnvioExpress("E01", 3)` devuelve **4500**.
3. Usa variables declaradas `Envio` para ambos objetos; ejecuta `mostrar`.
4. Prueba distancia 0 para un envío normal: el costo base debe ser **1000**.
5. Restituye el código de `Main` a la versión de la etapa 03.

| Caso | Entrada | Salida esperada |
|---|---|---|
| T01 | Normal, 3 km | $2.500 |
| T02 | Expreso, 3 km | $4.500 |
| T03 | Expreso, 5 km | $5.500 |
| T04 | Normal, 0 km | $1.000 |
| T05 | Método `mostrar(Envio)` | Funciona con ambos tipos |

**Checkpoint final:** no hay errores de ejecución y puedes señalar una línea con `extends`, una con `super()` y una con `@Override`.

## Evidencia
Guarda una captura de consola, `Envio.java`, `EnvioExpress.java`, `Main.java` y respuestas breves a las tres preguntas de la etapa 03. Usa la ubicación de entregas acordada con tu docente.

**No es una evaluación parcial** ni una extensión obligatoria de Veterinaria. La ruta interactiva Veterinaria I sigue disponible como práctica adicional histórica.
