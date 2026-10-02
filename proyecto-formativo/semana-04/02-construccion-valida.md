# 02 · Consolidar construcción válida

El objetivo es evitar objetos que nazcan incompletos y luego requieran una secuencia de setters para ser utilizables.

## Revisa el constructor

Pregunta por cada atributo:

- ¿es obligatorio para que la mascota exista?;
- ¿puede tener un valor inválido?;
- ¿debe cambiar después de construirse?

Una referencia posible:

```java
public Mascota(String nombre, String especie, int edad, double peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = Math.max(0, edad);
    this.peso = Math.max(0, peso);
}
```

No copies automáticamente esta firma. Ajusta los datos a tu modelo.

## Revisa setters

No mantengas un setter sólo porque el IDE puede generarlo.

Si una modificación necesita una regla, expresa la intención:

```java
public void registrarPeso(double nuevoPeso) {
    if (nuevoPeso > 0) {
        peso = nuevoPeso;
    }
}
```

## Checkpoint

- [ ] el objeto queda utilizable después del constructor;
- [ ] no dependo de una cadena de setters para inicializarlo;
- [ ] los cambios de estado relevantes pasan por operaciones con intención;
- [ ] puedo explicar qué dato es obligatorio y cuál puede cambiar.
