USE RE_FIND;
 
INSERT INTO USUARIO VALUES 
	(1,'Ryan','Ryan@gmail.com','password'),
    (2,'Joe','Joe@gmail.com','password'),
    (3,'Jhon','Jhon@gmail.com','password');


INSERT INTO LUGAR (id,titulo,direccion,latitud,longitud,descripcion,valoracion,userId) VALUES
	(1,'Bar Bacardi','Calle ricart, 26','41.3731458','2.1555771','Bar con unos buenos cocteles',5,1),
    (2,'Plaza españa','Plaza españa','41.3750218','2.1469292','Lugar turistico muy turistico',7,1),
    (3,'Rabipelao Raval','Carrer de la Riera Alta, 50','41.3816906','2.1642656','Restaurante habientado en Harry Potter',9,1);
    

INSERT INTO NOTICIA VALUES
	(1,'Promocion 2x1','Hoy tenemos una promocion de dos por uno en margaritas',1),
    (2,'Hay un concierto esta noche','Hoy habra un concierto a las 12 pm',2),
    (3,'Hoy tenemos un famoso invitado','Ventra la autora J. K. Rowling de 2 pm a 6 pm',3);
    

INSERT INTO CATEGORIA VALUES
	(1,'Restaurant'),
    (2,'Lugar turistico'),
    (3,'Ambientacion');
    

INSERT INTO CATEGORIA_LUGAR VALUES
	(1,1),
    (2,2),
    (3,3);

-- INSERT INTO USUARIO_LUGAR VALUES
-- 	(1,1),
--     (2,2),
--     (3,3);
    
INSERT INTO FAVORITO VALUES
	(1,1),
    (2,2),
    (3,3);
    
INSERT INTO COMPARTIDO VALUES
	(1,1),
    (2,2),
    (3,3);
    
INSERT INTO VISITA_PENDIENTE VALUES
	(1,1),
    (2,2),
    (3,3);
    

INSERT INTO COMENTARIO VALUES
	(1,1,1,'Un lugar interesante',4),
    (2,2,2,'Es un lugar muy concurrido',3),
    (3,3,3,'Me encanta el ambiente',9);


INSERT INTO DENUNCIA VALUES
	(1,2,1,'Contenido inapropiado'),
    (2,3,1,'Contenido inapropiado');