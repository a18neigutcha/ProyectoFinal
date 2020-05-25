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
        host: 'mysql',
        user: 'root',
        password: 'password',
        database: 'RE_FIND',
        insecureAuth : true
    }
}