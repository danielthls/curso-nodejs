import express from "express";
import cors from "cors";
import {db} from "./config/database.js";
import jwt from "./config/token.js"
import routeUsuario from "./routes/route.usuario.js";
import routeCategoria from "./routes/route.categoria.js";
import routeBanner from "./routes/route.banner.js";
import routerCidade from "./routes/route.cidade.js";
import routerCupom from "./routes/route.cupom.js";

const app = express();

//Middleware JSON
app.use(express.json());

//Middleware CORS
app.use(cors());

//Rotas
app.use(routeUsuario);
app.use(routeCategoria);
app.use(routeBanner);
app.use(routerCidade);
app.use(routerCupom);

app.listen(8082, function() {
    console.log("Servidor conectado na porta 8082")
}

);