const { Sequelize } = require('sequelize');
const connection = new Sequelize("floreria", "adminfloreria", "12345*", {
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