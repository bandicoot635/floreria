let { Producto } = require("../models/Producto");
let { Entrada } = require("../models/Entrada");
let { connection } = require("../db/connection");
const crearEntrada = async(entrada) => {
    let resultado;
    try {
        resultado = await connection.transaction(async(transaccion) => {
            let productoSurtido = await Producto.findOne({ where: { id: entrada.productoid }, transaction: transaccion })
            if (productoSurtido == null || productoSurtido == undefined) {
                return resultado = { estatus: false, mensaje: "El producto que intentas surtir no existe", data: resultado, error: { name: "Error de validacion", errors: ["El id se ese producto no existe"] } };
            }
            entrada.cantidadanterior = productoSurtido.dataValues.stock;
            let entradaCreadaCreada = await Entrada.create(entrada, { fields: ["productoid", "fechaentrada", "proveedor", "cantidadanterior", "cantidadsurtida"], transaction: transaccion });
            let nuevoStock = productoSurtido.dataValues.stock + entradaCreadaCreada.dataValues.cantidadsurtida;
            entradaCreadaCreada.dataValues.nuevoStock = nuevoStock;
            let productoConStockActualizado = await Producto.update({ stock: nuevoStock }, { where: { id: entradaCreadaCreada.dataValues.productoid }, transaction: transaccion });
            return { estatus: true, mensaje: "Registro exitoso", data: entradaCreadaCreada, error: null }
        });

    } catch (error) {
        resultado = { estatus: false, mensaje: "Error al registrar", data: resultado, error: error }
    }
    return resultado;
}

module.exports = {
        crearEntrada,
    }
    /* let producto = {
        fkidproducto: 1,
        proveedor: "miguel",
        cantidadanterior: 1,
        cantidadsurtida: 30
    }

    crearEntrada(producto) */