DROP DATABASE IF EXISTS RE_FIND;
CREATE DATABASE IF NOT EXISTS RE_FIND charset=utf8;

USE RE_FIND;


CREATE TABLE IF NOT EXISTS USUARIO (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45),
    apellido VARCHAR(45),
	correo VARCHAR(45),
    nickname VARCHAR (45),
    password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS LUGAR(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45),
    direccion VARCHAR(45),
    descripcion VARCHAR(225),
    latitud VARCHAR (255),
    longitud VARCHAR (255),
    valoracion INT(11) DEFAULT 0,
    dirUrl VARCHAR(255) DEFAULT "'https://picsum.photos/200/300'"
	-- estado VARCHAR(45) DEFAULT NULL /* Este podria convertirse en entidad*/  
);



CREATE TABLE IF NOT EXISTS NOTICIA(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    descripcion VARCHAR(255) DEFAULT NULL,
    idLugar INT(11),
	FOREIGN KEY (idLugar) REFERENCES LUGAR(id)
		ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CATEGORIA(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS CATEGORIA_LUGAR(
	idLugar INT(11),
    idCategoria INT(11),
    PRIMARY KEY(idLugar,idCategoria),
    FOREIGN KEY (idLugar) REFERENCES LUGAR(id)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (idCategoria) REFERENCES CATEGORIA(id)
		ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS USUARIO_LUGAR(
	idUsuario INT(11),
    idLugar INT(11),
    PRIMARY KEY(idLugar,idUsuario),
    FOREIGN KEY (idLugar) REFERENCES LUGAR(id)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (idUsuario) REFERENCES USUARIO(id)
		ON DELETE CASCADE ON UPDATE CASCADE
);


/*
	Las tablas FAVORITO, COMPARTIDO, VISITA_PENDIENTE
    habria que darle una vuelta para ver si hay 
    una forma mas eficiente.
*/
CREATE TABLE IF NOT EXISTS FAVORITO(
	idUsuario INT(11),
    idLugar INT(11),
    PRIMARY KEY(idLugar,idUsuario),
    FOREIGN KEY (idLugar) REFERENCES LUGAR(id)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (idUsuario) REFERENCES USUARIO(id)
		ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS VISITA_PENDIENTE(
	idUsuario INT(11),
    idLugar INT(11),
    PRIMARY KEY(idLugar,idUsuario),
    FOREIGN KEY (idLugar) REFERENCES LUGAR(id)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (idUsuario) REFERENCES USUARIO(id)
		ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS COMPARTIDO(
	idUsuario INT(11),
    idLugar INT(11),
    PRIMARY KEY(idLugar,idUsuario),
    FOREIGN KEY (idLugar) REFERENCES LUGAR(id)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (idUsuario) REFERENCES USUARIO(id)
		ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE IF NOT EXISTS COMENTARIO(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	idUsuario INT(11),
    idLugar INT(11),
	texto VARCHAR(45),
    valoracion INT(11) DEFAULT 0,
    FOREIGN KEY (idLugar) REFERENCES LUGAR(id)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (idUsuario) REFERENCES USUARIO(id)
		ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS DENUNCIA(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	idUsuario INT(11),
    idLugar INT(11),
	problema VARCHAR(45),
    FOREIGN KEY (idLugar) REFERENCES LUGAR(id)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (idUsuario) REFERENCES USUARIO(id)
		ON DELETE CASCADE ON UPDATE CASCADE
);




