import styled from "styled-components";
import { type PaletteType } from "../../constants/colors";

interface StyledProps {
  palette: PaletteType;
}

export const TechCard = styled.div<StyledProps>`
  display: flex;
  width: 30%;
  flex-direction: column;
  background: ${({ palette }) => palette.background};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ palette }) => palette.fontSeconry};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const TitleContainer = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 20px;

  svg {
    width: 24px;
    height: 24px;
    color: ${({ palette }) => palette.blueDefault};
    background: ${({ palette }) => palette.blueDefault}20;
    padding: 8px;
    border-radius: 8px;
    width: 40px;
    height: 40px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: ${({ palette }) => palette.fontPrimary};
    margin: 0;
  }
`;

export const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  gap: 16px;
`;

export const TechItem = styled.div<StyledProps>`
  background: ${({ palette }) => palette.background};
  border: 1px solid ${({ palette }) => palette.fontSeconry};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 120px;
  height: 120px;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
    /* box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); */
    box-shadow: ${({ palette }) => palette.greenDefault} 0px 5px 15px;

    border-color: ${({ palette }) => palette.blueDefault};
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    transition: transform 0.3s ease;
    flex-shrink: 0;
    display: block;
    margin: 0 auto;
  }

  &:hover img {
    transform: scale(1.1);
  }

  span {
    font-size: 11px;
    font-weight: 500;
    color: ${({ palette }) => palette.fontPrimary};
    text-align: center;
    line-height: 1.2;
    word-break: break-word;
    hyphens: auto;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    margin-top: auto;
  }
`;
