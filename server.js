import app from "./src/app.js";

const PORT = 3000;

const rotas = {
  "/": "Curso de Express API",
  "/livros": "Você entrou na rota livros",
  "/autores": "Você entrou na rota autores",
};

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
