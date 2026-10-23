# DSY1102 · Estándar de ejemplos demostrativos

Un **ejemplo** muestra cómo funciona un concepto nuevo; un ejercicio exige aplicarlo a un problema distinto. No hay cuota de ejemplos por semana ni obligación de diseñar proyectos extensos.

## Contrato
- **Concepto focal**: una idea observable, sin incluir innecesariamente arquitectura.
- **Ejecución clara**: JDK, proyecto/carpeta, clase principal o comando Maven.
- **Código compilable**: el nombre del archivo coincide con su clase `public`; las clases auxiliares no colisionan dentro de la misma semana.
- **Resultado contrastable**: texto, cambio visible de interfaz, estado o archivo, más una pregunta de observación.
- **Ayuda proporcional**: demostrar primero; dejar los problemas nuevos para los ejercicios.
- **Independencia**: sin depender de PetCare o laboratorios. Una secuencia intencional de refactorización puede compartir código si se declara explícitamente.
- **Clasificación**: ejemplos mínimos, secuencias evolutivas o referencias integradoras (MediaHub).
- **Publicación**: Markdown y fuentes en `master/ejemplos/`; `gh-pages` solo enlaza.

## Verificación
La compilación Java pura se comprueba por carpeta semanal; JavaFX/JSON por proyecto Maven. La compilación no equivale a ejecutar GUI o comprobar persistencia. Usar [script](../scripts/verificar-ejemplos.sh) y [workflow](../.github/workflows/verificar-ejemplos.yml); registrar resultados reales antes de declarar cumplimiento técnico.

Aplicar el orden **contenido → ejemplo → ejercicio → laboratorio → PetCare**, sin crear una actividad de cada tipo si no aporta valor.
