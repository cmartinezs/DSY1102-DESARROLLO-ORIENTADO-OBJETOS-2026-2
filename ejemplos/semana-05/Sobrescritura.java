public class Sobrescritura {
    static class Entrada {
        int precio() { return 5000; }
    }
    static class EntradaEstudiante extends Entrada {
        @Override
        int precio() { return super.precio() - 1000; }
    }
    public static void main(String[] args) {
        System.out.println("Normal: " + new Entrada().precio());
        System.out.println("Estudiante: " + new EntradaEstudiante().precio());
    }
}
