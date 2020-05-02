function getFlota(req, res){
    // consulta a la base datos
    // SELECT * FROM flota
    res.send('Datos de la flota')
}

function getBusById(req, res){
    // consulta a la base de datos
    // SELECT * FROM flota WHERE id = ?

    // Capturar los datos que vengan por parámetro
    let bus_id = req.params.bus_id

    console.log('parametros', req.params);

    res.send('Datos de bus '+ bus_id+ ' en especifico')
}

function addBus(req, res){
    // consulta a la base de datos
    // INSERT INTO flota () asdfñasdf

    // pool.query('INSERT INTO float(placa, color, km) VALUES ('+req.body.placa+', ' )
    
    console.log('body', req.body);
    
    res.send('Bus añadido a la flota')
}

function updateBus(req, res){
    // consulta a la base de datos
    // UPDATE flota WHERE balbalba

    /*

    UPDATE flota SET placa = ?, color = ?
        WHERE id = ?

    */

    var consulta = `UPDATE float SET color = ${req.body.color}, km = ${req.body.km} `+
        `WHERE id = ${req.params.bus_id}`

    // pool.query(consulta)

    console.log('bus parámetro', req.params.bus_id);
    console.log('body', req.body);

    console.log('consulta ', consulta);
    
    
    res.send('Bus actualizado')
}

function deleteBus(req, res){
    // consulta a la base datos
    // DELETE FROM flota WHERE lskdhfa

    let bus_id = req.params.bus_id

    let consulta = `DELETE FROM flota WHERE id = ${bus_id}`

    // let consulta = `DELETE FROM flota WHERE id  `+bus_id

    console.log('consulta: ', consulta)

    res.send('Bus eliminado')
}

module.exports = {
    getFlota,
    getBusById,
    addBus,
    updateBus,
    deleteBus
}