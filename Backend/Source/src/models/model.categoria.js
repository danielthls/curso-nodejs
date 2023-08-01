import {db} from "../config/database.js";
import bcrypt from "bcrypt";

const listar = (cod_cidade, callback) => {
    let ssql = "select c.id_categoria, c.categoria, c.foto, c.ind_ativo, c.ordem ";
    ssql += "from tab_categoria c ";
    ssql += "join tab_categoria_cidade cc on (cc.id_categoria = c.id_categoria) ";
    ssql += "where cc.cod_cidade = ? ";
    
    db.query(ssql, [cod_cidade], (err, result) => {
        callback(err, result);
    });
}

export default {listar};