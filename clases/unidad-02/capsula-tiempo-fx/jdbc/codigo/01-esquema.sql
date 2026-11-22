CREATE DATABASE IF NOT EXISTS capsula_tiempo
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE capsula_tiempo;
CREATE TABLE IF NOT EXISTS mensajes_futuros (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  autor VARCHAR(80) NOT NULL,
  texto VARCHAR(500) NOT NULL,
  plazo_anios INT NOT NULL,
  creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT chk_plazo CHECK (plazo_anios IN (1, 5, 10))
) ENGINE=InnoDB;
DESCRIBE mensajes_futuros;
SELECT COUNT(*) AS cantidad FROM mensajes_futuros;
