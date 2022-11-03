import React from "react";
import { useState } from "react";
import { StyledButton } from "../shared/StyledButton";
import { BurgerButton } from "./BurgerButton";
import BurgerIcon from "./BurgerIcon";
import {
  StyledH1,
  StyledItem,
  StyledLink,
  StyledLinkFirst,
  StyledLinkLogo,
  StyledLinkSecond,
  StyledList,
  StyledNav,
  StyledSpan,
} from "./NavbarElements";

const variants = {
  open: { top: 0, transition: { ease: "easeOut", duration: 0.6 } },
  closed: { top: "-100vh", transition: { ease: "easeOut", duration: 0.6 } },
};

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <StyledNav>
      <StyledH1>
        <StyledLinkLogo to="hero" smooth={true} offset={-220} duration={500}>
          Ze<StyledSpan>b</StyledSpan>ra
        </StyledLinkLogo>
      </StyledH1>
      <BurgerButton onClick={() => setOpenNav(!openNav)}>
        <BurgerIcon />
      </BurgerButton>
      <StyledList animate={openNav ? "open" : "closed"} variants={variants}>
        <StyledLinkFirst
          to="marketing"
          smooth={true}
          offset={-220}
          duration={500}
          onClick={() => setOpenNav(false)}
        >
          <StyledItem>Services</StyledItem>
        </StyledLinkFirst>
        <StyledLink
          to="whyUs"
          smooth={true}
          offset={-220}
          duration={500}
          onClick={() => setOpenNav(false)}
        >
          <StyledItem>About Us</StyledItem>
        </StyledLink>
        <StyledLink
          to="latestWork"
          smooth={true}
          offset={-220}
          duration={500}
          onClick={() => setOpenNav(false)}
        >
          <StyledItem>Latest Work</StyledItem>
        </StyledLink>
        <StyledLinkSecond
          to="testimonials"
          smooth={true}
          offset={-220}
          duration={500}
          onClick={() => setOpenNav(false)}
        >
          <StyledItem>Testimonials</StyledItem>
        </StyledLinkSecond>
        <StyledLink
          to="footer"
          smooth={true}
          offset={-220}
          duration={500}
          onClick={() => setOpenNav(false)}
        >
          <StyledItem>
            <StyledButton>Contact Us</StyledButton>
          </StyledItem>
        </StyledLink>
      </StyledList>
    </StyledNav>
  );
}

export default Nav;
