const { Router } = require('express');
const router = Router();
const { crearProductoS, consultarTodosLosProductosS, actualizarProductoS } = require("../services/productoService");

router.post("/productos/crear", crearProductoS);
router.get("/productos/consultar", consultarTodosLosProductosS);
router.put("/productos/actualizar", actualizarProductoS);
module.exports = router;