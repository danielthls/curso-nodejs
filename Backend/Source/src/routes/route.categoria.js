import { Router } from "express";
import controllerCategoria from "../controllers/controller.categoria.js";
import jwt from "../config/token.js";

const routeUsuario = Router();

routeCategoria.get("/v1/categorias/", jwt.verifyJWT, controllerCategoria.listar);


export default routeCategoria;