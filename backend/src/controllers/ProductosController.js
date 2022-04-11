let { Producto } = require("../models/Producto");

let crearProducto = async(producto) => {
    let resultado;
    try {
        let productoCreado = await Producto.create(producto, { fields: ["nombre", "precio", "stock"] });
        resultado = { estatus: true, mensaje: "Registro exitoso", data: productoCreado, error: null }

    } catch (error) {
        resultado = { estatus: false, mensaje: "Error al registrar", data: resultado, error: error }
    }
    return resultado;
}

module.exports = {
    crearProducto
}