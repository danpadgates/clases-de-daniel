const mysql = require('mysql');
const { promisify } = require('util');
const database = require('./keys');
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        return console.log('No se pudo establecer la conexión a la base de datos', err);
    }
    
    if(connection){
        connection.release();
        return console.log('Conexión establecida con la base de datos');
    }
})

pool.query = promisify(pool.query);

module.exports = pool;