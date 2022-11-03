import { AnimatePresence } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyledSecondH2 } from "../shared/StyledH2";
import { StyledParagraph } from "../shared/StyledParagraph";
import {
  ButtonContainer,
  TestimonialButton,
  TestimonialButtonDiv,
  TestimonialCard,
  TestimonialCardH3,
  TestimonialCardH4,
  TestimonialCardHeadingContainer,
  TestimonialCardHeadingWrapper,
  TestimonialCardImg,
  TestimonialCarousel,
  TestimonialsCardContainer,
  TestimonialsHeader,
  TestimonialsSection,
} from "./TestimonialsElements";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function Testimonials() {
  const [cardsIndex, setCardsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cardsIndex >= 2) {
        setCardsIndex(0);
      } else {
        setCardsIndex((prev) => prev + 1);
      }
    }, 10000);

    return () => {
      if (interval) clearInterval(interval);
    };
  });

  return (
    <TestimonialsSection
      id="testimonials"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <TestimonialsHeader>
        <StyledSecondH2>Testimonials</StyledSecondH2>
      </TestimonialsHeader>
      <TestimonialsCardContainer>
        <AnimatePresence mode="wait">
          {cardsIndex === 0 && (
            <TestimonialCarousel
              key="1"
              initial={{ x: "100vw" }}
              animate={{ x: 0, transition: { duration: 1 } }}
              exit={{ x: "-200vw", transition: { duration: 1 } }}
            >
              <TestimonialCard>
                <TestimonialCardHeadingContainer>
                  <TestimonialCardImg
                    src="./img/testimonialsAvatars/avatar1.png"
                    alt="first avatar"
                  />
                  <TestimonialCardHeadingWrapper>
                    <TestimonialCardH3>Jack Jones</TestimonialCardH3>
                    <TestimonialCardH4>Founder, Alpha Group</TestimonialCardH4>
                  </TestimonialCardHeadingWrapper>
                </TestimonialCardHeadingContainer>
                <StyledParagraph>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr
                </StyledParagraph>
              </TestimonialCard>
              <TestimonialCard>
                <TestimonialCardHeadingContainer>
                  <TestimonialCardImg
                    src="./img/testimonialsAvatars/avatar2.png"
                    alt="second avatar"
                  />
                  <TestimonialCardHeadingWrapper>
                    <TestimonialCardH3>Don Joe</TestimonialCardH3>
                    <TestimonialCardH4>Founder, Alpha Group</TestimonialCardH4>
                  </TestimonialCardHeadingWrapper>
                </TestimonialCardHeadingContainer>
                <StyledParagraph>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr
                </StyledParagraph>
              </TestimonialCard>
              <TestimonialCard>
                <TestimonialCardHeadingContainer>
                  <TestimonialCardImg
                    src="./img/testimonialsAvatars/avatar3.png"
                    alt="third avatar"
                  />
                  <TestimonialCardHeadingWrapper>
                    <TestimonialCardH3>Zoe Mantis</TestimonialCardH3>
                    <TestimonialCardH4>Founder, Alpha Group</TestimonialCardH4>
                  </TestimonialCardHeadingWrapper>
                </TestimonialCardHeadingContainer>
                <StyledParagraph>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr
                </StyledParagraph>
              </TestimonialCard>
            </TestimonialCarousel>
          )}
          {cardsIndex === 1 && (
            <TestimonialCarousel
              key="2"
              initial={{ x: "100vw" }}
              animate={{ x: 0, transition: { duration: 1 } }}
              exit={{ x: "-200vw", transition: { duration: 1 } }}
            >
              <TestimonialCard>
                <TestimonialCardHeadingContainer>
                  <TestimonialCardImg
                    src="./img/testimonialsAvatars/avatar3.png"
                    alt="third avatar"
                  />
                  <TestimonialCardHeadingWrapper>
                    <TestimonialCardH3>Zoe Mantis</TestimonialCardH3>
                    <TestimonialCardH4>Founder, Alpha Group</TestimonialCardH4>
                  </TestimonialCardHeadingWrapper>
                </TestimonialCardHeadingContainer>
                <StyledParagraph>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr
                </StyledParagraph>
              </TestimonialCard>
              <TestimonialCard>
                <TestimonialCardHeadingContainer>
                  <TestimonialCardImg
                    src="./img/testimonialsAvatars/avatar2.png"
                    alt="second avatar"
                  />
                  <TestimonialCardHeadingWrapper>
                    <TestimonialCardH3>Don Joe</TestimonialCardH3>
                    <TestimonialCardH4>Founder, Alpha Group</TestimonialCardH4>
                  </TestimonialCardHeadingWrapper>
                </TestimonialCardHeadingContainer>
                <StyledParagraph>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr
                </StyledParagraph>
              </TestimonialCard>
              <TestimonialCard>
                <TestimonialCardHeadingContainer>
                  <TestimonialCardImg
                    src="./img/testimonialsAvatars/avatar2.png"
                    alt="second avatar"
                  />
                  <TestimonialCardHeadingWrapper>
                    <TestimonialCardH3>Don Joe</TestimonialCardH3>
                    <TestimonialCardH4>Founder, Alpha Group</TestimonialCardH4>
                  </TestimonialCardHeadingWrapper>
                </TestimonialCardHeadingContainer>
                <StyledParagraph>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr
                </StyledParagraph>
              </TestimonialCard>
            </TestimonialCarousel>
          )}
          {cardsIndex === 2 && (
            <TestimonialCarousel
              key="3"
              initial={{ x: "100vw" }}
              animate={{ x: 0, transition: { duration: 1 } }}
              exit={{ x: "-200vw", transition: { duration: 1 } }}
            >
              <TestimonialCard>
                <TestimonialCardHeadingContainer>
                  <TestimonialCardImg
                    src="./img/testimonialsAvatars/avatar3.png"
                    alt="third avatar"
                  />
                  <TestimonialCardHeadingWrapper>
                    <TestimonialCardH3>Zoe Mantis</TestimonialCardH3>
                    <TestimonialCardH4>Founder, Alpha Group</TestimonialCardH4>
                  </TestimonialCardHeadingWrapper>
                </TestimonialCardHeadingContainer>
                <StyledParagraph>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr
                </StyledParagraph>
              </TestimonialCard>
              <TestimonialCard>
                <TestimonialCardHeadingContainer>
                  <TestimonialCardImg
                    src="./img/testimonialsAvatars/avatar2.png"
                    alt="second avatar"
                  />
                  <TestimonialCardHeadingWrapper>
                    <TestimonialCardH3>Don Joe</TestimonialCardH3>
                    <TestimonialCardH4>Founder, Alpha Group</TestimonialCardH4>
                  </TestimonialCardHeadingWrapper>
                </TestimonialCardHeadingContainer>
                <StyledParagraph>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr
                </StyledParagraph>
              </TestimonialCard>
              <TestimonialCard>
                <TestimonialCardHeadingContainer>
                  <TestimonialCardImg
                    src="./img/testimonialsAvatars/avatar2.png"
                    alt="second avatar"
                  />
                  <TestimonialCardHeadingWrapper>
                    <TestimonialCardH3>Don Joe</TestimonialCardH3>
                    <TestimonialCardH4>Founder, Alpha Group</TestimonialCardH4>
                  </TestimonialCardHeadingWrapper>
                </TestimonialCardHeadingContainer>
                <StyledParagraph>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr
                </StyledParagraph>
              </TestimonialCard>
            </TestimonialCarousel>
          )}
        </AnimatePresence>
        <ButtonContainer>
          <TestimonialButton color={"#3A3A3A"} onClick={() => setCardsIndex(0)}>
            <AnimatePresence mode="wait">
              {cardsIndex === 0 && (
                <TestimonialButtonDiv
                  key="4"
                  initial={{ x: 0 }}
                  exit={{ x: "100vw", transition: { duration: 2 } }}
                ></TestimonialButtonDiv>
              )}
            </AnimatePresence>
          </TestimonialButton>
          <TestimonialButton color={"#3A3A3A"} onClick={() => setCardsIndex(1)}>
            <AnimatePresence mode="wait">
              {cardsIndex === 1 && (
                <TestimonialButtonDiv
                  key="5"
                  initial={{ x: 0 }}
                  exit={{ x: "100vw", transition: { duration: 2 } }}
                ></TestimonialButtonDiv>
              )}
            </AnimatePresence>
          </TestimonialButton>
          <TestimonialButton color={"#3A3A3A"} onClick={() => setCardsIndex(2)}>
            <AnimatePresence mode="wait">
              {cardsIndex === 2 && (
                <TestimonialButtonDiv
                  key="6"
                  initial={{ x: 0 }}
                  exit={{ x: "100vw", transition: { duration: 2 } }}
                ></TestimonialButtonDiv>
              )}
            </AnimatePresence>
          </TestimonialButton>
        </ButtonContainer>
      </TestimonialsCardContainer>
    </TestimonialsSection>
  );
}

export default Testimonials;
