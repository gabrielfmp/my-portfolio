import { render } from '@testing-library/react';
import ExperienceCard from '../ExperienceCard';
import React from 'react';

test('snapshot', () => {
  const { asFragment } = render(
    <ExperienceCard
      role="foo"
      place="bar"
      startYear={2025}
      description={['foo', 'bar']}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
