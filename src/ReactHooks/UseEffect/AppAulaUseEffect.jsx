import React from 'react';

// Executa a primeira vez que o componente aparece
// function App() {
//   function componenteRenderizado() {
//     console.log('Executou...');
//   }
//   React.useEffect(componenteRenderizado);
//   return <div></div>;
// }

/**
 *
 * Note que aqui, se qualquer estado for alterado.
 * todo o código é reexecutado então
 * 'Código que executa fora' é exibido, bem como
 * 'Código que executa sempre que qualquer estado é alterado'
 * é exibido pois useEffect, não tem dependências.
 */
// function App() {
//   const [contar, setContar] = React.useState(0);
//   const [decrementado, setDecrementar] = React.useState(0);
//   console.log('Código que executa fora do effect');
//   function componenteRenderizado() {
//     console.log('Cóigo que executa sempre que qualquer estado é alterado');
//   }

//   React.useEffect(componenteRenderizado);

//   return (
//     <div>
//       <button onClick={() => setContar(contar + 1)}>+</button>
//       <button onClick={() => setDecrementar(decrementado - 1)}>-</button>
//     </div>
//   );
// }

/**
 * Agora quando é utilizado o array de dependências vazio
 * no useEffect somente o console.log externo à função
 * handle() é executado. O console de dentro do effect
 * não é executado.
 *
 * Note que ambos os consoles ainda são executados na
 * primeira vez que o componente é montado, porém após isso
 * só o console externo que executa a cada alteração de um estado
 * e nova renderização do componente.
 */
// function App() {
//   const [contar, setContar] = React.useState(0);
//   const [decrementado, setDecrementar] = React.useState(0);

//   console.log('Código que executa fora do effect');

//   function handle() {
//     console.log('Código que nunca executa pois não tem dependências');
//   }

//   React.useEffect(handle, []);

//   return (
//     <div>
//       <button onClick={() => setContar(contar + 1)}>+</button>
//       <button onClick={() => setDecrementar(decrementado - 1)}>-</button>
//     </div>
//   );
// }

/**
 * Agora observe que é passado um estado como dependência
 * para o useEffect. A propriedade de ambos executarem
 * na montagem do componente ainda continua. Porém agora,
 * o console de dentro do useEffect só é executado se o
 * estado da sua dependência é alterado, no caso o decrementado.
 *
 * Note que o console externo ao effect, continua executando
 * quando 'decrementado' muda de estado.
 */
function App() {
  const [contar, setContar] = React.useState(0);
  const [decrementado, setDecrementar] = React.useState(0);

  console.log('Código que executa fora do effect');

  function handle() {
    document.title = 'Total ' + contar;
    console.log('Código que executa somente quando decrementado muda');
  }

  React.useEffect(handle, [contar]);

  /**
   * Se remover o contar, o eslint vai dar um erro com a mensagem.
   * React Hook React.useEffect has a missing dependency: 'contar'. Either include it or remove the dependency array.
   *
   * Quer dizer, que o handle será inútil pois só será executado quando o
   * componente for montado.
   */
  // React.useEffect(handle, []);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>+</button>
      <button onClick={() => setDecrementar(decrementado - 1)}>-</button>
    </div>
  );
}

export { App };
