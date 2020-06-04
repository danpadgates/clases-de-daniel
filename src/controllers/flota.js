const db = require('../database');

async function getFlota(req, res) {
    try {
        const resultado = await db.
            query('SELECT * FROM flota_vista');

        return res.status(200).json({
            message: 'Petición correcta',
            resultado
        });
    } catch (e) {
        return res.status(500).json({
            ok: false,
            message: 'Error en la base de datos'
        })
    }
}

async function getBusById(req, res) {
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

async function addBus(req, res) {
    try {
        const query = 'INSERT INTO bus (placa, tipo_viaje, ' +
            'cantidad_asientos, numero_tripulacion, ' +
            'ruta_id, provincia_id) VALUES (?, ?, ?, ?, ?, ?)';

        const resultado = await db.query(query, [
            req.body.placa,
            req.body.tipo_viaje,
            req.body.cantidad_asientos,
            req.body.numero_tripulacion,
            req.body.ruta_id,
            req.body.provincia_id
        ]);

        return res.status(200).json({
            message: 'Bus añadido',
            resultado
        })
    } catch (e) {
        return res.status(500).json({
            ok: false,
            message: 'Error en la base de datos'
        })
    }

}

async function updateBus(req, res) {
    /*
        cantidad_asientos
        numero_tripulacion
        placa
    */
    try {
        const query = 'UPDATE bus SET cantidad_asientos = ?, ' 
            +'numero_tripulacion = ? WHERE placa = ?';

        const resultado = await db.query(query, [
            req.body.cantidad_asientos,
            req.body.numero_tripulacion,
            req.params.placa
        ])

        return res.status(200).json({
            message: 'Bus actualizado',
            resultado
        })
    } catch (e) {
        return res.status(500).json({
            ok: false,
            message: 'Error en la base de datos'
        })
    }

}

async function deleteBus(req, res) {

    try {
        const query = 'DELETE FROM bus WHERE placa = ?';

        const resultado = await db.query(query, 
            req.params.placa)

        return res.status(200).json({
            message: 'Bus eliminado',
            resultado
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