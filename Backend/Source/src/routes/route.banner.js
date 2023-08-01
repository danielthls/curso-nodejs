import { Router } from "express";
import controllerBanner from "../controllers/controller.banner.js";
import jwt from "../config/token.js";

const routeBanner = Router();

routeBanner.get("/v1/banners/", jwt.verifyJWT, controllerBanner.listar);


export default routeBanner;