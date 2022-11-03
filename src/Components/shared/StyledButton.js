import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: "Rubik";
  font-weight: 200;
  font-size: 1rem;
  border-radius: var(--button-border-radius);
  background-color: var(--brand-color);
  width: 140px;
  height: 45px;
  cursor: pointer;
  border: none;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
  }
`;
