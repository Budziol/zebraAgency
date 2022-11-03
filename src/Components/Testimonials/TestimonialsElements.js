import styled from "styled-components";
import { motion } from "framer-motion";

export const TestimonialsSection = styled(motion.section)`
  background-color: var(--testimonials-bg-color);
  margin-top: 10rem;
`;

export const TestimonialsHeader = styled.header`
  padding-top: 2rem;
  padding-bottom: 2rem;

  margin: 0 3.125rem;

  @media (max-width: 768px) {
    margin: 0 1.563rem;
    text-align: center;
  }
`;

export const TestimonialsCardContainer = styled(motion.div)`
  overflow: hidden;

  margin: 0 3.125rem;

  @media (max-width: 768px) {
    margin: 0 1.563rem;
  }
`;

export const TestimonialCarousel = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 1rem;
  justify-items: center;
  min-height: 230px;
`;

export const TestimonialCard = styled.article`
  background-color: var(--bg-color);
  border-radius: 15px;
  padding: 2rem;
  max-width: 450px;
  pointer-events: none;

  @media (max-width: 500px) {
    max-width: 270px;
  }
`;

export const TestimonialCardHeadingContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TestimonialCardHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const TestimonialCardH3 = styled.h3`
  font-size: var(--testimonial-card-h3);
  font-weight: 200;
`;

export const TestimonialCardH4 = styled.h4`
  font-family: "Rubik";
  font-weight: 100;
  font-size: var(--testimonial-card-h4);
  color: var(--secondary-font-color);
`;

export const TestimonialCardImg = styled.img`
  max-width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  margin: 2rem 3.125rem;

  @media (max-width: 768px) {
    margin: 2rem 1.563rem;
  }
`;

export const TestimonialButton = styled.button`
  background-color: ${(props) => props.color};
  width: 50px;
  height: 5px;
  border-radius: 15px;
  border: none;
  overflow: hidden;
  cursor: pointer;
`;

export const TestimonialButtonDiv = styled(motion.div)`
  width: 100%;
  background-color: #fff;
  height: 5px;
  border-radius: 15px;
  border: none;
  pointer-events: none;
`;
