import React from 'react';
import { UserContext } from 'src/ReactHooks/UseContext/UserContext.jsx';

function Produto() {
  /**
   * useContext, permite acessar algum contexto compartilhado
   * nesse caso, o UserContext importado. O objeto retornado
   * então é o { nome: 'Victor' }.
   *
   * Qualquer elemento HTML filho da <div> de produto, podera
   * acessar esse objeto dados.
   */
  const dados = React.useContext(UserContext);
  console.log(dados);
  return <div>{dados.nome}</div>;
}

export { Produto };
