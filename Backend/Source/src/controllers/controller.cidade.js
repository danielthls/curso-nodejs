import modelCidade from "../models/model.cidade.js";

const listar = (req, res) => {
    modelCidade.listar((err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json({result});
        }
    })
}

export default {listar};