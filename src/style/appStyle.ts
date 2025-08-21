import styled from "styled-components";
import type { PaletteType } from "../constants/colors";

interface AppContainerProps {
  $palette: PaletteType;
}

export const AppContainer = styled.div<AppContainerProps>`
  background-color: ${({ $palette }) => $palette.background};
  padding: 0 8%;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 0 4%;
  }

  @media (max-width: 480px) {
    padding: 0 2%;
  }

  @media (min-width: 1400px) {
    padding: 0 10%;
  }

  @media (min-width: 1920px) {
    padding: 0 15%;
    max-width: 1800px;
    margin: 0 auto;
  }
`;
