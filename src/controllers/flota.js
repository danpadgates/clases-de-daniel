function getFlota(req, res) {
    // consulta a la base datos
    // SELECT * FROM flota

    // res.send('Datos de la flota')

    // ENVIANDO RESPUESTA EN 
    // APARTE DE ENVIAR EL JSON TAMBIÉN PODEMOS ENVIAR 
    // EL CÓDIGO HTTP, EL RESPONSE - CODE

    try {
        // LÓGICA QUE PUEDE PRODUCIR ERROR
        // throw new Error('Simulando error')

        return res.status(200).json({
            ok: true,
            message: 'Petición correcta',
            flota: [
                { placa: 'abc123', color: 'negro' },
                { placa: 'def456', color: 'azul' }
            ]
        });
    } catch (e) {
        return res.status(500).json({
            ok: false,
            message: 'Error en la base de datos'
        })
    }


}

function getBusById(req, res) {
    // consulta a la base de datos
    // SELECT * FROM flota WHERE id = ?

    // Capturar los datos que vengan por parámetro
    let bus_id = req.params.bus_id

    // console.log('parametros', req.params);

    // res.send('Datos de bus '+ bus_id+ ' en especifico')
    try {
        return res.status(200).json({
            ok: true,
            message: 'Datos de un bus',
            bus: {
                id: bus_id,
                placa: 'abc123',
                color: 'gris'
            }
        })
    } catch (e) {
        return res.status(500).json({
            ok: false,
            message: 'Error en la base de datos'
        })
    }

}

function addBus(req, res) {
    // consulta a la base de datos
    // INSERT INTO flota () asdfñasdf
    // pool.query('INSERT INTO float(placa, color, km) VALUES ('+req.body.placa+', ' )
    // console.log('body', req.body);

    /*
        DATOS QUE ESPERA EL SERVIDOR

        - id
        - color
        - placa
        - km
        - asientos
    */

    let bus = {
        id: req.body.id,
        color: req.body.color,
        placa: req.body.placa,
        km: req.body.km,
        asientos: req.body.asientos
    }

    // res.send('Bus añadido a la flota')
    // con la variable bus ya podemos guardarlo en la base de datos
    try {
        return res.status(200).json({
            ok: true,
            message: 'Bus añadido',
            id_insertado: bus.id
        })
    } catch (e) {
        return res.status(500).json({
            ok: false,
            message: 'Error en la base de datos'
        })
    }

}

function updateBus(req, res) {
    // consulta a la base de datos
    // UPDATE flota WHERE balbalba

    /*

    UPDATE flota SET placa = ?, color = ?
        WHERE id = ?

    */



    // pool.query(consulta)

    // console.log('bus parámetro', req.params.bus_id);
    // console.log('body', req.body);

    // console.log('consulta ', consulta);

    let bus_update = {
        color: req.body.color,
        km: req.body.km
    }

    let bus_id = req.params.bus_id;

    var consulta = `UPDATE flota SET color = ${bus_update.color}, km = ${bus_update.km} ` +
        `WHERE id = ${bus_id}`

    // res.send('Bus actualizado')
    try {
        return res.status(200).json({
            ok: true,
            message: 'Bus actualizado'
        })
    } catch (e) {
        return res.status(500).json({
            ok: false,
            message: 'Error en la base de datos'
        })
    }

}

function deleteBus(req, res) {
    // consulta a la base datos
    // DELETE FROM flota WHERE lskdhfa

    let bus_id = req.params.bus_id

    let consulta = `DELETE FROM flota WHERE id = ${bus_id}`

    // let consulta = `DELETE FROM flota WHERE id  `+bus_id

    // console.log('consulta: ', consulta)

    res.send('Bus eliminado')

    // TAREITA RESPONDER EN JSON
    try {
        return res.status(200).json({
            ok: true,
            message: 'Bus eliminado'
        })
    } catch (e) {
        return res.status(500).json({
            ok: false,
            message: 'Error en la base de datos'
        })
    }

}

module.exports = {
    getFlota,
    getBusById,
    addBus,
    updateBus,
    deleteBus
}