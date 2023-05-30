const { MongoAPIError } = require("mongodb");
const mongoose = require ("mongoose");
const { boolean } = require("webidl-conversions");

const Schema = mongoose.Schema;

const videojuegosSchema = new Schema (
    {
        nombre: {type: String, required: true},
        plataforma: [{type: String, required: true}],
        lanzamiento: {type: Number, required: false},
        desarrollador: [{type: String, required: false}],
    }
)

const Videojuego = mongoose.model("videojuegos", videojuegosSchema);

module.exports = Videojuego 