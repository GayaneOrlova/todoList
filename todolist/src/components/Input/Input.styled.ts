import styled from "styled-components";

export const InputStyled = styled.form`
  .new__todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
  }

  .new__todo,
  .edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
  }
  
  .new__todo:focus-visible {
    outline: none;
  }

  .new__todo::placeholder {
    font-style: italic;
    opacity: 0.3;
  }
`;
