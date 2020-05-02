// CONFIGURACIÓN DEL ROUTER
const express = require('express')
const router = express.Router()

// CONTROLADOR
const flotaCtrl = require('../controllers/flota')


// RUTAS
// prefijo /flota

// Ruta que nos devuelva todos los buses(flota)
router.get('/', flotaCtrl.getFlota)

// Ruta que te devuelva un bus en particular
// /BUS_ID
// Para especificar que es un parámetro se antepone ":"
router.get('/:bus_id', flotaCtrl.getBusById)

// Ruta para añadir un bus a la flota
router.post('/', flotaCtrl.addBus)

// Ruta para actualizar un bus
router.put('/:bus_id', flotaCtrl.updateBus)

// Ruta para eliminar un bus
router.delete('/:bus_id', flotaCtrl.deleteBus)

// PARA EXPORTARLO
module.exports = router