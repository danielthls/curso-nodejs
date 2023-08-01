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

export default {listarDestaques};