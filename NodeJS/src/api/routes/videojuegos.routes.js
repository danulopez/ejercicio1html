const {getVideojuegos, postVideojuegos, putVideojuegos,deleteVideojuegos} = require("../controllers/videojuegos.controllers")
const express = require ("express");

const routesVideojuegos = express.Router();

routesVideojuegos.get("/", getVideojuegos)

routesVideojuegos.post("/", postVideojuegos)

routesVideojuegos.put("/:id", putVideojuegos)

routesVideojuegos.delete("/:id", deleteVideojuegos)

module.exports = routesVideojuegos;
