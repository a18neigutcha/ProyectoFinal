const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'password',
    database: 'RE_FIND',
    insecureAuth : true
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db is connected');
    }
});

module.exports = mysqlConnection;