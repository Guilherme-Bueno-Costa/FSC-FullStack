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

// Define uma rota GET para encontrar as tasks salvas no banco de dados
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Define uma rota GET para exibir uma determinada task
app.get("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await TaskModel.findById(taskId);

    if (!task) {
      return res.status(404).send("Essa tarefa não foi encontrado");
    }

    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Define uma rota POST para criar novas tasks e salvar no banco de dados
app.post("/tasks", async (req, res) => {
  try {
    const newTask = new TaskModel(req.body);

    await newTask.save();

    res.status(201).send(newTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Define rota PUT para atualizar uma task
app.put("/tasks/:id", async (req, res) => {
  try {
    const taskId = res.params.id;
    const taskToUpdate = await TaskModel.findById(taskId);
    if (!taskToUpdate) {
      return res.status(500).send("Essa tarefa não foi encontrada");
    }
    const updatedTask = await TaskModel.findByIdAndUpdate(taskId);

    res.status(200).send(updatedTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Define rota DELETE para deletar uma task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;

    const taskToDelete = await TaskModel.findById(taskId);

    if (!taskToDelete) {
      return res.status(404).send("Essa tarefa não foi encontrada!");
    }
    const deletedTask = await TaskModel.findByIdAndDelete(taskId);

    res.status(200).send(`A tarefa ${deletedTask.description} foi deletada`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Inicia o servidor na porta 8000
app.listen(8000, () => console.log("Listening to port 8000!"));
