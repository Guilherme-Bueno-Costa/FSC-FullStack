<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&pause=2000&center=true&vCenter=true&width=1000&lines=Bloco+de+estudos+|+Guilherme+Bueno" alt="Typing impact phrase" />
</p>

<h2> 👨🏻‍💻 &nbsp;Objetivo </h2>
<p>Este repositório tem como propósito organizar de forma concisa e objetiva meus estudos, observações e insights no que compete a Front-end, Back-end e suas tecnologias.</p>

<h2> 📚 &nbsp;Estrutura do repositório</h2>
<p>Este repositório será dividido em branches, onde cada Branche será direcionada para um estudo específico. Abaixo será descrito um resumo do que foi estudado, porque e os insights adquiridos.</p>

<h1 align="center">  
 <br/>
 <h2>🎓 &nbsp;Módulos - Node.js</h2>
  
Iniciei efetivamente os estudos de back-end com o Node.js, aqui entendi um pouco sobre o que são módulos, qual sua aplicação e como utilizá-los. Além disso me familiarizei com o gerenciador de pacotes NPM e como utilizar, além de como criar meu primeiro pacote e publicar no NPM.
Aqui destaco os principais pontos referente a esses estudos que me chamou a atenção:

- O método para a instalação das bibliotecas;
- As diferenças entre o type CommonJS e ES module no package.json;
- Os métodos de importação e exportação para cada type (exports, requires, import {name} from {location}, etc);
- As diferenças entre Dependências de Produção, de Desenvolvimento e Globais;
- Como realizar a criação de uma biblioteca, bem como sua publicação em plataformas como NPM.

  Esse estudo me possibilitou me familiarizar mais com os módulos do Node.js, a partir disso, espero conseguir, futuramente, manipular as bibliotecas de forma a otimizar tanto meu código em produção, quanto meu código em desenvolvimento, por consequência, meu workflow.

<h1 align="center">  
 <br/>
 <h2>🎓 &nbsp;Node Assíncrono</h2>

A característica assíncrona do Node é de grande importancia para entendimento de funcionamento da aplicação e como isso influencia na escrita de um código. Pude compreender o funcionamento da execução de códigos síncronos assíncrono. Resumidamente códigos síncronos são executados sequencialmente, enquanto os assincronos são executados em segundo plano, pois levam um tempo para serem processados. Aqui ressalto o brilho do node quanto a essa execução, pois ele não bloqueia a execução do restante do código enquanto processa um código assincrono e isso ocorre porque:

- O node envia os códigos síncronos para o call-stack (local onde as operações são executadas);
- Os códigos assincronos são enviados para o call-back onde são processados paralelamente ao call-stack;
- Após finalização da execução desses códigos, eles são enviados para o call-back queue, onde são gerenciados pelo Event Loop que só irá liberar o código assincrono para o call-stack após este estar vazio.

**Controle de execução assíncrona:**
- Callback Function: função passada como parâmetro, define quando executar. Pode gerar “callback hell”.
- Promises (.then/.catch): mais legível, tratamento centralizado de erros, ainda pode ter encadeamentos longos.
- Async/Await: mais moderno, código parecido com síncrono, mais fácil de ler.

**Execução simultânea de múltiplas promises:**
- Promise.all(): espera todas serem resolvidas ou falha se uma rejeitar.
- Promise.allSettled(): espera todas terminarem e retorna status de cada uma.

<h1 align="center">  
 <br/>
 <h2>🎓 &nbsp;API's</h2>

 **API (Application Programming Interface):** É um conjunto de rotas, métodos, formatos de dados e regras que permitem que sistemas diferentes se comuniquem. Basicamente é um intermediário. No contexto de desenvolvimento web é a "ferramente" do back-end que é responsável pela comunicação entre front-end e o banco de dados.
 Seus principais componentes são:
 - Endpoints (basicamente as URLs);
 - Métodos HTTP;
 - Parâmetros (informações adicionais para filtrar ou personalizar o retorno dessas URLs);
 - Corpo de requisição - request (Dados enviados, normalmente em JSON);
 - Respostas - response (Retorno da API, também em JSON);

## Requisições HTTP
