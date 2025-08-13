// Código síncrono exemplo:
console.log("Primeira linha");
console.log("Segunda linha");
console.log("Terceira linha");
// No código síncrono o node executa linha por linha, sequencialmente.

// Código assíncrono exemplo:
console.log("a");

setTimeout(() => {
  console.log("b");
}, 4000);

console.log("c");
// No código assincrono o node não espera a execução do setTimeOut para executar a linha "c".
