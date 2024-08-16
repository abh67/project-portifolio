import React from 'react';
import styled from 'styled-components';
import testimonialImage from './Group.jpg'; // Adjusted path
import testimonialImage2 from './photo-1633332755192-727a05c4013d.jpg';

export const Testimonials: React.FC = () => {
  return (
    <>
  
      <TestimonialsContainer id="testimonials">
        <h2>Testimonials</h2>
        <TestimonialList>
          <TestimonialCard style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src={testimonialImage2.src} alt="Person" />
            <p style={{ color: 'red' }}>A gift from us</p>
            <h4>Name</h4>
            <p>CEO</p>
          </TestimonialCard>
          {/* Add more testimonial cards as needed */}
        </TestimonialList>
      </TestimonialsContainer>
    </>
  );
};



const TestimonialsContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
  font-family:'Roboto';

  h2 {
    margin-bottom: 20px;
    color: white;
    font-size: 20px;
  }
`;

const TestimonialList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TestimonialCard = styled.div`
  flex: 1 1 30%;
  margin: 10px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  text-align: center;
  background-color: #333; /* Example background color, you can customize */

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  h4 {
    margin-top: 10px;
    color: white;
  }

  p {
    color: white;
  }
`;

export default Testimonials;
