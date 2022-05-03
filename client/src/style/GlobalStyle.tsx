import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'IBMPlexSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  body {
    width: 100vw;
    height: 100vh;
    background-color: #254EDB;
    font-family: 'IBMPlexSansKR-Regular';
    margin: 0;
  }
`;

export default GlobalStyle;