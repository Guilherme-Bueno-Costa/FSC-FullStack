// Importa a dependência Express e Dotenv
const express = require("express");
const dotenv = require("dotenv");

// Importar arquivos
const connectToDatabase = require("./scr/database/mongoose.database.js");
const TaskModel = require("./scr/model/task.model.js");

// Inicializa o Dotenv
dotenv.config();

// Inicializa o Express
const app = express();
app.use(express.json());

// Inicializa o mongoose
connectToDatabase();

// Define uma rota GET para carregar as tasks salvas no banco de dados
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Inicia o servidor na porta 8000
app.listen(8000, () => console.log("Listening to port 8000!"));

app.post("/tasks", async (req, res) => {
  try {
    const newTask = new TaskModel(req.body);

    await newTask.save();

    res.status(201).send(newTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
