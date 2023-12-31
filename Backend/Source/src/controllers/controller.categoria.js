import modelCategoria from "../models/model.categoria.js";

const listar = (req, res) => {
    modelCategoria.listar(req.query.cod_cidade, (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json({result});
        }
    })
}

export default {listar};