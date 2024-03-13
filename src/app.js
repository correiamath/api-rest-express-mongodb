import express from "express";

const app = express();
app.use(express.json());
//Array com informações
const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];

//Rota raiz
app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});
//Rota para ler informações
app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});
//Rota para criar informações
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro cadastrado com sucesso");
});
//Função para pesquisar com base em parâmetro
function buscaLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}
//Rota para ler informações pesquisadas
app.get("/livros/:id", (req, res) => {
  livros.push(req.body);
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});
//Rota para atualizar informações
app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});
//Rota para deletar informações
app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso");
});

export default app;
