const express = require('express')
const router = express.Router()

// CONTROLADOR
const rutasCtrl = require('../controllers/rutas')

// prefijo /rutas

// Ruta que nos devuelva todos las rutas
router.get('/', rutasCtrl.getRutas)

module.exports = router