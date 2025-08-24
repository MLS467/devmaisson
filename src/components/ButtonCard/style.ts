import styled from "styled-components";
import { lightPalette, type PaletteType } from "../../constants/colors";

interface ButtonCardStyledProps {
  $bgColor?: string;
  $palette?: PaletteType;
}

export const ButtonCardStyled = styled.button<ButtonCardStyledProps>`
  display: flex;
  background-color: ${({ $bgColor, $palette }) =>
    $bgColor ? $bgColor : $palette?.background || lightPalette.background};

  border: 1px solid ${({ $bgColor }) => ($bgColor ? $bgColor : "#ccc")};
  border-radius: 10px;
  color: ${({ $bgColor, $palette }) =>
    $bgColor ? "#fff" : $palette?.fontPrimary || "#000"};

  cursor: pointer;
  padding: 12px 20px;
  gap: 8px;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  margin: 4px 2px;
  transition-duration: 0.4s;
  user-select: none;
  min-width: 110px;
  width: auto;
  max-width: fit-content;

  /* Tamanho dos ícones na versão web */
  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${({ $bgColor }) =>
      $bgColor ? $bgColor : lightPalette.greenDefault};
    color: white;
    border: 1px solid ${lightPalette.greenDefault};
    box-shadow: ${lightPalette.greenDefault} 0px 5px 15px;
  } /* Ajustes específicos para tablets/mobile até 768px */
  @media (max-width: 768px) {
    padding: 14px 22px;
    font-size: 15px;
    min-width: 120px;
    border-radius: 10px;
    font-weight: 500;
    width: 100%;
    flex: 1;

    /* Tamanho dos ícones no tablet/mobile */
    svg {
      width: 17px;
      height: 17px;
    }

    &:hover {
      background-color: ${({ $bgColor }) =>
        $bgColor ? $bgColor : lightPalette.greenDefault};
      color: white;
      border: 1px solid ${lightPalette.greenDefault};
      box-shadow: ${lightPalette.greenDefault} 0px 5px 15px;
      transform: translateY(-1px);
    }
  }

  @media (max-width: 480px) {
    padding: 14px 20px;
    font-size: 15px;
    min-width: 80px;
    flex: none;
  }

  /* Estilo especial para formulários */
  &.form-submit {
    background-color: ${({ $palette }) =>
      $palette?.blueDefault || lightPalette.blueDefault} !important;
    color: white !important;
    border: none !important;
    font-weight: 600;
    box-shadow: 0 4px 16px
      ${({ $palette }) => $palette?.blueDefault || lightPalette.blueDefault}40;

    &:hover {
      background-color: ${({ $palette }) =>
        $palette?.blueDefault || lightPalette.blueDefault}dd !important;
      box-shadow: 0 8px 24px
        ${({ $palette }) => $palette?.blueDefault || lightPalette.blueDefault}50 !important;
    }
  }
`;
