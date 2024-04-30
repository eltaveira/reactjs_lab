import { Header } from 'src/desafio_02_paginas_sem_react_router/components/Header.jsx';
import { Home } from 'src/desafio_02_paginas_sem_react_router/pages/Home.jsx';
import { Produtos } from 'src/desafio_02_paginas_sem_react_router/pages/Produtos.jsx';

const pages = [
  { path: '/', page: <Home /> },
  { path: '/produtos', page: <Produtos /> }
];

function App() {
  return (
    <section>
      <Header />
      {(() => {
        const { page } = pages.find(({ path }) => {
          const {
            location: { pathname }
          } = window;
          return path === pathname;
        });
        return page;
      })()}
    </section>
  );
}

export { App };
