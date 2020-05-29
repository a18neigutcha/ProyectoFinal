# API

API desarrollada en un servidor node utilizando express para configurar el servidor, el servidor consume datos de una base de datos mysql.

## Configurar proyecto
```
npm install
```

## Compilar proyecto
```
npm run dev
```
## Estructuracion (src)

En el directorio "/src" se encuantra el codigo del servidor.  

### index.js 

Crea la configuracio basica del servidor done se establecen las dependencias iniciales.

### database.js

Crea la conexion con la base de datos mysql.

En este ficher se establecen los parametros para el acceso a la base de datos.

### config.js

Fichero de configuracion de los parametros de acceso a la base de datos y establece una palabra secreta para JsonToken.


### routes

En este directorio se configuran los las rutas a las que respondera la api.
Se trabaja creando utilizando las rutas de express y las funciones de un controlador definido, donde finalmente el fichero de rutas es añadido al apartado de rutas del index.js 

### controllers

En este se utiliza la conexion a la base de datos y se crea la logia de peticion y respuesta de las rutas.

### model

En el modelo creamos el modelo de los datos esperados de la base de datos normalmente acorde a las tables definidas en la base de datos y tambien se definen funciones para el tratamiento de estos datos.

### public

En este fichero definimos todo el contenido publico de la Api, normalmente utilizado para servir paginas html o documentación.


..... En desarrollo.

