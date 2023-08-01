import {db} from "../config/database.js";

const listar = (callback) => {
    let ssql = "select cod_cidade, cidade, uf ";
    ssql += "from tab_cidade ";
    ssql += "order by cidade ";

    console.log(ssql);
    
    db.query(ssql, [], (err, result) => {
        console.log(result);
        callback(err, result);
    });
    
}

export default {listar};