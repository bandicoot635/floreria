const { Router } = require('express');
const router = Router();
const { crearProductoS } = require("../services/productoService");

router.post("/productos/crear", crearProductoS);
module.exports = router;