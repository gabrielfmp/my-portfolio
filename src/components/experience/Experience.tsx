import { ExperienceCard } from './experience-card';
import { ExperienceTitle } from './experience-title';
import { ExperienceWrapper } from './styles';
import { LilJoke } from './lil-joke';
import React from 'react';

const Experience = () => {
  return (
    <ExperienceWrapper>
      <ExperienceTitle title="Education" />
      <ExperienceCard
        role="Computer Science and Engineering"
        place="Instituto Superior Técnico"
        startYear={2015}
        endYear={2018}
        description={[
          'Python, C++, Java, C, Assembly, Prolog and more',
          'Databases in PostgreSQL',
          'Design patterns',
          'Algorithms and data structures',
        ]}
      />

      <ExperienceTitle title="Experience" />
      <ExperienceCard
        role="Frontend Engineer"
        place="Farfetch"
        startYear={2018}
        description={[
          'Learning from experienced developers',
          'Creating a platform and enhancing developer experience',
          'Working remotely',
          'Providing support to Harrods, Off-White and other e-commerce projects',
          'Hosting events',
        ]}
        noPaddingBottom
      />

      <LilJoke />
    </ExperienceWrapper>
  );
};

export default Experience;
