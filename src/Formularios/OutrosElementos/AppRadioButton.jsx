import React from 'react';
import { getUniqueID } from 'src/utils';

const productsRadioOptions = ['notebook', 'smartphone', 'tablet'];

function App() {
  const [radio, setRadio] = React.useState('');

  function handleChange({ target: { value } }) {
    setRadio(value);
  }
  /**
   * No React, o radio é um input do tipo Radio, o valor
   * do radio é estático e não precisa de reatividade.
   */
  return (
    <React.Fragment>
      <h4>Produtos</h4>
      <form>
        <p>
          Current Produt:{' '}
          <span style={{ textTransform: 'capitalize' }}> {radio} </span>
        </p>
        {productsRadioOptions.map(option => (
          <label style={{ textTransform: 'capitalize' }} key={getUniqueID()}>
            {/* Quando o input está dentro do label, o forHtml é opcional1 */}
            <input
              type='radio'
              value={option}
              /**
               * Toda vez que esse App é renderizado, a quem o option que for igual o radio,
               * é a que marcar checked como true.
               *
               * O uso do checked com comparação ao estado de radio, é uma alternativa
               * à utilização do atributo name
               */
              checked={radio === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </form>
    </React.Fragment>
  );
}

export { App };
