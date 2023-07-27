import mysql from "mysql";

//Conexão com o banco
const db = mysql.createPool({
    connectionLimit: 10,
    host:"localhost",
    user:"root",
    password:"root",
    database: "delivery_mais"
});

db.getConnection(function(err, conn){
    if(err) {
        console.log(err);
    }
    else {
        console.log("Conexão com banco de dados: OK")
    }
});

export default db;