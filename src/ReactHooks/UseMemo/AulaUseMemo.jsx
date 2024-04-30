import React from 'react';

function operacaoLenta() {
  let c;
  for (let index = 0; index < 1_000_000_000; index++) {
    c = index + index / 10;
  }

  return c;
}

function App() {
  const [contar, setContar] = React.useState(0);

  /**
   * No array de dependencias do useMemo, assim como useEffect,
   * é passado os objetos do useState, que faz com que o operação do
   * useMemo seja novamente executada quando seus estados são
   * alterados.
   */

  /**
   * Note abaixo, que a chamada de `operacaoLenta()` vai levar
   * mais de um segundo para ser executada, isso quando monta,
   * e quando é autualiza o componente.
   */
  // const inicio = performance.now();
  // console.log('operação lenta executando...');
  // const resultado = operacaoLenta();
  // console.log('operação lenta concluida');
  // const fim = performance.now();
  // console.log(
  //   `Chamada durou ${(fim - inicio).toFixed(
  //     2
  //   )} milliseconds com useMemo. resultado: `,
  //   resultado
  // );

  /**
   * Já aqui, useMemo executa na montagem do componente assim
   * quando é zero dependencias (assim como useEffect). Porém
   * o resultado é salvo pelo useMemo, isso significa que.
   * nas próximas renderizações do componente, causado pelo
   * botão abaixo, o valor salvo será retornado imediatamente.
   */
  const inicio = performance.now();
  const resultado = React.useMemo(() => {
    console.log('operação lenta executando...');
    return operacaoLenta();
  }, []);
  console.log('operação lenta concluida');
  const fim = performance.now();
  console.log(
    `Chamada durou ${(fim - inicio).toFixed(
      2
    )} milliseconds com useMemo. resultado: `,
    resultado
  );

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
}

export { App };
