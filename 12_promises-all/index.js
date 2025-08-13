const loadProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, name: "Macbook", price: 1800 }]);
    }, 3000);
  });
};

const loadCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, categorie: "Eletronics" }]);
    }, 3000);
  });
};

const loadUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        reject("Erro ao carregar informações do banco de dados!");
      }

      resolve([{ id: 1, name: "Guilherme Bueno", age: 31 }]);
    }, 3000);
  });
};

const init = async () => {
  const [products, categories, user] = await Promise.all([
    loadProducts(),
    loadCategories(),
    loadUser(),
  ]);
  console.log({ products, categories, user });
};

init();

// Acima temos um exemplo do uso do promises.all. Ele executa todas as funções assincronas que estão sendo emuladas como sincronas (para executar o console.log no momento certo) de forma simultanea. Um detalhe importante: caso haja um reject, ele rejeita toda a operação (nao vai exibir os itens resolvidos e exibir o erro dos rejeitados). Caso queira que seja exibido o erro do rejeitado e o resolvido deve-se usar o promises.allSettled:

const loadMemories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        reject("Erro ao carregar informações do banco de dados!");
      }

      resolve([
        {
          id: 1,
          name: "Fragmento da Meia Noite",
          description: "Uma poderosa tachi forjada a partir das chamas divina",
        },
      ]);
    }, 3000);
  });
};

const loadCategorie = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Erro ao carregar informações do banco de dados!");
      }

      resolve([{ id: 1, categorie: "weapon" }]);
    }, 3000);
  });
};

const loadAwakned = () => {
  return new Promise((resolve, reject) => {
    const error = true;

    if (error) {
      reject("Erro ao carregar informações do banco de dados!");
    }

    resolve([{ id: 1, name: "Sunless" }]);
  });
};

const start = async () => {
  const results = await Promise.allSettled([
    loadMemories(),
    loadCategorie(),
    loadAwakned(),
  ]);

  console.log(JSON.stringify(results, null, 2));
};

start();

// o JSON.stringfy serve para expandir a lista do results e mostrar seu conteudo, caso contrario será exibido: {status: "fulfillied", value: [[object]]}, se quiser acessar o [object], usa o JSON.stringfy, se não, deixa sem.
