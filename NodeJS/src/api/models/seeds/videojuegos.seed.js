const { error } = require("console");
const mongoose = require ("mongoose");
const Videojuego = (`../api/models/`)

const arrayVideojuegos =

{
    "_id": "6475fe8fc27e422346ade907",
    "nombre": "Final Fantsy",
    "plataforma": [
        "playstation",
        "Xbox"
    ],
    "lanzamiento": 1996,
    "desarrollador": [
        "Square",
        "Enix"
    ],
    "__v": 0
}

mongoose.connect ("")
.then(async () => {
    const allVideogames = await Videojuego.find();
    if (allVideogames.length > 0) {
        await Videojuego.collection.drop();
        console.log("videojuegos borrados");
    }
})
.catch(error) => console.log("error borrando videojuegos", error)
.then(async ()=> {
    const Videojuego.map = arrayVideojuegos.map(Videojuego) => new Videojuego (videojuego)
    await Videojuego.insertMany(videojuegomap);

})
.cath(error) => log("error insertando videojuegos", error)
.finally (() => mongoose.disconnect())
