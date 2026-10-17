# 04 · Comprobar el laboratorio, guardar evidencia y ampliar

[← 03 · Controlador](03-controller-eventos.md) · [Índice](README.md)

## Parte A · Cierre del ejercicio guiado

### Paso 1 · Ejecuta desde IntelliJ

1. Guarda `Vehiculo.java`, `HelloController.java` y `hello-view.fxml`.
2. Abre la clase `HelloApplication.java` que generó IntelliJ.
3. Haz clic en el icono verde del método `main` → **Run**.
4. Comprueba que aparezca el formulario Rent-a-Car.

### Paso 2 · Comprueba estos cinco casos, uno por uno

| Caso | Dato de entrada | Resultado esperado |
|---|---|---|
| 1 | `ABCD12` | `Vehículo disponible: ABCD12` |
| 2 | Campo vacío | `La patente no puede estar vacía` |
| 3 | Tres espacios | `La patente no puede estar vacía` |
| 4 | `  abcd12  ` | `Vehículo disponible: ABCD12` |
| 5 | Tras un error, ingresa `JKLP34` **sin reiniciar** | `Vehículo disponible: JKLP34` |

Si falla un caso, vuelve a la etapa 03 y revisa una causa a la vez. **No elimines la validación** para ocultar el error.

### Paso 3 · Guarda las evidencias

1. En la carpeta del proyecto, crea `evidencias/semana-09` desde el panel Project de IntelliJ (**New → Directory**).
2. Guarda una captura con un registro correcto como `registro-valido.png`.
3. Guarda otra con el campo vacío y el mensaje de error como `registro-invalido.png`.
4. Dentro de `evidencias/semana-09`, crea `pruebas.md` con los cinco casos y marca OK o pendiente, explicando cualquier diferencia.
5. Utiliza patentes ficticias, no datos personales reales.

### Paso 4 · Explica lo aprendido

En tus palabras, responde: ¿qué hace `hello-view.fxml`?, ¿qué hace `HelloController`? y ¿qué seguiría funcionando si quitáramos JavaFX? Una respuesta breve y razonada es suficiente.

**Git y DevLog:** si estás usando un repositorio Git para el curso, guarda los cambios y actualiza el DevLog de la semana 09. Como este lab comienza **desde un proyecto nuevo**, no damos por supuesto que ya tienes un repositorio remoto o commits anteriores.

## Parte B · Desafío autónomo (después de completar el mínimo)

### Agrega la marca del vehículo

1. Abre `hello-view.fxml`.
2. Bajo el `TextField` de patente, agrega un segundo `TextField` con `fx:id="marcaField"` y `promptText="Marca del vehículo"`.
3. Guarda y ejecuta: ya deberías ver los dos campos.
4. En `Vehiculo.java`, agrega `private final String marca;`.
5. Cambia el constructor para recibir `(String patente, String marca)`; valida que ninguno esté vacío, guarda `marca.trim()` y crea `getMarca()`.
6. En `HelloController.java`, agrega `@FXML private TextField marcaField;`.
7. Cambia la creación por `new Vehiculo(patenteField.getText(), marcaField.getText())`.
8. Ajusta `resultadoLabel.setText(...)` para mostrar patente y marca.
9. Ejecuta el programa y verifica el caso correcto, la marca vacía y la patente vacía.
10. **Checkpoint:** muestra ambos datos solo cuando los dos campos son válidos.

**Si IntelliJ muestra error de argumentos:** es normal después de cambiar la firma del constructor. Busca `new Vehiculo(...)` y asegúrate de pasar **dos** argumentos.

### Agrega un botón Limpiar

1. En `hello-view.fxml`, debajo del botón Registrar agrega:

```xml
<Button text="Limpiar" onAction="#limpiar"/>
```

2. En `HelloController.java`, agrega el método:

```java
@FXML
private void limpiar() {
    patenteField.clear();
    marcaField.clear();
    resultadoLabel.setText("Completa el formulario");
}
```

3. Ejecuta y prueba: escribe patente y marca, pulsa **Limpiar** y confirma que ambos campos quedan vacíos.
4. **Importante:** este fragmento supone que completaste el desafío de marca. Si todavía no añadiste `marcaField`, elimina esa línea del método.

### Cierra tu aprendizaje

Resuelve dos [ejercicios de refuerzo de la semana 09](../../ejercicios/semana-09/) y registra: **qué lograste, qué error resolviste, qué aprendiste y qué harías después**.

## ✅ Definición de terminado

- [ ] Proyecto creado desde JavaFX en IntelliJ, no copiado de otro.
- [ ] Ejemplo original de IntelliJ ejecutado antes de editar.
- [ ] Vista FXML actualizada a Rent-a-Car.
- [ ] Modelo `Vehiculo` con validación.
- [ ] Cinco pruebas mínimas verificadas.
- [ ] Evidencias y explicación de responsabilidades.

**El desafío de marca y Limpiar es una ampliación posterior, no una condición para que la parte de clase esté terminada.**
