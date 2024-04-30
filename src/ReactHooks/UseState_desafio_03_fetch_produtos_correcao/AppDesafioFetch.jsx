import React from 'react';
import { Header } from 'src/ReactHooks/desafio_03_fetch_produtos_correcao/components/Header.jsx';
import { Produto } from 'src/ReactHooks/desafio_03_fetch_produtos_correcao/pages/Produto.jsx';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function App({ myProp }) {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);
  async function handleClick(event) {
    const {
      target: { innerText }
    } = event;
    setCarregando(true);
    const produto = await (
      await fetch(`https://ranekapi.origamid.dev/json/api/produto/${innerText}`)
    ).json();
    setDados(produto);
    setCarregando(false);
  }
  return (
    <div>
      <button
        style={{ margin: '.5rem' }}
        onClick={handleClick}>
        notebook
      </button>
      <button
        style={{ margin: '.5rem' }}
        onClick={handleClick}>
        smartphone
      </button>
      <button
        style={{ margin: '.5rem' }}
        onClick={handleClick}>
        tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
}

export { App };
