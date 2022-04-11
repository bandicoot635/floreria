const { Sequelize } = require('sequelize');
const connection = new Sequelize("floreria", "adminfloreria", "adminfloreria12345", {
    host: "localhost",
    port: 3306,
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