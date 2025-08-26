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

**- useRef:** Guarda uma um valor, da mesma forma que o useState, mas quando ele é atualizado o componente não é renderizado novamente. Uma das situações nas quais o useRef brilha é quando há a necessidade de que, quando o valor de um componente muda, ele não seja renderizado novamente.
Outra situação de aplicação do useRef (certamente a mais importante) é qaundo há a necessidade de armazenar elementos HTML nele. para tal é necessário aplicar a propriedade "ref={}" no campo e criar uma função com o useRef onde será aplicado a operação desejada no HTML (focus por exemplo).

**- useReduce:** Tem uma função muito similar ao useState. Contudo é mais recomendado usá-lo quando se state for muito complexo ou quando um valor de um state depender de outro valor.

**- useMemo:** Normalmente utilizado para otimizar a performance de uma função. Funciona basicamente armazenando o valor da função em questão em memória. Deve ser usada com cautela pois se não for utilizado corretamente pode potencializar o tamanho da memória.

**- useCallback:** Assim como o useMemo, também é utilizado para otimizar performance, contudo, enquanto o useMemo armazena o retorno de uma função em memória, o useCallback armazena a função em si. Em termos práticos ele pode otimizar muito a comunicação com o back-end. Passando uma função como prop para algum componente? Essa função tem algum custo grande de performance? Essa função esta sendo executada desnecessariamente? Se a resposta para essas tres perguntas for sim, o ideal é usar useCallback.

**- useLayoutEffect:** Similar ao useEffect coma diferença de que, enquanto este é executado após o DOM ser montado pelo React, o useLayoutEffect é executado _antes_ do DOM ser montado. Em termos práticos significa que o layout do DOM vai ser modificado antes de ser montado. Em um exemplo, ao usarmos o useEffect para criar e mover um elemento de um lugar para o outro, veremos ele ser criado em um lugar _x_ e depois mover para um lugar _y_; enquanto que ao usarmos o useLayoutEffect iremos ver ele ser criado diretamente no lugar _y_.

**- useContext:** É utilizado em conjunto com o Context API, de forma a facilitar o processo de
compartilhamento de dados (ou estados) entre os componentes, ao utiliza-lo, basicamente evitamos a necessidade de utilizar um .Consumer para passar o contexto, além de possibilitar pegar dados de vários contextos sem complicações.
