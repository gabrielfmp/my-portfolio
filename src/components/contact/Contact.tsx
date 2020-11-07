import {
  ContactWrapper,
  ContactsText,
  IconWrapper,
  StyledIcon,
} from './styles';
import React from 'react';

type ContactProps = {
  icon: string;
  contact: string;
  iconText: string;
};

const Contact: React.FC<ContactProps> = ({ iconText, icon, contact }) => {
  return (
    <ContactWrapper>
      <IconWrapper>
        <StyledIcon alt={iconText} src={icon} />
      </IconWrapper>

      <ContactsText>{contact}</ContactsText>
    </ContactWrapper>
  );
};

export default Contact;
