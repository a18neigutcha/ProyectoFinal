# ProyectoFinal

Pagina web de esos lugares escondidos o poco frecuentes de encontrar en Barcelona.

**El proyecto consiste de tres partes.** 

### App

Parte FrontEnd desarrollada con Framework VUE.

[Leer más](https://github.com/a18neigutcha/ProyectoFinal/tree/master/App)

### Api

Servidor desarrollado con NodeJs(Express).

[Leer más](https://github.com/a18neigutcha/ProyectoFinal/tree/master/Api).

### Database

Base de datos mysql donde se guardan la informacion de los lugares, los usuarios y sus preferencias.

[Leer más](https://github.com/a18neigutcha/ProyectoFinal/tree/master/Database)


## Dependencias:

- mysql:5.7.30
- node:13.*

## Despliege con docker.

Se recomienda utilizar docker para desplegar la aplicación, pero esto no quita que se pueda desplegar cada parte del proyecto de forma individual.

Para desplegar la aplicación entera tenemos un fichero docker-compose que se encargara de ajustar los parametros necesarios para nuestra aplicación.


El fichero documento "docker-compose.yml" ejecutado con el comando.

```
docker-compose up -d
```

Levantara tres contenedores: 

#### Contenedor mysql
Nos despliega la base de datos y al momento de levantarlo ejecuta los scripts de creación de la base de datos.

Es necesario tener instalado mysql en local.

tomar en cuenta que se incluye un ficher datosDePrueba.sql que cargara la base de datos con datos de prueba para trabajar en desarrollo, este mismo no esta incluido en la rama de despliegue.

Por defecto el contenedor esta configurado para establecer el:
-   Usuario: root
-   Pwd: password

Si require cambiar esto parametros necesita acceder a **docker-compose.yml** y modificar los parametros de configuración y tambien modificar el fichero **config.js** de la api con los parametros correspondientes.

Para ver más información de la installación sin Docker [Ver.](https://github.com/a18neigutcha/ProyectoFinal/tree/master/Database)



#### Contenedor api

Levanta un servidor node creado con express que depende del contenedor "mysql".Es el encargado de comunicar la base de datos con la pagina web.

Este nos montara un volumen que compartira con el directorio Api de este proyecto donde los cambios en el codigo de este directorio afectaran a la Api.

Hay que tomar en cuenta que este contenedor se comunica con el localhost de la maquina por ellos hay que dejar el puerto 3000 libre.

```
IMPORTANTE.- Por motivos de gestión del docker el contenedor api depende 
del mysql pero este contenedor tarda un tiempo mayor en levantarse que 
el contenedor api asi que se recomienda revisar la conexion de la Api con la 
base de datos.

 - docker logs api 

Si la conexion no se establecio reiniciar el contenedor api.

 - docker restart api
```
Para ver más información de la installación sin Docker [Ver.](https://github.com/a18neigutcha/ProyectoFinal/tree/master/Api)


#### Contenedor app

##### En produccion.

** Este contenedor esta pensado para trabajar solamente con en la parte de despliegue **

Este contenedor cuenta con integracion continua en dockerHub por ello cada vez que se ejecuta un commit en la rama de despliegue de este repositorio github se genera una imagen con los cambios en el dockerHub.

Este contenedor se crea consumiendo una imagen generada especifica para esta aplicasion.

Imagen docker: [ngch43/vue_app](https://hub.docker.com/repository/docker/ngch43/vue_app).

##### En desarrollo

Para trabajar en desarrollo se recomiendo trabajar con la aplicación vue cli directamente.

```
npm run serve
```
Para ver más información de la installación sin Docker [Ver.](https://github.com/a18neigutcha/ProyectoFinal/tree/master/App)








