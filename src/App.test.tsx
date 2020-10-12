import { render } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Frontend Engineer/);
  expect(linkElement).toBeInTheDocument();
});
