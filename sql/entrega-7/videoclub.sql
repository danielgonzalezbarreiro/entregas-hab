CREATE DATABASE videoclub;
USE videoclub;

CREATE TABLE pelicula (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    pegi INT NOT NULL,
    caratula VARCHAR(255) NOT NULL,
    directores VARCHAR(20) NOT NULL,
    actores VARCHAR(20) NOT NULL
);

CREATE TABLE socio (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    DNI INT NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    email VARCHAR(30) NOT NULL,
	telefono INT NOT NULL
);

CREATE TABLE proveedor (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    DNI INT NOT NULL,
    email VARCHAR(30) NOT NULL,
    telefono INT NOT NULL
);

CREATE TABLE copia (
	id INT PRIMARY KEY AUTO_INCREMENT,
    tipo ENUM ('VHS' , 'DVD'),
    tarifa ENUM ('estreno', 'estandar', 'antiguas'),
    id_pelicula INT,
    id_proveedor INT,
    CONSTRAINT fk_proveedor FOREIGN KEY (id_proveedor) REFERENCES proveedor(id),
    CONSTRAINT fk_pelicula FOREIGN KEY (id_pelicula) REFERENCES pelicula(id)
);

CREATE TABLE alquiler (
	fecha_devolucion DATE NOT NULL,
    rate INT,
    comentario VARCHAR(255) NOT NULL,
    id_socio INT,
    id_copia INT,
    CONSTRAINT fk_socio_alquiler FOREIGN KEY (id_socio) REFERENCES socio(id),
    CONSTRAINT fk_copia_alquiler FOREIGN KEY (id_copia) REFERENCES copia(id)
);