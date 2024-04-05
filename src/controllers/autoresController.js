import { autor } from "../models/Autores.js";

class AutoresController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requição` });
    }
  }

  static async listarAutoresPorID(req, res) {
    try {
      const id = req.params.id;
      const autoresEncontrado = await autores.findById(id);
      res.status(200).json(autoresEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requição do autores` });
    }
  }

  static async cadastrarAutores(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar autores` });
    }
  }

  static async atualizarAutores(req, res) {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autores atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização do autores` });
    }
  }

  static async deletarAutores(req, res) {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      res.status(200).json({ message: "autores removido com sucesso" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao deletar autores` });
    }
  }
}

export default autoresController;
