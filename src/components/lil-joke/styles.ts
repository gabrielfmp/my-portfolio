import styled from '@emotion/styled';

// I'm this close 🤏 to rename this component LilJokeRapper
export const LilJokeWrapper = styled.div`
  display: flex;
  margin-bottom: 2.6rem;
`;

export const DashedLine = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  margin-top: 0.1rem;
  width: 0.1rem;
  background-color: #000;

  &:nth-of-type(1) {
    flex: 8;
  }
  &:nth-of-type(2) {
    flex: 4;
  }
  &:nth-of-type(3) {
    flex: 3;
  }
  &:nth-of-type(4) {
    flex: 2;
  }
  &:nth-of-type(5) {
    flex: 1;
  }
`;

export const Joke = styled.p`
  margin: 1.9rem 0 0 1.4rem;
  font-size: 1.25rem;
  color: #e0e0e0;
`;
