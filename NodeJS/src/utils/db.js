const mongoose = require("mongoose");
const DB_URL = "mongodb+srv://daniela:roots@cluster0.sae7tqq.mongodb.net/videojuego?retryWrites=true&w=majority";

const connect = async() => {
    try {
        const db = await mongoose.connect(DB_URL);
        const{name,host} = db.connection;
        console.log(`connected to ${name} db inhost${host}`);
    } catch (error) {
        console.log(`Error, ${error}`)
    }
}

module.exports = {connect}