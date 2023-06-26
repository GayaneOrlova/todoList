import { createGlobalStyle } from "styled-components";

// import {theme} from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${p => p.theme.font.size};
    font-family: ${p => p.theme.font.family};
    background: #f5f5f5;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    font-weight: 300;
  }
`

export default GlobalStyle