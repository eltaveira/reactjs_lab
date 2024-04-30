import React from 'react';
import { GlobalContext } from 'src/ReactHooks/UseContext/ExercicioUseContext/GlobalContext.js';
// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

function Produto() {
  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/smartspeaker')
      .then(res => res.json())
      .then(obj => {
        global.setGlobalProduct(obj);
      });
  }, []);

  return (
    <React.Fragment>
      <p>Produto</p>
      <button
        style={{ margin: '.5rem' }}
        onClick={() => {
          console.log('global state: ', global);
        }}>
        Check Global State
      </button>
      <button
        style={{ margin: '.5rem' }}
        onClick={global.resetGlobalProductState}>
        Reset Global Product State
      </button>
    </React.Fragment>
  );
}

export { Produto };
