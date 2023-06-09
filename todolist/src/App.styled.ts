import styled from "styled-components";

export const AppStyled = styled.section`


    background: #fff;
    position: relative;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);

.visible {
    display: flex;    
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    gap: 98px;
    opacity: 0.3;
    white-space: nowrap;
}

.visible button {
    margin: 0;
    padding: 0;
    opacity: inherit;

}

.invisible button {
    opacity: 1;
}

button {
    border: none;
    background-color: transparent;
}

.input {
    display: flex;
    align-items: center;
    border-bottom: ${({theme}) => theme.borderStyles.line};
    border-color: ${({ theme }) => theme.colors.border};
    position: relative;
}
`