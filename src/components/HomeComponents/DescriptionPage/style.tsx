import styled from "styled-components";
import { type PaletteType } from "../../../constants/colors";
import { marking } from "../../../style/utilStyle";

interface StyledProps {
  palette: PaletteType;
}

export const DescriptionPageContainer = styled.div<StyledProps>`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.palette.background};
  position: relative;
  ${marking()}

  .descriptionContainer {
    margin: 20px 0;
    span {
      font-size: 16px;
      color: ${(props) => props.palette.fontSeconry};
      text-align: center;
      max-width: 600px;
    }
  }
`;

export const ThemeToggleWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
`;

export const NameContainer = styled.div<StyledProps>`
  h1 {
    font-size: 4rem;
    height: 4rem !important;
    min-height: 4rem !important;
    white-space: pre;
    color: ${(props) => props.palette.fontPrimary};
    font-weight: 700;
  }
`;

export const DeveloperContainer = styled.div<StyledProps>`
  span {
    font-size: 1.8rem;
    color: ${(props) => props.palette.fontSeconry};
  }
`;

export const DescriptionContainer = styled.div<StyledProps>`
  width: 60%;
  text-align: center;
  span {
    font-size: 1.35rem;
    color: ${(props) => props.palette.fontSeconry};
  }
`;
