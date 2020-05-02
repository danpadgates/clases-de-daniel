// EN ESTE ARCHIVO SE GUARDARÁ TODAS LAS RUTAS ASOCIADAS AL API

const app = require('./settings');

app.use(require('./routes/index'))
app.use('/flota', require('./routes/flota'))

module.exports = app