package app;

import dao.CapsulaDao;
import model.Capsula;

import java.time.LocalDate;
import java.util.UUID;

public class TestDao {

    public static void main(String[] args) throws Exception {
        CapsulaDao dao = new CapsulaDao();
        dao.listarTodos().forEach(capsula ->
                System.out.println(capsula.getId() + " " + capsula.getTitulo()));

        String titulo = "Prueba-" + UUID.randomUUID();
        Capsula nueva = new Capsula(0, titulo, "Mensaje", LocalDate.of(2030, 1, 1));

        if (dao.insertar(nueva) != 1) {
            throw new IllegalStateException("INSERT");
        }

        Capsula capsula = dao.listarTodos().stream()
                .filter(c -> c.getTitulo().equals(titulo))
                .findFirst()
                .orElseThrow();

        Capsula editada = new Capsula(
                capsula.getId(), titulo, "Editado", capsula.getFechaApertura()
        );

        if (dao.actualizar(editada) != 1) {
            throw new IllegalStateException("UPDATE");
        }

        boolean actualizada = dao.listarTodos().stream()
                .anyMatch(c -> c.getId() == capsula.getId() && c.getMensaje().equals("Editado"));

        if (!actualizada) {
            throw new IllegalStateException("SELECT");
        }

        if (dao.eliminar(capsula.getId()) != 1) {
            throw new IllegalStateException("DELETE");
        }

        boolean existe = dao.listarTodos().stream()
                .anyMatch(c -> c.getId() == capsula.getId());

        if (existe) {
            throw new IllegalStateException("DELETE");
        }

        System.out.println("CRUD OK");
    }
}
