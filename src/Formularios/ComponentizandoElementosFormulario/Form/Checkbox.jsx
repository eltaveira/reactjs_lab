import React from 'react';

function Checkbox({ options, value, setValue }) {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter(item => item !== target.value));
    }
  }
  return (
    <React.Fragment>
      {options.map(option => (
        <label key={option}>
          <input
            type='checkbox'
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </React.Fragment>
  );
}

export { Checkbox };
