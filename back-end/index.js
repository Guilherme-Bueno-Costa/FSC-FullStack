// Importa a dependência Express e Dotenv
const express = require("express");
const dotenv = require("dotenv");
const TaskRouter = require("./src/router/tasks.routes.js");

// Importar arquivos
const connectToDatabase = require("./src/database/mongoose.database.js");

// Inicializa o Dotenv
dotenv.config();

// Inicializa o Express
const app = express();
app.use(express.json());

// Inicializa o mongoose
connectToDatabase();

app.use("/tasks", TaskRouter);

// Inicia o servidor na porta 8000
const PORT = process.env.PORT || 8000; // 8000 só como fallback local
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
