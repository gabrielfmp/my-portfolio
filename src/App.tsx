import { Content, Dot, Page, SkillsWrapper, TitleWrapper } from './styles';
import { ExperienceCard } from './components/experience-card';
import { Global } from './Global';
import { Header } from './components/header';
import { LilJoke } from './components/lil-joke';
import { SkillEvaluation } from './components/skill-evaluation';
import { Title } from './ui';
import React from 'react';

const App = () => {
  return (
    <>
      <Global />

      <Page>
        <Header />

        <Content>
          <>
            <TitleWrapper>
              <Dot />
              <Title>Education</Title>
            </TitleWrapper>
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
          </>
          <>
            <TitleWrapper>
              <Dot />
              <Title>Experience</Title>
            </TitleWrapper>
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
          </>
          <LilJoke />

          <Title>Skills</Title>
          <SkillsWrapper>
            <SkillEvaluation skill="Javascript" evaluation={5} outOf={5} />
            <SkillEvaluation skill="HTML" evaluation={3.5} outOf={5} />
            <SkillEvaluation skill="CSS" evaluation={4} outOf={5} />
            <SkillEvaluation skill="React" evaluation={4.5} outOf={5} />
            <SkillEvaluation skill="Redux" evaluation={5} outOf={5} />
          </SkillsWrapper>
        </Content>
      </Page>
    </>
  );
};

export default App;
