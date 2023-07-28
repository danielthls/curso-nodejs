import express from "express";
import cors from "cors";
import {db} from "./config/database.js";
import jwt from "./config/token.js"
import routeUsuario from "./routes/route.usuario.js";

const app = express();

//Middleware JSON
app.use(express.json());

//Middleware CORS
app.use(cors());

//Rotas
app.use(routeUsuario);


app.listen(8082, function() {
    console.log("Servidor conectado na porta 8082")
}

);