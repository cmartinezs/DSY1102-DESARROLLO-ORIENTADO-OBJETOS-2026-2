# 4 · Práctica incremental · de métodos a objetos

## Parte A · métodos

Implementa y prueba desde `main`:

```java
esPar(int numero)
calcularTotal(double precio, int cantidad)
esMayorDeEdad(int edad)
```

No imprimas dentro de todos los métodos: devuelve resultados cuando tenga sentido.

## Parte B · clase sencilla

Crea una clase `Pelicula` con:

- `titulo`;
- `duracionMinutos`;
- `clasificacionEdad`.

Agrega constructor y crea al menos tres objetos desde `main`.

## Parte C · comportamiento

Agrega:

```java
public boolean puedeVerla(int edadPersona)
```

El método debe responder según la clasificación de la película.

## Parte D · encapsulamiento

Convierte los atributos que deban protegerse a `private`. Expón únicamente las operaciones necesarias.

Agrega una regla: `duracionMinutos` no puede quedar en cero ni en valores negativos.

## Parte E · ejercicio individual

Elige **uno** de estos dominios neutrales:

- `Producto`;
- `Libro`;
- `Videojuego`;
- `Curso`;
- `Cancion`.

Debes construir una clase con al menos tres atributos, constructor, dos objetos, un método de consulta y un método que modifique estado de forma controlada.

No copies el ejemplo de `Pelicula`; adapta el diseño al dominio elegido.

## Parte F · PetCare

Solo después de cerrar las partes anteriores, identifica **una** oportunidad de aplicar clase/objeto/encapsulamiento en PetCare. No conviertas PetCare en el ejemplo de enseñanza ni adelantes conceptos no vistos.

## Evidencia

- código ejecutable;
- salida de ejemplo;
- breve README con instrucciones;
- respuesta: «¿qué regla protege mi objeto y dónde está implementada?»;
- DevLog semanal.

## Criterios de logro

- [ ] Puedo declarar e invocar métodos.
- [ ] Distingo parámetros, argumentos y retorno.
- [ ] Puedo crear una clase y varias instancias.
- [ ] Uso constructor con sentido.
- [ ] Un método puede consultar o modificar estado.
- [ ] Comprendo por qué algunos atributos deben ser privados.
- [ ] Puedo proteger al menos una regla del objeto.
- [ ] PetCare solo utiliza conceptos efectivamente aprendidos.