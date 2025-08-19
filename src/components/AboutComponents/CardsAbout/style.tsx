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
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

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
