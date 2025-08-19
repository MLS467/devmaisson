import styled from "styled-components";
import { lightPalette } from "../../constants/colors";

interface ButtonDefaultStyledProps {
  $bgColor?: string;
}

export const ButtonDefaultStyled = styled.button<ButtonDefaultStyledProps>`
  display: flex;
  background-color: ${({ $bgColor }) =>
    $bgColor ? $bgColor : lightPalette.background};

  border: 1px solid ${({ $bgColor }) => ($bgColor ? $bgColor : "#ccc")};
  border-radius: 10px;
  color: ${({ $bgColor }) => ($bgColor ? "#fff" : "#000")};

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
    border: 1px solid ${lightPalette.blueDefault};
    box-shadow: ${lightPalette.greenDefault} 0px 5px 15px;
  }
`;
