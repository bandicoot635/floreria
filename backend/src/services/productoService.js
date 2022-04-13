const { crearProducto, consultarTodosLosProductos } = require("../controllers/ProductosController");

const crearProductoS = async(req, res) => {
    let producto = req.body;
    producto.nombre = producto.nombre.trim()
    let respuesta = await crearProducto(producto);
    if (respuesta.estatus == false) {
        res.status(500).json(respuesta);
    }
    res.status(201).json(respuesta);
}

const consultarTodosLosProductosS = async(req, res) => {

    let respuesta = await consultarTodosLosProductos();
    if (respuesta.estatus == false) {
        res.status(500).json(respuesta);
    }
    res.status(200).json(respuesta);
}

module.exports = {
    crearProductoS,
    consultarTodosLosProductosS
}