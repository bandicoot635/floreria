const { Sequelize } = require('sequelize');
const connection = new Sequelize("floreria", "root", "amdin", {
    host: "localhost",
    dialect: "mysql"
});
let synchronize = async() => {
    try {
        await connection.sync();
    } catch (error) {
        console.log(error);
    }

}


module.exports.connection = connection;