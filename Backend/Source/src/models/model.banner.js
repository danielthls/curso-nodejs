import {db} from "../config/database.js";


const listar = (cod_cidade, callback) => {
    let ssql = "select id_banner, descricao, foto, ind_ativo, cod_cidade, ordem ";
    ssql += "from tab_banner ";
    ssql += "where cod_cidade = ? ";

    db.query(ssql, [cod_cidade], (err, result) => {
        callback(err, result);
    });
}

export default {listar};