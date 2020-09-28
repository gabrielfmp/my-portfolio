import { DescriptionItem, DescriptionList, ExperienceCardWrapper, Role, ThinText } from './styles';
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
        <ThinText>{place}</ThinText>
        <ThinText>{startYear} - {endYear}</ThinText>
        <DescriptionList>
            {description.map(description =>
                <DescriptionItem>{description}</DescriptionItem>    
            )}
        </DescriptionList>
    </ExperienceCardWrapper>
);

export default ExperienceCard;
