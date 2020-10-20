import { render } from '@testing-library/react';
import HalfDot from '../HalfDot';
import React from 'react';

test('snapshot', () => {
  const { asFragment } = render(<HalfDot />);

  expect(asFragment()).toMatchSnapshot();
});
