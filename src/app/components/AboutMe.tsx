import React from 'react';
import styled from 'styled-components';
import aboutImage from './Group.jpg'; // Renamed image file to remove spaces
import { Inter } from 'next/font/google'

export const AboutMe: React.FC = () => {
  return (
    <AboutContainer id="about">
      <ProfileImage src={aboutImage.src} alt="About Me" />
      <Content>
        <SectionHeading>About Me</SectionHeading>
        <Description>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </Description>
        <Skills>
          <Skill title="UX" width="90%" />
          <Skill title="Website Design" width="80%" />
          <Skill title="App Design" width="70%" />
          <Skill title="Graphic Design" width="60%" />
        </Skills>
      </Content>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  margin: 40px 0;
  padding: 0 20px;
  background-color: white;
  font-family: 'Roboto';

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    font-family: 'Roboto';
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 250px;
  object-fit: cover; /* Ensures the image maintains its aspect ratio while filling the container */
  margin-right: 20px;
  margin-top: 20px;
  font-family: 'Roboto';

  @media (max-width: 768px) {
    margin: 0 0 20px 0;
    margin-top: 20px;
    v
  }
`;

const Content = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    font-family: 'Roboto';
  }
`;

const SectionHeading = styled.h2`
  color: green;
  font-size:30px;
  margin-bottom: 15px;
  font-family: 'Roboto';
`;

const Description = styled.p`
  margin-bottom: 15px;
  font-family: 'Roboto';
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
`;

interface SkillProps {
  title: string;
  width: string;
}

const Skill: React.FC<SkillProps> = ({ title, width }) => (
  <SkillContainer>
    <SkillTitle>{title}</SkillTitle>
    <SkillBar width={width} />
  </SkillContainer>
);

const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: 'Roboto';
`;

const SkillTitle = styled.span`
  width: 150px;
  font-family: 'Roboto';
`;

const SkillBar = styled.div<{ width: string }>`
  background-color: orange;
  height: 8px;
  width: ${(props) => props.width};
  border-radius: 5px;
  font-family: 'Roboto';
`;
