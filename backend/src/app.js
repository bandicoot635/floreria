const express = require('express');
const cors = require('cors');
const app = express();
const port = 7777;


app.use(cors());
app.use(express.json());
app.use(require("./routes/loginroutes"));
app.use(require("./routes/productoroutes"));
app.use(require("./routes/entradasRoutes"));
app.use(require("./routes/ventasRoutes"));
app.use(require("./routes/usuarioRoutes"));
app.listen(port);
console.log("corriendo en puerto ", port);