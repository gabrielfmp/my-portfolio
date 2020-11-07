import { Dot, TitleWrapper } from './styles';
import { Title } from './../../../ui';
import React from 'react';

type ExperienceTitleProps = {
  title: string;
};

const ExperienceTitle: React.FC<ExperienceTitleProps> = ({ title }) => {
  return (
    <TitleWrapper>
      <Dot />
      <Title>{title}</Title>
    </TitleWrapper>
  );
};

export default ExperienceTitle;
