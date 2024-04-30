import React from 'react';

function Radio({ options, value, setValue, ...props }) {
  return (
    <React.Fragment>
      {options.map(option => (
        <label key={option}>
          <input
            type='radio'
            value={option}
            checked={value === option}
            onChange={({ target: { value } }) => setValue(value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </React.Fragment>
  );
}

export { Radio };
