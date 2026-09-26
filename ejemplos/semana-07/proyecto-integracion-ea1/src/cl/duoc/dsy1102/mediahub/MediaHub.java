package cl.duoc.dsy1102.mediahub;

import java.util.ArrayList;
import java.util.List;

public class MediaHub {

    private final List<Recurso> recursos;

    public MediaHub() {
        recursos = new ArrayList<>();
    }

    public void agregarRecurso(Recurso recurso) {
        if (buscarPorCodigo(recurso.getCodigo()) != null) {
            throw new IllegalArgumentException("Ya existe un recurso con ese código.");
        }
        recursos.add(recurso);
    }

    public Recurso buscarPorCodigo(String codigo) {
        for (Recurso recurso : recursos) {
            if (recurso.getCodigo().equalsIgnoreCase(codigo)) {
                return recurso;
            }
        }
        return null;
    }

    public void listarRecursos() {
        if (recursos.isEmpty()) {
            System.out.println("No hay recursos registrados.");
            return;
        }

        for (Recurso recurso : recursos) {
            System.out.println(recurso.obtenerDescripcion());
        }
    }

    public void mostrarPoliticasPrestamo() {
        if (recursos.isEmpty()) {
            System.out.println("No hay recursos registrados.");
            return;
        }

        for (Recurso recurso : recursos) {
            System.out.println(
                    recurso.getTitulo() + " → "
                    + recurso.obtenerDiasPrestamo() + " días"
            );
        }
    }

    public void prestarRecurso(String codigo) {
        obtenerRecursoExistente(codigo).prestar();
    }

    public void devolverRecurso(String codigo) {
        obtenerRecursoExistente(codigo).devolver();
    }

    public void descargarRecurso(String codigo) {
        Recurso recurso = obtenerRecursoExistente(codigo);

        if (!(recurso instanceof Descargable)) {
            throw new IllegalArgumentException(
                    "El recurso seleccionado no es descargable."
            );
        }

        Descargable descargable = (Descargable) recurso;
        descargable.descargar();
    }

    private Recurso obtenerRecursoExistente(String codigo) {
        Recurso recurso = buscarPorCodigo(codigo);

        if (recurso == null) {
            throw new IllegalArgumentException("No existe un recurso con ese código.");
        }

        return recurso;
    }
}
