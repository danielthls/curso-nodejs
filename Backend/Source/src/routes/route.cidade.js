import { Router } from "express";
import controllerCidade from "../controllers/controller.cidade.js";

const routerCidade = Router();

routerCidade.get("/v1/cidades/", controllerCidade.listar);


export default routerCidade;