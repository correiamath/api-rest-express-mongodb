// Importa o framework Express
import express from "express";

// Importa as rotas relacionadas aos livros de um arquivo externo
import livros from "./livrosRoutes.js";

// Define as rotas
const routes = (app) => {
  // Define a rota raiz
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  // Utiliza o middleware express.json() para análise do corpo da solicitação como JSON
  // e vincula as rotas relacionadas aos livros
  app.use(express.json(), livros);
};

// Exporta as rotas
export default routes;
