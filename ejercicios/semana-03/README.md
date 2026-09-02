# Ejercicios · Semana 03

1. **Cuenta:** atributos `titular` y `saldo`; métodos `depositar`, `girar` y `mostrarDatos`.
2. **Producto:** código, nombre, precio y stock; métodos para vender y reponer respetando estado válido.
3. **Alumno:** nombre y tres notas; método para calcular promedio y determinar aprobación.
4. **Vehículo:** patente y combustible; métodos `cargarCombustible` y `viajar` evitando valores inválidos.
5. **Billetera:** saldo privado; métodos operacionales en vez de modificar el saldo directamente desde `main`.

## Criterio transversal

- atributos privados cuando corresponda;
- operaciones que protejan sus reglas;
- getters/setters solo cuando tengan sentido;
- `main` crea objetos, solicita operaciones y muestra resultados;
- evitar setters que permitan romper el estado interno.

Estos ejercicios representan el checkpoint previo a constructores; pueden refactorizarse en Semana 04 para incorporar inicialización mediante constructor.
