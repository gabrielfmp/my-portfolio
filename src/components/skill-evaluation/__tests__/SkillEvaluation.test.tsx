import { render } from '@testing-library/react';
import React from 'react';
import SkillEvaluation from '../SkillEvaluation';

test('snapshot', () => {
  const { getAllByTestId, queryByTestId, asFragment } = render(
    <SkillEvaluation skill="foo" evaluation={1} outOf={2} />
  );

  expect(getAllByTestId('filled-dot').length).toBe(1);
  expect(queryByTestId('half-dot')).toBeNull();
  expect(getAllByTestId('empty-dot').length).toBe(1);

  expect(asFragment()).toMatchSnapshot();
});

test('rendering half dots', () => {
  const { getAllByTestId } = render(
    <SkillEvaluation skill="foo" evaluation={5.5} outOf={7} />
  );

  expect(getAllByTestId('filled-dot').length).toBe(5);
  expect(getAllByTestId('half-dot').length).toBe(1);
  expect(getAllByTestId('empty-dot').length).toBe(1);
});
