let { Producto } = require("../models/Producto");

const crearProducto = async(producto) => {
    let resultado;
    try {
        let productoCreado = await Producto.create(producto, { fields: ["nombre", "precio", "stock"] });
        resultado = { estatus: true, mensaje: "Registro exitoso", data: productoCreado, error: null }

    } catch (error) {
        resultado = { estatus: false, mensaje: "Error al registrar", data: resultado, error: error }
    }
    return resultado;
}

const consultarTodosLosProductos = async() => {
    let resultado;
    try {
        let productos = await Producto.findAll();
        resultado = { estatus: true, mensaje: "Consulta exitosa", data: productos, error: null }
    } catch (error) {
        resultado = { estatus: false, mensaje: "No se pudieron consultar los produtos", data: null, error: error }
    }
    return resultado;
}

module.exports = {
    crearProducto,
    consultarTodosLosProductos
}