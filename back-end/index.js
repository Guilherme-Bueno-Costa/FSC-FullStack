// Importa a dependência Express e Dotenv
const express = require("express");
const dotenv = require("dotenv");
const TaskRouter = require("./scr/routes/tasks.routes.js");

// Importar arquivos
const connectToDatabase = require("./scr/database/mongoose.database.js");

// Inicializa o Dotenv
dotenv.config();

// Inicializa o Express
const app = express();
app.use(express.json());

// Inicializa o mongoose
connectToDatabase();

app.use("/tasks", TaskRouter);

// Inicia o servidor na porta 8000
app.listen(8000, () => console.log("Listening to port 8000!"));
