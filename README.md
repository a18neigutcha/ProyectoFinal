# ProyectoFinal

Pagina web de esos lugares escondidos o poco frecuentes de encontrar en Barcelona.

El proyecto consiste de tres partes.

### App

Parte FrontEnd desarrollada con Framework VUE.

### Api

Se encarga de comunicar la base de datos con la web.

### Database

Base de datos mysql donde se guardan la informacion de los lugares, los usuarios y sus preferencias.


## Dependencias:

- mysql:5.7.30
- node:13.*

## Despliege con docker.

El proyecto se despliega con docker, para ello es necesario contar con

- Docker
- Docker-compose

El proyecto cuenta con un documento "docker-compose.yml" que nos levanta 3 contenedores:

#### mysql
Nos despliega la base de datos y al momento de levantarlo ejecuta los scripts de creación de la base de datos.

Es necesario tener instalado mysql en local.

#### api
Levanta un servidor node creado con express que depende del contenedor "mysql".Es el encargado de comunicar la base de datos con la pagina web.

#### app
Levanta una pagina web estativa generada con vue que es servida por un servidor ngix.

Para levantar los contenedores correr el comando en del directorio del proyecto.

- docker-compose up -d

Ejecuciones Básicas (revisar documentación específica en cada readme). Ambas ejecuciones son necesarias mientras que no se despliegue en canales oficiales como AWS:

Desde el directori api. Con terminal, se ejecuta con el comando npm run dev y el servidor se pone en marcha.

Desde el directori app. Con terminal, se ejecuta con el comando npm run serve y se pueden visualizar la página desplegada en dos direcciones:
 - Local:   http://localhost:8080/ 
  - Network: http://192.168.0.15:8080/



> Para una mejor integracion con docker se utiliza DockerHub con GitHub de esta forma cada vez que se realiza un commit en el proyecto git se auto genera las imagenes correspondientes listas para su uso en el DockerHub.

> Es necesario reiniciar el contenedor de la api ya que el contenedor de la base de datos tarda mas en levantarse totalmente por lo cual la conexión no se puede realizar inmediatamente.








