const { DataTypes, Model } = require("sequelize");
const { connection } = require("../db/connection");
const { DetalleVenta } = require("./DetalleVenta")
    //const { Producto } = require("./Producto")
    //modelo de Bd de la entrada
class VentaCabecera extends Model {}
VentaCabecera.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fechaVenta: {
        type: DataTypes.NOW,
        allowNull: true,
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    montototal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: "ventaCabecera",
    tableName: "ventascabecera",
    createdAt: false,
    updatedAt: false
});
VentaCabecera.hasMany(DetalleVenta);
DetalleVenta.belongsTo(VentaCabecera);


module.exports.VentaCabecera = VentaCabecera;