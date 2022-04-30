let { Usuario } = require("../models/Usuario");
let { connection } = require("../db/connection");
const crearUsuario = async(usuario) => {
    let resultado;
    try {

        let usuarioRegistrado = await Usuario.create(usuario, { raw: true });
        if (usuarioRegistrado == null) {
            resultado = { estatus: false, mensaje: "Error al registrar", data: usuarioRegistrado, error: { name: "Error de registro", errors: ["error al registrar"] } };
        }
        resultado = {
            estatus: true,
            mensaje: "Registro exitoso",
            data: { username: usuarioRegistrado.username },
            error: null
        }
    } catch (error) {
        resultado = { estatus: false, mensaje: "Error al registrar", data: resultado, error: (JSON.stringify(error) == '{}') ? error.message : error };
    }
    return resultado;
}
const actualizarUsuario = async(usuario) => {
    let resultado;
    try {

        let numeroDeFilasAfectadas = await Usuario.update(usuario, { where: { id: usuario.id }, raw: true });
        if (numeroDeFilasAfectadas[0] == 0) {
            resultado = { estatus: false, mensaje: "El registro que intentas actualizar no existe", data: numeroDeFilasAfectadas, error: { name: "Error de actualizacion", errors: ["El registro que intentas actualizar no existe"] } };
        } else {
            resultado = {
                estatus: true,
                mensaje: "Actualizacion exitosa",
                data: { id: numeroDeFilasAfectadas },
                error: null
            }
        }
    } catch (error) {
        resultado = { estatus: false, mensaje: "Error al actualizar", data: resultado, error: (JSON.stringify(error) == '{}') ? error.message : error };
    }
    return resultado;
}

const borrarUsuario = async(idUsuario) => {
    let resultado;
    try {

        let numeroDeFilasEliminadas = await Usuario.destroy({ where: { id: idUsuario }, raw: true });
        if (numeroDeFilasEliminadas[0] == 0) {
            resultado = { estatus: false, mensaje: "El registro que intentas eliminar no existe", data: numeroDeFilasEliminadas, error: { name: "Error de actualizacion", errors: ["El registro que intentas eliminar no existe"] } };
        } else {
            resultado = {
                estatus: true,
                mensaje: "Eliminacion exitosa",
                data: { numeroDeFilasAfectadas: numeroDeFilasEliminadas },
                error: null
            }
        }
    } catch (error) {
        resultado = { estatus: false, mensaje: "Error al elminar", data: resultado, error: (JSON.stringify(error) == '{}') ? error.message : error };
    }
    return resultado;
}

module.exports = {
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}