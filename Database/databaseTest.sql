CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE IF NOT EXISTS employes (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT (11) DEFAULT NULL,
    PRIMARY KEY(id)


);

DESCRIBE employes;

INSERT INTO employes VALUES 
	(1,'Ryan Ray',2000),
    (2,'Joe McMilan',40000),
    (3,'Jhon Carter',50000);


SELECT * FROM employes;