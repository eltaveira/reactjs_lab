import { render, screen } from '@testing-library/react';

import { describe, expect, test } from 'vitest';
import { App } from 'src/AppToTest.jsx';
// import {} from 'react-dom/test-utils';

describe('App', () => {
  test('garantino que o app está sendo renderizado', () => {
    const { debug, getByText } = render(<App />);
    debug();

    expect(getByText('AnyText')).toBeInTheDocument();
  });
});
