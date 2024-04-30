import React from 'react';
import { Produto } from 'src/ReactHooks/UseEffect/ExercicioUseEffectComFetchLocalStorage/MinhaSolucao/components/Produto.jsx';
/**
 * - Ao clicar em notebook, salve no local storage como { produto: "notebook" }.
 * - Ao clicar em smartphone, substitua o produto do local storage por { produto: "smartphone" }
 * - Toda vez que alterar a prefêrencia, realiza uma chamada fetch na API, para colocar informações
 * abaixo dos botões.
 * - Toda vez que recarregar a página, consulte o local storage para verificar qual é o produto
 * atual.
 */

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

function App() {
  console.count('render');
  const [dadosProduto, setDadosProduto] = React.useState(null);

  async function getProduct(key) {
    console.count('get_product');
    const resp = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${key}`
    );
    return resp.json();
  }

  function handleClick(event) {
    console.count('handle_click');
    getProduct(event.target.innerText).then(product =>
      setDadosProduto(product)
    );
  }

  React.useEffect(() => {
    console.count('use_effect_deps_product_data');
    if (dadosProduto !== null && Reflect.has(dadosProduto, 'id')) {
      window.localStorage.setItem('produto', Reflect.get(dadosProduto, 'id'));
    }
  }, [dadosProduto]);

  React.useEffect(() => {
    console.count('use_effect_without_data');
    const produto = window.localStorage.getItem('produto');
    if (produto !== null) {
      getProduct(produto).then(obj => setDadosProduto(obj));
    }
  }, []);

  return (
    <div>
      <h1>Preferência: {dadosProduto && dadosProduto.id}</h1>
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
      {dadosProduto && (
        <Produto
          nome={dadosProduto.id}
          preco={`R$ ${Number(dadosProduto.preco)}`}
        />
      )}
    </div>
  );
}

export { App };
