import styled from "styled-components";
import { motion } from "framer-motion";

export const BackgroundSVG = styled(motion.svg)`
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  margin: auto;
`;

export const BackgroundCirclceSVG = styled(BackgroundSVG)`
  @media (max-width: 807px) {
    display: none;
  }
  z-index: 1;
`;
