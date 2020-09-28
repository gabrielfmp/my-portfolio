import { Dot, Education, Page, Title, Wrapper } from './styles';
import { ExperienceCard } from './components/experience-card';
import { Global } from './Global';
import { Header } from './components/header';
import React from 'react';

const App = () => {
  return (
    <div>
      <Global />

      <Page>
        <Header />

        <Education>
          <Wrapper>
            <Dot/>
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
              'Algorithms and data structures'
            ]}
          />
        </Education>
      </Page>
    </div>
  );
};

export default App;
