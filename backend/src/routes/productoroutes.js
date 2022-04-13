const { Router } = require('express');
const router = Router();
const { crearProductoS, consultarTodosLosProductosS } = require("../services/productoService");

router.post("/productos/crear", crearProductoS);
router.get("/productos/consultar", consultarTodosLosProductosS);
module.exports = router;