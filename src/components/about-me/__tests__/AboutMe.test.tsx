import { render } from '@testing-library/react';
import AboutMe from '../AboutMe';
import React from 'react';

test('snapshot', () => {
  const { asFragment } = render(<AboutMe />);

  expect(asFragment()).toMatchSnapshot();
});
