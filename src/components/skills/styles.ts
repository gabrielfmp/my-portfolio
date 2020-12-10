import { MediumText } from '../../ui';
import styled from '@emotion/styled';

export const SkillsWrapper = styled.div`
  display: flex;
  margin-left: 2rem;
  border-left: 0.1rem solid #e8e8e8;
  padding-top: 3.5rem;
  padding-left: 1.5rem;
  width: 27.5rem;
`;

export const SkillsLine = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const AlignVertically = styled.div`
  flex: 1;
  margin: auto 0;
`;

export const SkillText = styled(MediumText)`
  margin-bottom: 0.8rem;
`;
