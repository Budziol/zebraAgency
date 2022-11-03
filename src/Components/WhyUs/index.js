import React, { useRef } from "react";
import { StyledButton } from "../shared/StyledButton";
import { StyledSecondH2 } from "../shared/StyledH2";
import { StyledParagraph } from "../shared/StyledParagraph";
import Counter from "./Counter";
import {
  CustomersContainer,
  CustomersNumberDiv,
  CustomersWrapper,
  ImgWrapper,
  WhyUsH3,
  WhyUsHeader,
  CustomersImg,
  WhyUSImg,
  WhyUsSection,
} from "./WhyUsElements";
import { useInView } from "framer-motion";

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
  hidden: { x: "-100vw" },
  show: { x: 0, transition: { duration: 1 } },
};

const customers = {
  hidden: { y: "20vh" },
  show: { y: 0, transition: { duration: 1 } },
};

const header = {
  hidden: { x: "100vw" },
  show: { x: 0, transition: { duration: 1 } },
};

function WhyUS() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <WhyUsSection
      id="whyUs"
      ref={ref}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <ImgWrapper>
        <WhyUSImg
          variants={img}
          src="./img/whyUsImg/whyUsImg.png"
          alt="our customers"
        />
        <CustomersWrapper variants={customers}>
          <WhyUsH3>Our Customers</WhyUsH3>
          <CustomersContainer>
            <CustomersImg
              src="./img/whyUsImg/customersImg.png"
              alt="customers avatars"
            />
            <CustomersNumberDiv>
              +<Counter isInView={isInView}></Counter>K
            </CustomersNumberDiv>
          </CustomersContainer>
        </CustomersWrapper>
      </ImgWrapper>
      <WhyUsHeader variants={header}>
        <StyledSecondH2>Why you should choose Zebra</StyledSecondH2>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr
        </StyledParagraph>
        <StyledButton>Contact Us</StyledButton>
      </WhyUsHeader>
    </WhyUsSection>
  );
}

export default WhyUS;
