import styled from '@emotion/styled';

// Seriously thinking about changing this component name to LilJokeRapper
export const LilJokeWrapper = styled.div`
  display: flex;
  margin-left: 2.7rem;
`;

export const DashedLine = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 2.7rem 2.7rem 10rem 2.7rem;
  background-color: #000; */
`;

export const Line = styled.div`
  margin-top: 0.1rem;
  width: 0.1rem;
  background-color: #000;

  &:nth-child(1) {
    flex: 8;
  }
  &:nth-child(2) {
    flex: 4;
  }
  &:nth-child(3) {
    flex: 3;
  }
  &:nth-child(4) {
    flex: 2;
  }
  &:nth-child(5) {
    flex: 1;
  }
`;

export const Joke = styled.p`
  margin: 1.9rem 0 0 1.4rem;
  font-size: 1.25rem;
  color: #e0e0e0;
`;
