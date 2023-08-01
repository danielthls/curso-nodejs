import { Router } from "express";
import controllerEstabelecimento from "../controllers/controller.estabelecimento.js";
import jwt from "../config/token.js";

const routerEstabelecimento = Router();

routerEstabelecimento.get("/v1/destaques/", jwt.verifyJWT,controllerEstabelecimento.listarDestaques);
routerEstabelecimento.get("/v1/favoritos/", jwt.verifyJWT,controllerEstabelecimento.listarFavoritos);
routerEstabelecimento.post("/v1/favoritos/", jwt.verifyJWT,controllerEstabelecimento.inserirFavorito);
routerEstabelecimento.delete("/v1/favoritos/:id_favorito", jwt.verifyJWT,controllerEstabelecimento.excluirFavorito);

export default routerEstabelecimento;