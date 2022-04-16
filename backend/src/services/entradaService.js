const { crearEntrada } = require("../controllers//EntradasController");

const crearEntradaS = async(req, res) => {
    let respuesta = await crearEntrada(req.body);
    if (respuesta.estatus == false) {
        res.status(500).json(respuesta);
        return;
    }
    res.status(201).json(respuesta);
    return;
}

module.exports = {
    crearEntradaS
}