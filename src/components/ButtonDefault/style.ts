import styled from "styled-components";
import { lightPalette, type PaletteType } from "../../constants/colors";

interface ButtonDefaultStyledProps {
  $bgColor?: string;
  $palette?: PaletteType;
}

export const ButtonDefaultStyled = styled.button<ButtonDefaultStyledProps>`
  display: flex;
  background-color: ${({ $bgColor, $palette }) =>
    $bgColor ? $bgColor : $palette?.background || lightPalette.background};

  border: 1px solid ${({ $bgColor }) => ($bgColor ? $bgColor : "#ccc")};
  border-radius: 10px;
  color: ${({ $bgColor, $palette }) =>
    $bgColor ? "#fff" : $palette?.fontPrimary || "#000"};

  cursor: pointer;
  padding: 14px 24px;
  gap: 8px;
  text-align: center;
  text-decoration: none;
  justify-content: space-evenly;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  margin: 4px 2px;
  transition-duration: 0.4s;
  user-select: none;

  &:hover {
    background-color: ${({ $bgColor }) =>
      $bgColor ? $bgColor : lightPalette.greenDefault};
    color: white;
    border: 1px solid ${lightPalette.greenDefault};
    box-shadow: ${lightPalette.greenDefault} 0px 5px 15px;
  }

  @media (max-width: 768px) {
    .textContainerButton {
      display: none;
    }

    border: 1px solid
      ${({ $palette }) => $palette?.fontPrimary || lightPalette.fontPrimary};
    background-color: transparent;
    color: ${({ $palette }) =>
      $palette?.fontPrimary || lightPalette.fontPrimary};
    width: 50px;
    height: 50px;
    padding: 0;
    font-size: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;

    &:hover {
      background-color: ${({ $palette }) =>
        $palette?.fontPrimary || lightPalette.fontPrimary};
      color: ${({ $palette }) =>
        $palette?.background || lightPalette.background};
      border: 1px solid
        ${({ $palette }) => $palette?.fontPrimary || lightPalette.fontPrimary};
      box-shadow: ${({ $palette }) =>
          $palette?.fontPrimary || lightPalette.fontPrimary}
        0px 5px 15px;
    }
  }
`;
