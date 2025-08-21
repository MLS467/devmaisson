import styled from "styled-components";
import type { PaletteType } from "../../../constants/colors";

interface CardContainerProps {
  $palette: PaletteType;
}

export const CardAboutContainer = styled.div<CardContainerProps>`
  display: flex;
  width: 70%;
  max-width: 600px;
  min-width: 400px;
  height: 120px;
  border-radius: 10px;
  background-color: ${({ $palette }) => $palette.background};
  gap: 30px;
  padding: 24px 16px;
  flex-direction: row;
  box-shadow: 0 0 20px ${({ $palette }) => $palette.blueDefault}30,
    0 0 40px ${({ $palette }) => $palette.greenDefault}20,
    0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin: 0 auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px ${({ $palette }) => $palette.blueDefault}50,
      0 0 60px ${({ $palette }) => $palette.greenDefault}40,
      0 8px 32px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 85%;
    min-width: auto;
    height: auto;
    gap: 20px;
    padding: 20px 12px;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 95%;
    gap: 16px;
    padding: 16px 12px;
  }

  .iconConteiner {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eff2f5;
    width: 50px;
    height: 50px;
    border-radius: inherit;
    flex-shrink: 0;

    @media (max-width: 768px) {
      align-self: center;
    }
  }

  .titleCardConteiner {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .titleConteiner {
      color: ${({ $palette }) => $palette.fontPrimary};
      font-size: 20px;
      font-weight: 500;
      line-height: 1.4;
      white-space: nowrap;

      @media (max-width: 768px) {
        font-size: 18px;
      }

      @media (max-width: 480px) {
        font-size: 16px;
      }
    }

    .descConteiner {
      color: ${({ $palette }) => $palette.fontSeconry};
      font-size: 14px;
      line-height: 1.5;
      white-space: nowrap;

      @media (max-width: 480px) {
        font-size: 13px;
      }
    }
  }
`;
