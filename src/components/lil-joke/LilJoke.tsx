import { DashedLine, Joke, LilJokeWrapper, Line } from './styles';
import React from 'react';

const LilJoke = () => (
  <LilJokeWrapper>
    {
      // @TODO: This is a very naive approach, revise this later
    }
    <DashedLine>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </DashedLine>

    <Joke>Next? Your company maybe</Joke>
  </LilJokeWrapper>
);

export default LilJoke;
