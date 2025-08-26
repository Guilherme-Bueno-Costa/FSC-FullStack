<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&pause=2000&center=true&vCenter=true&width=1000&lines=Bloco+de+estudos+|+Guilherme+Bueno" alt="Typing impact phrase" />
</p>

<h2> 👨🏻‍💻 &nbsp;Objetivo </h2>
<p>Este repositório tem como propósito organizar de forma concisa e objetiva meus estudos, observações e insights no que compete a Front-end, Back-end e suas tecnologias.</p>

<h2> 📚 &nbsp;Estrutura do repositório</h2>
<p>Este repositório será dividido em branches, onde cada Branche será direcionada para um estudo específico. Abaixo será descrito um resumo do que foi estudado, porque e os insights adquiridos.</p>

 <br/>
 <h2>🎓 &nbsp;React Hooks</h2>
  
### Hooks

**- useState:** Utilizado para setar um valor inicial e realizar modificações neste posteriormente. Deve-se declarar uma variavel de lista contendo o nome e a operação de alteração, comulmente escrito com o "set". ex:

<p align="center">const [<strong>count</strong>, <strong>setCount</strong>] = useState();</p>

Além disso, o ideal é usar o prevState como parâmetro passando uma função dentro da arrow functio que irá aplicar o método de mudança sempre que for necessário realizar uma operação com base no valor inicial. ex:

<p align="center">setCount((<strong>prevState</strong>) => <strong>prevState</strong> + 1);</p>

Além disso não é possível chamar o mesmo useState mais de uma vez.

**- useEffect:** Realiza uma operação quando algo mudar. Não pode ser assíncrono; caso necessário, precisa criar uma função dentro do useEffect para criar o async.await.

<p align="center"><strong>useEffect</strong>(( ) => {<i>operação</i>}, [*])</p>

O segundo parâmetro não é obrigatório mas se não utilizar nada o useEffect irá rodar indefinidamente.

**- useRef:** Guarda uma um valor, da mesma forma que o useState, mas quando ele é atualizado o componente não é renderizado novamente.
