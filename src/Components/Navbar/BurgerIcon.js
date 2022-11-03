import React from "react";
import { StyledSvg } from "./StyledSvg";

function BurgerIcon() {
  return (
    <StyledSvg
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2"
        y1="19"
        x2="38"
        y2="19"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="32"
        x2="38"
        y2="32"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="7"
        x2="38"
        y2="7"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
}

export default BurgerIcon;
