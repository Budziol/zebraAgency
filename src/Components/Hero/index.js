import React from "react";
import BackgroundCircle1 from "../backgroundImages/BackgroundCircle1";
import BackgroundCircle2 from "../backgroundImages/BackgroundCircle2";
import { StyledH2 } from "../shared/StyledH2";
import { StyledParagraph } from "../shared/StyledParagraph";
import {
  HeroImage,
  HeroImageContainer,
  HeroSection,
  StyledHeader,
} from "./HeroElements";
import {
  Square1,
  Square2,
  Square3,
  Square4,
} from "../backgroundImages/Squares";
import { FacebookIcon, GoogleIcon, SlackIcon } from "../backgroundImages/Icons";
import { StyledButton } from "../shared/StyledButton";

function Hero() {
  return (
    <HeroSection
      id="hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1.3 } }}
      viewport={{ once: true }}
    >
      <StyledHeader
        initial={{ x: "-100vh" }}
        animate={{ x: 0, transition: { duration: 1 } }}
      >
        <StyledH2>Creative Digital Marketing Agency</StyledH2>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </StyledParagraph>
        <StyledButton>Contact Us</StyledButton>
      </StyledHeader>
      <HeroImageContainer
        initial={{ x: "100vh" }}
        animate={{ x: 0, transition: { duration: 1 } }}
      >
        <Square1
          top={"7%"}
          left={"20%"}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, repeatDelay: 4 }}
        />
        <Square2
          top={"6%"}
          right={"10%"}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 10, repeatDelay: 2 }}
        />
        <GoogleIcon
          animate={{ rotate: [-25, 25, -25] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <SlackIcon
          animate={{ scale: [1, 0.8, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <Square3
          bottom={"40%"}
          left={"0"}
          animate={{ rotate: [360, -360] }}
          transition={{ repeat: Infinity, duration: 5, repeatDelay: 1 }}
        />
        <Square4
          bottom={"5%"}
          right={"10%"}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, repeatDelay: 1 }}
        />
        <FacebookIcon
          animate={{ scale: [1, 0.8, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <div>
          <HeroImage src="./img/heroImage/Image.png" alt="person"></HeroImage>
        </div>
      </HeroImageContainer>
      <BackgroundCircle1 />
      <BackgroundCircle2 />
    </HeroSection>
  );
}

export default Hero;
