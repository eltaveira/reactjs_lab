import { Fragment } from 'react';
import { Title } from 'src/desafio_02_paginas_sem_react_router/components/Title.jsx';
import { Product } from 'src/desafio_02_paginas_sem_react_router/components/Produto.jsx';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'SmartphoneX', propriedades: ['2gb ram', '128gb'] }
];

function Produtos() {
  return (
    <section>
      <Title text='Produtos' />
      {produtos.map(produto => {
        return (
          <Product
            key={crypto.randomUUID()}
            // passando por spread
            {...produto}

            // passando prop por prop
            // nome={nome}
            // propriedades={propriedades}

            // passando por spread caso estivesse desestruturado
            // {...{ nome, propriedades }}
          />
        );
      })}
    </section>
  );
}

export { Produtos };
