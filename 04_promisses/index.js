const loginUser = (email, password) => {
  // Retorna uma Promisse
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      //   if para possivel erro. Aplica o reject
      if (error) {
        return reject("Erro na conexão com o banco.");
      }

      //   Caso não haja erro, exibe a mensagem, em seguida atribui os objetos email e password para resolve
      console.log("Usuário logado com sucesso!");
      resolve({ email, password });
    }, 3000);
  });
};

// Exibir videos e detalhes de video 1
const getUserVideos = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Video_1", "Video_2", "Video_3"]);
    }, 2000);
  });
};

const getVideoDetails = (details) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: "1", name: "Node Assincrono", duration: 1 });
    }, 1500);
  });
};

// considerando um user com email e senha
const user = loginUser("test@test.com.br", "123456")
  .then((user) => {
    // se resolve
    console.log("Dados do usuário: ", user);

    return getUserVideos();
  })
  .then((videos) => {
    console.log("Videos do usuário recuperados com sucesso:", videos);

    return getVideoDetails();
  })
  .then((detail) => {
    console.log("Detalhes do video 1: ", detail);
  })
  .catch((error) => {
    // se reject
    console.log(error);
  });

//   Aqui foi aplicado o conceito de promises, com uso de then e catch
