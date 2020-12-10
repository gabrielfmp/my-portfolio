import {
  AlignVertically,
  SkillText,
  SkillsLine,
  SkillsWrapper,
} from './styles';
import React from 'react';

const Skills = () => {
  return (
    <SkillsWrapper>
      <AlignVertically>
        <SkillsLine>
          <SkillText>Critical Thinking</SkillText>
          <SkillText>Will to learn</SkillText>
        </SkillsLine>

        <SkillsLine>
          <SkillText>English</SkillText>
          <SkillText>Portuguese (native)</SkillText>
          <SkillText>Spanish</SkillText>
        </SkillsLine>

        <SkillsLine>
          <SkillText>Communication</SkillText>
          <SkillText>Self-improvement</SkillText>
        </SkillsLine>

        <SkillsLine>
          <SkillText>Creativity</SkillText>
          <SkillText>Organization</SkillText>
          <SkillText>Teamwork</SkillText>
        </SkillsLine>
      </AlignVertically>
    </SkillsWrapper>
  );
};

export default Skills;
