const db = require('../database');

function getRutas(req ,res){
    // DEVOLVER LAS RUTAS DE LA BASE DE DATOS
    
    // MULTICONSULTAS O CONSULTAS ANIDADAS
    db.query('SELECT * FROM ruta_vista')
        .then(resultado=>{
            return res.status(200).json({
                message: 'Tutto bene',
                resultado
            })
        })
        .catch(error=>{
            return res.status(500).json({
                message: 'ERROR EN LA CONSULTA'
            })
        })
}

module.exports = {
    getRutas
}




/*

    // ASÍNCRONA
    db.query('SELECT * FROM ruta_vista', (err1, resultado1)=>{
        if(err1){
            return res.status(500).json({
                message: 'Error en la consulta'
            })
        }

        // NECESITAS OPERAR/INTERACTUAR CON EL RESULTADO 
        // DE LA PRIMERA CONSULTA (resultado1)

        db.query('UPDATE tabla SET ? WHERE '+ resultado1.id, 
            (err2, resultado2)=>{
                if(err2){
                    return res.status(500).json({
                        message: 'Error en la consulta'
                    })
                }

                // NECESITAS OPERAR/INTERACTUAR CON EL RESULTADO 
                // DE LA SEGUNDA CONSULTA (resultado2)
                db.query('INSERT '+resultado2.id, (err3, resultado3)=>{
                    if(err2){
                        return res.status(500).json({
                            message: 'Error en la consulta'
                        })
                    }

                    
                })

            })
    })





    2DO ENFOQUE 

    // OYE, ESPÉRATE A QUE NOS DEVUEVA LA RESPUESTA
    try {
        const resultado1 = await db.query('SELECT * FROM ruta_vista');
    
        return res.status(200).json({
            message: 'Todo bien',
            resultado1
        })
    }catch(error){
        return res.status(500).json({
            message: 'ERROR EN LA CONSULTA'
        })
    }







*/