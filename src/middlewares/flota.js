function limpiarDatos(req, res, next){
    // LIMPIEZA DE DATOS

    /*
        DATOS QUE ESPERA EL SERVIDOR

        - id
        - color
        - placa
        - km
        - asientos
    */

    // si el dato "id" no ha sido enviado
    if(!req.body.id){
        return res.status(400).json({
            ok: false,
            message: 'Debe proporcionar el id'
        })
    }

    if(!req.body.color){
        return res.status(400).json({
            ok: false,
            message: 'Debe proporcionar el color'
        })
    }

    if(!req.body.placa){
        return res.status(400).json({
            ok: false,
            message: 'Debe proporcionar la placa'
        })
    }

    if(!req.body.km){
        return res.status(400).json({
            ok: false,
            message: 'Debe proporcionar el km'
        })
    }

    if(!req.body.asientos){
        return res.status(400).json({
            ok: false,
            message: 'Debe proporcionar los asientos'
        })
    }

    if(req.body.placa.length != 6){
        return res.status(400).json({
            ok: false,
            message: 'La placa debe tener 6 letras'
        })
    }

    return next();
}

module.exports = {
    limpiarDatos
}