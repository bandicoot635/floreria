const { login } = require("../controllers/LoginController");

let loginS = async(req, res) => {
    //validaciones TODO
    let response;
    try {
        response = await login(req.body);
    } catch (error) {
        console.log(error)
    }
    res.json(response);

}

module.exports = {
    loginS
}