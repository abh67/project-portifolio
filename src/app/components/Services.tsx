import React from 'react';
import styled from 'styled-components';

export const Services: React.FC = () => {
  return (
    <ServicesContainer id="services">
      <h2>Services</h2>
      <ServiceList>
        <ServiceCard>
          <Icon>UI/UX</Icon>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.</p>
        </ServiceCard>
        <ServiceCard>
          <Icon>Web Design</Icon>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.</p>
        </ServiceCard>
        <ServiceCard>
          <Icon>App Design</Icon>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.</p>
        </ServiceCard>
        <ServiceCard>
          <Icon>Graphic Design</Icon>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.</p>
        </ServiceCard>
      </ServiceList>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  padding: 40px 20px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    color:white;
    font-size:35px;
  }
   
  p{
    color:white;
  }
`;

const ServiceList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ServiceCard = styled.div`
  flex: 1 1 22%;
  margin: 10px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: orange;
`;
