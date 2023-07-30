import { Router } from "express";
import controllerUsuario from "../controllers/controller.usuario.js";
import jwt from "../config/token.js";

const routeUsuario = Router();

routeUsuario.post("/v1/usuarios/login", controllerUsuario.login);
routeUsuario.post("/v1/usuarios/registro", controllerUsuario.inserir);
routeUsuario.get("/v1/usuarios/:id_usuario", jwt.verifyJWT, controllerUsuario.listarId);
routeUsuario.patch("/v1/usuarios/", controllerUsuario.editar);

export default routeUsuario;