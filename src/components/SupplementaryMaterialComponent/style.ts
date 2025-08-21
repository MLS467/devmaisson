import styled from "styled-components";
import type { PaletteType } from "../../constants/colors";

export const SupplementaryMaterialContainer = styled.div<{
  palette: PaletteType;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: ${({ palette }) =>
    palette.background === "#0f0f10"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.02)"};
  border: 1px solid ${({ palette }) => palette.fontSeconry}20;
  border-radius: 16px;
  transition: all 0.3s ease;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px ${({ palette }) => palette.fontSeconry}20;
    border-color: ${({ palette }) => palette.blueDefault}40;
  }
`;

export const IconContainer = styled.div<{ palette: PaletteType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${({ palette }) => palette.blueDefault}15;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  svg {
    width: 40px;
    height: 40px;
    color: ${({ palette }) => palette.blueDefault};
  }

  ${SupplementaryMaterialContainer}:hover & {
    background: ${({ palette }) => palette.blueDefault}25;
    transform: scale(1.1);
  }
`;

export const ContentContainer = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h3<{ palette: PaletteType }>`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ palette }) => palette.fontPrimary};
  margin: 0 0 1rem 0;
  line-height: 1.3;
`;

export const Description = styled.p<{ palette: PaletteType }>`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ palette }) => palette.fontSeconry};
  margin: 0;
  max-width: 300px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 280px;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: center;
  }
`;
