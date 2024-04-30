import React from 'react';
/**
 * A diferença do textarea do React para o text area do HTML padrão
 * é que a do React não precisa de tag de fechamento.
 *
 */
function App() {
  const [mensagem, setMensagem] = React.useState('');

  return (
    <form>
      <textarea
        id='mensagem'
        value={mensagem}
        rows='5'
        onChange={({ target: { value } }) => setMensagem(value)}
      />
      <p>{mensagem}</p>
    </form>
  );
}

export { App };
