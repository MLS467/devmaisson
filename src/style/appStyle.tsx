import styled from "styled-components";
import type { PaletteType } from "../constants/colors";

interface AppContainerProps {
  palette: PaletteType;
}

export const AppContainer = styled.div<AppContainerProps>`
  background-color: ${({ palette }) => palette.background};
  padding: 0 8%;
`;
