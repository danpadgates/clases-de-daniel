// ARCHIVO PRINCIPAL DEL BACKEND

const app = require('./app');
const PORT = 4444;

// CONEXIÓN A LA BASE DE DATOS
// AÚN NO LO UTILIZAMOS
// LEVANTANDO EL SERVIDOR

app.listen(PORT, ()=>{
    console.log(`Servidor levantado en el puerto ${PORT}`)
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