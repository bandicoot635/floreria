let { Usuario } = require("../models/Usuario");
let { connection } = require("../db/connection");

let login = async(user) => {
    try {
        let usuario = await Usuario.findOne({ where: { username: user.username, password: user.password }, raw: true });
        if (usuario == null) {
            return { estatus: false, mensaje: "Usuario o contraseña incorrectos", data: null, error: { name: "Credenciales no válidas", error: ["Usuario  o contraseña no válidos"] } }
        }
        return { estatus: true, mensaje: "Login exitoso", data: { username: usuario.username }, error: null };
    } catch (error) {
        return { estatus: false, mensaje: "error al iniciar sesion", data: null, error: error }
    }
}

module.exports = {
    login
}