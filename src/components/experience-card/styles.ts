import styled from '@emotion/styled';

type ExperienceCardWrapperType = {
  noPaddingBottom?: boolean;
};

export const ExperienceCardWrapper = styled.div<ExperienceCardWrapperType>`
  margin-left: 0.4rem;
  border-left: 0.1rem solid #000;
  padding: ${({ noPaddingBottom }) =>
    noPaddingBottom ? '0.8rem 0 0 1.4rem' : '0.8rem 0 2.3rem 1.4rem'};
`;

export const Role = styled.p`
  margin: 0;
  font-size: 1.75rem;
`;

export const ThinText = styled.p`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 200;
`;

export const DescriptionList = styled.ul`
  margin: 0;
  padding-left: 1rem;
  list-style: none;
`;

export const DescriptionItem = styled.li`
  margin-bottom: 0.2rem;
  font-size: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TimeAndPlaceWrapper = styled.div`
  display: flex;
  margin: 0.2rem 0;
`;

export const MiniDot = styled.div`
  margin: auto 0.4rem;
  border-radius: 50%;
  width: 0.2rem;
  height: 0.2rem;
  background-color: #000;
`;
