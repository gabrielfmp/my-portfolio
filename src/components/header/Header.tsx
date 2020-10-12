import { Description, Name, StyledHeader } from './styles';
import React from 'react';

const Header = () => (
  <StyledHeader>
    <Description>
      Hi! I’m a frontend engineer driven by inovation and meaningful
      connections. I focus mainly on improving every user’s experience with
      simple yet effective code,
      <s>even though most of the time I’m solving bugs I created myself.</s>
    </Description>

    <Name>
      Gabriel
      <br />
      Pires
    </Name>
  </StyledHeader>
);

export default Header;
