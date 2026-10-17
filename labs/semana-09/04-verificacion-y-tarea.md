# 04 · Verificación final, evidencia y trabajo autónomo

[← 03 · Controller y eventos](03-controller-eventos.md) · [Índice](README.md)

## ¿Por qué no terminamos solamente cuando «abre la ventana»?

Una aplicación funcional debe comportarse bien tanto con datos correctos como incorrectos. En esta etapa comprobarás el recorrido completo, guardarás evidencia y explicarás lo aprendido. **Primero cerramos el mínimo de clase; después viene un desafío autónomo.**

## Parte A. Pruebas guiadas del trabajo de clase

### Paso 1. Prepara la ejecución

1. Guarda `pom.xml`, `MainApp.java`, `Vehiculo.java`, `MainController.java` y `MainView.fxml`.
2. Cierra cualquier ventana JavaFX anterior que pudiera estar abierta.
3. En IntelliJ, abre **View → Tool Windows → Maven**.
4. Ejecuta **Plugins → javafx → javafx:run** (o **Execute Maven Goal** → `clean javafx:run`).

**Deberías ver:** el formulario «Registro de vehículo disponible». Si no abre, **vuelve al checkpoint de la etapa 02**.

### Paso 2. Sigue esta tabla, caso por caso

| Caso | Qué escribes | Qué haces | Qué debe mostrarse |
|---|---|---|---|
| 1 · válido | `ABCD12` | Clic en Registrar | `Vehículo disponible: ABCD12` |
| 2 · vacío | Nada | Clic en Registrar | `La patente no puede estar vacía` |
| 3 · espacios | Tres espacios | Clic en Registrar | `La patente no puede estar vacía` |
| 4 · recorte | `  WXYZ99  ` | Clic en Registrar | `Vehículo disponible: WXYZ99` |
| 5 · recuperación | Después del caso 2, escribe `JKLP34` | Clic en Registrar | `Vehículo disponible: JKLP34` |

**Importante:** después de un error **no cierres ni reinicies** la aplicación para el caso 5. Debe recuperarse desde la misma ventana.

### Paso 3. Si un caso falla

1. Anota qué escribiste.
2. Anota qué esperabas ver y qué apareció realmente.
3. Busca el error en la consola de Maven si hay una excepción.
4. Vuelve al último paso de la [etapa 03](03-controller-eventos.md): revisa los `fx:id`, la conexión `onAction` y el constructor.
5. Corrige **una causa a la vez** y repite todos los casos que dependan de ella.

### Paso 4. Guarda evidencia en tu repositorio

1. Crea, si todavía no existe, una carpeta de evidencias asociada a este lab en tu repositorio del curso. Ejemplo: `evidencias/semana-09/`.
2. Guarda una captura con un registro correcto (`registro-valido.png`).
3. Guarda otra captura con un error de campo vacío (`registro-invalido.png`).
4. No uses datos personales reales; patentes ficticias son suficientes.
5. Guarda un breve archivo `pruebas.md` en la misma carpeta con los cinco casos y su resultado. Puedes usar esta plantilla:

```markdown
# Pruebas — Semana 09

- Caso 1 · ABCD12: OK / pendiente — observación:
- Caso 2 · Campo vacío: OK / pendiente — observación:
- Caso 3 · Solo espacios: OK / pendiente — observación:
- Caso 4 · Espacios alrededor: OK / pendiente — observación:
- Caso 5 · Recuperación después de error: OK / pendiente — observación:
```

### Paso 5. Registra un commit

**Si ya configuraste Git y el repositorio remoto:** desde la raíz de tu repositorio Git (puedes abrir **View → Tool Windows → Terminal** en IntelliJ):

```bash
git status
git add .
git commit -m "test: verificar formulario JavaFX de semana 09"
git push
```

**¿No configuraste Git o no tienes repositorio remoto?** No ejecutes `git push` todavía: en IntelliJ puedes comenzar desde **VCS → Enable Version Control Integration → Git**, crear el primer commit desde **Git → Commit** y posteriormente publicar en GitHub cuando tengas el repositorio remoto. No necesitas tener un repositorio preexistente para completar la aplicación.

**Antes de ejecutar `git add .`:** revisa `git status` y confirma que no haya contraseñas, carpetas `target/`, binarios generados o archivos ajenos al trabajo. Si los hay, exclúyelos con `.gitignore` o agrega solo las rutas relevantes. **Si `git push` solicita autenticación**, sigue el flujo autorizado por tu repositorio; no compartas tokens en capturas.

## Parte B. Tarea autónoma (cuando ya funciona el mínimo)

**Objetivo:** mejorar tu formulario sin rehacer lo que ya funciona.

### Desafío 1. Agrega la marca

1. En Scene Builder abre `MainView.fxml`.
2. Dentro de VBox agrega un nuevo TextField **entre la patente y el botón**.
3. En **Prompt Text** escribe `Marca (por ejemplo Toyota o Kia)`.
4. En **fx:id** escribe `marcaField`.
5. Guarda y comprueba que la nueva entrada aparece.
6. En `Vehiculo.java`, agrega el atributo `private final String marca;`.
7. Cambia el constructor a `Vehiculo(String patente, String marca)` y valida que **ambos** textos no sean nulos ni blancos. Mantén `trim()` en ambos.
8. Agrega `getMarca()`.
9. En `MainController`, declara `@FXML private TextField marcaField;`.
10. Cambia `new Vehiculo(patenteField.getText())` por `new Vehiculo(patenteField.getText(), marcaField.getText())`.
11. Cambia el resultado a un texto que incluya **patente y marca**.
12. En IntelliJ, vuelve a ejecutar **javafx:run** desde el panel Maven y prueba: ambos llenos, marca vacía y espacios solamente.
13. **Checkpoint:** sin marca no hay registro; con `ABCD12` y `Toyota` se muestran ambos datos.

**¿Te aparece un error de compilación por constructor?** Busca todas las llamadas a `new Vehiculo(...)`: ahora el constructor necesita **dos argumentos**. No elimines la validación para «hacerlo funcionar».

### Desafío 2. Agrega un botón «Limpiar»

1. En Scene Builder arrastra un segundo **Button** debajo de Registrar.
2. En **Text**, escribe `Limpiar`.
3. En **On Action**, escribe `#limpiar`.
4. Guarda.
5. Dentro de `MainController`, agrega el método:

```java
@FXML
private void limpiar() {
    patenteField.clear();
    marcaField.clear();
    resultadoLabel.setText("Completa el formulario");
}
```

**Nota:** este fragmento corresponde a la **variante con marca** que acabas de construir. Si decidiste no hacer el desafío 1, **quita** la línea `marcaField.clear()` porque ese campo aún no existe.

6. Ejecuta el proyecto, escribe información, presiona Limpiar.
7. **Checkpoint:** los TextField quedan vacíos y el mensaje vuelve a `Completa el formulario`.

### Desafío 3. Refuerzo y reflexión

1. Resuelve **dos ejercicios** de [semana 09](../../ejercicios/semana-09/).
2. En tu DevLog de semana 09 (o créalo en `docs/devlog/semana-09.md` si todavía no existe), escribe cuatro apartados breves: **qué logré, qué me bloqueó, qué aprendí y qué haré después**.
3. Responde con tus palabras: **¿qué parte de este programa seguiría funcionando si quitáramos JavaFX y por qué?** Pista: examina si `Vehiculo.java` importa algo de `javafx`.
4. Haz commit y push de tu ampliación.

## ✅ Lista final de entrega

**Mínimo de clase:**
- [ ] Se ejecuta desde IntelliJ IDEA con el objetivo Maven `javafx:run`.
- [ ] La pantalla carga desde FXML y el botón invoca Controller.
- [ ] Hay construcción de un objeto `Vehiculo` y validación en su constructor.
- [ ] Las pruebas válidas e inválidas están registradas.
- [ ] Hay evidencia, commits y explicación de responsabilidades.

**Autónomo (ampliación):**
- [ ] Segundo campo con validación y resultado visible.
- [ ] Botón Limpiar funcional.
- [ ] Dos ejercicios de refuerzo.
- [ ] DevLog de semana 09 actualizado.

### Cómo explicar tu aplicación en 30 segundos

«FXML define los controles visibles. MainApp abre la ventana y carga ese archivo. MainController reacciona al clic, lee lo escrito y muestra una respuesta. Vehiculo contiene la regla de negocio y rechaza patentes inválidas. Por eso el modelo podría utilizarse sin JavaFX».

¡Terminaste! Si alguno de los cinco casos de prueba no funciona, vuelve a la etapa donde se construyó esa parte antes de considerar cerrada la entrega.
