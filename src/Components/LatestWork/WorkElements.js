import styled from "styled-components";
import { motion } from "framer-motion";

export const WorksSection = styled(motion.section)`
  margin: 10rem 3.125rem;

  @media (max-width: 768px) {
    margin: 0 1.563rem;
  }
`;

export const WorksHeader = styled.header`
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const CardContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  column-gap: 10rem;

  @media (max-width: 1330px) {
    article:last-child {
      grid-column: 1/3;
      margin: auto;
    }
  }
  @media (max-width: 800px) {
    justify-items: center;
    article:last-child {
      grid-column: 1/2;
      margin: 0;
    }
  }
`;

export const WorksCard = styled(motion.article)`
  display: flex;
  flex-direction: column;
  max-width: 450px;
`;

export const WorksCardH3 = styled.h3`
  font-size: var(--works-card-h3-fs);
  margin-top: 2rem;
`;

export const WorksCardImg = styled.img`
  max-width: 100%;
`;
