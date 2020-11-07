import { render } from '@testing-library/react';
import Contact from '../Contact';
import Icon from '../../../ui/iconography/phone.svg';
import React from 'react';

test('snapshot', () => {
  const { asFragment } = render(
    <Contact iconText="MyContactIcon" icon={Icon} contact="Contact" />
  );

  expect(asFragment()).toMatchSnapshot();
});
