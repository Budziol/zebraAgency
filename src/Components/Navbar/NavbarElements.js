import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  z-index: 999;
  margin: 1rem 3.125rem;
`;

export const StyledH1 = styled.h1`
  font-weight: 100;
  font-size: var(--logo-fs);
  cursor: pointer;
  z-index: 3;
`;

export const StyledList = styled(motion.ul)`
  display: flex;
  list-style-type: none;
  width: 100%;
  align-items: center;
  gap: 6rem;

  @media (max-width: 1130px) {
    gap: 3rem;
  }
  @media (max-width: 890px) {
    gap: 1.3rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-evenly;
    top: 0;
    left: 0;
    height: 100%;
    background-color: var(--bg-color);
  }
`;

export const StyledItem = styled.li``;

export const StyledSpan = styled.span`
  color: var(--brand-color);
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  color: var(--secondary-font-color);
  transition: 0.3s ease;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-thickness: 2px;
    text-decoration-color: var(--brand-color);
    color: var(--primary-font-color);
  }
`;

export const StyledLinkLogo = styled(StyledLink)`
  color: var(--primary-font-color);
`;

export const StyledLinkFirst = styled(StyledLink)`
  margin-left: auto;
  padding-left: 1.3rem;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 0;
    padding: 1rem;
  }
`;

export const StyledLinkSecond = styled(StyledLink)`
  margin-right: auto;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;
