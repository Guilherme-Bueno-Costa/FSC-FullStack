<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&pause=2000&center=true&vCenter=true&width=1000&lines=Bloco+de+estudos+|+Guilherme+Bueno" alt="Typing impact phrase" />
</p>

<h2> 👨🏻‍💻 &nbsp;Objetivo </h2>
<p>Este repositório tem como propósito organizar de forma concisa e objetiva meus estudos, observações e insights no que compete a Front-end, Back-end e suas tecnologias.</p>

<h2> 📚 &nbsp;Estrutura do repositório</h2>
<p>Este repositório será dividido em branches, onde cada Branche será direcionada para um estudo específico. Abaixo será descrito um resumo do que foi estudado, porque e os insights adquiridos.</p>

 <br/>
 <h2>🎓 &nbsp;Back-end do projeto Task Manager</h2>
  
**IMPORTANTE:** Back-end ainda em desenvolvimento, tanto estrutural quanto da minha base de conhecimento, portanto podem ocorrer erros em alguns entendimentos. Em breve atualizações da construção do back, bem como possíveis correções de observações e assimilações que, por ventura, possam incorrer errôneamente.

### Configurações iniciais do back-end

A construção do back-end iniciou pela estruturação da API, bem como a conexão com o banco de dados (MongoDB - banco de dados do tipo NoSQL, guarda dados em documentos JSON-like).

Foi realizado os seguintes passos (com possíveis observações):

-   Criação do _package.json_ e sua configuração;
-   Instalação das dependências:
    -   express(framework para facilitar a criação de API's e servidores),
    -   nodemon(ferramenta para facilitar desenvolvimento - atualiza o server sempre que uma alteração ocorrer),
    -   dotenv (possibilita a criação de arquivos .env onde são armazenados variáveis de ambiente)
    -   mongoose (facilita a operação do MongoDB no Node);
-   Criação do .env para armazenagem das variáveis de ambiente;
-   Criação do .gitignore e inclusão do .env e do node_modules (itens sensiveis são adicionados la);
-   Criação do arquivo index.js (1)
-   Criação do arquivo mongoose.database.js para criação do link com o MongoDB (2);

(1) - Neste arquivo foi realizado a estruturação inicial da API, juntamente com a conexão junto ao banco de dados para tal foi realizado as importações das dependencias necessárias (dotenv, express) e a função estabelecida para conexão com o banco de dados. Em seguida foi definido uma rota GET para entender o funcionamento de uma requisição HTTP e, posteriormente, definido a porta na qual o servidor será iniciado.

(2) - Necessário realizar importação da dependencia mongoose, criar uma função para associar ao MongoDB e definir mensagens para retorno de sucesso ou falha na conexão com banco de dados.

### Criação de models | Instalação e configuração do Postman | Rotas: Consulting Tasks, Create Task, Delete Task

A criação das rotas é de grande importancia pois as rotas são as responsáveis pela aplicação de determinadas ações (ex: deletar um item do banco de dados).
Dito isso, o processo consiste basicamente em aplicar a model (que funciona como um esqueleto que o documento no campo deverá seguir - aplicando o Scheme(obrigado mondoose)) durante o processo de criação da rota, onde nele será estabelecido o processo. Exemplo: salvar uma task (utilizamos o .save()).
Com relação ao Postman, este atua como um simulador de front-end para testarmos as interações da API com o banco de dados.
Abaixo destaco os pontos que me chamaram atenção:

-   Função utiliza o async await para ser executada;
-   Utilizamos os parâmetros req e res, onde o req (required) atua como um parâmetro de requisição e o res (response) como um parâmetro de retorno;
-   Na rota de deleção de taskutilizamoso findByIdandDelete como método, porém aqui uma ressalva: este não possuí mensagem de retorno de erro (ex: caso não ache a task);
-   Funções como findByIdAndUpdate e findByIdAndDelete não possuem retorno de erro;
-   No findByIdAndUpdate, utiliza-se 2 argumentos: o id do item a ser atualizado e a atualização;
-   A diferença entre o PATCH e o PUT é que o PUT atualiza completamente os itens da ID, enquanto o PATCH atualiza apenas o item desejado;

### Arquivos de rotas para entidades diferentes

A separação de rotas por entidades (entidade aqui seria user, tasks, etc) tem um papel importante na organização e modularização do código, além de ser um dos pilares do MVC. Dito isso, realizei a criação do arquivo task.routes.js onde toda a sistemática das rotas foi transferida do index.js e depois exportada para o próprio index.js.
O interessante aqui foi a utilização da função Router importada do express, sendo ela aplicada no lugar de app.
A função do router é similar ao App porem com o diferencial de que cria um mini “subaplicativo” com express.Router(). Isso deixa o código modular, porque pode separar rotas por domínio (ex: tasks.routes.js, users.routes.js) e depois importar tudo no app.

### Arquitetura MVC

A arquitetura MVC (**M**odel-**V**iew-**C**ontroller) é dividida em 3 camadas, onde:

-   Model: Dados e regras de negócio;
-   View: Cria a tela para o usuário com base nos dados tratados pelo model;
-   Controlelr: Faz a ponte entre view e model.

O conceito de arquitetura MVC apresenta um papel fundamental na organização, estruturação conscisa e modularização do código. Dito isso, a aplicação foi feita após o desenvolvimento do código com o intuito de se ter uma base como o código fica após escrito sem a aplicação do MVC e após a aplicação. Dessa forma os beneficios ficaram mais claros. Contudo em um projeto real espera-se que esse conceito já seja aplicado desde o inicio para evitar retrabalhos.

### Refatoração - revisão das mensagens de erro

O objetivo de ter escrito um código de erro mais siimples foi simplesmente entender como um processo de refatoração pode ser desenvolvido e sua importancia. Dessa forma apliquei alguns conceitos de modularização para centralizar as mensagens de erro em um arquivo separado, dessa forma caso haja a necessidade de alterar, é facilmente ajustável.

### CI/CD e Deploy

O conceito de CI/CD se resume, basicamente, em uma integração continua seguida de teste e por fim um delivery/deploy também contínuo. Apresenta pontos importantes em sua utilização, tais como: velocidade (permite a entrega de novas features ou fix mais rapidamente), segurança (como realiza um teste a cada alteração para validar a consistencia e logica do código, garante uma redução enorme na chance de um bug catastrófico chegar em produção), aumento de foco (possibilita focarmos no essencial - como programar de fato), etc.

O deploy foi realizado na plataforma Render e nela foi integrado o pipeline de CI/CD.. Dessa forma, todos os commits realizados após o deploy foram testados no github actions, e enviados para deploy automaticamente. Após o deploy foi realizado algumas alterações pequenas no código apenas para verificar o funcionamento em tempo real do CI/CD.

#### Próximos passos:

-   [x] -   Criar models e rotas para listar as tarefas;
-   [x] -   Instalar o Postman;
-   [x] -   Definir rota para processo de criação de tarefas;
-   [x] -   Definir rota para processo de deleção de tarefas;
-   [x] -   Definir rota para processo de recuperação de tarefas;
-   [x] -   Definir rota para processo de atualização de tarefas;
-   [x] -   Criar arquivos para rotas de entidades diferentes;
-   [x] -   Instalar e entender MongoDB Compass;
-   [x] -   Aplicar arquitetura MVC;
-   [x] -   Validar tratamento de erros;
-   [x] -   Entender e aplicar CI/CD;
-   [x] -   Deploy;

 <br/>
 <h2>🎓 &nbsp;Front-end do projeto Task Manager</h2>

**IMPORTANTE:** Font-end ainda em desenvolvimento, tanto estrutural quanto da minha base de conhecimento, portanto podem ocorrer erros em alguns entendimentos. Em breve atualizações da construção do front utilizando o framework React, bem como possíveis correções de observações e assimilações que, por ventura, possam incorrer errôneamente.

### React e suas configurações iniciais

O React é um framework de grande potencial, pelo fato de ser um SPA (**S**ingle **P**age **A**pplication) apresenta um retorno muito mais rápido ao usuário, elevando sua experiencia na utilização da aplicação.
Basicamente seu funcionamento se baseia no principio de alteração do Virtual DOM, ou seja, nós não alteramos o DOM original diretamente, ao invés disso, o React cria um Virtual DOM que é uma copia do DOM, sendo mais rapida e leve, em seguida, qualquer alteração realizada no front (por exemplo acessar uma outra área da aplicação) é realizada no Virtual DOM. Em seguida o React compara o Virtual DOM com o DOM original e ele realiza a alteração no DOM original.
Destaco alguns pontos importantes:

-   **Componentes:** Um dos principios do react é a componentização, isso é, tornar cada elemento em uma pagina web em um componente (como uma peça de LEGO), dessa forma temos a possibilidade de reutilização e maior organização;

-   **JSX:** Diferentemente do html e javascript puro que existem de forma independente e um é importado no outro, o React existe o JSX, resumidamente é um código que incorpora html com java script, dessa forma a construção de UI é muito mais intuitiva.

-   **Props:** São informações que um componente "pai" passa para um componente "filho". Exemplo: um mesmo botão hora precisa ser verde hora precisa ser vermelho. Dessa forma passamos como prop uma costumização em determinado contexto, neste, se botão "cancelar" cor vermelha, se botão "confirmar" botão verde.

-   **States:** É a "memória particular" de um componente. Ou seja, são dados que pertence ao componente e que podem mudar com o tempo (por exemplo o clique de um botão).
