let { Producto } = require("../models/Producto");
let { VentaCabecera } = require("../models/VentaCabecera");
let { DetalleVenta } = require("../models/DetalleVenta");
let { Op } = require("sequelize")
let { connection } = require("../db/connection");
//hola

let registrarVenta = async(ventaCompleta) => {
    let resultado;

    try {
        resultado = await connection.transaction(async(transaccion2) => {
            try {
                let productosVendidos = await Producto.findAll({
                    where: {
                        id: {
                            [Op.in]: ventaCompleta.detalle.map(detalle => { return detalle.productoid })
                        }
                    },
                    transaction: transaccion2,
                    raw: true
                });
                let cosa = "";
                let productosNoExistentes;
                if (productosVendidos.length != ventaCompleta.detalle.length) {
                    productosNoExistentes = ventaCompleta.detalle.filter((detalle) => {
                        try {
                            let idsDeProductosDelRequest = productosVendidos.map(elemento => { return elemento.id });
                            return !idsDeProductosDelRequest.includes(detalle.productoid);
                        } catch (error) {
                            console.log(error)
                        }

                    });
                    return { estatus: false, mensaje: "Algunos productos no fueron encontrados", data: null, error: { mensaje: "productos inexistentes", errors: productosNoExistentes } }
                }
                ventaCompleta.detalle = ventaCompleta.detalle.map(detalle => {
                    let producto = productosVendidos.find(producto => producto.id == detalle.productoid);
                    detalle.monto = producto.precio * detalle.cantidadvendida;
                    return detalle;
                });

                for (let element of ventaCompleta.detalle) {
                    let productoVendido = productosVendidos.find(producto => producto.id == element.productoid);
                    let stockAntiguo = productoVendido.stock;
                    if (element.cantidadvendida > stockAntiguo) {
                        return { estatus: false, mensaje: `no tiene stock suficiente de ${productoVendido.nombre}`, data: null, error: { mensaje: "stock insuficiente", errors: [productoVendido] } }
                    }

                }
                for (let element of ventaCompleta.detalle) {
                    let productoVendido = productosVendidos.find(producto => producto.id == element.productoid);
                    let stockAntiguo = productoVendido.stock;
                    let nuevoStock = stockAntiguo - element.cantidadvendida;
                    await Producto.update({ stock: nuevoStock }, { where: { id: element.productoid }, transaction: transaccion2 })
                }
                ventaCompleta.cabecera.montototal = ventaCompleta.detalle.reduce((acum, detalle) => {
                    return acum += detalle.monto;
                }, 0);
                ventaCompleta.cabecera.fechaVenta = new Date();
                let ventaCabeceraRegistrada = await VentaCabecera.create(ventaCompleta.cabecera, { fields: ["fechaVenta", "empresa", "montototal"], transaction: transaccion2, raw: true });
                for (let detalle of ventaCompleta.detalle) {
                    detalle.ventascabeceraid = ventaCabeceraRegistrada.dataValues.id;
                    await DetalleVenta.create(detalle, { fields: ["ventascabeceraid", "productoid", "cantidadvendida", "unidad", "monto"], transaction: transaccion2 })
                }
                //await ventaCabeceraRegistrada.createDetalleventas(ventaCompleta.detalle, { transaction: transaccion2 })
            } catch (error) {
                console.log(error)
            }
            return { estatus: true, mensaje: "Registro exitoso", data: ventaCompleta, error: null }
        });

    } catch (error) {
        resultado = { estatus: false, mensaje: "Error al registrar", data: resultado, error: (JSON.stringify(error) == '{}') ? error.message : error }
    }
    return resultado;

}

module.exports = {
    registrarVenta
}