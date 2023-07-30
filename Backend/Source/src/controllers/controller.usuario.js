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
    modelUsuario.inserir(req.body, function(err, result) {
        if(err) {
            res.status(500).send(err);
        }
        else {
            result["token"] = "0000000000000000";
            res.status(201).json(result);
        }
    })
}

const listarId = (req, res) => {

    req.id_usuario = 1;

    if (req.params.id_usuario != req.id_usuario) {
        return res.status(401).json({erro:  "Operação não permitida."})
    }


    modelUsuario.listarId(req.id_usuario, function(err, result) {
        if (err) {
            res.status(500).send(err);        
        }
        else {
            //result[0]["token"] = "00000000000";
            res.status(200).json(result[0]);
        }
    });
}

const editar = (req, res) => {
    req.id_usuario = 1;

    modelUsuario.editar(req.id_usuario, req.body.nome, req.body.email, function(err, result) {
        if (err) {
            res.status(500).send(err);        
        }
        else {
            //result[0]["token"] = "00000000000";
            res.status(200).json({id_usuario: req.id_usuario});
        }
    });
}

export default {login, inserir, listarId, editar};