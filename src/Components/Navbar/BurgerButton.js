import styled from "styled-components";

export const BurgerButton = styled.button`
  display: none;
  background-color: transparent;
  cursor: pointer;
  border: none;
  width: 40px;
  margin-left: auto;
  z-index: 3;

  @media (max-width: 768px) {
    display: block;
  }
`;
