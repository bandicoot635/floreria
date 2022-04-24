const { DataTypes, Model } = require("sequelize");
const { connection } = require("../db/connection");



//modelo de Bd de un detalle de una venta
class DetalleVenta extends Model {}
DetalleVenta.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ventascabeceraid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productoid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidadvendida: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: "detalleVenta",
    tableName: "detallesdeventa",
    createdAt: false,
    updatedAt: false
});



module.exports.DetalleVenta = DetalleVenta;