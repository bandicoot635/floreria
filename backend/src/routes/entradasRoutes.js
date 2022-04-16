const { Router } = require('express');
const router = Router();
const { crearEntradaS } = require("../services/entradaService");

router.post("/entradas/crear", crearEntradaS);
module.exports = router;