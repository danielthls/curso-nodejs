
const login = (req, res) => {
    res.status(200).send({id_usuario: 123});
}

const inserir = (req, res) => {
    res.status(200).send({id_usuario: 123});
}

const listarId = (req, res) => {
    res.status(200).send({id_usuario: req.params.id_usuario});
}

const editar = (req, res) => {
    res.status(200).send({id_usuario: 123});
}

export default {login, inserir, listarId, editar};