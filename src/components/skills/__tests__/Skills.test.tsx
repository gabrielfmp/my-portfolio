import { render } from '@testing-library/react';
import React from 'react';
import Skills from '../Skills';

test('snapshot', () => {
  const { asFragment } = render(<Skills />);

  expect(asFragment()).toMatchSnapshot();
});
