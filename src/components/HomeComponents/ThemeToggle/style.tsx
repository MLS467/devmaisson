import styled from "styled-components";
import { type PaletteType } from "../../../constants/colors";

interface StyledProps {
  palette: PaletteType;
}

export const ThemeButton = styled.button<StyledProps>`
  background: ${(props) => props.palette.background};
  border: 2px solid ${(props) => props.palette.fontSeconry};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${(props) => props.palette.fontPrimary};

  &:hover {
    background: ${(props) => props.palette.fontSeconry};
    color: ${(props) => props.palette.background};
    transform: scale(1.1);
  }

  svg {
    font-size: 20px;
  }
`;
