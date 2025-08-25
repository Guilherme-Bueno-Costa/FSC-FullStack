const TaskModel = require("../models/task.model");
const { notFoundError, objectIdError } = require("../errors/mongodb.errors");
const { default: mongoose } = require("mongoose");

// Classe para definir as regras de negócio das rotas de requisição
class TaskController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    //  Método para encontrar todas as tasks do bando de dados
    async getTasks() {
        try {
            const tasks = await TaskModel.find({});
            this.res.status(200).send(tasks);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }
    // Método para exibir uma task especifica
    async showTask() {
        try {
            const taskId = this.req.params.id;

            const task = await TaskModel.findById(taskId);

            if (!task) {
                return notFoundError(this.res);
            }

            this.res.status(200).send(task);
        } catch (error) {
            if (error instanceof mongoose.Error.CastError) {
                return objectIdError(this.res);
            }
            this.res.status(500).send(error.message);
        }
    }

    //   Método parra criar uma task nova e salvar no banco de dados
    async createTask() {
        try {
            const newTask = new TaskModel(this.req.body);

            await newTask.save();

            this.res.status(201).send(newTask);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }

    //   Método para atualizar uma task
    async updateTask() {
        try {
            const taskId = this.req.params.id;
            const taskData = this.req.body;

            const taskToUpdate = await TaskModel.findById(taskId);

            if (!taskToUpdate) {
                return notFoundError(this.res);
            }
            const updatedTask = await TaskModel.findByIdAndUpdate(
                taskId,
                taskData,
                {
                    new: true,
                }
            );

            this.res.status(200).send(updatedTask);
        } catch (error) {
            if (error instanceof mongoose.Error.CastError) {
                return objectIdError(this.res);
            }
            this.res.status(500).send(error.message);
        }
    }

    //   Método para deletar uma task
    async deleteTask() {
        try {
            const taskId = this.req.params.id;

            const taskToDelete = await TaskModel.findById(taskId);

            if (!taskToDelete) {
                return notFoundError(this.res);
            }
            const deletedTask = await TaskModel.findByIdAndDelete(taskId);

            this.res
                .status(200)
                .send(`A tarefa ${deletedTask.description} foi deletada`);
        } catch (error) {
            if (error instanceof mongoose.Error.CastError) {
                return objectIdError(this.res);
            }
            this.res.status(500).send(error.message);
        }
    }
}

module.exports = TaskController;
