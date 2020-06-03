
API desarrollada en un servidor node utilizando express para configurar el servidor, el servidor consume datos de una base de datos mysql.

### Configurar proyecto
```
npm install
```

### Compilar proyecto
```
npm run dev
```
### Generar documentación
```
npm run doc
```

## Dependencias

Hay que tomar en cuenta algunas dependencias para el funcionamiento de la aplicacion, las cuales se instalaran de forma automatica con el comando "npm install"

- express: Para crear el servidor.
- morgan: Para visualizar por consola las peticiones al servidor.
- multer: Para guardar las imagenes y decodificar los formularios.
- path: Para generar las rutas.
- cors: Para generar cabeceras con protocoles de seguridad en las cabeceras de respuesta.
- jsonToken: Para generar token de autentificación.
- bcryptjs: Para encriptar y verificar los passwords de los usuarios.

## Rutas de la api

De forma generar la api responderara a la siguiente ruta por el puerto 3000.

```
http://{host}:3000/api/{ruta}

```

| Método | Ruta            | Descripción                                                          | Requiere                                                                      |
|--------|-----------------|----------------------------------------------------------------------|-------------------------------------------------------------------------------|
| GET    | /               | Lista de todos los lugares.                                          | -                                                                             |
| GET    | /:id            | Información de un lugar especifico.                                  | - Id del lugar.                                                               |
| DELETE | /:id            | Elimina un lugar por su id.                                          | - Id del lugar.                                                               |
| POST   | /               | Crea un lugar, es necesario un formulario con los campos necesarios. | - Token de verificación. - Formulario con los datos del lugar.                |
| GET    | /user/lugares   | Lista los lugares creados por un usuario.                            | - Token de verificación.                                                      |
| PUT    | /:id            | Actualiza datos de un lugar.                                         | - Token de verificación. - Formulario con los datos del lugar - Id del lugar. |
| PUT    | /valoracion/:id | Registra la valoración de un lugar.                                  | - Token de verificación. - Body con la nueva valoración. - Id del lugar.      |
| POST   | /signUp         | Registra un nuevo usuario                                            | - Formulario con los datos del usuario.                                       |
| POST   | /signIn         | Autentifica un usuario previamente creado.                           | - Formulario con las credenciales del usuario.                                |
| PUT    | /sesion/me      | Actualiza datos de un usuario.                                       | - Formulario con la nueva información del usuario.                            |
| GET    | /sesion/me      | Responde con la informacin de un usuario autentificado.              | - Token de verificación.                                                      |

### Observaciones

```
Para las peticiones que requieran Token de verificación es necesario establecer
una cabecera 'x-access-token' con el valor del token proporcionado por la API.

```