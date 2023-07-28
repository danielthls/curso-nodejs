import modelUsuario from "../models/model.usuario.js";

const login = (req, res) => {
    modelUsuario.login(req.body.email, req.body.senha, function(err, result) {
        if (err) {
            res.status(500).send(err);        
        }
        else if (result.length == 0) {
            res.status(401).json({erro: "E-mail ou senha inválida"});
        }
        else {
            //result[0]["token"] = "00000000000";
            res.status(200).json(result[0]);
        }
    })
}

const inserir = (req, res) => {
    res.status(200).send({id_usuario: 123});
}

const listarId = (req, res) => {
    res.status(200).send({id_usuario: req.params.id_usuario});
}

const editar = (req, res) => {
    res.status(200).send({id_usuario: 123});
}

export default {login, inserir, listarId, editar};