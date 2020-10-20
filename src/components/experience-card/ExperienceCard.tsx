import {
  DescriptionItem,
  DescriptionList,
  ExperienceCardWrapper,
  MiniDot,
  Role,
  ThinText,
  TimeAndPlaceWrapper,
} from './styles';
import React, { FunctionComponent } from 'react';

const ExperienceCard: FunctionComponent<{
  description: Array<string>;
  endYear?: number;
  noPaddingBottom?: boolean;
  place: string;
  role: string;
  startYear: number;
}> = ({ description, endYear, noPaddingBottom, startYear, place, role }) => (
  <ExperienceCardWrapper noPaddingBottom={noPaddingBottom}>
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
