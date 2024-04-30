import { Fragment } from 'react';
import { Title } from 'src/desafio_02_paginas_sem_react_router/components/Title.jsx';

function Home() {
  return (
    <section>
      <Title text='Home' />
      <p>Essa é a home do site</p>
    </section>
  );
}

export { Home };
