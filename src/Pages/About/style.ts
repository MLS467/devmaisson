import styled from "styled-components";
import { type PaletteType } from "../../constants/colors";

interface StyledProps {
  palette: PaletteType;
}

export const AboutContainer = styled.div<StyledProps>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.palette.background};
  padding: 8% 5%;
  box-sizing: border-box;

  .contentContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin-top: 30px;
  }

  .titleContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin-bottom: 40px;
    position: relative;
    z-index: 1;

    span {
      font-size: 3rem;
      text-align: center;
      color: ${(props) => props.palette.fontPrimary};
      font-weight: 600;
    }
  }

  .containerText {
    flex: 1;
    width: 50%;
    text-align: start;
    flex-direction: column;
    align-items: center;
    margin-left: 10%;

    p {
      font-size: 1.3rem;
      line-height: 1.8;
      color: ${(props) => props.palette.fontSeconry};
      margin-bottom: 20px;

      strong {
        color: ${(props) => props.palette.fontPrimary};
        font-weight: 600;
      }
    }
  }

  .cardsInfo {
    flex: 1;
    height: auto;
    flex-direction: column;
  }
`;
