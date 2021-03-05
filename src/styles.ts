import styled from '@emotion/styled';

export const Page = styled.div`
  display: block;
  margin: 2rem auto;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  width: 21cm;
  height: 29.7cm;
  background: white;
`;

export const Content = styled.div`
  margin: 2.3rem 2.7rem;
`;

export const SkillsEvaluationWrapper = styled.div`
  margin-top: 1rem;
`;

export const SkillsWrapper = styled.div`
  flex: 1;
`;

export const HorizontalBlock = styled.div`
  display: flex;
  margin-top: 6rem;

  :not(:first-of-type) {
    margin-top: 7rem;
  }
`;
