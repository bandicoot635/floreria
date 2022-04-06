const { Router } = require('express');
const router = Router();
const { loginS } = require("../services/loginservice");

router.post("/login", loginS);

module.exports = router;