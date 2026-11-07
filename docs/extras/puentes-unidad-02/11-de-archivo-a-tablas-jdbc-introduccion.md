# 11 · Del JSON a una base de datos: vocabulario mínimo para JDBC

**Cápsula puente hacia la siguiente etapa · 12–18 min**  
**Aviso:** esta guía anticipa vocabulario; no reemplaza las clases formales de JDBC ni supone que ya hayas estudiado bases de datos.

## ¿Por qué cambiar de archivo?
Un archivo JSON permite guardar todos los mensajes, pero cada alta de R06 reescribe la colección completa. Eso es entendible y suficiente para nuestro laboratorio. Una base de datos relacional organiza información en **tablas y filas** y permite operaciones específicas de consulta, alta, actualización y eliminación.

| JSON / Java | Relacional |
| --- | --- |
| Un objeto `MensajeFuturo` | Una fila de `mensajes` |
| `autor`, `texto`, `plazoAnios` | Columnas |
| `List<MensajeFuturo>` | Conjunto de filas devueltas por una consulta |
| `registrar` | Una operación `INSERT` |
| `listar` | Una operación `SELECT` |

El orden de una `List` está definido por la colección. **Las filas de una consulta SQL no tienen orden garantizado** sin `ORDER BY`.

## Idea de tabla

```sql
CREATE TABLE mensajes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  autor VARCHAR(100) NOT NULL,
  texto VARCHAR(500) NOT NULL,
  plazo_anios INTEGER NOT NULL
);
```

La sintaxis exacta del ID autonumérico depende del motor de base de datos; este es un ejemplo didáctico, no una migración certificada a Oracle o SQL Server.

## Qué añade JDBC
JDBC es la API de Java que permite conectarse a una BD mediante un **driver**. Con `Connection` abrimos la conexión; con `PreparedStatement` enviamos una sentencia con parámetros, evitando concatenar datos del usuario en SQL; con `ResultSet` leemos filas de resultados.

```java
String sql = "SELECT autor, texto, plazo_anios FROM mensajes WHERE id = ?";
try (PreparedStatement ps = conexion.prepareStatement(sql)) {
    ps.setLong(1, 10L);
    try (ResultSet rs = ps.executeQuery()) {
        while (rs.next()) {
            System.out.println(rs.getString("autor"));
        }
    }
}
```

`conexion` debe existir antes de ejecutar este fragmento; **no es una aplicación completa** y no incluye driver, credenciales ni URL de conexión. No guardamos secretos en código público.

## ¿Desaparece el DAO?
No necesariamente: `MensajeDao` puede seguir siendo el contrato y cambiar su implementación de JSON a JDBC. El Controller no tendría que manipular consultas.

## Autoevaluación
1. ¿Qué hace `PreparedStatement` mejor que concatenar directamente valores? **Usa parámetros y separa los datos de la estructura SQL.**
2. ¿`SELECT` garantiza que la primera fila es la más antigua? **No, sin `ORDER BY`.**
3. ¿Un DAO necesita siempre base de datos? **No: nuestro JsonMensajeDao usa archivos.**

**Ruta curricular:** [Planificación DSY1102 · semana 13](../../../semanas/README.md). No suponer que los ejercicios de esa semana ya estén publicados.
