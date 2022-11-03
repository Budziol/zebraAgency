import styled from "styled-components";
import { motion } from "framer-motion";

export const FeaturedSection = styled(motion.section)`
  margin: 11rem 3.125rem;

  @media (max-width: 768px) {
    margin: 3rem 1.563rem;
  }
`;

export const FeaturedHeader = styled.header`
  display: flex;
  column-gap: 1rem;

  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
  }
`;

export const FeaturedH2 = styled.h2`
  font-weight: 200;
  font-size: var(--featured-h2-fs);
  letter-spacing: 1px;
`;

export const Line = styled.span`
  border-left: 2px solid var(--secondary-font-color);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FeaturedH2Second = styled(FeaturedH2)`
  color: var(--secondary-font-color);
`;

export const CardContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  margin-top: 2rem;
  column-gap: 2.5rem;
  row-gap: 1.563rem;
  justify-items: center;
`;

export const FeaturedCard = styled(motion.article)`
  background-color: var(--card-bg-color);
  border-radius: 7px;
  min-width: 270px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeaturedCardImage = styled.img``;
