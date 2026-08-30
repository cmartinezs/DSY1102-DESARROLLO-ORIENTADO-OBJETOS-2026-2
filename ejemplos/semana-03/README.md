# Ejemplos · Semana 03

Ejemplos mínimos e independientes para métodos, objetos y encapsulamiento.

1. [`01-MetodoRetorno.java`](01-MetodoRetorno.java) — parámetro + retorno.
2. [`02-ObjetoSimple.java`](02-ObjetoSimple.java) — clase, constructor e instancia.
3. [`03-EstadoEncapsulado.java`](03-EstadoEncapsulado.java) — estado privado y operación controlada.
4. [`04-DosInstancias.java`](04-DosInstancias.java) — independencia entre objetos.
5. [`05-CuentaBasica.java`](05-CuentaBasica.java) — solución desarrollada en clase: atributos, accesores, mutadores y operaciones sobre el estado, todavía sin constructor explícito.

## Corte real de clase · 29-08-2026

En la sesión se trabajó principalmente en comprender y aplicar:

- clases y creación de objetos;
- atributos y estado de un objeto;
- métodos o funciones operacionales;
- accesores (`get...`) y mutadores (`set...`);
- diferencia entre consultar, modificar y operar sobre el estado;
- validaciones dentro de la propia clase, evitando trasladar reglas de la cuenta al `main`;
- nomenclatura Java: `PascalCase` para clases y `camelCase` para atributos, variables y métodos;
- buenas prácticas básicas de responsabilidad y encapsulamiento.

El ejercicio de `Cuenta` quedó implementado hasta:

- crear una cuenta mediante `new Cuenta()`;
- establecer sus datos mediante mutadores;
- establecer saldo;
- `depositarMonto(...)`;
- `girarMonto(...)`;
- `mostrarDatos()`;
- consultar estado mediante accesores.

### Fuera del alcance de este corte

Todavía **no se ha enseñado constructor explícito**. La solución no debe adelantarse pedagógicamente incorporándolo como mecanismo obligatorio de inicialización.

La continuación prevista parte desde este mismo ejercicio para introducir progresivamente:

1. constructores;
2. composición;
3. herencia;
4. polimorfismo.

Cada archivo puede estudiarse por separado. No dependen de PetCare ni del lab semanal.
