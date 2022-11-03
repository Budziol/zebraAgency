import styled from "styled-components";
import { motion } from "framer-motion";

export const MarketingSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(270px, 330px), 1fr));
  position: relative;
  justify-items: center;
  align-items: center;
  gap: 2rem;
  margin: 10rem 3.125rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 10rem 1.563rem;
  }
`;

export const MarketingHeader = styled(motion.header)`
  width: 100%;
  grid-column: 3/5;
  @media (max-width: 1610px) {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  @media (max-width: 768px) {
    text-align: center;
    grid-row: 1/2;
  }
`;

export const MarketingCard = styled(motion.article)`
  background-color: var(--card-bg-color);
  width: 100%;
  height: 200px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  z-index: 2;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const MarketingCardImg = styled.img`
  margin-left: 2.5rem;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const MarketingCardH3 = styled.h3`
  font-family: "Rubik";
  font-weight: 200;
  font-size: var(--marketing-card-h3-fs);
  margin-left: 2.5rem;
  @media (max-width: 768px) {
    margin: 0;
    text-align: center;
  }
`;
