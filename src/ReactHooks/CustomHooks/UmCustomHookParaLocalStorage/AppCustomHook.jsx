import React from 'react';
import { useLocalStorage } from 'src/ReactHooks/CustomHooks/UmCustomHookParaLocalStorage/UseLocalStorage.js';

function App() {
  const [state, setState] = useLocalStorage({ key: 'produto', initial: '' });

  const handleClick = React.useCallback(
    ({ target: { innerText } }) => {
      console.log(`text: ${innerText}`);
      setState(innerText);
    },
    [setState]
  );

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export { App };
