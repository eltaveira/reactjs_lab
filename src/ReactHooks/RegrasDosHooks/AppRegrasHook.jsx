import React from 'react';
/**
 * Erro gerado pelo ESLint, essa função precisa ter use antes do nome
 * para se tornar uma função custom hook.
 *
 */
// function numeroAleatorio() {
//   const numero = Math.random();
//   React.useEffect(() => {
//     document.title = numero;
//   }, []);
//   return numero;
// }

// function App() {
//   return <div></div>;
// }

// CORREÇÃO
function useNumeroAleatorio() {
  const numero = Math.random();
  React.useEffect(() => {
    document.title = numero;
  }, [numero]);
  return numero;
}

function App() {
  const numero = useNumeroAleatorio();
  return <div>{numero}</div>;
}

export { App };
