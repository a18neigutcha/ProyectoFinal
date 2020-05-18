/**
 * Fichero de confiracion del servidor.
 * 
 * @var {String} secret Palabra secreta para codificar JsonToken
 * @var {Json} databaseAcces Parametros de acceso a la base de datos segun requisitos del mysql.
 * 
 */
module.exports = {

    secret: 'mysecretkey',
    databaseAcces:{
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'RE_FIND',
        insecureAuth : true
    }
}