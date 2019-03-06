--Creando la DB
CREATE DATABASE alumnos;

--Utilizando la DB
USE alumnos;

-- Crando tablas
CREATE TABLE alumno (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- Mostrar tablas
SHOW TABLES;

--Ver estructura de TABLAS
DESCRIBE alumno;

-- Cambiar setting de connections
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';