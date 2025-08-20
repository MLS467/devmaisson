import styled from "styled-components";
import type { PaletteType } from "../../constants/colors";

export const HeaderPagesContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 2rem;
`;

export const TimelineMainTitle = styled.span<{
  palette: PaletteType;
}>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ palette }) => palette.fontPrimary};
  margin-bottom: 1rem;
`;

export const TimelineMainDescription = styled.p<{
  palette: PaletteType;
}>`
  padding: 1%;
  font-size: 1.125rem;
  color: ${({ palette }) => palette.fontSeconry};
  margin: 0;
  width: 800px;
  max-width: 800px;
  margin: 0 auto;
`;
