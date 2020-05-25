/**
 * @file config.js
 * 
 * @description Fichero de confiracion del servidor.
 * 
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