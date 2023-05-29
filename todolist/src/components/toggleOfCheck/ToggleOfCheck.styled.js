import styled from "styled-components";

export const ToggleOfCheckStyled = styled.button`

  .toogle__button {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    z-index: 1000;
    transform: rotate(90deg);
  }

  .toogle__button:before {
    content: "❯";
    font-size: 22px;
    color: #e6e6e6;
    padding: 0;
  }

  .toggle__noopasity:before {
    color: #737373;
  }

  .toggle__opasity {
    font-size: 24px;
  }
`;
