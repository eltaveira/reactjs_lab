import React from 'react';

function Select({ options, value, setValue, ...props }) {
  return (
    <select
      value={value}
      onChange={({ target: { value } }) => setValue(value)}
      {...props}>
      <option value='' disabled>
        Selecione
      </option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export { Select };
