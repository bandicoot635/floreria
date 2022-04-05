const express = require('express');
const cors = require('cors');
const app = express();
const port = 7777;


app.use(cors());
app.use(express.json());
app.use(require("./routes/loginroutes"));
app.listen(port);
console.log("corriendo en puerto ", port)