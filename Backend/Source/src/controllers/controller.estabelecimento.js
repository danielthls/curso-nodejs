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

const listarFavoritos = (req, res) => {
    modelEstabelecimento.listarFavoritos(req.id_usuario,(err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json({result});
        }
    })
}

const inserirFavorito = (req, res) => {
    modelEstabelecimento.inserirFavorito(req.id_usuario, req.body.id_estabelecimento,(err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).json({id_favorito: result.insertId});
        }
    })
}

const excluirFavorito = (req, res) => {
    modelEstabelecimento.excluirFavorito(req.params.id_favorito, req.id_usuario,(err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json({id_favorito: req.params.id_favorito});
        }
    })
}

export default {listarDestaques, listarFavoritos, inserirFavorito, excluirFavorito};