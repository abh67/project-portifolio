import React from 'react';
import styled from 'styled-components';
import aboutImage from './Group.jpg'; 
import { Inter } from 'next/font/google'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavBar>
        <Logo>Mumair</Logo>
        <NavLinks>
          <a href="#about">About Me</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <DownloadButton style={{}}>Download CV</DownloadButton>
        </NavLinks>
      </NavBar>
      <HeroSection>
        <HeroText>
          <h1>Hi, I am Muhammad Umair</h1>
          <h2>UI & UX Designer</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          </p>
          <HireMeButton>Hire Me</HireMeButton>
        </HeroText>
        <HeroImage src={aboutImage.src} alt="Muhammad Umair" />
      </HeroSection>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding: 20px;
  font-family: 'Roboto';
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:white;
  font-family: 'Roboto';
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto';
`;

const NavLinks = styled.div`
  a {
    margin: 0 10px;
    text-decoration: none;
    color: white;
    font-family:Roboto;
  }
`;

const DownloadButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Roboto';
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  font-family: 'Roboto';
`;

const HeroText = styled.div`
  max-width: 50%;

  h1, h2 {
    margin: 0;
    font-size:45px;
    color: white;
    font-family:Roboto;
  }

  p {
    margin-top: 20px;
    color: grey;
    font-size:20px;
    font-family:Roboto;
  }
`;

const HireMeButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-family:Roboto;
`;

const HeroImage = styled.img`
  max-width: 300px;
  border-radius: 50%;
  overflow: hidden;
  font-family: 'Roboto';
`;

