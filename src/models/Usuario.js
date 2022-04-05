const { DataTypes, Model } = require("sequelize");
const { connection } = require("../db/connection");

//modelo de Bd del usuario
class Usuario extends Model {}
Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombredelpropietario: {
        type: DataTypes.STRING,
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.STRING
    },
}, {
    sequelize: connection,
    modelName: "usuario",
    createdAt: false,
    updatedAt: false
});



module.exports.Usuario = Usuario;