import React from 'react';

// function App() {
//   const [contar, setContar] = React.useState(0);
//   /**
//    * handleClick() é redeclarado toda vez que setContar
//    * é chamado. Pois o componente sofre outra renderização.
//    * Mas isso é imperceptível já que redeclaração de funções
//    * não é um processo muito lento.
//    */
//   function handleClick(event) {
//     console.count('handleClick called');
//     setContar(contar + 1);
//   }
//   return <button onClick={handleClick}>{contar}</button>;
// }

// function App() {
//   const [contar, setContar] = React.useState(0);

//   const handleClick = React.useCallback(event => {
//     console.count('handleClick called', event);
//     /**
//      * Se contar é utilizado no escopo externo, então
//      * é ideal que contar seja passado como dependência
//      * para que então a função passada para useCallback,
//      * seja redeclarada com o novo estado de contar.
//      *
//      * Porém isso volta para a situação anterior, onde
//      * declaramos funções callback diretamente no componente
//      * e essas funções são redeclaradas toda a vez que o
//      * componente é redezenhado.
//      */
//     // setContar(contar + 1);
//     /**
//       Para eliminar essa dependencia para um array vazio
//       e fazer com que a função callback seja declarada somente
//       quando o componente é montado. Então devemos passar
//       um callback para a função set com um argumento que é
//       o estado anterior. E também trocar [contar] para []
//     */
//     setContar(estadoAnterior => estadoAnterior + 1);
//   }, []);

//   return <button onClick={handleClick}>{contar}</button>;
// }

/**
 * PROVANDO QUE FUNÇÕES SÃO REDECLARADAS A CADA RENDERIZAÇÃO DO COMPONENTE.
 *
 *
 * No exemplo abaixo, a estrutura set é utilizada, set nunca permite que o
 * mesmo elemento seja adicionado.
 *
 * Note que ao clicar no botão, toda vez que há o clique no botão que faz
 * com que App redesenhe, o <Produto/> que está em App também é redesenhado
 * e portando, todo o código é novamente executado.
 *
 * Veja que na saída o console.log do set1, sempre vai exibir com um elemento a mais
 * pois se trata de uma função nova.
 *
 * Já o set2 sempre se mantém com um elemento, pois a func2 sempre é a mesma.
 */

const set1 = new Set();
const set2 = new Set();

function Produto() {
  function func1(event) {
    console.log('teste');
  }

  const func2 = React.useCallback(() => {
    console.log('teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('set1', set1);
  console.log('set2', set2);

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
}

function App() {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
}
export { App };
