const loginUser = (email, password) => {
  // Chamar banco de dados para pegar os dados do usuario
  setTimeout(() => {
    console.log("Usuario verificado no banco de dados!");
  }, 3000);
};

const user = loginUser("test@test.com.br", "password");
console.log("Usuário logado com sucesso!");
console.log(user);

// No exemplo acima, a arrow function setTimeout é assíncrona, portanto não será executada antes do user ser declarado, pois o console.log que exibe o user é sincrono, por isso aparece "undefined" no console. Para contornar isso, pode-se passar uma callback function que contenha o user, dessa forma ela só será impressa dentro do callback function que, no caso, é assincrona:

const loginUser2 = (email2, password2, callback) => {
  setTimeout(() => {
    console.log("");
    console.log("Usuário verificado no banco de dados!");
    callback({ email2 });
  }, 3000);
};

const user2 = loginUser2("test@test.com.br", "password", (user2) => {
  console.log("Usuário logado com sucesso!");
  console.log(user2);
});

// Neste exemplo acima, criamos uma função como parâmetro (no caso chamado de callback, mas pode ser qualqeur coisa), a função callback é chamada dentro do setTimeout, e recebe como argumento o objeto { email2 }. Nesse caso, a função callback é executada somente depois do delay de 3 segundos, recebendo o objeto usuário { email2 } e podendo então usar esses dados.

// Callback function apresenta alguns problemas, entre eles a necessidade de inserir uma callback dentro da outra, a depender da necessidade, exemplo: realizar um login e, se sucesso, carregar os videos do usuario, ai dentro da lista de videos, pegar os detalhes do video 1 (Aparenta ser simples mas para realizar essa cadencia de eventos é necessario a criação de arrow functions dentro de arrow functions e isso, além de deixar o código muito grande, é muito confuso.)
