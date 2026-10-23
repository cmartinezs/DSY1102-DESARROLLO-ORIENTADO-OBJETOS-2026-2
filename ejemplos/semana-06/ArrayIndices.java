public class ArrayIndices {
    public static void main(String[] args) {
        String[] nombres = new String[3];
        nombres[0] = "Ana";
        nombres[1] = "Pedro";
        nombres[2] = "Luis";

        for (int i = 0; i < nombres.length; i++) {
            System.out.println(i + ": " + nombres[i]);
        }
    }
}
