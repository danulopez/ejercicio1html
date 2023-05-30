const express = require("express")
const PORT = 4000;
const app = express();
const {connect} = require ("./src/utils/db");
const routesVideojuegos = require("./src/api/routes/videojuegos.routes")

connect();
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use ("/videojuegos", routesVideojuegos)

app.use("/", (req, res) => (res.send("Todo en orden")))

app.listen(PORT,() => console.log(`estamos escuchando en este puerto: ${PORT}`));
