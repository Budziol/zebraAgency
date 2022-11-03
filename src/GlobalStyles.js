import { createGlobalStyle } from "styled-components";
import CreatoBold from "./Components/fonts/CreatoDisplay-Bold.otf";
import CreatoMedium from "./Components/fonts/CreatoDisplay-Medium.otf";
import RubikMedium from "./Components/fonts/Rubik-Medium.ttf";
import RubikRegular from "./Components/fonts/Rubik-Regular.ttf";

export const GlobalStyles = createGlobalStyle`

@font-face{
  font-family: "Creato";
  src: local("Creato"), url(${CreatoMedium}) format("truetype");
  font-weight: 100;
}

@font-face{
  font-family: "Creato";
  src: local("Creato"), url(${CreatoBold}) format("truetype");
  font-weight: 200;
}

@font-face{
  font-family: "Rubik";
  src: local("Rubik"), url(${RubikRegular}) format("truetype");
  font-weight: 100;
}

@font-face{
  font-family: "Rubik";
  src: local("Rubik"), url(${RubikMedium}) format("truetype");
  font-weight: 200;
}

*, ::before, ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --bg-color: #0D0D0D;
    --brand-color: #00B54E;
    --primary-font-color: #fff;
    --secondary-font-color: #C9C9C9;
    --card-bg-color: #181818;
    --testimonials-bg-color: #131313;
    --customers-count-color: #FF865E;

    --logo-fs: 2rem; //32px

    --section-margin: 0 3.125rem;

    --hero-h2-fs: 3.125rem;
    --hero-p-fs: 1rem;
    
    --primary-fs: 1.125rem;
    --secondary-fs: 1rem;

    --nav-margin-top: 1rem;
    --nav-items-padding: 1rem 3.125rem 1rem 3.125rem;

    --button-border-radius: 3.125rem;

    --featured-h2-fs: 1.5rem;

    --marketing-h2-fs: 2.5rem;
    --marketing-card-h3-fs: 1.438rem;

    --works-card-h3-fs: 1.438rem;

    --testimonial-card-h3: 1rem;
    --testimonial-card-h4: 0.813rem;

    --footer-number-fs: 1.125rem;
}

body{
    background-color: var(--bg-color);
    color: var(--primary-font-color);
    font-family: 'Creato';
    overflow-x: hidden;

    &::-webkit-scrollbar-thumb {
    background: var(--brand-color);
    border-radius: 20px;
  }

  &::-webkit-scrollbar {
    width: 15px;
  }
}
`;
