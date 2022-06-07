const { crearProducto, consultarTodosLosProductos, actualizarProducto } = require("../controllers/ProductosController");
const { eliminarEspaciosInnecesarios } = require("../helpers/validadorDeCadenas")

const crearProductoS = async(req, res) => {
    let producto = req.body;
    (producto == undefined || producto == null) ? producto = { nombre: "", precio: 0, stock: 0 }: producto
    producto.nombre = eliminarEspaciosInnecesarios(producto.nombre)
    let respuesta = await crearProducto(producto);

    if (respuesta.estatus == false) {
        res.status(500).json(respuesta);
        return;
    } 
    res.status(201).json(respuesta);
    return;
}

const consultarTodosLosProductosS = async(req, res) => {

    let respuesta = await consultarTodosLosProductos();
    if (respuesta.estatus == false) {
        res.status(500).json(respuesta);
    }
    res.status(200).json(respuesta);
}

const actualizarProductoS = async(req, res) => {
    let producto = req.body;

    for (let propiedad in producto) {
        if (producto[propiedad] == null || producto[propiedad] == undefined || producto[propiedad] == '') {
            res.status(400).json({ estatus: false, mensaje: `la propiedad ${propiedad} no puede estar vacia`, data: null, errors: { nombre: "error de validacion", errors: [`la propiedad ${propiedad} no puede estar vacia`] } });
            return;
        }
    }
    producto.nombre = eliminarEspaciosInnecesarios(producto.nombre)
    let respuesta = await actualizarProducto(producto);

    if (respuesta.estatus == false) {
        res.status(500).json(respuesta);
        return;
    }
    res.status(201).json(respuesta);
    return;
}


module.exports = {
    crearProductoS,
    consultarTodosLosProductosS,
    actualizarProductoS
}