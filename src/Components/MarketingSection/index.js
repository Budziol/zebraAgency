import React from "react";
import MarketingBackgroundCircle from "../backgroundImages/MarketingBackgroundCircle";
import { Square1, Square2, Square4 } from "../backgroundImages/Squares";
import { StyledSecondH2 } from "../shared/StyledH2";
import { StyledParagraph } from "../shared/StyledParagraph";
import {
  MarketingCard,
  MarketingCardH3,
  MarketingCardImg,
  MarketingHeader,
  MarketingSection,
} from "./MarketingElements";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: "50vh" },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const header = {
  hidden: { x: "100vh" },
  show: { x: 0, transition: { duration: 0.5 } },
};

function Marketing() {
  return (
    <MarketingSection
      id="marketing"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <MarketingCard variants={item} row={"1/2"}>
        <MarketingCardImg
          src="./img/marketingIcons/charts.png"
          alt="charts icon"
        ></MarketingCardImg>
        <MarketingCardH3>Search Engine Optimization</MarketingCardH3>
      </MarketingCard>
      <MarketingCard variants={item} row={"1/2"}>
        <MarketingCardImg
          src="./img/marketingIcons/code.png"
          alt="code icon"
        ></MarketingCardImg>
        <MarketingCardH3>Website design & Development</MarketingCardH3>
      </MarketingCard>
      <MarketingHeader variants={header}>
        <StyledSecondH2>Our Digital Marketing Expertise</StyledSecondH2>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </StyledParagraph>
      </MarketingHeader>
      <MarketingCard variants={item}>
        <MarketingCardImg
          src="./img/marketingIcons/video.png"
          alt="video icon"
        ></MarketingCardImg>
        <MarketingCardH3>Video editing & Production</MarketingCardH3>
      </MarketingCard>
      <MarketingCard variants={item}>
        <MarketingCardImg
          src="./img/marketingIcons/writing.png"
          alt="writing icon"
        ></MarketingCardImg>
        <MarketingCardH3>Content Writing</MarketingCardH3>
      </MarketingCard>
      <MarketingCard variants={item}>
        <MarketingCardImg
          src="./img/marketingIcons/media.png"
          alt="media icon"
        ></MarketingCardImg>
        <MarketingCardH3>Social Media Marketing</MarketingCardH3>
      </MarketingCard>
      <MarketingCard variants={item}>
        <MarketingCardImg
          src="./img/marketingIcons/click.png"
          alt="click icon"
        ></MarketingCardImg>
        <MarketingCardH3>Pay Per Click (PPC)</MarketingCardH3>
      </MarketingCard>
      <MarketingBackgroundCircle />
      <Square2
        bottom={"-10%"}
        right={"30%"}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, repeatDelay: 1 }}
      />
      <Square4
        top={"45%"}
        right={"49%"}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <Square1
        top={"0"}
        right={"5%"}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, repeatDelay: 2 }}
      />
    </MarketingSection>
  );
}

export default Marketing;
