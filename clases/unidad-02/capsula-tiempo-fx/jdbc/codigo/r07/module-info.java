module cl.duoc.dsy1102.timecapsule {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.sql;
    requires org.mariadb.jdbc;

    opens cl.duoc.dsy1102.timecapsule to javafx.fxml;
    exports cl.duoc.dsy1102.timecapsule;
}
