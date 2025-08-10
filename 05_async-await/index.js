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
      resolve({ email, password });
    }, 3000);
  });
};

// Exibir videos e detalhes de video 1
const getUserVideos = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        return reject("Erro ao acessar os videos do usuário");
      }

      resolve(["Video_1", "Video_2", "Video_3"]);
    }, 2000);
  });
};

const getVideoDetails = (details) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;

      if (error) {
        return reject("Erro ao acessar os detalhes do video");
      }

      resolve({ id: "1", name: "Node Assincrono", duration: 1 });
    }, 1500);
  });
};

// considerando um user com email e senha
// No async await, o promise não muda, o que muda é a forma de consumir, ou seja, o then() e o catch().
// Dessa forma o primeiro passo é criar uma função assíncorna. Dentro dela, aplicar o await. Importante: Tudo que vem após o await é realizado sequencialmente.
// Para aplicar um "se erro" usar o try{} catch{}

const getUserData = async () => {
  try {
    const user = await loginUser("guicosta36@gmail.com", "Gu1lherme$");

    console.log("Usuário logado com sucesso!");
    console.log("Dados do usuário: ", user);

    const videos = await getUserVideos();
    console.log("Videos do usuário recuperados com sucesso: ", videos);

    const videoDetails = await getVideoDetails();
    console.log("Detalhes do video 1: ", videoDetails);
  } catch (error) {
    console.log(error);
  }
};

getUserData();

// IMPORTANTE: o getUserData() é uma Promise, portanto assincrona. dessa forma, caso queira usar um código que seja executado após ele e seja sincrono, utilizar o .then() ou uma nova promise.
