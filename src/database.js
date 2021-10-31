const mysql = require('mysql'); //requiriendo mysql
const mysqlConection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db-azucareragt',
});

mysqlConection.connect(function (err){
    if(err){
        console.log(err)
        return;
    }else{
        console.log('DB esta conecatada')
    }
});

//Exportando la conexion
module.exports = mysqlConection;