// Importa a dependência Express e Dotenv
const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/task.controller.js");
const TaskModel = require("../models/task.model.js");

// Define uma rota GET para encontrar as tasks salvas no banco de dados
router.get("/", async (req, res) => {
    return new TaskController(req, res).getTasks();
});

// Define uma rota GET para exibir uma determinada task
router.get("/:id", async (req, res) => {
    return new TaskController(req, res).showTask();
});

// Define uma rota POST para criar novas tasks e salvar no banco de dados
router.post("/", async (req, res) => {
    return new TaskController(req, res).createTask();
});

// Define rota PUT para atualizar uma task
router.patch("/:id", async (req, res) => {
    return new TaskController(req, res).updateTask();
});

// Define rota DELETE para deletar uma task
router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).deleteTask();
});

module.exports = router;
