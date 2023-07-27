import express from "express";
import cors from "cors";

const app = express();

//Middleware JSON
app.use(express.json());

//Middleware CORS
app.use(cors());

//Rotas
app.get("/usuarios", function(req, res) {
    res.status(200).send("Listando os usuários...");
})


app.listen(8082, function() {
    console.log("Servidor conectado na porta 8082")
}

);