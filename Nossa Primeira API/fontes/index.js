const express = require("express");
const app = express();

app.get("/produtos", function(request, response) {
    response.status(200)
        .json({
            "id_produto": 1, "descrição": "Teste"
        });
});

app.get("/ping", function(request, response) {
    response.status(200)
        .send("pong");
});

app.listen(3000, function() {
    console.log("Servidor executando an porta 3000");
});