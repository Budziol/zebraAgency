import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: 6rem 3.125rem;

  @media (max-width: 768px) {
    text-align: center;
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
    margin: 0 1.563rem;
  }
`;

export const StyledHeader = styled(motion.header)`
  width: 70%;
  z-index: 2;

  @media (max-width: 768px) {
    margin: auto;
    width: 100%;
  }
`;

export const HeroImageContainer = styled(motion.div)`
  position: relative;
  text-align: center;
`;

export const HeroImage = styled.img`
  max-width: 100%;

  @media (max-width: 768px) {
    max-width: 75%;
  }
`;
