# Ejemplos · Semana 11 · JSON y DAO (sin JavaFX)

Tres demostraciones de **una responsabilidad cada una**, autónomas del laboratorio y de PetCare. Usan JDK 21, Maven y Jackson 2.18.3 como biblioteca didáctica. No se atribuye esta elección a las presentaciones institucionales todavía no verificadas.

1. [GuardarJsonDemo.java](src/main/java/cl/duoc/dsy1102/w11/GuardarJsonDemo.java) — serializar un `EstadoJuego` en `data/estado.json`.
2. [LeerJsonDemo.java](src/main/java/cl/duoc/dsy1102/w11/LeerJsonDemo.java) — deserializar un archivo existente y manejar su ausencia.
3. [DaoDemo.java](src/main/java/cl/duoc/dsy1102/w11/DaoDemo.java) — leer mediante `EstadoJuegoDao` sin usar `ObjectMapper` en `main`.

## Ejecución
Abre esta carpeta (`ejemplos/semana-11/`) como proyecto Maven en IntelliJ con JDK 21. Desde la terminal situada en ella:

```bash
mvn compile exec:java -Dexec.mainClass=cl.duoc.dsy1102.w11.GuardarJsonDemo
mvn exec:java -Dexec.mainClass=cl.duoc.dsy1102.w11.LeerJsonDemo
mvn exec:java -Dexec.mainClass=cl.duoc.dsy1102.w11.DaoDemo
```

**Checkpoints:** (1) se crea `data/estado.json` con jugador Ana y nivel 3; (2) se lee `Ana / nivel 3` **del archivo**, no de una constante de la lectura; (3) DAO devuelve el mismo resultado, y al eliminar el archivo el programa informa «No hay partida guardada» sin sobrescribirlo.

**Observa:** serializar, deserializar y delegar acceso a datos son operaciones distintas. No se necesita interfaz gráfica, Controller ni múltiples capas para comprender cada idea.

[Ejercicios para aplicar](../../ejercicios/semana-11/) · [Laboratorio integrador con JavaFX](../../labs/semana-11/).

**Límite de verificación:** no declarar ejecución Maven sin contar con dependencias Java descargadas y prueba reproducible en el runtime.
