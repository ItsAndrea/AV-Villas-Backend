const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
require("dotenv").config();
const rutas = require("./routes/Rutas");
const rutas_publicas = require("./routes/RutasPublicas");

const app = express()
const port = 8000
const cors_config = {
    origin: '*'
}

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use("/api", cors(cors_config), jsonParser, rutas_publicas);
app.use("/api", cors(cors_config), jsonParser, rutas);

app.use("/", cors(cors_config), (req, res) => {
    res.status(404).json({
      mensaje: "Error",
    });
  });

app.listen(port, () => {
    console.log("Servidor activado");
})