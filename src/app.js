// EN ESTE ARCHIVO SE GUARDARÁ TODAS LAS RUTAS ASOCIADAS AL API

const app = require('./settings');

app.use(require('./routes/index'))
app.use('/flota', require('./routes/flota'))
app.use('/rutas', require('./routes/rutas'))

// ERROR 404 VA AL ÚLTIMO
app.use(require('./controllers/error404'))

module.exports = app