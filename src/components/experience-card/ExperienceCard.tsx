import { DescriptionItem, DescriptionList, ExperienceCardWrapper, MiniDot, Role, ThinText, TimeAndPlaceWrapper } from './styles';
import React from 'react';

const ExperienceCard: React.FC<{
    role: string,
    place:string,
    startYear:number,
    endYear?: number ,
    description: Array<string>
}> = ({
        role,
        place,
        startYear,
        endYear,
        description
    }) => (
    <ExperienceCardWrapper>
        <Role>{role}</Role>
        <TimeAndPlaceWrapper>
            <ThinText>{place}</ThinText>
            <MiniDot/>
            <ThinText>{`${startYear} - ${endYear || 'Present'}`}</ThinText>
        </TimeAndPlaceWrapper>
        <DescriptionList>
            {description.map((description, i) =>
                <DescriptionItem key={i}>{description}</DescriptionItem>    
            )}
        </DescriptionList>
    </ExperienceCardWrapper>
);

export default ExperienceCard;
