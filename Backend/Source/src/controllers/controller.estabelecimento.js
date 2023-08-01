import modelEstabelecimento from "../models/model.estabelecimento.js";

const listarDestaques = (req, res) => {
    modelEstabelecimento.listarDestaques(req.query.cod_cidade,(err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json({result});
        }
    })
}

export default {listarDestaques};