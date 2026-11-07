# 10 · Probar no es mirar la pantalla: evidencia y JUnit

**Microcápsula · 12–18 min · DSY1102 Unidad 2**

## Una prueba es una pregunta verificable
En R06 teníamos tres dudas distintas:
1. ¿El archivo se guarda con tres mensajes?
2. ¿Al cerrar y abrir la aplicación vuelven a aparecer?
3. ¿Qué ocurre si el JSON contiene claves repetidas?

Una sola fotografía de TableView no responde las tres.

## Patrón «preparar → actuar → comprobar»

```java
@Test
void sinMensajesListaVacia() throws IOException {
    Path archivo = carpetaTemporal.resolve("mensajes.json");
    JsonMensajeDao dao = new JsonMensajeDao(archivo);

    assertTrue(dao.listar().isEmpty());
}
```

Este ejemplo pertenece al contexto del test real: `carpetaTemporal` se proporciona con `@TempDir`, y la clase importa JUnit. **No es un programa Java independiente**.

```java
@TempDir Path carpetaTemporal;
```

La carpeta temporal evita que un test de corrupción destruya el `data/mensajes.json` de trabajo del docente.

## Evidencias distintas

| Evidencia | Qué permite afirmar | Qué no demuestra |
| --- | --- | --- |
| JSON abierto en IntelliJ | Existe contenido textual | Que se haya recuperado al reiniciar |
| TableView con registros | La UI los muestra | Que el disco esté íntegro |
| Alerta de JSON corrupto | Se detectó un caso de error | Que la restauración sea automática |
| `BUILD SUCCESS` | Se completó el build con los tests ejecutados | Ausencia de todos los defectos posibles |

La captura de R06 registra **13 pruebas en `R06RecuperacionTest` con 0 fallos y 0 errores**. Eso prueba esa suite en el entorno mostrado, no una garantía de que no existirán más defectos.

## Ejecutar pruebas

```bash
bash ./mvnw -Dtest=R06RecuperacionTest test
```

En JUnit usamos `assertEquals`, `assertTrue` y `assertThrows`. Este último comprueba que una operación fallida realmente **lanza** el error esperado, en vez de volver silenciosamente como lista vacía.

## Ejercicio de criterio
Una app imprime «Guardado» aunque la escritura lanza `IOException`. ¿Qué probarías?  
**Idea de respuesta:** simular un DAO que falle, confirmar que el Service no modifica su lista y que el Controller informa el error.

**Código de referencia:** [R06RecuperacionTest.java](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/feat/dsy1102-r06-json-recovery/src/test/java/cl/duoc/dsy1102/timecapsule/dao/R06RecuperacionTest.java).  
**Siguiente:** [11 · Puente hacia JDBC](11-de-archivo-a-tablas-jdbc-introduccion.md).
