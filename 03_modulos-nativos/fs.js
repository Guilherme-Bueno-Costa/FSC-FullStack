const fs = require("fs");
const path = require("path");

// Criar uma pasta no diretorio
fs.mkdir(path.join(__dirname, "new-folder"), () => {});

// Criar um arquivo nessa pasta
fs.writeFile(
  path.join(__dirname, "new-folder", "message.txt"),
  "Hello World!",
  (error) => {
    console.log(error);
  }
);

fs.appendFile(
  path.join(__dirname, "new-folder", "message.txt"),
  "How are you?",
  () => {}
);

// Ler um arquivo

let fileContent = "";

fs.readFile(
  path.join(__dirname, "new-folder", "message.txt"),
  "utf-8",
  (error, data) => {
    console.log(error);
    fileContent = data;

    console.log("Conteúdo do arquivo:", fileContent); //Esse console ta dentro da função pois por ser uma funcção assincrona ela leva um tempo para ser finalizada, se ficar para fora nao vai retornar nada pois quando chegar na linha de codigo do console.log nao vai ter terminado a compilação
  }
);
