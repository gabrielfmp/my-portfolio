import { Dot, Education, Experience, Page, Title, Wrapper } from './styles';
import { ExperienceCard } from './components/experience-card';
import { Global } from './Global';
import { Header } from './components/header';
import { LilJoke } from './components/lil-joke';
import React from 'react';

const App = () => {
  return (
    <>
      <Global />

      <Page>
        <Header />

        <Education>
          <Wrapper>
            <Dot />
            <Title>Education</Title>
          </Wrapper>
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
        </Education>
        <Experience>
          <Wrapper>
            <Dot />
            <Title>Experience</Title>
          </Wrapper>
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
        </Experience>
        <LilJoke />
      </Page>
    </>
  );
};

export default App;
