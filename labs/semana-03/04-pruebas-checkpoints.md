# 04 · Verificar baterías independientes y estado válido

[← 03 · Protección](03-proteger-estado.md) · [Índice](README.md)

## Paso 1 · Ejecutar pruebas
Conserva `Main` de etapa 03 y añade **después** de sus operaciones:

```java
System.out.println("Sobrecarga dron: " + dron.cargar(70));
System.out.println("Consumo imposible dron: " + dron.consumir(50));
System.out.println("Carga adicional cámara: " + camara.cargar(20));
System.out.println("Dron: " + dron.getPorcentaje() + "%");
System.out.println("Cámara: " + camara.getPorcentaje() + "%");
```

**Checkpoint A:** aparecen `false`, `false`, `true`; el dron sigue en **40%** y la cámara llega a **50%**.

## Paso 2 · Matriz de aceptación
| ID | Entrada / acción | Esperado |
|---|---|---|
| T01 | Crear batería | 0% |
| T02 | Dron carga 60 | 60%, true |
| T03 | Dron consume 20 | 40%, true |
| T04 | Cámara carga 30 y consume 40 | 30%, false |
| T05 | Dron intenta cargar 70 cuando está en 40 | 40%, false |
| T06 | Dron intenta consumir 50 cuando está en 40 | 40%, false |
| T07 | Cámara carga 20 más | 50%, true |

## Paso 3 · Evidencia y cierre
Conserva `Main.java`, `Bateria.java`, captura de consola y tres respuestas: ¿por qué `private`?, ¿por qué el constructor comienza en 0?, ¿por qué `cargar` y `consumir` devuelven boolean?

**Checkpoint final:** ni el dron ni la cámara puede salir del rango 0–100, y el proyecto no depende de Cuenta simple de semana 02 ni del proyecto formativo.
