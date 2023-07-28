import {db} from "../config/database.js";

const login = (email, senha, callback) => {
    let ssql = "select u.id_usuario, u.nome, u.email, u.dt_cadastro, ";
    ssql += "e.endereco, e.complemento, e.bairro, e.cidade, e.uf, e.cep, e.cod_cidade ";
    ssql += "from tab_usuario u ";
    ssql += "left join tab_usuario_endereco e on (e.id_usuario = u.id_usuario and e.ind_padrao = 'S' ) ";
    ssql += "where u.email=? and u.senha=? ";
    
    db.query(ssql, [email, senha], function(err, result) {
        callback(err, result);
        /*
        if (err) {
            callback(err, []);
        }
        else {
            callback(undefined, result);
        }*/
    });

}

const inserir = (req, res) => {
    
}

const listarId = (req, res) => {
    
}

const editar = (req, res) => {
    
}

export default {login, inserir, listarId, editar};