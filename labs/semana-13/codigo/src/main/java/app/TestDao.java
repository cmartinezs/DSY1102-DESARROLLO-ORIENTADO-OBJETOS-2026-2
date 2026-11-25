package app;
import dao.CapsulaDao;
import model.Capsula;
import java.time.LocalDate;
public class TestDao {
 public static void main(String[] args) throws Exception {
  var dao=new CapsulaDao();
  dao.listarTodos().forEach(c->System.out.println(c.getId()+" "+c.getTitulo()));
  String titulo="Prueba-"+java.util.UUID.randomUUID();
  if(dao.insertar(new Capsula(0,titulo,"Mensaje",LocalDate.of(2030,1,1)))!=1) throw new IllegalStateException("INSERT");
  var c=dao.listarTodos().stream().filter(x->x.getTitulo().equals(titulo)).findFirst().orElseThrow();
  if(dao.actualizar(new Capsula(c.getId(),titulo,"Editado",c.getFechaApertura()))!=1) throw new IllegalStateException("UPDATE");
  if(dao.listarTodos().stream().noneMatch(x->x.getId()==c.getId() && x.getMensaje().equals("Editado"))) throw new IllegalStateException("SELECT");
  if(dao.eliminar(c.getId())!=1 || dao.listarTodos().stream().anyMatch(x->x.getId()==c.getId())) throw new IllegalStateException("DELETE");
  System.out.println("CRUD OK");
 }
}
