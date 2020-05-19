const mysql = require('mysql');
const accesoMysql = require('./config').databaseAcces;

/**
 * @file database.js
 * 
 * @description Crea la connexion con la base de datos. Se establecen parametros de acceso.
 */

const mysqlConnection = mysql.createConnection(accesoMysql);

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db is connected');
    }
});

module.exports = mysqlConnection;