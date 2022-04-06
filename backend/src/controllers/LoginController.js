let { Usuario } = require("../models/Usuario");
let { connection } = require("../db/connection");

let login = async(user) => {
    try {
        let usuario = await Usuario.findOne({ where: { username: user.username, password: user.password } });
        if (usuario == null) {
            return false
        }
        return usuario;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    login
}