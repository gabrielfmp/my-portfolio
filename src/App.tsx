import { AboutMe } from './components/about-me';
import {
  Content,
  HorizontalBlock,
  Page,
  SkillsEvaluationWrapper,
  SkillsWrapper,
} from './styles';
import { Experience } from './components/experience';
import { Global } from './Global';
import { Header } from './components/header';
import { SkillEvaluation } from './components/skill-evaluation';
import { Skills } from './components/skills';
import { Title } from './ui';
import React from 'react';

const App = () => {
  return (
    <>
      <Global />

      <Page>
        <Header />

        <Content>
          <HorizontalBlock>
            <Experience />

            <AboutMe />
          </HorizontalBlock>

          <HorizontalBlock>
            <SkillsWrapper>
              <Title>Skills</Title>
              <SkillsEvaluationWrapper>
                <SkillEvaluation skill="Javascript" evaluation={5} outOf={5} />
                <SkillEvaluation skill="HTML" evaluation={3.5} outOf={5} />
                <SkillEvaluation skill="CSS" evaluation={4} outOf={5} />
                <SkillEvaluation skill="React" evaluation={4.5} outOf={5} />
                <SkillEvaluation skill="Redux" evaluation={5} outOf={5} />
              </SkillsEvaluationWrapper>
            </SkillsWrapper>

            <Skills />
          </HorizontalBlock>
        </Content>
      </Page>
    </>
  );
};

export default App;
