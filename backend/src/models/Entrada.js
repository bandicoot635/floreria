const { DataTypes, Model } = require("sequelize");
const { connection } = require("../db/connection");
//const { Producto } = require("./Producto")
//modelo de Bd de la entrada
class Entrada extends Model {}
Entrada.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    productoid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    fechaentrada: {
        type: DataTypes.NOW,
        allowNull: true
    },
    proveedor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidadanterior: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cantidadsurtida: {
        type: DataTypes.INTEGER,
        allowNull: false

    }

}, {
    sequelize: connection,
    modelName: "entrada",
    createdAt: false,
    updatedAt: false
});


module.exports.Entrada = Entrada;