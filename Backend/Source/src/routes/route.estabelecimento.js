import { Router } from "express";
import controllerEstabelecimento from "../controllers/controller.estabelecimento.js";
import jwt from "../config/token.js";

const routerEstabelecimento = Router();

routerEstabelecimento.get("/v1/destaques/", jwt.verifyJWT,controllerEstabelecimento.listarDestaques);


export default routerEstabelecimento;