import { Dot, SkillEvaluationWrapper, SkillText } from './styles';
import HalfDot from './HalfDot';
import React, { FunctionComponent } from 'react';

type Props = {
  skill: string;
  evaluation: number;
  outOf: number;
};

const SkillEvaluation: FunctionComponent<Props> = ({
  skill,
  evaluation,
  outOf,
}) => {
  // To know the 0.5 of 4.5
  const fractionalPart = evaluation % 1;

  // For simplicity, since I don't want to have 1.312 dots filled, when
  // evaluation has a fractional part this components renders half dot
  const hasHalfDot = !!fractionalPart;

  // Make sure filledDotsNumber is integer
  const filledDotsNumber = evaluation - fractionalPart;

  // When we have an half dots, create one less grey dot
  const remainingDots = hasHalfDot
    ? outOf - filledDotsNumber - 1
    : outOf - filledDotsNumber;

  return (
    <SkillEvaluationWrapper>
      <SkillText>{skill}</SkillText>

      {
        // Making *filledDotsNumber* black dots
        Array(filledDotsNumber)
          .fill(undefined)
          .map((_, i) => (
            <Dot color="#000" key={i} data-testid="filled-dot" />
          ))
      }

      {
        // Making one half black half grey dots
        hasHalfDot && <HalfDot />
      }

      {
        // Making *remainingDots* grey dots
        Array(remainingDots)
          .fill(undefined)
          .map((_, i) => (
            <Dot color="#BCBCBC" key={i} data-testid="empty-dot" />
          ))
      }
    </SkillEvaluationWrapper>
  );
};

export default SkillEvaluation;
