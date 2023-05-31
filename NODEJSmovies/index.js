const express =  require ("express");
const {connect}= require("./src/utils/db.js")
const moviesRoutes = require("./src/api/routes/movies.routes")

const PORT = 7000;
const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/movies", moviesRoutes)

app.listen(PORT, () => console.log(`escuchando en el puerto ${PORT}`))
