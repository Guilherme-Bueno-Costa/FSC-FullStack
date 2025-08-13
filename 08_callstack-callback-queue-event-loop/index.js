// Função sincrona
const listarPaises = (paises) => {
  paises.forEach((pais) => {
    console.log(pais);
  });
};

const meusPaises = ["Irlanda", "Japão"];

listarPaises(meusPaises);

// No exemplo acima é criado no CallStack uma função main(), em seguida é chamada a função listarPaises() -> forEach() -> console.log | aí executa o console.log para o primeiro pais da lista meusPaises(Irlanda), em seguida retorna até o forEach() que executa para o proximo item da lista (Japão), ai passa para o console.log exibir o japão, retorna para o console.log -> forEach() -> listaPaises() -> main()

// Função assincrona
console.log("Iniciando...");
console.log("Finalizando...");

setTimeout(() => {
  console.log("Temporizador de 0 segundos");
}, 0);

setTimeout(() => {
  console.log("Temporizador de 3 segundos");
}, 3000);

// Aqui as funções assincronas são enviadas para o Node API's para serem executadas, em seguida são enviadas para o CallBack Queue, onde o Event Loop monitora a ordem de execução, bem como a liberação dos codigos assincronos para o CallStack. IMPORTANTE: O Event Loop só libera as funções assíncronas após a finalização de TODAS as funções sincronas. Existem meios de contornar isso (se for necessário) mas não iremos ver isso agora.
