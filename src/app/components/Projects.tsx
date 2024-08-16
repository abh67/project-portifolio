import React from 'react';
import styled from 'styled-components';
import aboutImage from './OIP.jpg';

export const Projects: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>My Projects</h2>
      <FilterButtons>
        <FilterButton>All</FilterButton>
        <FilterButton>UI/UX</FilterButton>
        <FilterButton>Web Design</FilterButton>
        <FilterButton>App Design</FilterButton>
        <FilterButton>Graphic Design</FilterButton>
      </FilterButtons>
      <ProjectList>
        <ProjectCard>
          <img src={aboutImage.src} alt="Project" />
          <h3 style={{ color: 'white' }}>AirCalling Landing Page Design</h3>
        </ProjectCard>
        <ProjectCard>
          <img src={aboutImage.src} alt="Project" />
          <h3 style={{ color: 'white' }}>Business Landing Page Design</h3>
        </ProjectCard>
        <ProjectCard>
          <img src={aboutImage.src} alt="Project" />
          <h3 style={{ color: 'white' }}>Ecom Web Page Design</h3>
        </ProjectCard>
      </ProjectList>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
  font-family: 'Roboto';

  h2 {
    margin-bottom: 20px;
    color:white;
    font-size:20px;
    font-family: 'Roboto';
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-family: 'Roboto';
`;

const FilterButton = styled.button`
  background-color: #eee;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Roboto';

  &:hover {
    background-color: orange;
    color: white;
    font-family: 'Roboto';
  }
`;

const ProjectList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: 'Roboto';
`;

const ProjectCard = styled.div`
  flex: 1 1 30%;
  margin: 10px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
  font-family: 'Roboto';

  img {
    max-width: 100%;
    border-radius: 10px;
    font-family: 'Roboto';
  }

  h3 {
    margin-top: 10px;
    font-family: 'Roboto';
  }
`;
