import React from 'react';
function App() {
  const [checkbox, setCheckbox] = React.useState(false);

  function handleChange({ target: { checked } }) {
    setCheckbox(checked);
  }

  return (
    <form>
      <label>
        <input
          type='checkbox'
          value='termos'
          checked={checkbox}
          onChange={handleChange}
        />
        Li os termos.
      </label>
    </form>
  );
}

export { App };
