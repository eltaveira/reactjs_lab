import React from 'react';
import { Produto } from 'src/ReactHooks/UseEffect/ExercicioUseEffect/Correcao/Produto.jsx';

function App() {
  /**
   * Nessa solução, o produto preferêncial é gravado em estado.
   * Eu só mantive o produto preferencial em localStoreage
   *
   * O que eu mantive em estado, foi a resposta do fetch completa.
   *
   * A resposta do fetch, é salva como estado no componente Produto.jsx.
   */
  const [produto, setProduto] = React.useState(null);

  /**
   * Aqui, ele fez um caminho diferente. Se o produto preferencial
   * exitir em localStorage, então é salvo o estado desse produto.
   *
   * E ai quando esse estado é alterado é outro efeito é disparado
   * para salvar isso no localStorage.
   *
   * A minha solução foi, quando há o clique no botão, acontece o
   * fetch e então o effect linkado a 'dadosProduto' cuida de salvar
   * o a string preferencial no localStorage.
   */
  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  /**
   * Aqui, o produto é salvo no estado como string, assim que acontece o
   * clique no botão. Diferente da minha solução, quem faz o fetch aqui
   * é o componente Produto.jsx, no Produto.jsx existe um effect que
   * tem como dependencia o 'produto' desse componete. Sempre que 'produto'
   * altera o estado nesse componente, isso reflete no Effect do Produto.jsx.
   */
  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button
        style={{ marginRight: '1rem' }}
        onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
}

export { App };

/**
 * Um resumo das diferenças
 *
 * Correcao: Quem faz o fetch dos dados do produto é o Produto.jsx
 * Minha: Quem faz o fetch é o App.jsx
 * Análise: Até que faz mais sentido, o fetch acontcer no próprio Produto.jsx
 * nesse caso, pois é responsábilidade dele.
 *
 * Correcao: o effect sem dependencias, é para verificar se existe no
 * localStorage, e setar a preferencia como string 'notebook' ou 'smartphone',
 * caso exista:
 * Minha: o Effect sem dependencia, é para verificar se existe no
 * localStorage e fazer o fetch do produto salvando-o em estado.
 *
 * Correcao: O Effect com dependencia do estado do produto preferencial,
 * é para salvar o produto preferencialdo estado para o localStorage.
 * Minha: O Effect com dependencia do estado de retorno do fetch, é para
 * obter o id desse estado (que por sua vez é a mesma string usada no innerText)
 * e então atualizar o localStorage.
 */
