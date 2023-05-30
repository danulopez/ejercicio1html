const Videojuego = require("../models/videojuegos.model")
const getVideojuegos= async (req, res)=> {
    try {
        const allVideogames = await Videojuego.find();
        return res.status(200).json(allVideogames)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postVideojuegos= async (req, res)=> {
    try {
        const newVideogame = new Videojuego(req.body)
        const createdVideogame = await newVideogame.save();
         return res.status (201).json(createdVideogame);

    } catch (error) {
        return res.status(500).json(error)
    }
}

const putVideojuegos= async (req, res)=> {
    try {
        const {id} = req.params;
        const putVideogames = new Videojuego(req.body)
        putVideogames._id = id;
        const updatedVideogame = await Videojuego.findByIdAndUpdate (id, putVideogames, {new: true})
        if (!updatedVideogame){
            return res.status(404).json({message:"No existe un videojuego con este ID"})
        }
        return res.status(200).json(updatedVideogame);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteVideojuegos= async (req, res)=> {
    try {
        const {id} =req.params;
        const deleteVideogames = await Videojuego.findByIdAndDelete(id)
        if (!deleteVideogames){
            return res.status(404).json({message:"No existe un videojuego con este ID"})
        }
        return res.status(200).json(deleteVideogames)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getVideojuegos, postVideojuegos, putVideojuegos,deleteVideojuegos}