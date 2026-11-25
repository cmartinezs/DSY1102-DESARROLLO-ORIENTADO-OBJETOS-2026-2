CREATE DATABASE IF NOT EXISTS capsula_db;
USE capsula_db;
CREATE TABLE IF NOT EXISTS capsula (
 id INT AUTO_INCREMENT PRIMARY KEY,
 titulo VARCHAR(100) NOT NULL,
 mensaje TEXT NOT NULL,
 fecha_apertura DATE NOT NULL
);
INSERT INTO capsula(titulo,mensaje,fecha_apertura)
VALUES ('Mi futuro','Terminar mi carrera','2028-12-01'),
('Un recuerdo','Mi primer programa','2027-06-15');
-- Ejecutar INSERT solo una vez para evitar duplicados.
