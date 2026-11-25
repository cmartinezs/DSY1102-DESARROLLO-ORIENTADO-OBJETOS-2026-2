public class RecursosDemo {
 static class Recurso implements AutoCloseable {
  public void close(){System.out.println("cerrado");}
 }
 public static void main(String[] args){try(var r=new Recurso()){System.out.println("usado");}}
}
