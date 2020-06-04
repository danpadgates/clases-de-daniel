function limpiarDatos(req, res, next){
    /*
        DATOS QUE ESPERA EL SERVIDOR

        placa
        tipo_viaje
        cantidad_asientos 
        numero_tripulacion
        ruta_id
        provincia_id
    */

    if(!req.body.placa){
        return res.status(400).json({
            ok: false,
            message: 'Debe proporcionar el placa'
        })
    }

    if(!req.body.tipo_viaje){
        return res.status(400).json({
            ok: false,
            message: 'Debe proporcionar el tipo_viaje'
        })
    }

    if(!req.body.cantidad_asientos){
        return res.status(400).json({
            ok: false,
            message: 'Debe proporcionar la cantidad_asientos'
        })
    }

    if(!req.body.numero_tripulacion){
        return res.status(400).json({
            ok: false,
            message: 'Debe proporcionar el numero_tripulacion'
        })
    }

    if(!req.body.ruta_id){
        return res.status(400).json({
            ok: false,
            message: 'Debe proporcionar los ruta_id'
        })
    }

    if(!req.body.provincia_id){
        return res.status(400).json({
            ok: false,
            message: 'Debe proporcionar provincia_id'
        })
    }

    return next();
}

module.exports = {
    limpiarDatos
}