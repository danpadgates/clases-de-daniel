const express = require('express');
const router = express.Router();

// CONTROLADOR DE INDEX
const indexCtrl = require('../controllers/index');

// RUTAS DE NUESTRA API

router.get('/', indexCtrl.methodGet)

router.post('/', indexCtrl.methodPost)

router.put('/', indexCtrl.methodPut)

router.delete('/', indexCtrl.methodDelete)

module.exports = router;