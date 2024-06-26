import React from 'react';
import { Produto } from 'src/ReactHooks/UseContext/ExercicioUseContext/Produto.jsx';
import { GlobalStorage } from 'src/ReactHooks/UseContext/ExercicioUseContext/GlobalStorage.jsx';
// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

function App() {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
}

export { App };
