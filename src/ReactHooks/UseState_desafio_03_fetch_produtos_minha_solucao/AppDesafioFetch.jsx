import React from 'react';
import { Header } from 'src/ReactHooks/desafio_03_fetch_produtos_minha_solucao/components/Header.jsx';
import { Produto } from 'src/ReactHooks/desafio_03_fetch_produtos_minha_solucao/pages/Produto.jsx';
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function App() {
  const [produto, setProduto] = React.useState();
  async function handleClick(event) {
    // alternativa
    // async function handleClick(innerTextChildren) {

    setProduto(<p>Carregando...</p>);
    const produto = await (
      await fetch(
        // `https://ranekapi.origamid.dev/json/api/produto/${event.target.firstChild.data}`
        //ou
        `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
      )
    ).json();

    // alternativa
    // const produto = await (
    //   await fetch(
    //     `https://ranekapi.origamid.dev/json/api/produto/${innerTextChildren}`
    //   )
    // ).json();

    const { nome, preco, fotos } = produto;
    setProduto(
      <Produto
        nome={nome}
        preco={Number(preco)}
        foto={fotos[0]}
      />
    );
  }

  return (
    <section>
      <Header buttonAction={handleClick} />
      {produto}
    </section>
  );
}

export { App };
