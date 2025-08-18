<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&pause=2000&center=true&vCenter=true&width=1000&lines=Bloco+de+estudos+|+Guilherme+Bueno" alt="Typing impact phrase" />
</p>

<h2> 👨🏻‍💻 &nbsp;Objetivo </h2>
<p>Este repositório tem como propósito organizar de forma concisa e objetiva meus estudos, observações e insights no que compete a Front-end, Back-end e suas tecnologias.</p>

<h2> 📚 &nbsp;Estrutura do repositório</h2>
<p>Este repositório será dividido em branches, onde cada Branche será direcionada para um estudo específico. Abaixo será descrito um resumo do que foi estudado, porque e os insights adquiridos.</p>

<h1 align="center">  
 <br/>
 <h2>🎓 &nbsp;Back-end do projeto Task Manager</h2>
  
**IMPORTANTE:** Back-end ainda em desenvolvimento, tanto estrutural quanto da minha base de conhecimento, portanto podem ocorrer erros em alguns entendimentos. Em breve atualizações da construção do back, bem como possíveis correções de observações e assimilações que, por ventura, possam incorrer errôneamente.

## Configurações iniciais do back-end

A construção do back-end iniciou pela estruturação da API, bem como a conexão com o banco de dados (MongoDB - banco de dados do tipo NoSQL, guarda dados em documentos JSON-like).

Foi realizado os seguintes passos (com possíveis observações):

- Criação do _package.json_ e sua configuração;
- Instalação das dependências:
  - express(framework para facilitar a criação de API's e servidores),
  - nodemon(ferramenta para facilitar desenvolvimento - atualiza o server sempre que uma alteração ocorrer),
  - dotenv (possibilita a criação de arquivos .env onde são armazenados variáveis de ambiente)
  - mongoose (facilita a operação do MongoDB no Node);
- Criação do .env para armazenagem das variáveis de ambiente;
- Criação do .gitignore e inclusão do .env e do node_modules (itens sensiveis são adicionados la);
- Criação do arquivo index.js (1)
- Criação do arquivo mongoose.database.js para criação do link com o MongoDB (2);

(1) - Neste arquivo foi realizado a estruturação inicial da API, juntamente com a conexão junto ao banco de dados para tal foi realizado as importações das dependencias necessárias (dotenv, express) e a função estabelecida para conexão com o banco de dados. Em seguida foi definido uma rota GET para entender o funcionamento de uma requisição HTTP e, posteriormente, definido a porta na qual o servidor será iniciado.

(2) - Necessário realizar importação da dependencia mongoose, criar uma função para associar ao MongoDB e definir mensagens para retorno de sucesso ou falha na conexão com banco de dados.

## Criação de models | Instalação e configuração do Postman | Rotas: Consulting Tasks, Create Task, Delete Task

A criação das rotas é de grande importancia pois as rotas são as responsáveis pela aplicação de determinadas ações (ex: deletar um item do banco de dados).
Dito isso, o processo consiste basicamente em aplicar a model (que funciona como um esqueleto que o documento no campo deverá seguir - aplicando o Scheme(obrigado mondoose)) durante o processo de criação da rota, onde nele será estabelecido o processo. Exemplo: salvar uma task (utilizamos o .save()).
Com relação ao Postman, este atua como um simulador de front-end para testarmos as interações da API com o banco de dados.
Abaixo destaco os pontos que me chamaram atenção:

- Função utiliza o async await para ser executada;
- Utilizamos os parâmetros req e res, onde o req (required) atua como um parâmetro de requisição e o res (response) como um parâmetro de retorno;
- Na rota de deleção de taskutilizamoso findByIdandDelete como método, porém aqui uma ressalva: este não possuí mensagem de retorno de erro (ex: caso não ache a task)

### Próximos passos:

- [x] - Criar models e rotas para listar as tarefas;
- [x] - Instalar o Postman;
- [x] - Definir rota para processo de criação de tarefas;
- [x] - Definir rota para processo de deleção de tarefas;
- [ ] - Definir rota para processo de recuperação de tarefas;
- [ ] - Definir rota para processo de atualização de tarefas;
- [ ] - Criar arquivos para rotas de entidades diferentes;
- [ ] - Instalar e entender MongoDB Compass;
- [ ] - Aplicar arquitetura MVC;
- [ ] - Validar tratamento de erros;
- [ ] - Entender e aplicar CI/CD;
- [ ] - Deploy;
