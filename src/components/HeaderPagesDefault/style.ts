import styled from "styled-components";
import type { PaletteType } from "../../constants/colors";

export const HeaderPagesContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 2rem;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    margin-top: 1.5rem;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
    margin-top: 1rem;
    padding: 0 5px;
  }
`;

export const TimelineMainTitle = styled.span<{
  palette: PaletteType;
}>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ palette }) => palette.fontPrimary};
  margin-bottom: 1rem;
  display: block;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }

  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

export const TimelineMainDescription = styled.p<{
  palette: PaletteType;
}>`
  padding: 1%;
  font-size: 1.125rem;
  color: ${({ palette }) => palette.fontSeconry};
  margin: 0 auto;
  width: 100%;
  line-height: 1.6;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0;
    white-space: normal;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
