import styled from "styled-components";
import { type PaletteType } from "../../../constants/colors";

interface StyledProps {
  palette: PaletteType;
}

export const CardTechContainer = styled.div<StyledProps>`
  max-width: 1200px;
  width: 100%;
  margin: 100px auto 0 auto;
  display: flex;
  padding: 0 4%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 60px auto 0 auto;
    padding: 0 2%;
  }

  @media (max-width: 480px) {
    margin: 40px auto 0 auto;
    padding: 0 1%;
  }
`;

export const CardTechTitle = styled.div<StyledProps>`
  margin-bottom: 60px;

  span {
    font-size: 3rem;
    font-weight: 600;
    width: 100%;
    color: ${(props) => props.palette.fontPrimary};
    text-align: center;
  }
`;

export const CardTechContent = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  gap: 30px;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
