# 04 · Validar con excepciones y comprobar resultados

[← 03 · Listas](03-listas.md) · [Índice](README.md)

## Paso 1 · Incorporar reglas al registro
Abre `RegistroTaller.java`. **Reemplaza solamente el método `agregar(Inscripcion nueva)`** por:

```java
public void agregar(Inscripcion nueva) {
    if (nueva == null ||
        nueva.getPersona() == null || nueva.getPersona().isBlank() ||
        nueva.getTaller() == null || nueva.getTaller().isBlank()) {
        throw new IllegalArgumentException("Persona y taller son obligatorios");
    }
    if (buscar(nueva.getPersona()) != null) {
        throw new IllegalArgumentException("La persona ya está inscrita");
    }
    inscripciones.add(nueva);
}
```

La regla del ejercicio es **una inscripción por persona**. Si quisieras permitir inscripciones en varios talleres, tendrías que redefinir esa regla; no la cambies durante esta prueba.

**Checkpoint A:** el resto de la clase permanece igual. `throw` comunica un dato inválido; no es equivalente a `System.out.println`.

## Paso 2 · Probar el error sin cerrar el programa
En `Main.java`, **después de agregar los cuatro registros y antes de imprimir el total**, inserta:

```java
try {
    registro.agregar(new Inscripcion("Ana", "Teatro"));
} catch (IllegalArgumentException error) {
    System.out.println("Error controlado: " + error.getMessage());
}
```

Ejecuta y verifica el mensaje `Error controlado: La persona ya está inscrita`. El resto del programa debe seguir y mostrar los totales **4** y **3**.

## Paso 3 · Matriz de casos
| Caso | Acción | Resultado esperado |
|---|---|---|
| T01 | Registrar Ana / Pintura | Se acepta |
| T02 | Registrar cuarta persona | `ArrayList` crece a 4 |
| T03 | Buscar Pedro | Devuelve Música |
| T04 | Eliminar Rosa | El total disminuye a 3 |
| T05 | Agregar Ana de nuevo | Excepción capturada; total no aumenta |
| T06 | Agregar persona vacía | Excepción capturada; sin alta |

Para T06 utiliza otro bloque `try/catch` similar, con `new Inscripcion("", "Música")`.

## Paso 4 · Evidencias
Entrega `Main.java`, `Inscripcion.java`, `RegistroTaller.java`, dos capturas de consola (antes/después) y tres líneas comparando arrays con listas.

**Checkpoint final:** ejecuta sin cerrarse por entradas inválidas, no duplica a Ana y puedes indicar dónde ocurre el `throw` y dónde ocurre el `catch`. Este ejercicio no utiliza archivos de semanas previas.
