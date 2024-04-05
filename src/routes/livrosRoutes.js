// Importa o framework Express
import express from "express";

// Importa o controlador do Livro
import LivroController from "../controllers/livroController.js";

// Cria um objeto de rotas usando o método Router() do Express
const routes = express.Router();

// Rota GET para listar todos os livros, tratada pelo método listarLivros do controlador LivroController
routes.get("/livros", LivroController.listarLivros);

// Rota GET para listar um livro específico por seu ID, tratada pelo método listarLivrosPorID do controlador LivroController
routes.get("/livros/:id", LivroController.listarLivrosPorID);

// Rota POST para cadastrar um novo livro, tratada pelo método cadastrarLivro do controlador LivroController
routes.post("/livros", LivroController.cadastrarLivro);

// Rota POST para atualizar um livro existente por seu ID, tratada pelo método atualizarLivro do controlador LivroController
routes.put("/livros/:id", LivroController.atualizarLivro);

// Rota DELETE para deletar um livro existente por seu ID, tratada pelo método deletarLivro do controlador LivroController
routes.delete("/livros/:id", LivroController.deletarLivro);
// Exporta as rotas
export default routes;
