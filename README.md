<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&pause=2000&center=true&vCenter=true&width=1000&lines=Bloco+de+estudos+|+Guilherme+Bueno" alt="Typing impact phrase" />
</p>

<h2> 👨🏻‍💻 &nbsp;Objetivo </h2>
<p>Este repositório tem como propósito organizar de forma concisa e objetiva meus estudos, observações e insights no que compete a Front-end, Back-end e suas tecnologias.</p>

<h2> 📚 &nbsp;Estrutura do repositório</h2>
<p>Este repositório será dividido em branches, onde cada Branche será direcionada para um estudo específico. Abaixo será descrito um resumo do que foi estudado, porque e os insights adquiridos.</p>

<!-- BRANCHE MAIN -  -->
<h1 align="center">  
 <br/>
 <h2>🎓 &nbsp;Docker</h2>
  
O Docker é uma ferramenta de extrema importancia que tem por principal objetivo nivelar o ambiente de trabalho dos desenvolvedores. Por meio de imagens é possivel virtualizar códigos, dependencias e sistemas operacionais, dessa forma é possivel garantir que todos os desenvolvedores envolvidos em um projeto esteja com suas ferramentas equalizadas, evitando problemas de compatibilidade. 
Resumindo: o Docker cria pacotes (imagens) que estabelecem um sistema operacional, dependencias e código de aplicação dentro das versões pré estabelecidas.

#### Para baixar e utilizar uma imagem publicada é necessário:

- No terminal, executar o comando docker pull nome-da-imagem.
- Criar o container para execução da imagem com o comando: docker run -d -p porta-local:porta-container nome-da-imagem
  - obs: o comando -d tem como função liberar o terminal | o comando -p serve para associar a porta local com a porta do container, isso é importante para que consigamos acessar a aplicação, pois o container tem sua própria rede interna.

##### Volumes

No Docker temos um recurso denominado _volumes_, que podem ser utilizados para persistir dados em um container. Resumidamente, faz com que quaisquer alterações realizadas em um container não sejam perdidas quando ele é parado ou deletado. Funciona da seguinte forma:

- docker run -v /meus-dados:/app/data nome-da-imagem
  sendo meus-dados uma pasta local (host), /app/data pasta dendro do container.

Volumes são especialmente úteis para manter banco de dados persistente, salvar logs e arquivos de configuração, etc.

#### O processo de criação de uma imagem, resumidamente, consiste em:

- Criação do arquivo Dockerfile;
- Escolha da imagem base (ex: FROM node:18);
- Definição do diretório dentro do container (WORKDIR ...);
- Criação de cópias dos arquivos do projeto para o container (COPY...);
- Instalação das dependencias (RUN npm install);
- Definição do comando para rodar a aplicação (CMD ["executavel"]);
- Criação da imagem com o comando build (docker build -t nome-da-imagem);

Esse estudo me possibilitou entender a importancia do Docker, bem como seu valor estratégico e, em especial, sua funcionalidade quando em um time, garantindo nivelamento e uma comunicação mais acertiva entre os devs. Existem outras vertentes ainda em estudo, que serão exploradas mais adiante.
