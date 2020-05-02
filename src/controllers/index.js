function methodGet(req, res){
    res.send('SALUDO DESDE CONTROLLER (GET METHOD) :D')
}

function methodPost(req, res){
    res.send('SALUDO DESDE CONTROLLER (POST METHOD) :D')
}

function methodPut(req, res){
    res.send('SALUDO DESDE CONTROLLER (PUT METHOD) :D')
}

function methodDelete(req, res){
    res.send('SALUDO DESDE CONTROLLER (DELETE METHOD) :D')
}

module.exports = {
    methodGet,
    methodPost,
    methodPut,
    methodDelete
}