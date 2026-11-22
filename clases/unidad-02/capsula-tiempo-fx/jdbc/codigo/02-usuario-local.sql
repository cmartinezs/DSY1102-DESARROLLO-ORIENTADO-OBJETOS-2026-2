-- Solo para laboratorio LOCAL: editar contraseña ANTES de ejecutar.
-- NO publicar una copia de este script que incluya una contraseña real.
CREATE USER IF NOT EXISTS 'capsula_app'@'localhost'
 IDENTIFIED BY 'CAMBIAR_POR_CONTRASENA_LOCAL';
GRANT SELECT, INSERT ON capsula_tiempo.* TO 'capsula_app'@'localhost';
SHOW GRANTS FOR 'capsula_app'@'localhost';
-- CREATE USER IF NOT EXISTS no cambia la clave si la cuenta ya existía.
