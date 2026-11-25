import java.util.*;
public class MapeoDemo {
 record Libro(int id,String titulo){}
 public static void main(String[] args){
  List<Libro> libros=new ArrayList<>();
  libros.add(new Libro(1,"Java")); System.out.println(libros.get(0).titulo());
 }
}
