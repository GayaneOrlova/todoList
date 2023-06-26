import styled, { css } from "styled-components";

interface Props {
  isChecked: boolean;
};

export const ToggleOfCheckStyled = styled.button<Props>`

  width: 60px;
  height: 34px;
  font-size: 0;
  position: absolute;
  z-index: 1000;
  transform: rotate(90deg);
  
  &:before {
    content: "❯";
    padding: 0;
    font-size: 22px;
    ${(button) =>
    button.isChecked ?
      css`
        font-size: 24px;
        color:  #737373;
      `
      :
      css`
        color: #e6e6e6;
      `}
    }

`;
