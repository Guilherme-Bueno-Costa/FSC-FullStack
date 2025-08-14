// Importa a dependência Express e Dotenv
const express = require("express");
const dotenv = require("dotenv");

// Importar arquivos
const connectToDatabase = require("./scr/database/mongoose.database.js");

// Inicializa o Dotenv
dotenv.config();

// Inicializa o Express
const app = express();

// Inicializa o mongoose
connectToDatabase();

// Define uma rota GET de exemplo
app.get("/tasks", (req, res) => {
  const tasks = [{ descripion: "Estudar programação", isCompleted: false }];
  res.status(200).send(tasks);
});

// Inicia o servidor na porta 8000
app.listen(3000, () => console.log("Listening to port 8000!"));
