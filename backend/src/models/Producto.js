const { DataTypes, Model } = require("sequelize");
const { connection } = require("../db/connection");

//modelo de Bd del usuario
class Producto extends Model {}
Producto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        validate: {
            is: ['^([a-zA-zñ_\\-0-9])+(\\s([a-zA-zñ_\\-0-9])*)*$'],
            max: 255
        },
        allowNull: false,
        unique: true

    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.NOW,
        allowNull: true,
    },
    updatedAt: {
        type: DataTypes.NOW,
        allowNull: true,

    }

}, {
    sequelize: connection,
    modelName: "producto",
    createdAt: true,
    updatedAt: true
});
module.exports.Producto = Producto;