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
        allowNull: false

    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: "producto",
    createdAt: false,
    updatedAt: false
});
module.exports.Producto = Producto;