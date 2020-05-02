// AQUÍ IRÁ LA CONFIGURACIÓN DEL BACKEND

const express = require('express')
const app = express()

// CONFIGURACIÓN PARA QUE EL SERVIDOR PUEDA ENTENDER JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json())

module.exports = app;