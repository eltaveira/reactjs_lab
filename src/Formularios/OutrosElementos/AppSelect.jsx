import React from 'react';
/**
 * No select, o valor reativo que queremos verificar
 * é a da tag <select> que representa a opção atual
 * selecionada. As opções do <options> são estáticas
 * e não precisam de estado.
 */
function App() {
  // const [select, setSelect] = React.useState('smartphone');

  //estado pra quando quer forçar o usuário selecionar
  const [select, setSelect] = React.useState('');

  return (
    <form>
      <select
        value={select}
        onChange={({ target: { value } }) => setSelect(value)}>
        {/*  se desejavel que o usuário selecione uma opção obrigatóriamente, deixe o estado inicial como string vazia e adicione uma opcao com value "" e disable*/}
        <option value='' disabled={true}></option>
        <option value='notebook'>Notebook</option>
        <option value='smartphone'>Smartphone</option>
        <option value='tablet'>Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
}

export { App };
