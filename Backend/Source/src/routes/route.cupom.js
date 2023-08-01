import { Router } from "express";
import controllerCupom from "../controllers/controller.cupom.js";
import jwt from "../config/token.js";

const routerCupom = Router();

routerCupom.get("/v1/cupons/validacao", jwt.verifyJWT, controllerCupom.validar);


export default routerCupom;