const { registrarVenta } = require("../controllers/VentasController");

const registrarVentaS = async(req, res) => {
    let ventaCompleta = req.body;
    let respuesta = await registrarVenta(ventaCompleta);
    if (respuesta.estatus == false) {
        res.status(500).json(respuesta);
        return;
    }
    res.status(201).json(respuesta);
    return;
}




module.exports = {
    registrarVentaS
} 