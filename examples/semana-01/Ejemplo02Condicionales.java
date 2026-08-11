public class Ejemplo02Condicionales {

    public static void main(String[] args) {
        double promedio = 5.2;
        double asistencia = 82.0;

        if (promedio >= 4.0 && asistencia >= 75.0) {
            System.out.println("Estudiante aprobado");
        } else if (promedio >= 4.0) {
            System.out.println("Reprueba por asistencia");
        } else {
            System.out.println("Estudiante reprobado");
        }
    }
}
