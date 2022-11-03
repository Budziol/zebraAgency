import styled from "styled-components";
import { motion } from "framer-motion";

export const WhyUsSection = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  align-items: center;
  justify-items: center;
  margin: 15rem 3.125rem;

  @media (max-width: 768px) {
    justify-items: center;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin: 15rem 1.563rem;
  }
`;

export const WhyUsHeader = styled(motion.header)`
  width: 65%;
  z-index: 2;

  @media (max-width: 768px) {
    text-align: center;
    grid-row: 1/2;
  }
`;

export const ImgWrapper = styled(motion.div)`
  position: relative;
  width: fit-content;
`;

export const WhyUSImg = styled(motion.img)`
  max-width: 100%;
`;

export const CustomersImg = styled.img`
  max-width: 100%;

  @media (max-width: 768px) {
    max-width: 70%;
  }
`;

export const CustomersWrapper = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 0;

  @media (max-width: 768px) {
    top: 8%;
    width: 45%;
  }
`;

export const WhyUsH3 = styled.h3`
  font-size: 16px;
`;

export const CustomersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const CustomersNumberDiv = styled.p`
  display: flex;
  color: var(--customers-count-color);
`;

export const Number = styled.span`
  color: var(--customers-count-color);
  width: 19px;
`;
