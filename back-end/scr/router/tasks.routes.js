// Importa a dependência Express e Dotenv
const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/task.controller");
const TaskModel = require("../models/task.model");

// Define uma rota GET para encontrar as tasks salvas no banco de dados
router.get("/", async (req, res) => {
  return new TaskController(req, res).getTasks();
});

// Define uma rota GET para exibir uma determinada task
router.get("/:id", async (req, res) => {
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
router.post("/", async (req, res) => {
  try {
    const newTask = new TaskModel(req.body);

    await newTask.save();

    res.status(201).send(newTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Define rota PUT para atualizar uma task
router.patch("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const taskData = req.body;

    const taskToUpdate = await TaskModel.findById(taskId);
    if (!taskToUpdate) {
      return res.status(404).send("Essa tarefa não foi encontrada");
    }
    const updatedTask = await TaskModel.findByIdAndUpdate(taskId, taskData, {
      new: true,
    });

    res.status(200).send(updatedTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Define rota DELETE para deletar uma task
router.delete("/:id", async (req, res) => {
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

module.exports = router;
