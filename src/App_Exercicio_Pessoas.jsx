import { Fragment, useState } from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' }
  ],
  ativa: true
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' }
  ],
  ativa: false
};

function conversor(preco) {
  return Number(preco.replace('R$ ', ''));
}

function App() {
  const dados = mario;
  // const dados = luana;
  const { compras } = dados;
  const totalGasto = compras.reduce(
    (anterior, atual) => anterior + conversor(atual.preco),
    0
  );
  return (
    <Fragment>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total gasto: R$ {totalGasto}</p>
      {/* Com  IIFE */}
      {(function () {
        if (totalGasto > 10_000) return <p>Tu tá gastando muito parça</p>;
      })()}
      {/* Não recomendado pois <p> sempre vai existir */}
      <p>{totalGasto > 10_000 && 'Tu tá gastando muito parça'}</p>
      {/* Mais recomendado pois <p> só existe quando o a condição é atendida */}
      {totalGasto > 10_000 && <p>Tu tá gastando muito parça</p>}
    </Fragment>
  );
}
// : undefined
export { App };
