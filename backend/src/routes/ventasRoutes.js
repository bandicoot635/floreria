const { Router } = require('express');
const router = Router();
const { registrarVentaS} = require("../services/ventasService");

router.post("/ventas/registrar", registrarVentaS);


module.exports = router;
