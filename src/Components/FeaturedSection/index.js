import React from "react";
import {
  FeaturedH2,
  CardContainer,
  FeaturedCard,
  FeaturedCardImage,
  FeaturedHeader,
  FeaturedSection,
  FeaturedH2Second,
  Line,
} from "./FeaturedElements";

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

function Featured() {
  return (
    <FeaturedSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1.3 } }}
      viewport={{ once: true }}
    >
      <FeaturedHeader>
        <FeaturedH2>Featured in</FeaturedH2>
        <Line></Line>
        <FeaturedH2Second>Our Certification</FeaturedH2Second>
      </FeaturedHeader>
      <CardContainer
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <FeaturedCard variants={item}>
          <FeaturedCardImage
            src="./img/featuredLogos/asus-logo.png"
            alt="asus logo"
          ></FeaturedCardImage>
        </FeaturedCard>
        <FeaturedCard variants={item}>
          <FeaturedCardImage
            src="./img/featuredLogos/allianz.png"
            alt="allianz logo"
          ></FeaturedCardImage>
        </FeaturedCard>
        <FeaturedCard variants={item}>
          <FeaturedCardImage
            src="./img/featuredLogos/chase.png"
            alt="chase logo"
          ></FeaturedCardImage>
        </FeaturedCard>
        <FeaturedCard variants={item}>
          <FeaturedCardImage
            src="./img/featuredLogos/new-york-times.png"
            alt="new york times logo"
          ></FeaturedCardImage>
        </FeaturedCard>
        <FeaturedCard variants={item}>
          <FeaturedCardImage
            src="./img/featuredLogos/linkedin.png"
            alt="linkedin logo"
          ></FeaturedCardImage>
        </FeaturedCard>
      </CardContainer>
    </FeaturedSection>
  );
}

export default Featured;
