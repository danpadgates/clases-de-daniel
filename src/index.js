// ARCHIVO PRINCIPAL DEL BACKEND

const app = require('./app');

// CONECCIÓN A LA BASE DE DATOS

// LEVANTANDO EL SERVIDOR

app.listen(4444, ()=>{
    console.log('Hola mundo')
})

/*

    req => request
    res => response

    GET, para obtener los datos
    POST, para crear algún objecto y guardarlo en la BD
    PUT se utiliza para actualizar un campo de un objeto
    y DELETE se utiliza para eliminar de la BD

    NOTA:
    Solo a los métodos POST y PUT se les puede enviar un req.body
    Mientras que los parámetros se les puede enviar a cualquier método
*/