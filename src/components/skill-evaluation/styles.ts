import { MediumText } from '../../ui';
import styled from '@emotion/styled';

type DotProps = {
  color?: string;
};

export const Dot = styled.div<DotProps>`
  overflow: hidden;
  margin: auto 1.2rem auto 0;
  border-radius: 50%;
  width: 0.6rem;
  height: 0.6rem;
  background-color: ${({ color }) => color};
`;

export const HalfFilledDot = styled.div`
  width: 50%;
  height: 100%;
  background-color: #000;
`;

export const SkillEvaluationWrapper = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

export const SkillText = styled(MediumText)`
  flex: 1;
`;
