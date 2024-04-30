import React from 'react';
import { GlobalContext } from 'src/ReactHooks/UseContext/ExercicioUseContext/Correcao/GlobalContext.js';
import { ResetProductsStateButton } from 'src/ReactHooks/UseContext/ExercicioUseContext/Correcao/ResetProductsStateButton.jsx';
// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

function Produto() {
  console.count('produto renderizou');
  /**
   * Produto será renderizado novamente quando algum estado
   * em global alterar. Isso porque Produto.jsx está usando
   * esse contexto global através do useContext(). Criando
   * um vínculo com esse contexto.
   */
  const global = React.useContext(GlobalContext);
  console.log(global);
  const { productState, resetProductState } = global;
  if (productState === undefined) return;
  return (
    <React.Fragment>
      <h3>Produtos</h3>
      {productState.map(product => {
        const { id } = product;
        return <li key={id}>{id}</li>;
      })}
      <button
        style={{ margin: '.5rem' }}
        onClick={resetProductState}>
        Remover Produtos
      </button>
      <button
        style={{ margin: '.5rem' }}
        onClick={() => {
          console.log(
            `estado global: ${Reflect.ownKeys(global.productState || {})}`
          );
        }}>
        Exibir Estado Global
      </button>
      {/* Ou como um componente */}
      <ResetProductsStateButton />
    </React.Fragment>
  );
}

export { Produto };
