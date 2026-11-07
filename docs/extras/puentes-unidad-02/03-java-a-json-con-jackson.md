# 03 · De un objeto Java a un JSON (y de vuelta)

**Microcápsula · DSY1102 Unidad 2 · 12–18 min**  
**Pregunta:** ¿quién convierte una lista de objetos Java en texto y cómo la recuperamos?

## Tres conceptos que no son sinónimos
- **Objeto Java:** instancia en memoria, por ejemplo `new MensajeFuturo(...)`.
- **Serializar:** transformar un objeto/colección Java a una representación apta para almacenar o intercambiar, por ejemplo JSON.
- **Deserializar:** leer esa representación y reconstruir objetos Java en memoria.

Jackson es una **biblioteca** que implementa esas transformaciones. Java no «habla JSON» solo porque tengamos un `List`. Maven descarga Jackson como dependencia del proyecto.

## De la lista al texto

```java
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;

record Mensaje(String autor, String texto, int plazoAnios) {}

public class DemoJson {
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        List<Mensaje> lista = List.of(new Mensaje("Ana", "Hola", 5));

        String textoJson = mapper.writeValueAsString(lista);
        System.out.println(textoJson);

        Mensaje[] recuperados = mapper.readValue(textoJson, Mensaje[].class);
        System.out.println(recuperados[0].texto()); // Hola
    }
}
```

Este ejemplo necesita Jackson en el proyecto Maven; **no** funciona como Java estándar sin la dependencia. Utilizamos un `record` solo para ilustrar la conversión compactamente. La clase real del curso es `MensajeFuturo`, con constructor, getters y setters.

## ¿Por qué `TypeReference`?

```java
List<MensajeFuturo> mensajes = mapper.readValue(
    archivo.toFile(), new TypeReference<List<MensajeFuturo>>() {}
);
```

Durante la deserialización necesitamos conservar la información de que **cada elemento de la lista es un `MensajeFuturo`**. `new TypeReference<...>() {}` es una clase anónima que conserva esa información genérica para Jackson. **No es una lambda.**

El proyecto R06 declara una constante `TIPO_MENSAJES` y utiliza el mismo concepto.

## Dónde entra la persistencia
- `writeValueAsString`: produce una cadena en memoria, pero no la guarda en disco.
- `writeValue(archivo.toFile(), lista)`: escribe una representación al archivo.
- `readValue(...)`: convierte desde texto/archivo a Java; puede fallar si el formato está dañado.

El DAO de R06 guarda primero en un temporal, conserva `.bak` y después reemplaza el archivo. **Jackson no decide por nosotros la política de respaldo ni la recuperación**.

## ¿Y si JSON no tiene los datos esperados?
Un parser puede leer `{"plazoAnios": -2}` sin error sintáctico, pero las reglas de la aplicación rechaza el plazo no positivo. Por eso diferenciamos deserialización de **validación del negocio**.

## Comprueba
1. ¿`writeValueAsString` guarda un archivo? **No.**
2. ¿Quién define si plazo 0 es aceptable: Jackson o las reglas del dominio? **El dominio/Service.**
3. ¿Qué diferencia hay entre `readValue` y `listar()` del DAO? **`readValue` convierte JSON; `listar()` implementa el contrato del DAO de lectura y protección.**

**Código original:** [JsonMensajeDao R06](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/feat/dsy1102-r06-json-recovery/src/main/java/cl/duoc/dsy1102/timecapsule/dao/JsonMensajeDao.java).  
**Siguiente:** [04 · Memoria, archivo y recuperación](04-memoria-archivo-y-recuperacion.md).
