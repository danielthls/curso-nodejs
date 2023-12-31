import jwt from "jsonwebtoken";

const secretToken = "MySec";

function createJWT(id_usuario) {
    const token = jwt.sign({id_usuario}, secretToken, {
        expiresIn: 999999
    });

    return token;
}

function verifyJWT(req, res, next) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).send({message: "Token não informado"});
    }

    const [str, token] = authToken.split(" ");

    jwt.verify(token, secretToken, function(err, decoded) {
        if (err) {
            return res.status(401).send({message: "Token inválido"});
        }
        else {
            req.id_usuario = decoded.id_usuario;

            next();
        }
    });
}


export default {createJWT, verifyJWT};