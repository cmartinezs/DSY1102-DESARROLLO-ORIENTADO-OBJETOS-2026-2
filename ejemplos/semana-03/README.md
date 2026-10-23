# Ejemplos · Semana 03 · Objetos y estado encapsulado

**Corte real documentado de aula (29-08-2026):** en esta etapa se enseñaron clases, objetos, campos, accesores, mutadores y operaciones. **Todavía no se había enseñado a declarar constructores propios.** Los siguientes ejemplos canónicos respetan ese corte y utilizan el constructor sin parámetros que Java proporciona implícitamente.

1. [MetodoRetorno.java](MetodoRetorno.java) — repaso de método y retorno; salida `Total: $3600.0`.
2. [ObjetoSimple.java](ObjetoSimple.java) — crear un objeto y asignar atributos; salida `Cuaderno · stock: 12`.
3. [EstadoEncapsulado.java](EstadoEncapsulado.java) — estado privado y operación que rechaza un monto negativo; salidas `Carga negativa: false`, `Saldo: $7000`.
4. [DosInstancias.java](DosInstancias.java) — dos objetos, dos estados; salidas `A=2` y `B=1`.
5. [CuentaBasica.java](CuentaBasica.java) — caso desarrollado en clases: getters, setters y operaciones `depositarMonto` y `girarMonto` sin constructor explícito; saldo final `$95000`.

## Cómo ejecutar
Crea un proyecto **Java JDK 21** nuevo en IntelliJ, copia estos cinco archivos a `src` y ejecuta cada `main`. Cada clase pública coincide con su nombre de archivo; sus auxiliares tienen nombres distintos. Los cinco pueden convivir sin definiciones duplicadas.

Las rutas numeradas originales `01-` a `05-` permanecen como **variantes históricas**, y algunas muestran constructores explícitos **que corresponden a semana 04**. No las presentes como ruta principal de este corte.

**Pregunta de observación:** ¿qué pertenece a la clase? ¿Qué pertenece a cada instancia? ¿Qué controla el estado cuando un dato es inválido? Los [ejercicios](../../ejercicios/semana-03/) transforman estas observaciones en problemas focales.
