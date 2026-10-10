# 01 · Arranque reproducible

1. Registra la versión de JDK (`java -version`) y Maven (`mvn -version`).
2. Crea o abre un proyecto Maven con dependencias JavaFX adecuadas.
3. Ubica la clase `Application` y ejecuta `mvn clean javafx:run`.
4. Cambia título y tamaño de la escena; vuelve a ejecutar.

## Si algo falla
Copia el mensaje principal, diferencia dependencia faltante de JDK incorrecto y documenta el cambio que permitió ejecutar.

**Checkpoint:** aplicación abre y puedes explicar dónde inicia el runtime.
**Commit:** `build: configurar Maven y ejecutar JavaFX`.
