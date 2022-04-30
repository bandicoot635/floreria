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
        type: DataTypes.STRING,
        validate: {
            is: ['^([a-zA-zñ_\\-0-9]{8,200})$'],
            max: 255
        },
        unique: true
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