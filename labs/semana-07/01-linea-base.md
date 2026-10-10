# Etapa 01 · Verificar la línea base de Veterinaria II

## Propósito
No avanzar sobre una solución rota. Identificar qué comportamientos ya existen y qué cambios son pertinentes.

## Sigue estos pasos
1. Abre tu proyecto original en `labs/lab-veterinaria-herencia-polimorfismo/`. **No** crees `lab-veterinaria-iii/`.
2. Ejecútalo antes de editar, desde IntelliJ/IDE o con el comando usado en Veterinaria II.
3. Registra al menos un `Perro`, un `Gato` y otro subtipo si ya existe.
4. Comprueba listado, búsqueda, eliminación y el manejo de un identificador inexistente.
5. Dibuja tu jerarquía real (`Animal`, `Mascota`, `Salvaje`, etc.) y ubica quién administra `List<Animal>`.
6. Crea `docs/veterinaria-iii/01-linea-base.md` con la lista de clases, responsabilidades y dos pruebas observadas.

## Evidencia
`evidencias/veterinaria-iii/01-arranque.txt` con ejecución inicial y resultado esperado vs. observado.

## Checkpoint verificable
- [ ] Código previo ejecuta sin cambios.
- [ ] Puedes señalar al responsable de la colección sin decir “main”.
- [ ] Identificas si alguien instancia `new Animal(...)` y si eso tiene sentido en tu dominio.

**Commit sugerido:** `docs: fijar linea base veterinaria III`.
