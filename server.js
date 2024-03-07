import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Curso de Express API",
  "/livros": "Você entrou na rota livros",
  "/autores": "Você entrou na rota autores",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log("servidor escutando!");
});
