# 05 · Errores: dato inválido no es lo mismo que archivo dañado

**Microcápsula · DSY1102 Unidad 2 · 12–18 min**  
**Pregunta:** ¿qué tipo de error debemos mostrar y en qué capa?

## Dos familias de problemas

`IllegalArgumentException`: el usuario intenta registrar un mensaje sin autor, texto o con plazo no positivo. Es una decisión de **reglas de negocio**.

`IOException`: un archivo no pudo leerse o escribirse, o la capa DAO decide reportar datos de archivo inválidos. Es un problema de **persistencia**; no debemos decir «autor obligatorio» si en realidad falló el disco.

Jackson puede lanzar una subclase como `JsonProcessingException` al leer JSON que no puede analizar. Nuestro DAO captura ese error y presenta una `IOException` contextualizada; el Controller muestra la alerta.

## Ejemplo deliberadamente pequeño

```java
public static void registrar(String autor) {
    if (autor == null || autor.isBlank()) {
        throw new IllegalArgumentException("Indica el autor.");
    }
}

public static void main(String[] args) {
    try {
        registrar(" ");
    } catch (IllegalArgumentException error) {
        System.out.println("Dato inválido: " + error.getMessage());
    }
}
```

## ¿Qué quiere decir `throws`?
El método declara que puede propagar un error que otro método debe considerar:

```java
public List<MensajeFuturo> listar() throws IOException;
```

`throws` **no lanza el error por sí solo**. `throw new IOException(...)` sí lo lanza. `catch` permite tratarlo. `finally` se usa para limpieza cuando corresponde.

## No escondas los fallos
Ejemplo incorrecto para cargar la cápsula:

```java
try {
    return dao.listar();
} catch (IOException error) {
    return List.of(); // oculta que un JSON existente está dañado
}
```

Ese código simula una primera ejecución vacía y puede provocar que el siguiente guardado destruya información. En R06 informamos el error y preservamos el archivo.

## Pregunta rápida
¿En qué lugar vive cada validación?
- Autor vacío al registrar → **Service**.
- JSON con propiedades duplicadas → **Jackson configurado estrictamente + DAO**.
- Mensaje que falta en la TableView → **revisar Controller/estado visual**, sin presuponer error de archivo.
- Permisos insuficientes al escribir → **DAO/IOException**.

**Práctica:** transforma el ejemplo para que `registrar("Vale")` no imprima error. Luego experimenta sin `catch`: ¿qué cambia en el flujo?

**Siguiente:** [06 · Maven y dependencias](06-maven-pom-y-bibliotecas.md).
