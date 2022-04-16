let { Producto } = require("../models/Producto");
let { Entrada } = require("../models/Entrada");
let { connection } = require("../db/connection");
const crearEntrada = async(entrada) => {
    let resultado;
    try {
        resultado = await connection.transaction(async(transaccion) => {
            let entradaCreadaCreada = await Entrada.create(entrada, { fields: ["productoid", "fechaentrada", "proveedor", "cantidadanterior", "cantidadsurtida"], transaction: transaccion });
            let productoSurtido = await Producto.findOne({ where: { id: entradaCreadaCreada.dataValues.productoid }, transaction: transaccion })
            let nuevoStock = productoSurtido.dataValues.stock + entradaCreadaCreada.dataValues.cantidadsurtida;
            console.log(nuevoStock);
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