import styled from "styled-components";
import { type PaletteType } from "../../constants/colors";

interface StyledProps {
  palette: PaletteType;
}

export const TechCard = styled.div<StyledProps>`
  display: flex;
  width: 30%;
  min-width: 300px;
  flex-direction: column;
  background: ${({ palette }) => palette.background};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px ${({ palette }) => 
    palette.background === "#0f0f10" 
      ? "rgba(0, 0, 0, 0.3)" 
      : "rgba(0, 0, 0, 0.1)"};
  border: 1px solid ${({ palette }) => `${palette.fontSeconry}30`};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;

  /* Gradiente sutil de fundo */
  background: ${({ palette }) =>
    palette.background === "#0f0f10"
      ? `linear-gradient(135deg, ${palette.background} 0%, rgba(255, 255, 255, 0.02) 100%)`
      : `linear-gradient(135deg, ${palette.background} 0%, rgba(0, 0, 0, 0.02) 100%)`};

  /* Efeito de borda gradiente no hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      ${({ palette }) => palette.blueDefault}60,
      ${({ palette }) => palette.greenDefault}60,
      ${({ palette }) => palette.blueDefault}60
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 20px 40px ${({ palette }) => 
        palette.background === "#0f0f10" 
          ? "rgba(0, 0, 0, 0.4)" 
          : "rgba(0, 0, 0, 0.15)"},
      0 8px 16px ${({ palette }) => `${palette.blueDefault}20`},
      0 0 0 1px ${({ palette }) => `${palette.blueDefault}30`};
    border-color: ${({ palette }) => `${palette.blueDefault}50`};
    
    &::before {
      opacity: 1;
    }

    /* Efeito de brilho interno */
    &::after {
      opacity: 1;
    }
  }

  /* Efeito de brilho interno */
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: ${({ palette }) =>
      palette.background === "#0f0f10"
        ? `radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`
        : `radial-gradient(circle, ${palette.blueDefault}10 0%, transparent 70%)`};
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    border-radius: 16px;
  }

  @media (max-width: 1024px) {
    width: 45%;
    min-width: 250px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    padding: 20px;
    
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const TitleContainer = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 20px;
  position: relative;

  svg {
    width: 24px;
    height: 24px;
    color: ${({ palette }) => palette.blueDefault};
    background: ${({ palette }) => 
      palette.background === "#0f0f10"
        ? `linear-gradient(135deg, ${palette.blueDefault}25, ${palette.blueDefault}15)`
        : `linear-gradient(135deg, ${palette.blueDefault}20, ${palette.blueDefault}10)`};
    padding: 8px;
    border-radius: 12px;
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px ${({ palette }) => `${palette.blueDefault}20`};
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: ${({ palette }) => palette.fontPrimary};
    margin: 0;
    transition: color 0.3s ease;
  }

  /* Efeito hover no ícone quando o card é hovereado */
  ${TechCard}:hover & {
    svg {
      transform: scale(1.1);
      background: ${({ palette }) => 
        `linear-gradient(135deg, ${palette.blueDefault}40, ${palette.greenDefault}30)`};
      box-shadow: 0 4px 12px ${({ palette }) => `${palette.blueDefault}30`};
    }

    h3 {
      color: ${({ palette }) => palette.blueDefault};
    }
  }
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const TechItem = styled.div<StyledProps>`
  background: ${({ palette }) => 
    palette.background === "#0f0f10"
      ? `linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)`
      : `linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%)`};
  border: 1px solid ${({ palette }) => `${palette.fontSeconry}30`};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  width: 100%;
  max-width: 120px;
  height: 120px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  /* Efeito de brilho sutil */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: ${({ palette }) =>
      `linear-gradient(45deg, transparent 30%, ${palette.blueDefault}15 50%, transparent 70%)`};
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: scale(1.08) translateY(-2px);
    box-shadow: 
      0 8px 25px ${({ palette }) => `${palette.greenDefault}25`},
      0 4px 12px ${({ palette }) => `${palette.blueDefault}20`};
    border-color: ${({ palette }) => `${palette.blueDefault}60`};
    background: ${({ palette }) => 
      palette.background === "#0f0f10"
        ? `linear-gradient(135deg, ${palette.blueDefault}15 0%, ${palette.greenDefault}10 100%)`
        : `linear-gradient(135deg, ${palette.blueDefault}10 0%, ${palette.greenDefault}15 100%)`};

    &::before {
      transform: translateX(100%);
    }
  }

  @media (max-width: 768px) {
    max-width: 100px;
    height: 100px;
    padding: 12px;
    gap: 4px;
    
    &:hover {
      transform: scale(1.05) translateY(-1px);
    }
  }

  @media (max-width: 480px) {
    max-width: 80px;
    height: 80px;
    padding: 8px;
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    transition: all 0.3s ease;
    flex-shrink: 0;
    display: block;
    margin: 0 auto;
    filter: ${({ palette }) => 
      palette.background === "#0f0f10" 
        ? "brightness(1.1) contrast(1.1)" 
        : "brightness(0.9) contrast(1.1)"};

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }

    @media (max-width: 480px) {
      width: 24px;
      height: 24px;
    }
  }

  &:hover img {
    transform: scale(1.15) rotate(5deg);
    filter: ${({ palette }) => 
      palette.background === "#0f0f10" 
        ? "brightness(1.3) contrast(1.2)" 
        : "brightness(0.8) contrast(1.2)"};
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
    transition: color 0.3s ease;
  }

  &:hover span {
    color: ${({ palette }) => palette.blueDefault};
    font-weight: 600;
  }
`;
