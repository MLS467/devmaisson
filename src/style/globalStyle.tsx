import { createGlobalStyle } from "styled-components";
import { palette } from "../constants/colors";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: ${palette.background};
    font-family: Inter,system-ui,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
