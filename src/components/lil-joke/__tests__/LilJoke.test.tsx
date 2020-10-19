import { render } from '@testing-library/react';
import LilJoke from '../LilJoke';
import React from 'react';

test('snapshot', () => {
  const { asFragment } = render(<LilJoke />);

  expect(asFragment()).toMatchSnapshot();
});
