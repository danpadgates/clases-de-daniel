function error404(req, res){
    return res.status(404).json({
        message: 'La ruta no fue encontrada'
    })
}

module.exports = error404;