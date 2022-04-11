const { crearProducto } = require("../controllers/ProductosController");

const crearProductoS = async(req, res) => {
    let producto = req.body;
    producto.nombre = producto.nombre.trim()
    let respuesta = await crearProducto(producto);
    if (respuesta.estatus == false) {
        res.status(500).json(respuesta);
    }
    res.status(201).json(respuesta);
}

module.exports = {
    crearProductoS
}