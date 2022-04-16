let { Producto } = require("../models/Producto");
let { Entrada } = require("../models/Entrada");
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
        let productos = await Producto.findAll({ include: Entrada });
        resultado = { estatus: true, mensaje: "Consulta exitosa", data: productos, error: null }
    } catch (error) {
        resultado = { estatus: false, mensaje: "No se pudieron consultar los produtos", data: null, error: error }
    }
    return resultado;
}

const actualizarProducto = async(producto) => {
    let resultado;
    try {
        let productoActualizado = await Producto.update(producto, { fields: ["nombre", "precio", "stock"], where: { id: producto.id } });

        resultado = { estatus: true, mensaje: "Actualización exitosa", data: productoActualizado, error: null }

    } catch (error) {
        resultado = { estatus: false, mensaje: "Error al actualizar", data: null, errors: (JSON.stringify(error) == '{}') ? error.message : error }
    }
    return resultado;
}


module.exports = {
    crearProducto,
    consultarTodosLosProductos,
    actualizarProducto
}