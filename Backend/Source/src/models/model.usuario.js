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

const inserir = (id_usuario, callback) => {
    
}

const listarId = (id_usuario, callback) => {
    let ssql = "select id_usuario, nome, email, dt_cadastro from tab_usuario where id_usuario = ?";
    
    db.query(ssql, [id_usuario], function(err, result) {
        callback(err, result);
    });
}

const editar = (id_usuario, nome, email, callback) => {
    let ssql = "update tab_usuario set nome = ?, email = ? where id_usuario = ? ";
    
    db.query(ssql, [nome, email, id_usuario], function(err, result) {
        callback(err, result);
    });
}

export default {login, inserir, listarId, editar};