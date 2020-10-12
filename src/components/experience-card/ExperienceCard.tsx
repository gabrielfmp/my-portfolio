import {
  DescriptionItem,
  DescriptionList,
  ExperienceCardWrapper,
  MiniDot,
  Role,
  ThinText,
  TimeAndPlaceWrapper,
} from './styles';
import React from 'react';

const ExperienceCard: React.FC<{
  description: Array<string>;
  endYear?: number;
  place: string;
  role: string;
  startYear: number;
}> = ({ description, endYear, startYear, place, role }) => (
  <ExperienceCardWrapper>
    <Role>{role}</Role>

    <TimeAndPlaceWrapper>
      <ThinText>{place}</ThinText>
      <MiniDot />
      <ThinText>{`${startYear} - ${endYear || 'Present'}`}</ThinText>
    </TimeAndPlaceWrapper>

    <DescriptionList>
      {description.map((description, i) => (
        <DescriptionItem key={i}>{description}</DescriptionItem>
      ))}
    </DescriptionList>
  </ExperienceCardWrapper>
);

export default ExperienceCard;
