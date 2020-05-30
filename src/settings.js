// AQUÍ IRÁ LA CONFIGURACIÓN DEL BACKEND

const express = require('express')
const morgan = require('morgan')
const app = express()

// VER PETICIONES QUE LLEGAN AL BACKEND
app.use(morgan('dev'))

// CONFIGURACIÓN PARA QUE EL SERVIDOR PUEDA ENTENDER JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json())

module.exports = app;