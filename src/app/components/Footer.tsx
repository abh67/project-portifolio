import React from 'react';
import styled from 'styled-components';

export const Footer: React.FC = () => {
  return (
    <FooterContainer id="contact">
      <h2 style={{color:'red'}}>Let's Design Together</h2>
      <p>Lem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
      </p>
      <ContactForm>
        <input type="email" placeholder="Enter Your Email" />
        <ContactButton>Contact Me</ContactButton>
      </ContactForm>
      <FooterNav>
        <a href="#about">About Me</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </FooterNav>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 40px 20px;
  background-color: #f8f8f8;
  text-align: center;
  font-family: 'Roboto';

  h2 {
    margin-bottom: 20px;
    font-size:20px;
    font-family: 'Roboto';
  }

  p {
    margin-bottom: 20px;
    color: black;
    font-family: 'Roboto';
  }
`;

const ContactForm = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-family: 'Roboto';

  input {
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    width: 300px;
    margin-right: 10px;
    font-family: 'Roboto';
  }
`;

const ContactButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Roboto';
`;

const FooterNav = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Roboto';

  a {
    margin: 0 10px;
    text-decoration: none;
    color: black;
    font-family: 'Roboto';
  }
`;

