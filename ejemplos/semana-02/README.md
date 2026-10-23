# Ejemplos · Semana 02 · Métodos, objetos y encapsulamiento

En esta semana se presentan **cuatro demostraciones pequeñas e independientes**. No se utiliza Scanner, herencia, listas ni JavaFX.

1. [MetodoSimple.java](MetodoSimple.java) — un método `void`; se observa la secuencia **Antes → Hola → Después**.
2. [MetodosParametrosRetorno.java](MetodosParametrosRetorno.java) — argumentos y retorno; observar `Resultado: 12` y `¿Es mayor de edad?: true`.
3. [ProductoBasico.java](ProductoBasico.java) — dos objetos con estado propio; aparecen Teclado ($19990) y Mouse ($12990).
4. [ProductoDemo.java](ProductoDemo.java) — atributos privados, venta que reduce stock de 5 a 3 y rechazo de una venta de 10.

## Ejecutar y observar
1. En IntelliJ crea un proyecto Java **JDK 21** con carpeta `src`.
2. Copia los cuatro archivos canónicos (los que **no tienen prefijos numéricos**). Ejecuta cada `main` con el triángulo verde.
3. Tras cada ejecución, compara las salidas con los resultados indicados arriba. Cambia un dato en vivo y predice qué cambiará.
4. No confundas las clases auxiliares (`ProductoBasicoItem` y `ProductoInventario`) con una única clase `Producto`: se nombran diferente para que **toda la carpeta pueda compilar** sin conflictos.

Las rutas `01-MetodoSimple.java`, `02-MetodosParametrosRetorno.java` y `03-ProductoBasico.java` se conservan como **variantes históricas `Legacy`** para no romper referencias antiguas; los archivos de ejecución canónicos están enlazados arriba. Los [ejercicios semanales](../../ejercicios/semana-02/) aplican estos conceptos a problemas diferentes.
