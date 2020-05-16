# API

## Descripción

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

..... En desarrollo.

