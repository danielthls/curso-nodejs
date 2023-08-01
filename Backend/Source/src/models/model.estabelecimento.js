import {db} from "../config/database.js";

const listarDestaques = (cod_cidade, callback) => {
    let ssql = "select d.descricao, e.id_estabelecimento, e.nome, e.url_logo, e.avaliacao, c.categoria ";
    ssql += "from tab_destaque d ";
    ssql += "join tab_destaque_estabelecimento de on (de.id_destaque = d.id_destaque) ";
    ssql += "join tab_estabelecimento e on (e.id_estabelecimento = de.id_estabelecimento) ";
    ssql += "join tab_categoria c on (c.id_categoria = e.id_categoria) ";
    ssql += "where d.ind_ativo = 'S' ";
    ssql += "and e.cod_cidade = ? ";
    ssql += "order by d.ordem ";
    

    console.log(ssql);
    
    db.query(ssql, [cod_cidade], (err, result) => {
        console.log(result);
        callback(err, result);
    });
    
}

const listarFavoritos = (id_usuario, callback) => {
    let ssql = "select f.id_favorito, e.id_estabelecimento, e.nome, e.url_logo, e.avaliacao, c.categoria, ";
    ssql += "e.endereco, e.complemento, e.bairro, e.cidade, e.cod_cidade "
    ssql += "from tab_usuario_favorito f ";
    ssql += "join tab_estabelecimento e on (f.id_estabelecimento = e.id_estabelecimento) ";
    ssql += "join tab_categoria c on (c.id_categoria = e.id_categoria) ";
    ssql += "where f.id_usuario = ? ";
    ssql += "order by e.nome ";
    

    console.log(ssql);
    
    db.query(ssql, [id_usuario], (err, result) => {
        console.log(result);
        callback(err, result);
    });
    
}

const inserirFavorito = (id_usuario, id_estabelecimento, callback) => {
    let ssql = "insert into tab_usuario_favorito(id_usuario, id_estabelecimento) values(?, ?) ";    

    console.log(ssql);
    
    db.query(ssql, [id_usuario, id_estabelecimento], (err, result) => {
        console.log(result);
        callback(err, result);
    });
    
}

const excluirFavorito = (id_favorito, id_usuario, callback) => {
    let ssql = "delete from tab_usuario_favorito where id_favorito = ? and id_usuario = ?";    

    console.log(ssql);
    
    db.query(ssql, [id_favorito, id_usuario], (err, result) => {
        console.log(result);
        callback(err, result);
    });
    
}

export default {listarDestaques, listarFavoritos, inserirFavorito, excluirFavorito};