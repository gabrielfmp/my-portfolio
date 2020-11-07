import { render } from '@testing-library/react';
import ExperienceTitle from '../ExperienceTitle';
import React from 'react';

test('snapshot', () => {
  const { asFragment } = render(
    <ExperienceTitle title="eu dou à música o que ela me dá" />
  );

  expect(asFragment()).toMatchSnapshot();
});
