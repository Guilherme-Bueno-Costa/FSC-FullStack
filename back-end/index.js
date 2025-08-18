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

// Define rota DELETE para deletar uma task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const taskToDelete = await TaskModel.findById(taskId);
    if (!taskToDelete) {
      return res.status(500).send("Essa tarefa não foi encontrada!");
    }
    const deletedTask = await TaskModel.findByIdandDelete(taskId);

    res.status(300).send(deletedTask);
  } catch (error) {}
  res.status(500).send(error.message);
});

// Inicia o servidor na porta 8000
app.listen(8000, () => console.log("Listening to port 8000!"));
