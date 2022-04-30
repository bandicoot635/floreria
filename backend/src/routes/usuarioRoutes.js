const { Router } = require('express');
const router = Router();
const { crearUsuarioS, actualizarUsuarioS, borrarUsuarioS } = require("../services/UsuariosService");

router.post("/usuarios/crear", crearUsuarioS);
router.put("/usuarios/actualizar", actualizarUsuarioS);
router.delete("/usuarios/eliminar", borrarUsuarioS);

module.exports = router;