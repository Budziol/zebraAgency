import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  align-items: center;
  justify-items: center;
  margin: 5rem 3.125rem 0;

  @media (max-width: 768px) {
    margin: 5rem 1.563rem 0;
  }
`;

export const FooterHeader = styled(motion.header)`
  max-width: 90%;
  margin-right: auto;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    text-align: center;
    margin-right: 0;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterParagraph = styled.p`
  font-family: "Rubik";
  font-weight: 100;
  font-size: var(--footer-number-fs);
`;

export const NumberParagraph = styled.p`
  font-family: "Rubik";
  font-weight: 200;
  font-size: var(--footer-number-fs);
`;

export const FooterImg = styled(motion.img)`
  max-width: 100%;
  margin-top: auto;
`;
