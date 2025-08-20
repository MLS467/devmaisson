import styled from "styled-components";
import type { PaletteType } from "../../../constants/colors";

interface CardContainerProps {
  palette: PaletteType;
}

export const CardAboutContainer = styled.div<CardContainerProps>`
  display: flex;
  width: 70%;
  border-radius: 10px;
  background-color: ${({ palette }) => palette.background};
  gap: 30px;
  padding: 24px 16px;
  flex-direction: row;
  box-shadow: 0 0 20px ${({ palette }) => palette.blueDefault}30,
    0 0 40px ${({ palette }) => palette.greenDefault}20,
    0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px ${({ palette }) => palette.blueDefault}50,
      0 0 60px ${({ palette }) => palette.greenDefault}40,
      0 8px 32px rgba(0, 0, 0, 0.15);
  }

  .iconConteiner {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eff2f5;
    width: 50px;
    height: 50px;
    border-radius: inherit;
  }

  .titleCardConteiner {
    display: flex;
    flex-direction: column;

    .titleConteiner {
      color: ${({ palette }) => palette.fontPrimary};
      font-size: 20px;
      font-weight: 500;
    }
    .descConteiner {
      color: ${({ palette }) => palette.fontSeconry};
      font-size: 14px;
    }
  }
`;
