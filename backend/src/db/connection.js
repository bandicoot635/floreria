const { Sequelize } = require('sequelize');
const connection = new Sequelize("floreria", "root", "admin", {
    host: "localhost",
    port: 3307,
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