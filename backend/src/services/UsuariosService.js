const { crearUsuario, actualizarUsuario, borrarUsuario } = require("../controllers/UsuarioController");

const crearUsuarioS = async(req, res) => {
    let respuesta = await crearUsuario(req.body);
    if (respuesta.estatus == false) {
        res.status(500).json(respuesta);
        return;
    }
    res.status(201).json(respuesta);
    return;
}

const actualizarUsuarioS = async(req, res) => {
    let respuesta = await actualizarUsuario(req.body);
    if (respuesta.estatus == false) {
        res.status(500).json(respuesta);
        return;
    }
    res.status(201).json(respuesta);
    return;
}

const borrarUsuarioS = async(req, res) => {

    let respuesta = await borrarUsuario(req.body.id);
    if (respuesta.estatus == false) {
        res.status(500).json(respuesta);
        return;
    }
    res.status(201).json(respuesta);
    return;
}

module.exports = {
    crearUsuarioS,
    actualizarUsuarioS,
    borrarUsuarioS
}