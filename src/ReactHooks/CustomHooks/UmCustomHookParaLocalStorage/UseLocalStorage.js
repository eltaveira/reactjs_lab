import React from 'react';
/**
 * Observe esse hook customizado que salva valores
 * no localStorage.
 *
 * CUIDADO: getItem() sempre retorna uma string. Isso
 * singifica o valor primitivo que você passar para
 * setItem, vai ser convertido para string, assuma
 * que setItem irá fazer isso:
 *
 * String(true)
 *
 * retornando
 *
 * 'true'
 */
function useLocalStorage({ key, initial }) {
  // const [state, setState] = React.useState(
  //   () => window.localStorage.getItem(key) || initial
  // );
  // ou
  const [state, setState] = React.useState(
    window.localStorage.getItem(key) || initial
  );
  /**
   * O estado de dois objetos precisam ser rastreados
   * a O `state` que guarda o valor da `key` e a própria
   * `key` quando for alterada.
   */
  React.useEffect(() => window.localStorage.setItem(key, state), [state, key]);

  return [state, setState];
}

export { useLocalStorage };
