'use client';

import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Arial, sans-serif';
  color: #333;
  line-height: 1.6;
`;

export default App;
