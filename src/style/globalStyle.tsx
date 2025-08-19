import { createGlobalStyle } from "styled-components";
import { type PaletteType } from "../constants/colors";

interface GlobalStyleProps {
  palette: PaletteType;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.palette.background};
    color: ${(props) => props.palette.fontPrimary};
    font-family: Inter, system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
