import { render } from '@testing-library/react';
import App from '../App';
import React from 'react';

test('snapshot', () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});
