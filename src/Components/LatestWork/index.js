import React from "react";
import { StyledSecondH2 } from "../shared/StyledH2";
import { StyledParagraph } from "../shared/StyledParagraph";
import {
  CardContainer,
  WorksCard,
  WorksCardH3,
  WorksCardImg,
  WorksHeader,
  WorksSection,
} from "./WorkElements";

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

function LatestWork() {
  return (
    <WorksSection
      id="latestWork"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <WorksHeader>
        <StyledSecondH2>Our Latest Work</StyledSecondH2>
      </WorksHeader>
      <CardContainer
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <WorksCard variants={item}>
          <WorksCardImg
            src="./img/worksImg/WorksImage1.png"
            alt="Artem"
          ></WorksCardImg>
          <WorksCardH3>Artem - Digital Marketing Campaign</WorksCardH3>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </StyledParagraph>
        </WorksCard>
        <WorksCard variants={item}>
          <WorksCardImg
            src="./img/worksImg/WorksImage2.png"
            alt="Mayhem"
          ></WorksCardImg>
          <WorksCardH3>Mayhem - Search Engine Optimization</WorksCardH3>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </StyledParagraph>
        </WorksCard>
        <WorksCard variants={item}>
          <WorksCardImg
            src="./img/worksImg/WorksImage3.png"
            alt="Basic"
          ></WorksCardImg>
          <WorksCardH3>Basic - Pay Per Click (PPC)</WorksCardH3>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </StyledParagraph>
        </WorksCard>
      </CardContainer>
    </WorksSection>
  );
}

export default LatestWork;
