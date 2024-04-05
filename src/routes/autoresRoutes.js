import express from "express";

import autoresController from "../controllers/autoresController.js";

const routes = express.Router();
routes.get("/autores", autoresController.listarAutores);
routes.get("/autores/:id", autoresController.listarAutoresPorID);
routes.post("/autores", autoresController.cadastrarAutores);
routes.put("/autores/:id", autoresController.atualizarAutores);
routes.delete("/autores/:id", autoresController.deletarAutores);
export default routes;
