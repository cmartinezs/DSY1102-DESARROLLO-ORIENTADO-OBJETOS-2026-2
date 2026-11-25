import java.util.List;
public class PolimorfismoDaoDemo {
 interface Dao {List<String> listar();}
 static class Memoria implements Dao {public List<String> listar(){return List.of("Ana","Pedro");}}
 public static void main(String[] args){Dao dao=new Memoria();System.out.println(dao.listar());}
}
