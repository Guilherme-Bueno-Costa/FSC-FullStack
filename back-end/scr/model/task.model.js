const { Schema, model } = require("mongoose");

// o Schema funciona como um "esqueleto" para as entidades
const TaskSchema = Schema({
  description: {
    type: String,
    require: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

// Cria o model do task. Nos argumentos o primeiro é o nome da entidade e o segundo é o Schema.
const TaskModel = model("Task", TaskSchema);

module.exports = TaskModel;
