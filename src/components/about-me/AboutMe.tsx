import { AboutMeWrapper, StyledTitle } from './styles';
import { Contact } from '../contact';
import CakeSvg from '../../ui/iconography/cake.svg';
import EmailSvg from '../../ui/iconography/email.svg';
import GithubSvg from '../../ui/iconography/github.svg';
import LinkedInSvg from '../../ui/iconography/linkedin.svg';
import LocationSvg from '../../ui/iconography/location.svg';
import PhoneSvg from '../../ui/iconography/phone.svg';
import React from 'react';

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <StyledTitle>About me</StyledTitle>
      <Contact
        icon={EmailSvg}
        iconText="email"
        contact="gabrielfmpires@gmail.com"
      />
      <Contact
        icon={PhoneSvg}
        iconText="phone number"
        contact="+351 934429387"
      />
      <Contact
        icon={LocationSvg}
        iconText="location"
        contact="Lisbon, Portugal"
      />
      <Contact icon={CakeSvg} iconText="birthday" contact="17 May 1997" />
      <Contact icon={GithubSvg} iconText="github" contact="gabrielfmp" />
      <Contact
        icon={LinkedInSvg}
        iconText="linkedin"
        contact="gabrielfmpires"
      />
    </AboutMeWrapper>
  );
};

export default AboutMe;
