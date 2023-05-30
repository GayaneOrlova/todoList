import styled from "styled-components";

export const ToDoListStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: ${({theme}) => theme.borderStyles.line};
  border-color: ${({theme}) => theme.colors.border};

  .todo__list-item {
    position: relative;
    font-size: 24px;
    border-bottom: ${({theme}) => theme.borderStyles.line};
    border-color: ${({theme}) => theme.colors.border};
    height: 34px;
  }
`;
