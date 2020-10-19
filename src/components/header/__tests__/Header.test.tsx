import { render } from '@testing-library/react';
import Header from '../Header';
import React from 'react';

test('snapshot', () => {
  const { asFragment } = render(<Header />);

  expect(asFragment()).toMatchSnapshot();
});
