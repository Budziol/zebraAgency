import React from "react";
import { StyledButton } from "../shared/StyledButton";
import { StyledH2 } from "../shared/StyledH2";
import { StyledParagraph } from "../shared/StyledParagraph";
import {
  ContactContainer,
  FooterHeader,
  FooterImg,
  FooterParagraph,
  FooterSection,
  NumberParagraph,
} from "./FooterElements";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const img = {
  hidden: { x: "100vw" },
  show: { x: 0, transition: { duration: 0.5 } },
};

const header = {
  hidden: { x: "-100vw" },
  show: { x: 0, transition: { duration: 0.5 } },
};

function Footer() {
  return (
    <FooterSection
      id="footer"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <FooterHeader variants={header}>
        <StyledH2>Creative Digital Marketing Agency</StyledH2>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </StyledParagraph>
        <ContactContainer>
          <StyledButton>Contact Us</StyledButton>
          <FooterParagraph>Or</FooterParagraph>
          <NumberParagraph>123-123-123</NumberParagraph>
        </ContactContainer>
      </FooterHeader>
      <FooterImg
        variants={img}
        src="./img/footerImg/footerImg.png"
        alt="person"
      />
    </FooterSection>
  );
}

export default Footer;
